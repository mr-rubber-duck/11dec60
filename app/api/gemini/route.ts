import { NextResponse } from "next/server";

// عدد المحاولات قبل إظهار الخطأ
const MAX_RETRIES = 2;

async function callGeminiAPI(geminiMessages: any[]): Promise<any> {
    let attempt = 0;

    while (attempt <= MAX_RETRIES) {
        try {
            const resp = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        contents: geminiMessages,
                        generationConfig: {
                            temperature: 0.7,
                            maxOutputTokens: 1024,
                            topP: 0.95,
                            topK: 40,
                        },
                    }),
                }
            );

            const data = await resp.json();

            if (!resp.ok) {
                throw new Error(data.error?.message || "Gemini request failed");
            }

            const geminiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;
            if (!geminiResponse) {
                throw new Error("Gemini returned empty response");
            }

            return geminiResponse;
        } catch (err: any) {
            attempt++;
            console.warn(`Gemini attempt ${attempt} failed:`, err.message);
            if (attempt > MAX_RETRIES) throw err;
        }
    }
}

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        if (!messages || !Array.isArray(messages)) {
            return NextResponse.json({ error: "Invalid messages payload" }, { status: 400 });
        }

        // تأكد من وجود مفتاح API
        if (!process.env.GEMINI_API_KEY) {
            return NextResponse.json(
                { error: "مفتاح GEMINI_API_KEY غير موجود في الإعدادات" },
                { status: 500 }
            );
        }

        // تحويل الرسائل إلى صيغة Gemini
        const systemMessage = messages.find((m: any) => m.role === "system");
        const conversationMessages = messages.filter((m: any) => m.role !== "system");

        const geminiMessages = conversationMessages.map((m: any) => ({
            role: m.role === "assistant" ? "model" : "user",
            parts: [{ text: m.content }],
        }));

        // إضافة رسالة النظام كأول رسالة إذا وجدت
        if (systemMessage && geminiMessages.length > 0) {
            geminiMessages[0].parts[0].text = `${systemMessage.content}\n\nUser: ${geminiMessages[0].parts[0].text}`;
        }

        // استدعاء Gemini مع Retry
        const geminiResponse = await callGeminiAPI(geminiMessages);

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
        return NextResponse.json(
            { error: err.message || "خطأ غير معروف في الخادم" },
            { status: 500 }
        );
    }
}
