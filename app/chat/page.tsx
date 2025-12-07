"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
    role: "system" | "user" | "assistant";
    content: string;
};

export default function ChatPage() {
    const [messages, setMessages] = useState<Message[]>([
        {
            role: "system",
            content:
                "أنت مساعد ذكي متخصص في التاريخ الجزائري، الثورة الجزائرية وأحداث 11 ديسمبر 1960. أجب دائمًا بدقة عن أي سؤال يُطرح بأي لغة.",
        },
    ]);

    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const autoResize = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
        }
    };

    const sendMessage = async () => {
        if (!input.trim() || loading) return;

        const userMsg: Message = { role: "user", content: input.trim() };
        const newMessages = [...messages, userMsg];

        setMessages(newMessages);
        setInput("");
        setLoading(true);

        // Create abort controller for timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 65000); // 65 seconds timeout

        try {
            const res = await fetch("/api/gemini", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: newMessages }),
                signal: controller.signal,
            });

            clearTimeout(timeoutId);

            const data = await res.json();

            // Check for API error response
            if (!res.ok || data.error) {
                const errorMessage = data.error || "حدث خطأ أثناء معالجة الطلب";
                setMessages([
                    ...newMessages,
                    { role: "assistant", content: `⚠️ ${errorMessage}` },
                ]);
                return;
            }

            const bot = data?.choices?.[0]?.message;

            if (!bot || !bot.content || bot.content.trim() === "") {
                setMessages([
                    ...newMessages,
                    { role: "assistant", content: "⚠️ لم يتم استلام رد - يرجى المحاولة مرة أخرى" },
                ]);
                return;
            }

            setMessages([...newMessages, { role: "assistant", content: bot.content }]);

        } catch (err: any) {
            clearTimeout(timeoutId);

            let errorMessage = "خطأ في الاتصال بالخادم";

            if (err.name === "AbortError") {
                errorMessage = "انتهت مهلة الطلب - الرد يستغرق وقتًا طويلاً، يرجى المحاولة مرة أخرى";
            } else if (err.message) {
                errorMessage = err.message;
            }

            setMessages([
                ...newMessages,
                { role: "assistant", content: `⚠️ ${errorMessage}` },
            ]);
        } finally {
            setLoading(false);
            scrollToBottom();
        }
    };

    return (
        <section className="chat-section">
            {/* Background overlay */}
            <div className="chat-bg-overlay"></div>

            {/* Content Container */}
            <div className="chat-content-container">
                {/* Header */}
                <div className="chat-header">
                    <h1 className="chat-main-title">
                        أرشيف الثورة الجزائرية
                    </h1>

                    <p className="chat-subtitle">
                        اسأل عن الثورة الجزائرية وأحداث 11 ديسمبر 1960
                    </p>

                    <div className="chat-divider"></div>
                </div>

                {/* Chat Container */}
                <div className="chat-box">
                    {/* Messages Area */}
                    <div className="chat-messages">
                        <div className="messages-wrapper">
                            {/* Messages Mapping */}
                            {messages
                                .filter((m) => m.role !== "system")
                                .map((m, i) => (
                                    <div
                                        key={i}
                                        className={`message-row ${m.role === "user" ? "user-message" : "assistant-message"}`}
                                    >
                                        <div className={`message-bubble ${m.role}`}>
                                            <div className="message-label">
                                                {m.role === "user" ? "أنت" : "المساعد الذكي"}
                                            </div>
                                            <div className="message-content">
                                                {m.content}
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            {/* Loading dots */}
                            {loading && (
                                <div className="message-row assistant-message">
                                    <div className="loading-bubble">
                                        <div className="loading-content">
                                            <span className="loading-text">جاري الكتابة</span>
                                            <div className="typing-dot"></div>
                                            <div className="typing-dot" style={{ animationDelay: "0.1s" }}></div>
                                            <div className="typing-dot" style={{ animationDelay: "0.2s" }}></div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>
                    </div>

                    {/* Input Area */}
                    <div className="chat-input-area">
                        <div className="input-wrapper">
                            <textarea
                                ref={textareaRef}
                                className="chat-textarea"
                                value={input}
                                onChange={(e) => {
                                    setInput(e.target.value);
                                    autoResize();
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" && !e.shiftKey) {
                                        e.preventDefault();
                                        sendMessage();
                                    }
                                }}
                                placeholder="اكتب سؤالك هنا..."
                                disabled={loading}
                            />

                            <button
                                className="send-btn"
                                onClick={sendMessage}
                                disabled={loading || !input.trim()}
                            >
                                إرسال
                            </button>
                        </div>

                        <p className="input-hint">
                            اضغط Enter للإرسال، Shift+Enter لسطر جديد
                        </p>
                    </div>
                </div>
            </div>

            {/* Styles */}
            <style jsx>{`
                .chat-section {
                    position: fixed;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    z-index: 40;
                    padding-top: 70px;
                }
                
                .chat-bg-overlay {
                    position: fixed;
                    inset: 0;
                    background: rgba(0, 0, 0, 0.6);
                    z-index: -1;
                }
                
                .chat-content-container {
                    position: relative;
                    z-index: 10;
                    max-width: 1200px;
                    margin: 0 auto;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    padding: 1.5rem 1rem 1rem;
                }
                
                .chat-header {
                    text-align: center;
                    margin-bottom: 0.75rem;
                    flex-shrink: 0;
                }
                
                .chat-main-title {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(1.25rem, 3vw, 2rem);
                    margin-bottom: 0.375rem;
                    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
                }
                
                .chat-subtitle {
                    color: var(--text-secondary);
                    font-size: clamp(0.8rem, 2vw, 1rem);
                    font-family: 'Roboto Slab', serif;
                    margin: 0;
                }
                
                .chat-divider {
                    height: 2px;
                    background: var(--gradient-accent);
                    margin: 0.75rem auto;
                    max-width: 200px;
                }
                
                .chat-box {
                    flex: 1;
                    min-height: 0;
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                    border: 1px solid var(--border-accent);
                    box-shadow: 0 10px 40px var(--shadow-lg);
                    border-radius: 12px;
                    background: var(--bg-secondary);
                }
                
                .chat-messages {
                    flex: 1;
                    overflow-y: auto;
                    padding: 1rem;
                    background: var(--bg-secondary);
                    direction: rtl;
                }
                
                .messages-wrapper {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }
                
                .message-row {
                    display: flex;
                    animation: fadeIn 0.3s ease-in;
                }
                
                .user-message {
                    justify-content: flex-start;
                }
                
                .assistant-message {
                    justify-content: flex-end;
                }
                
                .message-bubble {
                    max-width: 85%;
                    padding: 0.875rem 1rem;
                    border-radius: 16px;
                    color: var(--text-primary);
                    box-shadow: 0 4px 15px var(--shadow-sm);
                    font-family: 'Roboto Slab', serif;
                }
                
                .message-bubble.user {
                    background: var(--gradient-primary);
                    border: none;
                }
                
                .message-bubble.assistant {
                    background: var(--bg-elevated);
                    border: 1px solid var(--border-subtle);
                }
                
                .message-label {
                    font-size: 0.7rem;
                    font-weight: bold;
                    margin-bottom: 0.25rem;
                }
                
                .user .message-label {
                    color: rgba(255, 255, 255, 0.9);
                }
                
                .assistant .message-label {
                    color: var(--accent-light);
                }
                
                .message-content {
                    line-height: 1.6;
                    font-size: 0.9rem;
                    white-space: pre-wrap;
                }
                
                .loading-bubble {
                    background: var(--bg-elevated);
                    border: 1px solid var(--border-subtle);
                    border-radius: 16px;
                    padding: 0.625rem 1rem;
                }
                
                .loading-content {
                    display: flex;
                    align-items: center;
                    gap: 0.375rem;
                }
                
                .loading-text {
                    font-size: 0.8rem;
                    color: var(--text-secondary);
                    font-family: 'Roboto Slab', serif;
                }
                
                .typing-dot {
                    width: 6px;
                    height: 6px;
                    background-color: var(--accent-light);
                    border-radius: 50%;
                    animation: bounce 0.6s infinite;
                }
                
                .chat-input-area {
                    padding: 0.75rem;
                    background: var(--bg-elevated);
                    border-top: 1px solid var(--border-subtle);
                    flex-shrink: 0;
                }
                
                .input-wrapper {
                    display: flex;
                    gap: 0.625rem;
                    direction: rtl;
                }
                
                .chat-textarea {
                    flex: 1;
                    background: var(--bg-tertiary);
                    border: 1px solid var(--border-subtle);
                    border-radius: 8px;
                    padding: 0.625rem;
                    color: var(--text-primary);
                    font-size: 16px; /* Prevents iOS zoom */
                    resize: none;
                    min-height: 44px;
                    max-height: 100px;
                    outline: none;
                    font-family: 'Roboto Slab', serif;
                }
                
                .send-btn {
                    display: inline-block;
                    padding: 0.625rem 1.25rem;
                    background: var(--gradient-primary);
                    color: var(--text-primary);
                    font-family: 'Playfair Display', serif;
                    font-weight: 700;
                    border: none;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-align: center;
                    box-shadow: 0 4px 15px var(--shadow-sm);
                    border-radius: 8px;
                    height: fit-content;
                    align-self: flex-end;
                    min-height: 44px;
                }
                
                .send-btn:hover:not(:disabled) {
                    background: var(--gradient-subtle);
                    transform: translateY(-2px);
                }
                
                .send-btn:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                }
                
                .input-hint {
                    font-size: 0.65rem;
                    color: var(--text-muted);
                    margin-top: 0.375rem;
                    text-align: right;
                    font-family: 'Roboto Slab', serif;
                    margin-bottom: 0;
                }
                
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes bounce {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-5px);
                    }
                }
                
                /* Tablet */
                @media (max-width: 768px) {
                    .chat-section {
                        padding-top: 60px;
                    }
                    
                    .chat-content-container {
                        padding: 1rem 0.75rem 0.75rem;
                    }
                    
                    .chat-header {
                        margin-bottom: 0.5rem;
                    }
                    
                    .chat-messages {
                        padding: 0.75rem;
                    }
                    
                    .message-bubble {
                        max-width: 90%;
                        padding: 0.75rem 0.875rem;
                    }
                    
                    .message-content {
                        font-size: 0.85rem;
                    }
                    
                    .chat-input-area {
                        padding: 0.625rem;
                    }
                    
                    .input-wrapper {
                        gap: 0.5rem;
                    }
                    
                    .send-btn {
                        padding: 0.5rem 1rem;
                        font-size: 0.9rem;
                    }
                }
                
                /* Mobile */
                @media (max-width: 480px) {
                    .chat-content-container {
                        padding: 0.75rem 0.5rem 0.5rem;
                    }
                    
                    .chat-main-title {
                        font-size: 1.1rem;
                    }
                    
                    .chat-subtitle {
                        font-size: 0.75rem;
                    }
                    
                    .chat-divider {
                        margin: 0.5rem auto;
                    }
                    
                    .chat-box {
                        border-radius: 8px;
                    }
                    
                    .chat-messages {
                        padding: 0.5rem;
                    }
                    
                    .messages-wrapper {
                        gap: 0.5rem;
                    }
                    
                    .message-bubble {
                        max-width: 95%;
                        padding: 0.625rem 0.75rem;
                        border-radius: 12px;
                    }
                    
                    .message-content {
                        font-size: 0.8rem;
                    }
                    
                    .message-label {
                        font-size: 0.6rem;
                    }
                    
                    .chat-input-area {
                        padding: 0.5rem;
                    }
                    
                    .chat-textarea {
                        padding: 0.5rem;
                        font-size: 16px;
                        min-height: 40px;
                    }
                    
                    .send-btn {
                        padding: 0.5rem 0.875rem;
                        font-size: 0.85rem;
                        min-height: 40px;
                    }
                    
                    .input-hint {
                        font-size: 0.6rem;
                    }
                    
                    .typing-dot {
                        width: 5px;
                        height: 5px;
                    }
                }
            `}</style>
        </section>
    );
}
