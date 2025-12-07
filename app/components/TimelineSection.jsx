"use client";

import React from 'react';

// Reusable Timeline Event Component
const TimelineEvent = ({ date, title, archiveType, archiveContent, description, alignment }) => {
    const isLeft = alignment === 'left';

    return (
        <div className="timeline-event">
            <div className={`event-side ${isLeft ? 'event-left' : 'event-right'}`}>
                <EventContent
                    date={date}
                    title={title}
                    archiveType={archiveType}
                    archiveContent={archiveContent}
                    description={description}
                    alignment={alignment}
                />
            </div>

            <style jsx>{`
                .timeline-event {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 2rem;
                    align-items: start;
                }
                
                .event-side {
                    position: relative;
                }
                
                .event-left {
                    grid-column: 1;
                    padding-left: 2rem;
                    text-align: left;
                }
                
                .event-right {
                    grid-column: 2;
                    padding-right: 2rem;
                    text-align: right;
                }
                
                @media (max-width: 768px) {
                    .timeline-event {
                        grid-template-columns: 1fr;
                        gap: 1rem;
                    }
                    
                    .event-left,
                    .event-right {
                        grid-column: 1;
                        padding: 0 0.5rem 0 1.5rem;
                        text-align: right;
                    }
                }
            `}</style>
        </div>
    );
};

const EventContent = ({ date, title, archiveType, archiveContent, description, alignment }) => {
    const isLeft = alignment === 'left';

    return (
        <div className={`event-content ${isLeft ? 'left' : 'right'}`}>
            {/* Timeline dot - hidden on mobile */}
            <div className={`timeline-dot ${isLeft ? 'dot-left' : 'dot-right'}`}></div>

            <div className="date-badge">{date}</div>

            <h4 className="event-title">{title}</h4>

            <div className={`archive-box ${isLeft ? 'border-right' : 'border-left'}`}>
                <p className="archive-type">{archiveType}</p>
                <p className="archive-content">{archiveContent}</p>
            </div>

            <p className="event-description">{description}</p>

            <style jsx>{`
                .event-content {
                    position: relative;
                }
                
                .event-content.right {
                    text-align: right;
                }
                
                .timeline-dot {
                    display: none;
                    position: absolute;
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    background: var(--gradient-primary);
                    border: 2px solid var(--bg-primary);
                    box-shadow: 0 0 0 3px var(--shadow-sm);
                }
                
                .dot-left {
                    left: 100%;
                    transform: translateX(-1.5rem);
                }
                
                .dot-right {
                    right: 100%;
                    transform: translateX(1.5rem);
                }
                
                .date-badge {
                    display: inline-block;
                    padding: 0.5rem 1rem;
                    margin-bottom: 0.75rem;
                    border-radius: 4px;
                    background: var(--gradient-primary);
                    color: var(--text-primary);
                    font-size: 0.875rem;
                    font-weight: bold;
                    box-shadow: 0 2px 8px var(--shadow-sm);
                }
                
                .event-title {
                    font-family: 'Playfair Display', serif;
                    font-weight: bold;
                    font-size: clamp(1.25rem, 3vw, 1.75rem);
                    margin-bottom: 0.75rem;
                    color: var(--accent-light);
                }
                
                .archive-box {
                    padding: 1rem;
                    margin-bottom: 0.75rem;
                    border-radius: 4px;
                    background-color: var(--bg-secondary);
                }
                
                .border-right {
                    border-right: 3px solid var(--border-accent);
                    border-left: none;
                }
                
                .border-left {
                    border-left: 3px solid var(--border-accent);
                    border-right: none;
                }
                
                .archive-type {
                    font-size: 0.875rem;
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                    color: var(--accent-light);
                }
                
                .archive-content {
                    font-size: 0.875rem;
                    font-style: italic;
                    color: var(--text-secondary);
                    margin: 0;
                }
                
                .event-description {
                    font-size: clamp(0.875rem, 2vw, 1rem);
                    line-height: 1.7;
                    color: var(--text-secondary);
                    margin: 0;
                }
                
                @media (min-width: 769px) {
                    .timeline-dot {
                        display: block;
                    }
                }
                
                @media (max-width: 768px) {
                    .event-content {
                        text-align: right;
                    }
                    
                    .archive-box {
                        padding: 0.75rem;
                        border-right: 3px solid var(--border-accent);
                        border-left: none;
                    }
                    
                    .date-badge {
                        padding: 0.375rem 0.75rem;
                        font-size: 0.8rem;
                    }
                }
                
                @media (max-width: 480px) {
                    .archive-box {
                        padding: 0.625rem;
                    }
                    
                    .date-badge {
                        font-size: 0.75rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default function TimelineSection() {
    return (
        <section id="timeline-section" className="timeline-section">
            {/* Header */}
            <div className="timeline-header">
                <h2 className="timeline-title">
                    المسار الزمني للأحداث
                </h2>
                <div className="title-underline"></div>
            </div>

            <div className="timeline-container">
                {/* Central Vertical Line (Desktop) */}
                <div className="timeline-line desktop-line"></div>

                {/* Mobile Vertical Line (Right side for RTL) */}
                <div className="timeline-line mobile-line"></div>

                <div className="events-wrapper">
                    <TimelineEvent
                        alignment="left"
                        date="19 ديسمبر 1959"
                        title="القرار الأممي التاريخي"
                        archiveType=" وثيقة أرشيفية:"
                        archiveContent='"قرار الأمم المتحدة رقم 1514 يؤكد حق الشعوب في تقرير المصير"'
                        description='في جلسة تاريخية بالجمعية العامة للأمم المتحدة، صوتت 89 دولة لصالح حق الشعب الجزائري في تقرير المصير. كان هذا القرار بمثابة صفعة دبلوماسية لفرنسا التي حاولت تصوير القضية كـ"شأن داخلي"، وأعطى زخماً دولياً غير مسبوق للثورة الجزائرية.'
                    />

                    <TimelineEvent
                        alignment="right"
                        date="9 ديسمبر 1960"
                        title="وصول ديغول إلى الجزائر"
                        archiveType=" من الأرشيف الصوتي:"
                        archiveContent='خطاب ديغول في مطار دار البيضاء: "سأستشير الجزائريين حول مستقبلهم"'
                        description='الرئيس الفرنسي يصل إلى الجزائر في جولة استفتائية، محاولاً فرض مشروع "القوة الثالثة" - خيار ثالث بين الاستقلال والبقاء تحت الحكم الفرنسي. لكن الشعب الجزائري كان له رأي آخر. بدأت جبهة التحرير الوطني بالتعبئة السرية في الأحياء الشعبية.'
                    />

                    <TimelineEvent
                        alignment="left"
                        date="10 ديسمبر 1960"
                        title="الشرارة الأولى في بلكور"
                        archiveType="شهادة حية:"
                        archiveContent='"بدأت المناوشات عند ساحة الحكومة، وسرعان ما امتدت إلى أحياء بلكور والقصبة"'
                        description='في الأحياء الشعبية بالعاصمة، اندلعت أولى المواجهات. شباب جزائريون يرفعون شعارات مؤيدة للاستقلال، بينما تتصدى لهم ميليشيات المستوطنين الأوروبيين. الأجواء متوترة والجميع يترقب ما سيحدث غداً.'
                    />

                    {/* 11 December - Special Layout */}
                    <div className="special-event">
                        <div className="special-dot"></div>

                        <div className="special-card">
                            <div className="special-date-badge">
                                11 ديسمبر 1960 - اليوم الذي غيّر التاريخ
                            </div>

                            <h3 className="special-title">
                                انتفاضة شعب بأكمله
                            </h3>

                            <div className="stats-grid">
                                <div className="stat-card">
                                    <p className="stat-number">300,000+</p>
                                    <p className="stat-label">متظاهر في العاصمة وحدها</p>
                                </div>
                                <div className="stat-card">
                                    <p className="stat-number">15</p>
                                    <p className="stat-label">مدينة جزائرية انتفضت</p>
                                </div>
                                <div className="stat-card">
                                    <p className="stat-number">🇩🇿</p>
                                    <p className="stat-label">العلم الوطني يرفرف علناً</p>
                                </div>
                            </div>

                            <div className="special-content-box">
                                <p className="special-description">
                                    في صباح يوم الأحد، خرجت الجماهير الجزائرية من الأحياء الشعبية في موجة بشرية لم يشهد لها التاريخ مثيلاً. في بلكور، القصبة، باب الواد، حسين داي، وكل شبر من العاصمة، هتف الشعب بصوت واحد: "الجزائر جزائرية"، "تحيا جبهة التحرير"، "عاش الاستقلال".
                                </p>
                                <p className="special-note">
                                    الصور الأرشيفية تظهر بحراً من البشر يحملون الأعلام الجزائرية، متحدين كل التهديدات الاستعمارية
                                </p>
                            </div>
                        </div>
                    </div>

                    <TimelineEvent
                        alignment="right"
                        date="12 ديسمبر 1960"
                        title="القمع الدموي"
                        archiveType=" تقرير أرشيفي:"
                        archiveContent='"سقوط 123 شهيداً و300 جريح في يوم واحد - المصادر الرسمية الفرنسية"'
                        description='ردت قوات الاحتلال بوحشية منقطعة النظير. الرصاص الحي يستهدف المتظاهرين العزل، الدبابات تجوب الشوارع، والاعتقالات الجماعية تطال الآلاف. لكن الشعب لم ينكسر، بل ازداد تصميماً وإصراراً.'
                    />

                    <TimelineEvent
                        alignment="left"
                        date="13-14 ديسمبر 1960"
                        title="امتداد الثورة عبر الوطن"
                        archiveType=" خريطة الانتفاضة:"
                        archiveContent='وهران • قسنطينة • عنابة • سطيف • تلمسان • بجاية • سكيكدة'
                        description='كالنار في الهشيم، انتشرت المظاهرات إلى كل المدن الكبرى. في وهران، اهتزت معاقل الكولون الأوروبيين. في قسنطينة، خرجت الجماهير رغم الحصار العسكري. الرسالة واضحة: الشعب الجزائري موحد ولن يقبل بأقل من الاستقلال الكامل.'
                    />

                    <TimelineEvent
                        alignment="right"
                        date="20 ديسمبر 1960"
                        title="الأمم المتحدة تصوت لصالح الجزائر"
                        archiveType=" القرار الأممي:"
                        archiveContent='"63 دولة تصوت لصالح استقلال الجزائر في جلسة طارئة"'
                        description='صور المظاهرات وصلت إلى العالم أجمع. في قاعة الأمم المتحدة بنيويورك، صوتت الأغلبية الساحقة لصالح حق الجزائر في الاستقلال. فرنسا باتت معزولة دبلوماسياً، وديغول يدرك أن اللعبة انتهت.'
                    />

                    {/* نهاية ديسمبر - الأثر طويل المدى */}
                    <div className="conclusion-section">
                        <div className="conclusion-card">
                            <h3 className="conclusion-title">
                                الطريق إلى الاستقلال: 18 شهراً حاسمة
                            </h3>
                            <div className="conclusion-grid">
                                <div className="conclusion-item">
                                    <h4 className="conclusion-item-title">1961: المفاوضات تبدأ</h4>
                                    <p className="conclusion-item-text">
                                        في مايو 1961، بدأت المفاوضات الرسمية في إيفيان بفرنسا. ديغول الذي كان يرفض التفاوض مع "جبهة التحرير الإرهابية" أصبح مضطراً للجلوس على طاولة المفاوضات مع الممثل الشرعي للشعب الجزائري.
                                    </p>
                                </div>
                                <div className="conclusion-item">
                                    <h4 className="conclusion-item-title">1962: الاستقلال</h4>
                                    <p className="conclusion-item-text">
                                        في 18 مارس 1962، وقعت اتفاقيات إيفيان. وفي 5 يوليو 1962، أعلن استقلال الجزائر رسمياً. مظاهرات 11 ديسمبر كانت نقطة التحول الحاسمة التي جعلت هذا الاستقلال حتمية تاريخية.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .timeline-section {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 3rem 1.5rem 4rem;
                    border-top: 1px solid rgba(139, 38, 53, 0.3);
                }
                
                .timeline-header {
                    text-align: center;
                    margin-bottom: 3rem;
                }
                
                .timeline-title {
                    font-family: 'Playfair Display', serif;
                    font-weight: bold;
                    margin-bottom: 1rem;
                    font-size: clamp(1.75rem, 5vw, 3rem);
                    background: var(--gradient-subtle);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                
                .title-underline {
                    width: 100px;
                    height: 3px;
                    background: var(--gradient-accent);
                    margin: 0 auto;
                    border-radius: 2px;
                }
                
                .timeline-container {
                    position: relative;
                }
                
                .timeline-line {
                    position: absolute;
                    width: 2px;
                    top: 0;
                    bottom: 0;
                    background: var(--gradient-accent);
                }
                
                .desktop-line {
                    right: 50%;
                    transform: translateX(50%);
                    display: none;
                }
                
                .mobile-line {
                    right: 0.5rem;
                    display: block;
                }
                
                .events-wrapper {
                    display: flex;
                    flex-direction: column;
                    gap: 3rem;
                }
                
                /* Special Event (December 11) */
                .special-event {
                    margin: 2rem 0;
                    position: relative;
                }
                
                .special-dot {
                    display: none;
                    position: absolute;
                    left: 50%;
                    top: 2rem;
                    transform: translateX(-50%);
                    width: 28px;
                    height: 28px;
                    border-radius: 50%;
                    background: var(--gradient-primary);
                    border: 3px solid var(--bg-primary);
                    box-shadow: 0 0 0 5px var(--shadow-md), 0 0 20px var(--shadow-lg);
                    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                
                .special-card {
                    max-width: 900px;
                    margin: 0 auto;
                    padding: 2rem;
                    border-radius: 12px;
                    background: var(--bg-secondary);
                    border: 2px solid var(--border-accent);
                    box-shadow: 0 8px 24px var(--shadow-md);
                }
                
                .special-date-badge {
                    display: inline-block;
                    padding: 0.75rem 1.25rem;
                    margin-bottom: 1.5rem;
                    border-radius: 6px;
                    background: var(--gradient-primary);
                    color: var(--text-primary);
                    font-size: clamp(0.875rem, 2vw, 1rem);
                    font-weight: bold;
                    box-shadow: 0 4px 12px var(--shadow-md);
                }
                
                .special-title {
                    font-family: 'Playfair Display', serif;
                    font-weight: bold;
                    text-align: center;
                    margin-bottom: 2rem;
                    font-size: clamp(1.5rem, 4vw, 2.5rem);
                    background: var(--gradient-subtle);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                
                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1rem;
                    margin-bottom: 2rem;
                }
                
                .stat-card {
                    padding: 1.25rem;
                    border-radius: 8px;
                    text-align: center;
                    background-color: var(--bg-elevated);
                    border: 1px solid var(--border-accent);
                    box-shadow: 0 4px 12px var(--shadow-sm);
                }
                
                .stat-number {
                    font-size: clamp(1.5rem, 4vw, 2.5rem);
                    font-weight: bold;
                    margin-bottom: 0.5rem;
                    color: var(--accent-light);
                }
                
                .stat-label {
                    font-size: clamp(0.7rem, 1.5vw, 0.875rem);
                    color: var(--text-secondary);
                    margin: 0;
                }
                
                .special-content-box {
                    text-align: right;
                    padding: 1.25rem;
                    border-radius: 8px;
                    background-color: var(--bg-primary);
                    border-right: 4px solid var(--border-accent);
                }
                
                .special-description {
                    font-size: clamp(0.875rem, 2vw, 1rem);
                    line-height: 1.7;
                    margin-bottom: 1rem;
                    color: var(--text-secondary);
                }
                
                .special-note {
                    font-size: clamp(0.8rem, 1.5vw, 0.875rem);
                    font-weight: 600;
                    color: var(--accent-light);
                    margin: 0;
                }
                
                /* Conclusion Section */
                .conclusion-section {
                    margin: 2rem 0;
                }
                
                .conclusion-card {
                    max-width: 900px;
                    margin: 0 auto;
                    padding: 2rem;
                    border-radius: 12px;
                    background: var(--bg-secondary);
                    border-top: 3px solid var(--border-accent);
                    border-bottom: 3px solid var(--border-accent);
                    box-shadow: 0 8px 24px var(--shadow-sm);
                }
                
                .conclusion-title {
                    font-family: 'Playfair Display', serif;
                    font-weight: bold;
                    text-align: center;
                    margin-bottom: 2rem;
                    font-size: clamp(1.5rem, 4vw, 2.5rem);
                    background: var(--gradient-subtle);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                
                .conclusion-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1.5rem;
                }
                
                .conclusion-item {
                    padding: 1.25rem;
                    border-radius: 8px;
                    background-color: var(--bg-elevated);
                    border: 1px solid var(--border-accent);
                    box-shadow: 0 4px 12px var(--shadow-sm);
                }
                
                .conclusion-item-title {
                    font-weight: bold;
                    font-size: clamp(1rem, 2vw, 1.125rem);
                    margin-bottom: 0.75rem;
                    color: var(--accent-light);
                }
                
                .conclusion-item-text {
                    font-size: clamp(0.8rem, 1.5vw, 0.875rem);
                    line-height: 1.7;
                    color: var(--text-secondary);
                    margin: 0;
                }
                
                @keyframes pulse {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.7;
                    }
                }
                
                /* Desktop */
                @media (min-width: 769px) {
                    .desktop-line {
                        display: block;
                    }
                    
                    .mobile-line {
                        display: none;
                    }
                    
                    .special-dot {
                        display: block;
                    }
                }
                
                /* Tablet */
                @media (max-width: 768px) {
                    .timeline-section {
                        padding: 2rem 1rem 3rem;
                    }
                    
                    .timeline-header {
                        margin-bottom: 2rem;
                    }
                    
                    .title-underline {
                        width: 80px;
                    }
                    
                    .events-wrapper {
                        gap: 2rem;
                        padding-right: 1rem;
                    }
                    
                    .special-card {
                        padding: 1.5rem;
                    }
                    
                    .stats-grid {
                        grid-template-columns: 1fr;
                        gap: 0.75rem;
                    }
                    
                    .stat-card {
                        padding: 1rem;
                    }
                    
                    .conclusion-grid {
                        grid-template-columns: 1fr;
                        gap: 1rem;
                    }
                    
                    .conclusion-card {
                        padding: 1.5rem;
                    }
                    
                    .conclusion-item {
                        padding: 1rem;
                    }
                }
                
                /* Mobile */
                @media (max-width: 480px) {
                    .timeline-section {
                        padding: 1.5rem 0.75rem 2rem;
                    }
                    
                    .timeline-header {
                        margin-bottom: 1.5rem;
                    }
                    
                    .title-underline {
                        width: 60px;
                    }
                    
                    .events-wrapper {
                        gap: 1.5rem;
                        padding-right: 0.75rem;
                    }
                    
                    .special-card {
                        padding: 1rem;
                    }
                    
                    .special-date-badge {
                        padding: 0.5rem 0.75rem;
                        margin-bottom: 1rem;
                    }
                    
                    .special-title {
                        margin-bottom: 1.5rem;
                    }
                    
                    .stat-card {
                        padding: 0.875rem;
                    }
                    
                    .special-content-box {
                        padding: 1rem;
                    }
                    
                    .conclusion-card {
                        padding: 1rem;
                    }
                    
                    .conclusion-title {
                        margin-bottom: 1.5rem;
                    }
                    
                    .conclusion-item {
                        padding: 0.875rem;
                    }
                }
            `}</style>
        </section>
    );
}
