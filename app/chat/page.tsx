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
        if (!input.trim()) return;

        const userMsg: Message = { role: "user", content: input };
        const newMessages = [...messages, userMsg];

        setMessages(newMessages);
        setInput("");
        setLoading(true);

        try {
            const res = await fetch("/api/gemini", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: newMessages }),
            });

            const data = await res.json();

            const bot = data?.choices?.[0]?.message;

            if (!bot || !bot.content)
                return setMessages([
                    ...newMessages,
                    { role: "assistant", content: "حدث خطأ أثناء معالجة الرد." },
                ]);

            setMessages([...newMessages, bot]);
        } catch {
            setMessages([
                ...newMessages,
                { role: "assistant", content: "خطأ في الاتصال بالخادم." },
            ]);
        } finally {
            setLoading(false);
            scrollToBottom();
        }
    };

    return (
        <section
            className="fixed inset-0 w-full h-full overflow-hidden"
            style={{
                zIndex: 40,
                paddingTop: "70px", // Match Navbar height
            }}
        >

            {/* Background Video */}
            {/* <video
                className="fixed inset-0 w-full h-full object-cover"
                style={{
                    zIndex: -2,
                    top: 0,
                    left: 0,
                }}
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/Videos/vid3.mp4" type="video/mp4" />
            </video> */}

            {/* Dark Overlay */}
            <div
                className="fixed inset-0 bg-black/60"
                style={{
                    zIndex: -1,
                }}
            ></div>

            {/* Content Container (Above Video) */}
            <div
                className="relative z-10 container"
                style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    paddingTop: "2rem", // Internal spacing
                    paddingBottom: "1rem"
                }}
            >

                {/* Header */}
                <div className="text-center mb-3">
                    <h1
                        className="font-playfair heading-shadow"
                        style={{
                            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                            marginBottom: "0.5rem"
                        }}
                    >
                        أرشيف الثورة الجزائرية
                    </h1>

                    <p
                        style={{
                            color: "var(--text-secondary)",
                            fontSize: "1rem",
                            fontFamily: "'Roboto Slab', serif"
                        }}
                    >
                        اسأل عن الثورة الجزائرية وأحداث 11 ديسمبر 1960
                    </p>

                    <div
                        className="newspaper-divider"
                        style={{ margin: "1rem auto" }}
                    ></div>
                </div>

                {/* Chat Container */}
                <div
                    className="card chat-card"
                    style={{
                        flex: 1,
                        minHeight: 0,      // Crucial for nested flex scrolling
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden",
                        border: "1px solid var(--border-accent)",
                        boxShadow: "0 10px 40px var(--shadow-lg)",
                        marginBottom: "1rem"
                    }}
                >

                    {/* Messages Area */}
                    <div
                        className="messages-area"
                        style={{
                            flex: 1,
                            overflowY: "auto",
                            padding: "1.5rem",
                            background: "var(--bg-secondary)",
                            direction: "rtl"
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "1rem"
                            }}
                        >
                            {/* Messages Mapping */}
                            {messages
                                .filter((m) => m.role !== "system")
                                .map((m, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            display: "flex",
                                            justifyContent:
                                                m.role === "user"
                                                    ? "flex-start"
                                                    : "flex-end",
                                            animation:
                                                "fadeIn 0.3s ease-in"
                                        }}
                                    >
                                        <div
                                            className="message-bubble"
                                            style={{
                                                maxWidth: "80%",
                                                padding: "1rem 1.25rem",
                                                borderRadius: "16px",
                                                background:
                                                    m.role === "user"
                                                        ? "var(--gradient-primary)"
                                                        : "var(--bg-elevated)",
                                                border:
                                                    m.role === "user"
                                                        ? "none"
                                                        : "1px solid var(--border-subtle)",
                                                color: "var(--text-primary)",
                                                boxShadow:
                                                    "0 4px 15px var(--shadow-sm)",
                                                fontFamily:
                                                    "'Roboto Slab', serif"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    fontSize: "0.75rem",
                                                    fontWeight: "bold",
                                                    marginBottom: "0.25rem",
                                                    color:
                                                        m.role === "user"
                                                            ? "rgba(255,255,255,0.9)"
                                                            : "var(--accent-light)"
                                                }}
                                            >
                                                {m.role === "user"
                                                    ? "أنت"
                                                    : "المساعد الذكي"}
                                            </div>

                                            <div
                                                style={{
                                                    lineHeight: 1.6,
                                                    fontSize: "0.95rem",
                                                    whiteSpace: "pre-wrap"
                                                }}
                                            >
                                                {m.content}
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            {/* Loading dots */}
                            {loading && (
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "flex-end"
                                    }}
                                >
                                    <div
                                        style={{
                                            background:
                                                "var(--bg-elevated)",
                                            border:
                                                "1px solid var(--border-subtle)",
                                            borderRadius: "16px",
                                            padding:
                                                "0.75rem 1.25rem"
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.5rem"
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "0.85rem",
                                                    color:
                                                        "var(--text-secondary)",
                                                    fontFamily:
                                                        "'Roboto Slab', serif"
                                                }}
                                            >
                                                جاري الكتابة
                                            </span>

                                            <div className="typing-dot"></div>
                                            <div
                                                className="typing-dot"
                                                style={{
                                                    animationDelay:
                                                        "0.1s"
                                                }}
                                            ></div>
                                            <div
                                                className="typing-dot"
                                                style={{
                                                    animationDelay:
                                                        "0.2s"
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>
                    </div>

                    {/* Input Area */}
                    <div
                        className="input-area"
                        style={{
                            padding: "1rem",
                            background: "var(--bg-elevated)",
                            borderTop:
                                "1px solid var(--border-subtle)"
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                gap: "0.75rem",
                                direction: "rtl"
                            }}
                        >
                            <textarea
                                ref={textareaRef}
                                style={{
                                    flex: 1,
                                    background: "var(--bg-tertiary)",
                                    border:
                                        "1px solid var(--border-subtle)",
                                    borderRadius: "8px",
                                    padding: "0.75rem",
                                    color: "var(--text-primary)",
                                    fontSize: "0.95rem",
                                    resize: "none",
                                    minHeight: "50px",
                                    maxHeight: "120px",
                                    outline: "none",
                                    fontFamily:
                                        "'Roboto Slab', serif"
                                }}
                                value={input}
                                onChange={(e) => {
                                    setInput(e.target.value);
                                    autoResize();
                                }}
                                onKeyDown={(e) => {
                                    if (
                                        e.key === "Enter" &&
                                        !e.shiftKey
                                    ) {
                                        e.preventDefault();
                                        sendMessage();
                                    }
                                }}
                                placeholder="اكتب سؤالك هنا..."
                                disabled={loading}
                            />

                            <button
                                className="btn"
                                onClick={sendMessage}
                                disabled={loading || !input.trim()}
                                style={{
                                    height: "fit-content",
                                    alignSelf: "flex-end",
                                    padding: "0.75rem 1.5rem",
                                    opacity:
                                        loading || !input.trim()
                                            ? 0.7
                                            : 1,
                                    cursor:
                                        loading || !input.trim()
                                            ? "not-allowed"
                                            : "pointer"
                                }}
                            >
                                إرسال
                            </button>
                        </div>

                        <p
                            style={{
                                fontSize: "0.7rem",
                                color: "var(--text-muted)",
                                marginTop: "0.5rem",
                                textAlign: "right",
                                fontFamily:
                                    "'Roboto Slab', serif"
                            }}
                        >
                            اضغط Enter للإرسال، Shift+Enter لسطر جديد
                        </p>
                    </div>
                </div>

                {/* Styles */}
                <style jsx>{`
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
                    .typing-dot {
                        width: 6px;
                        height: 6px;
                        background-color: var(--accent-light);
                        border-radius: 50%;
                        animation: bounce 0.6s infinite;
                    }
                    @keyframes bounce {
                        0%,
                        100% {
                            transform: translateY(0);
                        }
                        50% {
                            transform: translateY(-5px);
                        }
                    }

                    @media (max-width: 768px) {
                        .container {
                            padding-top: 5rem !important;
                            padding-left: 0.5rem !important;
                            padding-right: 0.5rem !important;
                            padding-bottom: 0.5rem !important;
                        }
                        .messages-area {
                            padding: 0.75rem !important;
                        }
                        .message-bubble {
                            padding: 0.75rem 1rem !important;
                            max-width: 95% !important;
                            font-size: 0.85rem !important;
                        }
                        .input-area {
                            padding: 0.75rem !important;
                        }
                        h1 {
                            font-size: 1.5rem !important;
                            margin-bottom: 0.25rem !important;
                        }
                    }
                `}</style>
            </div>
        </section>
    );
}
