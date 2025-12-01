"use client";

export default function TimelineSection() {
    return (
        <section id="timeline-section" className="max-w-7xl mx-auto px-6 lg:px-8 pt-6 md:pt-8 pb-12 md:pb-16" style={{ borderTop: '1px solid #9B9B85' }}>
            <h2 className="text-4xl font-playfair font-bold text-center mb-10" style={{ color: '#ab7743' }}>
                المسار الزمني للأحداث
            </h2>

            <div className="relative">
                {/* خط زمني عمودي مركزي */}
                <div className="absolute right-1/2 transform translate-x-1/2 top-0 bottom-0 w-1 hidden md:block"
                    style={{ background: 'linear-gradient(to bottom, #dc2626, #991b1b, #7f1d1d)' }}>
                </div>

                <div className="space-y-16">
                    {/* 1959 - السياق الدولي */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        <div className="md:text-left relative" style={{ paddingLeft: '2rem' }}>
                            {/* نقطة على الخط الزمني */}
                            <div className="hidden md:block absolute left-full transform translate-x-[-1.5rem] w-6 h-6 rounded-full"
                                style={{ backgroundColor: '#dc2626', border: '3px solid #1c1509', boxShadow: '0 0 0 4px rgba(220, 38, 38, 0.2)' }}>
                            </div>

                            <div className="inline-block px-4 py-2 mb-3" style={{ backgroundColor: '#dc2626', color: 'white', fontSize: '0.875rem', fontWeight: 'bold', boxShadow: '0 2px 8px rgba(220, 38, 38, 0.3)' }}>
                                19 ديسمبر 1959
                            </div>
                            <h4 className="font-playfair font-bold text-2xl mb-3" style={{ color: '#ef4444' }}>
                                القرار الأممي التاريخي
                            </h4>
                            <div className="p-4 mb-3" style={{ backgroundColor: 'rgba(220, 38, 38, 0.15)', borderRight: '3px solid #dc2626' }}>
                                <p className="text-sm font-semibold mb-2" style={{ color: '#fca5a5' }}>📋 وثيقة أرشيفية:</p>
                                <p className="text-sm italic" style={{ color: '#e5e5e5' }}>
                                    "قرار الأمم المتحدة رقم 1514 يؤكد حق الشعوب في تقرير المصير"
                                </p>
                            </div>
                            <p className="text-base leading-relaxed" style={{ color: '#f5f5f5' }}>
                                في جلسة تاريخية بالجمعية العامة للأمم المتحدة، صوتت 89 دولة لصالح حق الشعب الجزائري في تقرير المصير. كان هذا القرار بمثابة صفعة دبلوماسية لفرنسا التي حاولت تصوير القضية كـ"شأن داخلي"، وأعطى زخماً دولياً غير مسبوق للثورة الجزائرية.
                            </p>
                        </div>
                        <div className="hidden md:block"></div>
                    </div>

                    {/* 9 ديسمبر 1960 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        <div className="hidden md:block"></div>
                        <div className="md:text-right relative" style={{ paddingRight: '2rem' }}>
                            {/* نقطة على الخط الزمني */}
                            <div className="hidden md:block absolute right-full transform translate-x-[1.5rem] w-6 h-6 rounded-full"
                                style={{ backgroundColor: '#b91c1c', border: '3px solid #1c1509', boxShadow: '0 0 0 4px rgba(185, 28, 28, 0.2)' }}>
                            </div>

                            <div className="inline-block px-4 py-2 mb-3" style={{ backgroundColor: '#b91c1c', color: 'white', fontSize: '0.875rem', fontWeight: 'bold', boxShadow: '0 2px 8px rgba(185, 28, 28, 0.3)' }}>
                                9 ديسمبر 1960
                            </div>
                            <h4 className="font-playfair font-bold text-2xl mb-3" style={{ color: '#f87171' }}>
                                وصول ديغول إلى الجزائر
                            </h4>
                            <div className="p-4 mb-3" style={{ backgroundColor: 'rgba(185, 28, 28, 0.15)', borderLeft: '3px solid #b91c1c' }}>
                                <p className="text-sm font-semibold mb-2" style={{ color: '#fca5a5' }}>🎙️ من الأرشيف الصوتي:</p>
                                <p className="text-sm italic" style={{ color: '#e5e5e5' }}>
                                    خطاب ديغول في مطار دار البيضاء: "سأستشير الجزائريين حول مستقبلهم"
                                </p>
                            </div>
                            <p className="text-base leading-relaxed" style={{ color: '#f5f5f5' }}>
                                الرئيس الفرنسي يصل إلى الجزائر في جولة استفتائية، محاولاً فرض مشروع "القوة الثالثة" - خيار ثالث بين الاستقلال والبقاء تحت الحكم الفرنسي. لكن الشعب الجزائري كان له رأي آخر. بدأت جبهة التحرير الوطني بالتعبئة السرية في الأحياء الشعبية.
                            </p>
                        </div>
                    </div>

                    {/* 10 ديسمبر 1960 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        <div className="md:text-left relative" style={{ paddingLeft: '2rem' }}>
                            {/* نقطة على الخط الزمني */}
                            <div className="hidden md:block absolute left-full transform translate-x-[-1.5rem] w-6 h-6 rounded-full"
                                style={{ backgroundColor: '#991b1b', border: '3px solid #1c1509', boxShadow: '0 0 0 4px rgba(153, 27, 27, 0.2)' }}>
                            </div>

                            <div className="inline-block px-4 py-2 mb-3" style={{ backgroundColor: '#991b1b', color: 'white', fontSize: '0.875rem', fontWeight: 'bold', boxShadow: '0 2px 8px rgba(153, 27, 27, 0.3)' }}>
                                10 ديسمبر 1960
                            </div>
                            <h4 className="font-playfair font-bold text-2xl mb-3" style={{ color: '#ef4444' }}>
                                الشرارة الأولى في بلكور
                            </h4>
                            <div className="p-4 mb-3" style={{ backgroundColor: 'rgba(153, 27, 27, 0.15)', borderRight: '3px solid #991b1b' }}>
                                <p className="text-sm font-semibold mb-2" style={{ color: '#fca5a5' }}>👥 شهادة حية:</p>
                                <p className="text-sm italic" style={{ color: '#e5e5e5' }}>
                                    "بدأت المناوشات عند ساحة الحكومة، وسرعان ما امتدت إلى أحياء بلكور والقصبة"
                                </p>
                            </div>
                            <p className="text-base leading-relaxed" style={{ color: '#f5f5f5' }}>
                                في الأحياء الشعبية بالعاصمة، اندلعت أولى المواجهات. شباب جزائريون يرفعون شعارات مؤيدة للاستقلال، بينما تتصدى لهم ميليشيات المستوطنين الأوروبيين. الأجواء متوترة والجميع يترقب ما سيحدث غداً.
                            </p>
                        </div>
                        <div className="hidden md:block"></div>
                    </div>

                    {/* 11 ديسمبر 1960 - اليوم المفصلي */}
                    <div className="col-span-full my-8 relative">
                        {/* نقطة مميزة كبيرة على الخط الزمني */}
                        <div className="hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2 w-10 h-10 rounded-full animate-pulse"
                            style={{ backgroundColor: '#7f1d1d', border: '4px solid #1c1509', boxShadow: '0 0 0 6px rgba(127, 29, 29, 0.3), 0 0 20px rgba(220, 38, 38, 0.5)' }}>
                        </div>

                        <div className="max-w-4xl mx-auto p-8 text-center" style={{
                            background: 'linear-gradient(135deg, rgba(127, 29, 29, 0.25), rgba(153, 27, 27, 0.25))',
                            border: '2px solid #dc2626',
                            boxShadow: '0 8px 16px rgba(220, 38, 38, 0.3)'
                        }}>
                            <div className="inline-block px-6 py-3 mb-4" style={{ backgroundColor: '#7f1d1d', color: 'white', fontSize: '1rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(127, 29, 29, 0.4)' }}>
                                11 ديسمبر 1960 - اليوم الذي غيّر التاريخ
                            </div>
                            <h3 className="font-playfair font-bold text-3xl mb-6" style={{ color: '#dc2626' }}>
                                انتفاضة شعب بأكمله
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                                <div className="p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', border: '1px solid rgba(220, 38, 38, 0.3)' }}>
                                    <p className="text-3xl font-bold mb-2" style={{ color: '#dc2626' }}>300,000+</p>
                                    <p className="text-sm" style={{ color: '#f5f5f5' }}>متظاهر في العاصمة وحدها</p>
                                </div>
                                <div className="p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', border: '1px solid rgba(220, 38, 38, 0.3)' }}>
                                    <p className="text-3xl font-bold mb-2" style={{ color: '#dc2626' }}>15</p>
                                    <p className="text-sm" style={{ color: '#f5f5f5' }}>مدينة جزائرية انتفضت</p>
                                </div>
                                <div className="p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', border: '1px solid rgba(220, 38, 38, 0.3)' }}>
                                    <p className="text-3xl font-bold mb-2" style={{ color: '#dc2626' }}>🚩</p>
                                    <p className="text-sm" style={{ color: '#f5f5f5' }}>العلم الوطني يرفرف علناً لأول مرة</p>
                                </div>
                            </div>
                            <div className="text-right p-6" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', borderRight: '4px solid #dc2626' }}>
                                <p className="text-base leading-relaxed mb-4" style={{ color: '#f5f5f5' }}>
                                    في صباح يوم الأحد، خرجت الجماهير الجزائرية من الأحياء الشعبية في موجة بشرية لم يشهد لها التاريخ مثيلاً. في بلكور، القصبة، باب الواد، حسين داي، وكل شبر من العاصمة، هتف الشعب بصوت واحد: "الجزائر جزائرية"، "تحيا جبهة التحرير"، "عاش الاستقلال".
                                </p>
                                <p className="text-sm font-semibold" style={{ color: '#fca5a5' }}>
                                    📸 الصور الأرشيفية تظهر بحراً من البشر يحملون الأعلام الجزائرية، متحدين كل التهديدات الاستعمارية
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 12 ديسمبر 1960 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        <div className="hidden md:block"></div>
                        <div className="md:text-right relative" style={{ paddingRight: '2rem' }}>
                            {/* نقطة على الخط الزمني */}
                            <div className="hidden md:block absolute right-full transform translate-x-[1.5rem] w-6 h-6 rounded-full"
                                style={{ backgroundColor: '#7f1d1d', border: '3px solid #1c1509', boxShadow: '0 0 0 4px rgba(127, 29, 29, 0.2)' }}>
                            </div>

                            <div className="inline-block px-4 py-2 mb-3" style={{ backgroundColor: '#7f1d1d', color: 'white', fontSize: '0.875rem', fontWeight: 'bold', boxShadow: '0 2px 8px rgba(127, 29, 29, 0.3)' }}>
                                12 ديسمبر 1960
                            </div>
                            <h4 className="font-playfair font-bold text-2xl mb-3" style={{ color: '#f87171' }}>
                                القمع الدموي
                            </h4>
                            <div className="p-4 mb-3" style={{ backgroundColor: 'rgba(127, 29, 29, 0.15)', borderLeft: '3px solid #7f1d1d' }}>
                                <p className="text-sm font-semibold mb-2" style={{ color: '#fca5a5' }}>⚠️ تقرير أرشيفي:</p>
                                <p className="text-sm italic" style={{ color: '#e5e5e5' }}>
                                    "سقوط 123 شهيداً و300 جريح في يوم واحد - المصادر الرسمية الفرنسية"
                                </p>
                            </div>
                            <p className="text-base leading-relaxed" style={{ color: '#f5f5f5' }}>
                                ردت قوات الاحتلال بوحشية منقطعة النظير. الرصاص الحي يستهدف المتظاهرين العزل، الدبابات تجوب الشوارع، والاعتقالات الجماعية تطال الآلاف. لكن الشعب لم ينكسر، بل ازداد تصميماً وإصراراً.
                            </p>
                        </div>
                    </div>

                    {/* 13-14 ديسمبر 1960 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        <div className="md:text-left relative" style={{ paddingLeft: '2rem' }}>
                            {/* نقطة على الخط الزمني */}
                            <div className="hidden md:block absolute left-full transform translate-x-[-1.5rem] w-6 h-6 rounded-full"
                                style={{ backgroundColor: '#991b1b', border: '3px solid #1c1509', boxShadow: '0 0 0 4px rgba(153, 27, 27, 0.2)' }}>
                            </div>

                            <div className="inline-block px-4 py-2 mb-3" style={{ backgroundColor: '#991b1b', color: 'white', fontSize: '0.875rem', fontWeight: 'bold', boxShadow: '0 2px 8px rgba(153, 27, 27, 0.3)' }}>
                                13-14 ديسمبر 1960
                            </div>
                            <h4 className="font-playfair font-bold text-2xl mb-3" style={{ color: '#ef4444' }}>
                                امتداد الثورة عبر الوطن
                            </h4>
                            <div className="p-4 mb-3" style={{ backgroundColor: 'rgba(153, 27, 27, 0.15)', borderRight: '3px solid #991b1b' }}>
                                <p className="text-sm font-semibold mb-2" style={{ color: '#fca5a5' }}>🗺️ خريطة الانتفاضة:</p>
                                <p className="text-sm" style={{ color: '#e5e5e5' }}>
                                    وهران • قسنطينة • عنابة • سطيف • تلمسان • بجاية • سكيكدة
                                </p>
                            </div>
                            <p className="text-base leading-relaxed" style={{ color: '#f5f5f5' }}>
                                كالنار في الهشيم، انتشرت المظاهرات إلى كل المدن الكبرى. في وهران، اهتزت معاقل الكولون الأوروبيين. في قسنطينة، خرجت الجماهير رغم الحصار العسكري. الرسالة واضحة: الشعب الجزائري موحد ولن يقبل بأقل من الاستقلال الكامل.
                            </p>
                        </div>
                        <div className="hidden md:block"></div>
                    </div>

                    {/* 20 ديسمبر 1960 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        <div className="hidden md:block"></div>
                        <div className="md:text-right relative" style={{ paddingRight: '2rem' }}>
                            {/* نقطة على الخط الزمني */}
                            <div className="hidden md:block absolute right-full transform translate-x-[1.5rem] w-6 h-6 rounded-full"
                                style={{ backgroundColor: '#b91c1c', border: '3px solid #1c1509', boxShadow: '0 0 0 4px rgba(185, 28, 28, 0.2)' }}>
                            </div>

                            <div className="inline-block px-4 py-2 mb-3" style={{ backgroundColor: '#b91c1c', color: 'white', fontSize: '0.875rem', fontWeight: 'bold', boxShadow: '0 2px 8px rgba(185, 28, 28, 0.3)' }}>
                                20 ديسمبر 1960
                            </div>
                            <h4 className="font-playfair font-bold text-2xl mb-3" style={{ color: '#f87171' }}>
                                الأمم المتحدة تصوت لصالح الجزائر
                            </h4>
                            <div className="p-4 mb-3" style={{ backgroundColor: 'rgba(185, 28, 28, 0.15)', borderLeft: '3px solid #b91c1c' }}>
                                <p className="text-sm font-semibold mb-2" style={{ color: '#fca5a5' }}>🏛️ القرار الأممي:</p>
                                <p className="text-sm italic" style={{ color: '#e5e5e5' }}>
                                    "63 دولة تصوت لصالح استقلال الجزائر في جلسة طارئة"
                                </p>
                            </div>
                            <p className="text-base leading-relaxed" style={{ color: '#f5f5f5' }}>
                                صور المظاهرات وصلت إلى العالم أجمع. في قاعة الأمم المتحدة بنيويورك، صوتت الأغلبية الساحقة لصالح حق الجزائر في الاستقلال. فرنسا باتت معزولة دبلوماسياً، وديغول يدرك أن اللعبة انتهت.
                            </p>
                        </div>
                    </div>

                    {/* نهاية ديسمبر - الأثر طويل المدى */}
                    <div className="col-span-full my-8">
                        <div className="max-w-4xl mx-auto p-8" style={{
                            background: 'linear-gradient(to bottom, rgba(153, 27, 27, 0.2), rgba(127, 29, 29, 0.2))',
                            borderTop: '3px solid #dc2626',
                            borderBottom: '3px solid #991b1b'
                        }}>
                            <h3 className="font-playfair font-bold text-3xl mb-6 text-center" style={{ color: '#dc2626' }}>
                                الطريق إلى الاستقلال: 18 شهراً حاسمة
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', border: '1px solid rgba(220, 38, 38, 0.3)' }}>
                                    <h4 className="font-bold text-lg mb-3" style={{ color: '#f87171' }}>📅 1961: المفاوضات تبدأ</h4>
                                    <p className="text-sm leading-relaxed" style={{ color: '#f5f5f5' }}>
                                        في مايو 1961، بدأت المفاوضات الرسمية في إيفيان بفرنسا. ديغول الذي كان يرفض التفاوض مع "جبهة التحرير الإرهابية" أصبح مضطراً للجلوس على طاولة المفاوضات مع الممثل الشرعي للشعب الجزائري.
                                    </p>
                                </div>
                                <div className="p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', border: '1px solid rgba(220, 38, 38, 0.3)' }}>
                                    <h4 className="font-bold text-lg mb-3" style={{ color: '#f87171' }}>🕊️ 1962: الاستقلال</h4>
                                    <p className="text-sm leading-relaxed" style={{ color: '#f5f5f5' }}>
                                        في 18 مارس 1962، وقعت اتفاقيات إيفيان. وفي 5 يوليو 1962، أعلن استقلال الجزائر رسمياً. مظاهرات 11 ديسمبر كانت نقطة التحول الحاسمة التي جعلت هذا الاستقلال حتمية تاريخية.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
