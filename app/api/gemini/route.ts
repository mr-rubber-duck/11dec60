import { NextResponse } from "next/server";

// عدد المحاولات قبل إظهار الخطأ
const MAX_RETRIES = 3;
const REQUEST_TIMEOUT = 60000; // 60 seconds timeout

// Helper function to create a timeout promise
function createTimeoutPromise(ms: number): Promise<never> {
    return new Promise((_, reject) => {
        setTimeout(() => reject(new Error("انتهت مهلة الطلب - يرجى المحاولة مرة أخرى")), ms);
    });
}

// Helper function to wait for a specified time
function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function callGeminiAPI(geminiMessages: any[]): Promise<string> {
    let attempt = 0;
    let lastError: Error | null = null;

    while (attempt < MAX_RETRIES) {
        try {
            // Create abort controller for timeout
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);

            const resp = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    signal: controller.signal,
                    body: JSON.stringify({
                        contents: geminiMessages,
                        generationConfig: {
                            temperature: 0.7,
                            maxOutputTokens: 8192, // Increased for longer responses
                            topP: 0.95,
                            topK: 40,
                        },
                        safetySettings: [
                            {
                                category: "HARM_CATEGORY_HARASSMENT",
                                threshold: "BLOCK_ONLY_HIGH"
                            },
                            {
                                category: "HARM_CATEGORY_HATE_SPEECH",
                                threshold: "BLOCK_ONLY_HIGH"
                            },
                            {
                                category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                                threshold: "BLOCK_ONLY_HIGH"
                            },
                            {
                                category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                                threshold: "BLOCK_ONLY_HIGH"
                            }
                        ]
                    }),
                }
            );

            clearTimeout(timeoutId);

            // Handle rate limiting with longer exponential backoff
            if (resp.status === 429) {
                attempt++;
                if (attempt >= MAX_RETRIES) {
                    throw new Error("تم تجاوز حد الطلبات المسموح - يرجى الانتظار دقيقة ثم المحاولة مرة أخرى");
                }
                const waitTime = Math.min(Math.pow(3, attempt) * 2000, 30000); // 6s, 18s, 30s max
                console.warn(`Rate limited. Waiting ${waitTime}ms before retry ${attempt}/${MAX_RETRIES}`);
                await sleep(waitTime);
                continue;
            }

            // Handle server errors with retry
            if (resp.status >= 500) {
                attempt++;
                const waitTime = Math.pow(2, attempt) * 500;
                console.warn(`Server error ${resp.status}. Waiting ${waitTime}ms before retry ${attempt}/${MAX_RETRIES}`);
                await sleep(waitTime);
                continue;
            }

            const data = await resp.json();

            if (!resp.ok) {
                const errorMessage = data.error?.message || `Gemini request failed with status ${resp.status}`;
                throw new Error(errorMessage);
            }

            // Check for blocked content
            if (data.promptFeedback?.blockReason) {
                throw new Error(`تم حظر الرد: ${data.promptFeedback.blockReason}`);
            }

            // Check for safety filters
            const candidate = data.candidates?.[0];
            if (!candidate) {
                throw new Error("لم يتم إنشاء رد من Gemini");
            }

            if (candidate.finishReason === "SAFETY") {
                throw new Error("تم تصفية الرد بسبب إعدادات الأمان");
            }

            if (candidate.finishReason === "RECITATION") {
                throw new Error("تم حظر الرد بسبب الاقتباس المباشر");
            }

            // Extract the response text
            const geminiResponse = candidate.content?.parts?.[0]?.text;

            if (!geminiResponse || geminiResponse.trim() === "") {
                // Try to get any available text from parts
                const allText = candidate.content?.parts
                    ?.map((part: any) => part.text)
                    ?.filter((text: string) => text)
                    ?.join("\n");

                if (allText && allText.trim() !== "") {
                    return allText;
                }

                throw new Error("رد فارغ من Gemini - يرجى إعادة صياغة السؤال");
            }

            return geminiResponse;

        } catch (err: any) {
            lastError = err;

            // Don't retry on abort errors (timeout)
            if (err.name === "AbortError") {
                throw new Error("انتهت مهلة الطلب - الرد يستغرق وقتًا طويلاً");
            }

            // Don't retry on validation errors
            if (err.message.includes("تم حظر") || err.message.includes("تم تصفية")) {
                throw err;
            }

            attempt++;
            console.warn(`Gemini attempt ${attempt}/${MAX_RETRIES} failed:`, err.message);

            if (attempt >= MAX_RETRIES) {
                throw err;
            }

            // Wait before retrying
            await sleep(Math.pow(2, attempt) * 500);
        }
    }

    throw lastError || new Error("فشل الاتصال بـ Gemini بعد عدة محاولات");
}

export async function POST(req: Request) {
    try {
        // Parse request body with error handling
        let body;
        try {
            body = await req.json();
        } catch {
            return NextResponse.json(
                { error: "خطأ في تنسيق البيانات المرسلة" },
                { status: 400 }
            );
        }

        const { messages } = body;

        if (!messages || !Array.isArray(messages)) {
            return NextResponse.json(
                { error: "البيانات غير صالحة - يجب إرسال مصفوفة الرسائل" },
                { status: 400 }
            );
        }

        if (messages.length === 0) {
            return NextResponse.json(
                { error: "لا توجد رسائل للمعالجة" },
                { status: 400 }
            );
        }

        // تأكد من وجود مفتاح API
        if (!process.env.GEMINI_API_KEY) {
            console.error("GEMINI_API_KEY is not configured");
            return NextResponse.json(
                { error: "خطأ في إعدادات الخادم - مفتاح API غير موجود" },
                { status: 500 }
            );
        }

        // Limit conversation length to prevent token overflow
        const MAX_MESSAGES = 20;
        const limitedMessages = messages.length > MAX_MESSAGES
            ? [messages[0], ...messages.slice(-(MAX_MESSAGES - 1))]
            : messages;

        // تحويل الرسائل إلى صيغة Gemini
        const systemMessage = limitedMessages.find((m: any) => m.role === "system");
        const conversationMessages = limitedMessages.filter((m: any) => m.role !== "system");

        if (conversationMessages.length === 0) {
            return NextResponse.json(
                { error: "لا توجد رسائل محادثة للمعالجة" },
                { status: 400 }
            );
        }

        const geminiMessages = conversationMessages.map((m: any) => ({
            role: m.role === "assistant" ? "model" : "user",
            parts: [{ text: String(m.content || "").substring(0, 30000) }], // Limit message length
        }));

        // إضافة رسالة النظام كأول رسالة إذا وجدت
        if (systemMessage && geminiMessages.length > 0) {
            geminiMessages[0].parts[0].text = `${systemMessage.content}\n\nUser: ${geminiMessages[0].parts[0].text}`;
        }

        // Ensure proper message alternation (Gemini requires user/model alternation)
        const validatedMessages = [];
        let lastRole = "";
        for (const msg of geminiMessages) {
            if (msg.role !== lastRole) {
                validatedMessages.push(msg);
                lastRole = msg.role;
            } else {
                // Merge consecutive messages of the same role
                if (validatedMessages.length > 0) {
                    validatedMessages[validatedMessages.length - 1].parts[0].text += "\n" + msg.parts[0].text;
                }
            }
        }

        // Ensure the first message is from user
        if (validatedMessages.length > 0 && validatedMessages[0].role !== "user") {
            validatedMessages.unshift({
                role: "user",
                parts: [{ text: "مرحبا" }]
            });
        }

        // استدعاء Gemini مع Retry
        const geminiResponse = await callGeminiAPI(validatedMessages);

        // الرد بصيغة OpenAI
        return NextResponse.json({
            choices: [
                {
                    message: {
                        role: "assistant",
                        content: geminiResponse,
                    },
                },
            ],
        });

    } catch (err: any) {
        console.error("Server error:", err);

        // Return user-friendly error messages
        let errorMessage = "حدث خطأ غير متوقع";

        if (err.message) {
            if (err.message.includes("مهلة") || err.message.includes("timeout")) {
                errorMessage = "انتهت مهلة الطلب - يرجى المحاولة مرة أخرى";
            } else if (err.message.includes("429") || err.message.includes("rate")) {
                errorMessage = "تم تجاوز حد الطلبات - يرجى الانتظار قليلاً";
            } else if (err.message.includes("API") || err.message.includes("key")) {
                errorMessage = "خطأ في إعدادات الخادم";
            } else {
                errorMessage = err.message;
            }
        }

        return NextResponse.json(
            { error: errorMessage },
            { status: 500 }
        );
    }
}
