"use client";

export default function TimelineSection() {
    return (
        <section id="timeline-section" className="max-w-7xl mx-auto px-6 lg:px-8 pt-6 md:pt-8 pb-12 md:pb-16" style={{ borderTop: '1px solid #9B9B85' }}>
            <h2 className="text-4xl font-playfair font-bold text-center mb-10" style={{ color: '#ab7743' }}>
                المسار الزمني للأحداث
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-8">
                    <div className="timeline-item">
                        <h4 className="font-playfair font-bold text-xl" style={{ color: '#868859' }}>19 ديسمبر 1959: القرار الدولي (خلفية)</h4>
                        <p className="text-sm" style={{ color: 'rgba(28, 21, 9, 0.9)' }}>
                            الخلفية الدولية: صدور قرار من الأمم المتحدة يدعو إلى تقرير المصير للشعب الجزائري، وهو ما عزز من موقف الثورة دولياً وشجع الشعب على رفض أي حلول استعمارية.
                        </p>
                    </div>

                    <div className="timeline-item">
                        <h4 className="font-playfair font-bold text-xl" style={{ color: '#868859' }}>ديسمبر 1960: وصول ديغول والتحضير</h4>
                        <p className="text-sm" style={{ color: 'rgba(28, 21, 9, 0.9)' }}>
                            الرئيس الفرنسي شارل ديغول يصل إلى الجزائر في محاولة لفرض رؤيته لمستقبل البلاد ضمن الإطار الفرنسي وإنشاء "القوة الثالثة".
                            التعبئة السرية لجبهة التحرير الوطني (FLN) والقاعدة الشعبية لمواجهة محاولات التضليل والضغط الاستعماري.
                        </p>
                    </div>

                    <div className="timeline-item">
                        <h4 className="font-playfair font-bold text-xl" style={{ color: '#868859' }}>10 ديسمبر 1960: الشرارة الأولى</h4>
                        <p className="text-sm" style={{ color: 'rgba(28, 21, 9, 0.9)' }}>
                            بداية أولى الاحتكاكات والمناوشات بين المتظاهرين الجزائريين وأنصار الاستعمار والمستوطنين، خصوصًا في الأحياء التي تضم تركيزاً عالياً من الأوروبيين، احتجاجاً على زيارة ديغول.
                        </p>
                    </div>

                    <div className="timeline-item">
                        <h4 className="font-playfair font-bold text-xl" style={{ color: '#868859' }}>11 ديسمبر 1960: اندلاع المظاهرات الكبرى</h4>
                        <p className="text-sm" style={{ color: 'rgba(28, 21, 9, 0.9)' }}>
                            موجة عارمة من الاحتجاجات تضرب المدن الرئيسية، خاصة الجزائر العاصمة (الأحياء الشعبية مثل بلكور والمَدَنِي)، مطالبة بالاستقلال الكامل ورافضة لسياسة ديغول.
                            الجماهير ترفع العلم الوطني الجزائري لأول مرة بشكل مكثف في وضح النهار بالمدن، معلنة الدعم المطلق للثورة.
                        </p>
                    </div>

                    <div className="timeline-item">
                        <h4 className="font-playfair font-bold text-xl" style={{ color: '#868859' }}>12-13 ديسمبر 1960: تصاعد القمع</h4>
                        <p className="text-sm" style={{ color: 'rgba(28, 21, 9, 0.9)' }}>
                            القوات الفرنسية تواجه المتظاهرين بقمع وحشي، يسفر عن سقوط العديد من الشهداء والجرحى المدنيين العزل.
                            توسع رقعة المظاهرات لتشمل مدناً أخرى مثل وهران وقسنطينة، مؤكدة على وحدة الصف الوطني.
                        </p>
                    </div>

                    <div className="timeline-item">
                        <h4 className="font-playfair font-bold text-xl" style={{ color: '#868859' }}>أواخر ديسمبر 1960: التأثير السياسي والدولي</h4>
                        <p className="text-sm" style={{ color: 'rgba(28, 21, 9, 0.9)' }}>
                            فشل ديغول في احتواء الأزمة واضطراره لتغيير خطابه السياسي، والتخلي عن دعم "الجزائر فرنسية".
                            ازدياد الدعم العالمي لقضية الجزائر في الأمم المتحدة، وتصاعد عزلة فرنسا الدولية.
                            التحول النهائي نحو حتمية المفاوضات مع الممثل الشرعي الوحيد، مما مهد الطريق لاتفاقيات إيفيان.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center p-6" style={{
                    border: '1px solid #9B9B85',
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                    <h4 className="text-2xl font-playfair font-bold text-center mb-4" style={{ color: '#743014' }}>
                        التحول الجذري
                    </h4>
                    <p className="text-base text-center mb-6" style={{ color: 'rgba(28, 21, 9, 0.9)' }}>
                        كانت مظاهرات 11 ديسمبر 1960 النقطة الفاصلة التي أثبتت أن الشعب موحد وراء الثورة، وغيرت مسار الدبلوماسية الدولية لصالح الجزائر.
                    </p>

                    <h4 className="text-2xl font-playfair font-bold text-center mb-4" style={{ color: '#84592b' }}>
                        التحول في العقلية الجزائرية (كسر حاجز الخوف)
                    </h4>
                    <p className="text-base text-center" style={{ color: 'rgba(28, 21, 9, 0.9)' }}>
                        وحدة الهدف: بعد ست سنوات من الثورة المسلحة، كان هناك نضج شعبي كامل وإيمان مطلق بأن الاستقلال هو الخيار الوحيد. تم تجاوز مرحلة التردد والبحث عن حلول وسط بشكل نهائي.
                        <br /><br />
                        ثقة الشعب في الثورة: أظهرت جبهة التحرير الوطني قدرة هائلة على الصمود العسكري والسياسي، مما منح الجماهير المدنية الثقة لكسر حاجز الخوف والنزول إلى الشوارع في تحدٍ مباشر وعلني لسلطة الاحتلال.
                        <br /><br />
                        استخدام الهوية: شهدت المظاهرات رفع العلم الوطني (الجزائري) بشكل جماهيري ولأول مرة بهذه الكثافة في المدن الكبرى، مما حول المظاهرات إلى استعراض للسيادة الوطنية المنشودة بدلاً من مجرد احتجاج.
                    </p>

                    <div className="tilt-wrapper mt-6">
                        <div className="tilt-grid">
                            <div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div>
                            <div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div>
                            <div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div>
                            <div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div>
                            <div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div>

                            <div className="tilt-image" style={{ border: '1px solid #4D4332' }}>
                                <img src="/images/paix.jpg" alt="خريطة تاريخية" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
