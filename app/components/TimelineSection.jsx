"use client";

import React from 'react';

// Reusable Timeline Event Component
const TimelineEvent = ({ date, title, archiveType, archiveContent, description, alignment }) => {
    const isLeft = alignment === 'left';

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left Side */}
            <div className={`md:text-left relative ${isLeft ? 'order-1' : 'order-2 md:order-1'}`} style={{ paddingLeft: isLeft ? '2rem' : 0, paddingRight: !isLeft ? '2rem' : 0 }}>
                {isLeft ? (
                    <EventContent
                        date={date}
                        title={title}
                        archiveType={archiveType}
                        archiveContent={archiveContent}
                        description={description}
                        alignment="left"
                    />
                ) : (
                    <div className="hidden md:block"></div>
                )}
            </div>

            {/* Right Side */}
            <div className={`md:text-right relative ${isLeft ? 'order-2 md:order-2' : 'order-1 md:order-2'}`} style={{ paddingRight: !isLeft ? '2rem' : 0, paddingLeft: isLeft ? '2rem' : 0 }}>
                {!isLeft ? (
                    <EventContent
                        date={date}
                        title={title}
                        archiveType={archiveType}
                        archiveContent={archiveContent}
                        description={description}
                        alignment="right"
                    />
                ) : (
                    <div className="hidden md:block"></div>
                )}
            </div>
        </div>
    );
};

const EventContent = ({ date, title, archiveType, archiveContent, description, alignment }) => {
    const isLeft = alignment === 'left';

    return (
        <div className={`relative ${!isLeft ? 'md:text-right' : ''}`}>
            <div className={`hidden md:block absolute ${isLeft ? 'left-full translate-x-[-1.5rem]' : 'right-full translate-x-[1.5rem]'} w-5 h-5 rounded-full`}
                style={{
                    background: 'var(--gradient-primary)',
                    border: '2px solid var(--bg-primary)',
                    boxShadow: '0 0 0 3px var(--shadow-sm)'
                }}>
            </div>

            <div className="inline-block px-4 py-2 mb-3 rounded" style={{
                background: 'var(--gradient-primary)',
                color: 'var(--text-primary)',
                fontSize: '0.875rem',
                fontWeight: 'bold',
                boxShadow: '0 2px 8px var(--shadow-sm)'
            }}>
                {date}
            </div>
            <h4 className="font-playfair font-bold text-2xl mb-3" style={{ color: 'var(--accent-light)' }}>
                {title}
            </h4>
            <div className="p-4 mb-3 rounded" style={{
                backgroundColor: 'var(--bg-secondary)',
                borderRight: isLeft ? '3px solid var(--border-accent)' : 'none',
                borderLeft: !isLeft ? '3px solid var(--border-accent)' : 'none'
            }}>
                <p className="text-sm font-semibold mb-2" style={{ color: 'var(--accent-light)' }}>{archiveType}</p>
                <p className="text-sm italic" style={{ color: 'var(--text-secondary)' }}>
                    {archiveContent}
                </p>
            </div>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {description}
            </p>
        </div>
    );
};

export default function TimelineSection() {
    return (
        <section id="timeline-section" className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-16"
            style={{ borderTop: '1px solid rgba(139, 38, 53, 0.3)' }}>

            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="font-playfair font-bold mb-4" style={{
                    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                    background: 'var(--gradient-subtle)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                }}>
                    المسار الزمني للأحداث
                </h2>
                <div style={{
                    width: '120px',
                    height: '3px',
                    background: 'var(--gradient-accent)',
                    margin: '0 auto',
                    borderRadius: '2px'
                }} />
            </div>

            <div className="relative">
                {/* Central Vertical Line (Desktop) */}
                <div className="absolute right-1/2 transform translate-x-1/2 top-0 bottom-0 w-0.5 hidden md:block"
                    style={{ background: 'var(--gradient-accent)' }}>
                </div>

                {/* Mobile Vertical Line (Right side for RTL) */}
                <div className="absolute right-0 top-0 bottom-0 w-0.5 md:hidden"
                    style={{ background: 'var(--gradient-accent)', right: '1rem' }}>
                </div>

                <div className="space-y-16">
                    <TimelineEvent
                        alignment="left"
                        date="19 ديسمبر 1959"
                        title="القرار الأممي التاريخي"
                        archiveType="📋 وثيقة أرشيفية:"
                        archiveContent='"قرار الأمم المتحدة رقم 1514 يؤكد حق الشعوب في تقرير المصير"'
                        description='في جلسة تاريخية بالجمعية العامة للأمم المتحدة، صوتت 89 دولة لصالح حق الشعب الجزائري في تقرير المصير. كان هذا القرار بمثابة صفعة دبلوماسية لفرنسا التي حاولت تصوير القضية كـ"شأن داخلي"، وأعطى زخماً دولياً غير مسبوق للثورة الجزائرية.'
                    />

                    <TimelineEvent
                        alignment="right"
                        date="9 ديسمبر 1960"
                        title="وصول ديغول إلى الجزائر"
                        archiveType="🎙️ من الأرشيف الصوتي:"
                        archiveContent='خطاب ديغول في مطار دار البيضاء: "سأستشير الجزائريين حول مستقبلهم"'
                        description='الرئيس الفرنسي يصل إلى الجزائر في جولة استفتائية، محاولاً فرض مشروع "القوة الثالثة" - خيار ثالث بين الاستقلال والبقاء تحت الحكم الفرنسي. لكن الشعب الجزائري كان له رأي آخر. بدأت جبهة التحرير الوطني بالتعبئة السرية في الأحياء الشعبية.'
                    />

                    <TimelineEvent
                        alignment="left"
                        date="10 ديسمبر 1960"
                        title="الشرارة الأولى في بلكور"
                        archiveType="👥 شهادة حية:"
                        archiveContent='"بدأت المناوشات عند ساحة الحكومة، وسرعان ما امتدت إلى أحياء بلكور والقصبة"'
                        description='في الأحياء الشعبية بالعاصمة، اندلعت أولى المواجهات. شباب جزائريون يرفعون شعارات مؤيدة للاستقلال، بينما تتصدى لهم ميليشيات المستوطنين الأوروبيين. الأجواء متوترة والجميع يترقب ما سيحدث غداً.'
                    />

                    {/* 11 December - Special Layout */}
                    <div className="col-span-full my-12 relative">
                        <div className="hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2 w-8 h-8 rounded-full"
                            style={{
                                background: 'var(--gradient-primary)',
                                border: '3px solid var(--bg-primary)',
                                boxShadow: '0 0 0 5px var(--shadow-md), 0 0 20px var(--shadow-lg)',
                                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                            }}>
                        </div>

                        <div className="max-w-4xl mx-auto p-8 rounded-lg" style={{
                            background: 'var(--bg-secondary)',
                            border: '2px solid var(--border-accent)',
                            boxShadow: '0 8px 24px var(--shadow-md)'
                        }}>
                            <div className="inline-block px-6 py-3 mb-6 rounded" style={{
                                background: 'var(--gradient-primary)',
                                color: 'var(--text-primary)',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                boxShadow: '0 4px 12px var(--shadow-md)'
                            }}>
                                11 ديسمبر 1960 - اليوم الذي غيّر التاريخ
                            </div>

                            <h3 className="font-playfair font-bold text-center mb-8" style={{
                                fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                                background: 'var(--gradient-subtle)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}>
                                انتفاضة شعب بأكمله
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div className="p-6 rounded-lg text-center" style={{
                                    backgroundColor: 'var(--bg-elevated)',
                                    border: '1px solid var(--border-accent)',
                                    boxShadow: '0 4px 12px var(--shadow-sm)'
                                }}>
                                    <p className="text-4xl font-bold mb-2" style={{ color: 'var(--accent-light)' }}>300,000+</p>
                                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>متظاهر في العاصمة وحدها</p>
                                </div>
                                <div className="p-6 rounded-lg text-center" style={{
                                    backgroundColor: 'var(--bg-elevated)',
                                    border: '1px solid var(--border-accent)',
                                    boxShadow: '0 4px 12px var(--shadow-sm)'
                                }}>
                                    <p className="text-4xl font-bold mb-2" style={{ color: 'var(--accent-light)' }}>15</p>
                                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>مدينة جزائرية انتفضت</p>
                                </div>
                                <div className="p-6 rounded-lg text-center" style={{
                                    backgroundColor: 'var(--bg-elevated)',
                                    border: '1px solid var(--border-accent)',
                                    boxShadow: '0 4px 12px var(--shadow-sm)'
                                }}>
                                    <p className="text-4xl font-bold mb-2" style={{ color: 'var(--accent-light)' }}>🚩</p>
                                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>العلم الوطني يرفرف علناً</p>
                                </div>
                            </div>

                            <div className="text-right p-6 rounded-lg" style={{
                                backgroundColor: 'var(--bg-primary)',
                                borderRight: '4px solid var(--border-accent)'
                            }}>
                                <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                                    في صباح يوم الأحد، خرجت الجماهير الجزائرية من الأحياء الشعبية في موجة بشرية لم يشهد لها التاريخ مثيلاً. في بلكور، القصبة، باب الواد، حسين داي، وكل شبر من العاصمة، هتف الشعب بصوت واحد: "الجزائر جزائرية"، "تحيا جبهة التحرير"، "عاش الاستقلال".
                                </p>
                                <p className="text-sm font-semibold" style={{ color: 'var(--accent-light)' }}>
                                    📸 الصور الأرشيفية تظهر بحراً من البشر يحملون الأعلام الجزائرية، متحدين كل التهديدات الاستعمارية
                                </p>
                            </div>
                        </div>
                    </div>

                    <TimelineEvent
                        alignment="right"
                        date="12 ديسمبر 1960"
                        title="القمع الدموي"
                        archiveType="⚠️ تقرير أرشيفي:"
                        archiveContent='"سقوط 123 شهيداً و300 جريح في يوم واحد - المصادر الرسمية الفرنسية"'
                        description='ردت قوات الاحتلال بوحشية منقطعة النظير. الرصاص الحي يستهدف المتظاهرين العزل، الدبابات تجوب الشوارع، والاعتقالات الجماعية تطال الآلاف. لكن الشعب لم ينكسر، بل ازداد تصميماً وإصراراً.'
                    />

                    <TimelineEvent
                        alignment="left"
                        date="13-14 ديسمبر 1960"
                        title="امتداد الثورة عبر الوطن"
                        archiveType="🗺️ خريطة الانتفاضة:"
                        archiveContent='وهران • قسنطينة • عنابة • سطيف • تلمسان • بجاية • سكيكدة'
                        description='كالنار في الهشيم، انتشرت المظاهرات إلى كل المدن الكبرى. في وهران، اهتزت معاقل الكولون الأوروبيين. في قسنطينة، خرجت الجماهير رغم الحصار العسكري. الرسالة واضحة: الشعب الجزائري موحد ولن يقبل بأقل من الاستقلال الكامل.'
                    />

                    <TimelineEvent
                        alignment="right"
                        date="20 ديسمبر 1960"
                        title="الأمم المتحدة تصوت لصالح الجزائر"
                        archiveType="🏛️ القرار الأممي:"
                        archiveContent='"63 دولة تصوت لصالح استقلال الجزائر في جلسة طارئة"'
                        description='صور المظاهرات وصلت إلى العالم أجمع. في قاعة الأمم المتحدة بنيويورك، صوتت الأغلبية الساحقة لصالح حق الجزائر في الاستقلال. فرنسا باتت معزولة دبلوماسياً، وديغول يدرك أن اللعبة انتهت.'
                    />

                    {/* نهاية ديسمبر - الأثر طويل المدى */}
                    <div className="col-span-full my-12">
                        <div className="max-w-4xl mx-auto p-8 rounded-lg" style={{
                            background: 'var(--bg-secondary)',
                            borderTop: '3px solid var(--border-accent)',
                            borderBottom: '3px solid var(--border-accent)',
                            boxShadow: '0 8px 24px var(--shadow-sm)'
                        }}>
                            <h3 className="font-playfair font-bold text-center mb-8" style={{
                                fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                                background: 'var(--gradient-subtle)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}>
                                الطريق إلى الاستقلال: 18 شهراً حاسمة
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-6 rounded-lg" style={{
                                    backgroundColor: 'var(--bg-elevated)',
                                    border: '1px solid var(--border-accent)',
                                    boxShadow: '0 4px 12px var(--shadow-sm)'
                                }}>
                                    <h4 className="font-bold text-lg mb-3" style={{ color: 'var(--accent-light)' }}>📅 1961: المفاوضات تبدأ</h4>
                                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                        في مايو 1961، بدأت المفاوضات الرسمية في إيفيان بفرنسا. ديغول الذي كان يرفض التفاوض مع "جبهة التحرير الإرهابية" أصبح مضطراً للجلوس على طاولة المفاوضات مع الممثل الشرعي للشعب الجزائري.
                                    </p>
                                </div>
                                <div className="p-6 rounded-lg" style={{
                                    backgroundColor: 'var(--bg-elevated)',
                                    border: '1px solid var(--border-accent)',
                                    boxShadow: '0 4px 12px var(--shadow-sm)'
                                }}>
                                    <h4 className="font-bold text-lg mb-3" style={{ color: 'var(--accent-light)' }}>🕊️ 1962: الاستقلال</h4>
                                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                        في 18 مارس 1962، وقعت اتفاقيات إيفيان. وفي 5 يوليو 1962، أعلن استقلال الجزائر رسمياً. مظاهرات 11 ديسمبر كانت نقطة التحول الحاسمة التي جعلت هذا الاستقلال حتمية تاريخية.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes pulse {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.7;
                    }
                }
            `}</style>
        </section>
    );
}
