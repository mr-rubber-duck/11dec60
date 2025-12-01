"use client";

import TimelineSection from "../components/TimelineSection";

export default function StoryPage() {
    return (
        <div style={{
            minHeight: '100vh',
            paddingTop: '5rem',
            background: 'var(--bg-primary)'
        }}>
            <section className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
                {/* Header Section */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    fontSize: '0.875rem',
                    fontFamily: 'Roboto Slab, serif',
                    borderBottom: '1px solid rgba(139, 38, 53, 0.3)',
                    paddingBottom: '0.75rem',
                    marginBottom: '2rem'
                }}>
                    <div className="text-right font-playfair font-bold" style={{
                        color: 'var(--accent-light)',
                        fontSize: 'clamp(0.875rem, 2vw, 1rem)'
                    }}>
                        ملحمة شعب أراد الحياة
                    </div>
                    <div className="text-center font-playfair font-bold" style={{
                        color: 'var(--text-secondary)',
                        fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                        letterSpacing: '0.05em'
                    }}>
                        ALGERIA, SUNDAY, DECEMBER 11, 1960
                    </div>
                    <div className="text-left font-playfair font-bold" style={{
                        color: 'var(--text-muted)',
                        fontSize: 'clamp(0.875rem, 2vw, 1rem)'
                    }}>
                        DIGITAL ARCHIVE
                    </div>
                </div>

                {/* Main Content */}
                <article className="text-center">
                    {/* Title */}
                    <h1 className="font-playfair" style={{
                        fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                        fontWeight: 900,
                        background: 'var(--gradient-subtle)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        marginBottom: '2rem',
                        lineHeight: 1.2,
                        textShadow: '2px 2px 8px var(--shadow-md)'
                    }}>
                        مظاهرات 11 ديسمبر 1960
                    </h1>

                    {/* Decorative Line */}
                    <div style={{
                        width: '100px',
                        height: '3px',
                        background: 'var(--gradient-accent)',
                        margin: '0 auto 2rem',
                        borderRadius: '2px'
                    }} />

                    {/* Introduction Quote Context */}
                    <p className="font-playfair" style={{
                        fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
                        marginTop: '1.5rem',
                        marginBottom: '1.5rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.8,
                        maxWidth: '900px',
                        margin: '0 auto 1.5rem'
                    }}>
                        عندما اختار الجزائريون سلوك درب الحرية والطرْق على بابها، كانوا على يقين، كما قال أحمد شوقي بأنّ:
                    </p>

                    {/* Quote */}
                    <blockquote style={{
                        position: 'relative',
                        padding: '2rem',
                        margin: '2rem auto',
                        maxWidth: '800px',
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border-accent)',
                        borderRadius: '8px',
                        boxShadow: '0 4px 15px var(--shadow-sm)'
                    }}>
                        <p className="font-playfair italic" style={{
                            fontSize: 'clamp(1.25rem, 4vw, 2rem)',
                            fontWeight: 700,
                            color: 'var(--accent-light)',
                            lineHeight: 1.6,
                            margin: 0
                        }}>
                            "للحرية الحمراء باب   بكلّ يد مضرجة يدقٌّ"
                        </p>
                        <cite style={{
                            display: 'block',
                            marginTop: '1rem',
                            fontSize: '0.875rem',
                            color: 'var(--text-muted)',
                            fontStyle: 'normal'
                        }}>
                            — أحمد شوقي
                        </cite>
                    </blockquote>

                    {/* Decorative Line */}
                    <div style={{
                        width: '60px',
                        height: '2px',
                        background: 'var(--gradient-accent)',
                        margin: '3rem auto',
                        borderRadius: '2px'
                    }} />

                    {/* Main Text Content */}
                    <div style={{
                        maxWidth: '850px',
                        margin: '0 auto',
                        textAlign: 'justify',
                        padding: '2rem',
                        background: 'var(--bg-secondary)',
                        borderRadius: '12px',
                        border: '1px solid var(--border-subtle)',
                        boxShadow: '0 4px 20px var(--shadow-sm)'
                    }}>
                        <p style={{
                            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                            lineHeight: 1.9,
                            color: 'var(--text-secondary)',
                            marginBottom: '1.5rem',
                            textIndent: '2rem'
                        }}>
                            تُعدّ مظاهرات 11 ديسمبر 1960 المجيدة، محطة حاسمة وفارقة في تاريخ الكفاح الوطني، ومسمارًا أخيرًا في وضع حد لمشروع الاحتلال الفرنسي الذي جثم على أرضنا أكثر من قرن. لقد كانت هذه الانتفاضة الشعبية العارمة، التي عمت شوارع الجزائر العاصمة وكبرى المدن، تعبيرًا لا لبس فيه عن الإرادة المطلقة للشعب الجزائري في افتكاك حريته واسترداد سيادته كاملة غير منقوصة.
                        </p>

                        <p style={{
                            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                            lineHeight: 1.9,
                            color: 'var(--text-secondary)',
                            textIndent: '2rem'
                        }}>
                            لقد أسقطت هذه المظاهرات، التي واجهت وحشية استعمارية مطولة، كل الأوهام التي كان يراهن عليها جنرالات فرنسا وعلى رأسهم ديغول؛ حيث بددت محاولاته اليائسة لفرض حلول استعمارية جزئية، وأثبتت للعالم أن خيار الشعب الجزائري الوحيد هو الاستقلال التام والسيادة الوطنية. لم تكن هذه الأحداث مجرد 'تحول' بل كانت تتويجًا لتضحيات سنوات طويلة، وأعلنت بداية العد التنازلي لإجبار فرنسا على الاعتراف بحقيقة انتصار الثورة.
                        </p>
                    </div>
                </article>

                {/* Decorative Separator */}
                <div style={{
                    width: '100%',
                    height: '2px',
                    background: 'var(--gradient-accent)',
                    margin: '4rem 0',
                    borderRadius: '2px'
                }} />

                {/* Timeline Section */}
                <TimelineSection />
            </section>
        </div>
    );
}
