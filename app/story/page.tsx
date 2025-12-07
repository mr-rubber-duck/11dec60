"use client";

import TimelineSection from "../components/TimelineSection";

export default function StoryPage() {
    return (
        <section className="story-section">
            {/* Background Video */}
            <video
                className="story-video-bg"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/Videos/vid2.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div className="story-overlay"></div>

            {/* Content Container (Above Video) */}
            <div className="story-content">
                {/* Header Section */}
                <div className="story-header">
                    <div className="header-item right">
                        ملحمة شعب أراد الحياة
                    </div>
                    <div className="header-item center">
                        ALGERIA, SUNDAY, DECEMBER 11, 1960
                    </div>
                    <div className="header-item left">
                        DIGITAL ARCHIVE
                    </div>
                </div>

                {/* Main Content */}
                <article className="story-article">
                    {/* Title */}
                    <h1 className="story-title">
                        مظاهرات 11 ديسمبر 1960
                    </h1>

                    {/* Decorative Line */}
                    <div className="decorative-line"></div>

                    {/* Introduction Quote Context */}
                    <p className="story-intro">
                        عندما اختار الجزائريون سلوك درب الحرية والطرْق على بابها، كانوا على يقين، كما قال أحمد شوقي بأنّ:
                    </p>

                    {/* Quote */}
                    <blockquote className="story-quote">
                        <p className="quote-text">
                            "للحرية الحمراء باب   بكلّ يد مضرجة يدقٌّ"
                        </p>
                        <cite className="quote-cite">
                            — أحمد شوقي
                        </cite>
                    </blockquote>

                    {/* Decorative Line */}
                    <div className="decorative-line small"></div>

                    {/* Main Text Content */}
                    <div className="story-text-box">
                        <p className="story-paragraph">
                            تُعدّ مظاهرات 11 ديسمبر 1960 المجيدة، محطة حاسمة وفارقة في تاريخ الكفاح الوطني، ومسمارًا أخيرًا في وضع حد لمشروع الاحتلال الفرنسي الذي جثم على أرضنا أكثر من قرن. لقد كانت هذه الانتفاضة الشعبية العارمة، التي عمت شوارع الجزائر العاصمة وكبرى المدن، تعبيرًا لا لبس فيه عن الإرادة المطلقة للشعب الجزائري في افتكاك حريته واسترداد سيادته كاملة غير منقوصة.
                        </p>

                        <p className="story-paragraph last">
                            لقد أسقطت هذه المظاهرات، التي واجهت وحشية استعمارية مطولة، كل الأوهام التي كان يراهن عليها جنرالات فرنسا وعلى رأسهم ديغول؛ حيث بددت محاولاته اليائسة لفرض حلول استعمارية جزئية، وأثبتت للعالم أن خيار الشعب الجزائري الوحيد هو الاستقلال التام والسيادة الوطنية. لم تكن هذه الأحداث مجرد 'تحول' بل كانت تتويجًا لتضحيات سنوات طويلة، وأعلنت بداية العد التنازلي لإجبار فرنسا على الاعتراف بحقيقة انتصار الثورة.
                        </p>
                    </div>
                </article>

                {/* Decorative Separator */}
                <div className="section-separator"></div>

                {/* Timeline Section */}
                <TimelineSection />
            </div>

            <style jsx>{`
                .story-section {
                    position: relative;
                    width: 100%;
                    min-height: 100vh;
                    overflow: hidden;
                }
                
                .story-video-bg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: -2;
                }
                
                .story-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(0, 0, 0, 0.6);
                    z-index: -1;
                }
                
                .story-content {
                    position: relative;
                    z-index: 10;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 5rem 2rem 2rem;
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                }
                
                .story-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 0.75rem;
                    font-size: 0.875rem;
                    font-family: 'Roboto Slab', serif;
                    border-bottom: 1px solid rgba(139, 38, 53, 0.3);
                    padding-bottom: 0.75rem;
                    margin-bottom: 2rem;
                }
                
                .header-item {
                    font-family: 'Playfair Display', serif;
                    font-weight: bold;
                    font-size: clamp(0.75rem, 2vw, 1rem);
                }
                
                .header-item.right {
                    color: var(--accent-light);
                    text-align: right;
                }
                
                .header-item.center {
                    color: var(--text-secondary);
                    text-align: center;
                    letter-spacing: 0.05em;
                }
                
                .header-item.left {
                    color: var(--text-muted);
                    text-align: left;
                }
                
                .story-article {
                    text-align: center;
                }
                
                .story-title {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(1.75rem, 6vw, 4rem);
                    font-weight: 900;
                    background: var(--gradient-subtle);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    margin-bottom: 1.5rem;
                    line-height: 1.2;
                    text-shadow: 2px 2px 8px var(--shadow-md);
                }
                
                .decorative-line {
                    width: 80px;
                    height: 3px;
                    background: var(--gradient-accent);
                    margin: 0 auto 1.5rem;
                    border-radius: 2px;
                }
                
                .decorative-line.small {
                    width: 50px;
                    height: 2px;
                    margin: 2rem auto;
                }
                
                .story-intro {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(1rem, 2.5vw, 1.35rem);
                    margin-bottom: 1.5rem;
                    color: var(--text-secondary);
                    line-height: 1.8;
                    max-width: 800px;
                    margin-left: auto;
                    margin-right: auto;
                }
                
                .story-quote {
                    position: relative;
                    padding: 1.5rem;
                    margin: 1.5rem auto;
                    max-width: 700px;
                    background: var(--bg-secondary);
                    border: 1px solid var(--border-accent);
                    border-radius: 8px;
                    box-shadow: 0 4px 15px var(--shadow-sm);
                }
                
                .quote-text {
                    font-family: 'Playfair Display', serif;
                    font-style: italic;
                    font-size: clamp(1.1rem, 3.5vw, 1.75rem);
                    font-weight: 700;
                    color: var(--accent-light);
                    line-height: 1.6;
                    margin: 0;
                }
                
                .quote-cite {
                    display: block;
                    margin-top: 0.75rem;
                    font-size: 0.875rem;
                    color: var(--text-muted);
                    font-style: normal;
                }
                
                .story-text-box {
                    max-width: 800px;
                    margin: 0 auto;
                    text-align: justify;
                    padding: 1.5rem;
                    background: var(--bg-secondary);
                    border-radius: 12px;
                    border: 1px solid var(--border-subtle);
                    box-shadow: 0 4px 20px var(--shadow-sm);
                }
                
                .story-paragraph {
                    font-size: clamp(0.9rem, 2vw, 1.1rem);
                    line-height: 1.9;
                    color: var(--text-secondary);
                    margin-bottom: 1.25rem;
                    text-indent: 1.5rem;
                }
                
                .story-paragraph.last {
                    margin-bottom: 0;
                }
                
                .section-separator {
                    width: 100%;
                    height: 2px;
                    background: var(--gradient-accent);
                    margin: 3rem 0;
                    border-radius: 2px;
                }
                
                /* Tablet */
                @media (max-width: 768px) {
                    .story-content {
                        padding: 4.5rem 1rem 1.5rem;
                    }
                    
                    .story-header {
                        flex-direction: column;
                        text-align: center;
                        gap: 0.5rem;
                        margin-bottom: 1.5rem;
                    }
                    
                    .header-item {
                        text-align: center !important;
                    }
                    
                    .story-quote {
                        padding: 1.25rem;
                        margin: 1.25rem auto;
                    }
                    
                    .story-text-box {
                        padding: 1.25rem;
                    }
                    
                    .section-separator {
                        margin: 2rem 0;
                    }
                }
                
                /* Mobile */
                @media (max-width: 480px) {
                    .story-content {
                        padding: 4rem 0.75rem 1rem;
                    }
                    
                    .story-header {
                        padding-bottom: 0.5rem;
                        margin-bottom: 1rem;
                    }
                    
                    .story-title {
                        margin-bottom: 1rem;
                    }
                    
                    .decorative-line {
                        width: 60px;
                        margin-bottom: 1rem;
                    }
                    
                    .decorative-line.small {
                        width: 40px;
                        margin: 1.5rem auto;
                    }
                    
                    .story-quote {
                        padding: 1rem;
                        margin: 1rem auto;
                    }
                    
                    .story-text-box {
                        padding: 1rem;
                        border-radius: 8px;
                    }
                    
                    .story-paragraph {
                        text-indent: 1rem;
                        margin-bottom: 1rem;
                    }
                    
                    .section-separator {
                        margin: 1.5rem 0;
                    }
                }
            `}</style>
        </section>
    );
}
