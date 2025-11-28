"use client";

export default function GallerySection() {
    return (
        <>
            <div className="newspaper-divider max-w-7xl mx-auto px-6 lg:px-8"></div>

            <section id="gallery-section" className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16">
                <h2 className="text-4xl font-playfair font-bold text-center mb-10" style={{ color: '#b7957f' }}>
                    معرض الصور والوثائق
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Column 1 */}
                    <div style={{
                        border: '1px solid #4D4332',
                        padding: '0.75rem',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                        backgroundColor: 'white'
                    }}>
                        <div className="tilt-wrapper mb-3">
                            <div className="tilt-grid">
                                <div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div>
                                <div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div>
                                <div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div>
                                <div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div>
                                <div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div>

                                <div className="tilt-image" style={{ border: '1px solid #4D4332' }}>
                                    <img src="/images/protest.jpg" alt="صورة أرشيفية 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                            </div>
                        </div>

                        <h4 className="font-playfair font-semibold text-lg text-center" style={{ color: '#84593d' }}>دوافع المظاهرات:</h4>
                        <p className="text-xs text-right mt-1" style={{ color: 'rgba(28, 21, 9, 0.8)' }}>
                            اندلعت مظاهرات 11 ديسمبر 1960 كرفض قاطع للمناورات الاستعمارية الفرنسية التي سعت لفرض "الجزائر فرنسية" أو حلول إدماجية ناقصة، متجاهلة التضحيات الكبرى للثورة. كان الدافع الأساسي هو الإصرار المطلق للشعب الجزائري على الاستقلال التام والسيادة الوطنية الكاملة، وتقديم دعم شعبي حاسم لجبهة التحرير الوطني، وإسقاط وهم قبول أي "خيار ثالث" بين الاحتلال والحرية.
                            <br /><br />
                            لقد جاءت هذه الانتفاضة الجماهيرية العفوية بالتزامن مع زيارة الرئيس الفرنسي شارل ديغول للجزائر، وكانت بمثابة رد مباشر وصريح على محاولاته لتمرير مشروع "التقسيم والإدماج" وعزل جبهة التحرير الوطني عن قاعدتها الشعبية. كانت المظاهرات رسالة دامغة تؤكد للعالم أن الشعب الجزائري كتلة واحدة خلف الثورة، وأن زمن السيطرة الفرنسية قد ولى إلى غير رجعة، مما حتم على ديغول تغيير خطابه لاحقًا والتوجه نحو المفاوضات الجادة.
                        </p>

                        <div className="tilt-wrapper mt-3">
                            <div className="tilt-grid">
                                <div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div>
                                <div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div>
                                <div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div>
                                <div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div>
                                <div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div>

                                <div className="tilt-image" style={{ border: '1px solid #4D4332' }}>
                                    <img src="/images/pic.jpg" alt="صورة أرشيفية 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div style={{
                        border: '1px solid #4D4332',
                        padding: '0.75rem',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                        backgroundColor: 'white'
                    }}>
                        <div className="tilt-wrapper mb-3">
                            <div className="tilt-grid">
                                <div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div>
                                <div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div>
                                <div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div>
                                <div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div>
                                <div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div>

                                <div className="tilt-image" style={{ border: '1px solid #4D4332' }}>
                                    <img src="/images/cruel.jpg" alt="صورة أرشيفية 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                            </div>
                        </div>

                        <h4 className="font-playfair font-semibold text-lg text-center" style={{ color: '#84593d' }}>من سجلات حرب التحرير المجيدة:</h4>
                        <p className="text-xs text-right mt-1" style={{ color: 'rgba(28, 21, 9, 0.8)' }}>
                            رغم أن مظاهرات 11 ديسمبر 1960 كانت عملاً شعبياً سلمياً في المدن، إلا أن هذه الصورة تذكرنا بالثمن الباهظ الذي دفعته الجزائر، حيث تشكل هذه المشاهد خلفية دامية لا تنفصل عن المطالبة بالاستقلال. إن دلالة هذه الصورة في السرد الوطني تكمن في النقاط التالية:
                            <br /><br />
                            ثمن الاستقلال: هي دليل قاطع على حجم التضحيات الجسيمة التي قدمها الثوار الأبطال في الجبال والقرى، وهي تضحيات عززت موقف المتظاهرين في 11 ديسمبر وجعلت مطلبهم بالاستقلال حقيقة لا يمكن تجاهلها.
                            <br /><br />
                            فضح جرائم الاحتلال: تُعد الصورة وثيقة تاريخية تدين ممارسات الجيش الفرنسي ضد الشعب الجزائري، وتؤكد على أن الرد الاستعماري على كل أشكال النضال، سواء كان سلمياً في المدن أو عسكرياً في الجبال، كان يتمثل في القمع والقتل الممنهج.
                            <br /><br />
                            إلهام الأجيال: تظل هذه الصور تذكيراً لأجيال الجزائر بأن الحرية لم تُهدَ، بل افتُكت بدماء طاهرة.
                        </p>

                        <div className="tilt-wrapper mt-3">
                            <div className="tilt-grid">
                                <div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div>
                                <div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div>
                                <div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div>
                                <div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div>
                                <div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div>

                                <div className="tilt-image" style={{ border: '1px solid #4D4332' }}>
                                    <img src="/images/gloire.jpg" alt="صورة أرشيفية 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div style={{
                        border: '1px solid #4D4332',
                        padding: '0.75rem',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                        backgroundColor: 'white'
                    }}>
                        <div className="tilt-wrapper mb-3">
                            <div className="tilt-grid">
                                <div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div>
                                <div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div>
                                <div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div>
                                <div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div>
                                <div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div>

                                <div className="tilt-image" style={{ border: '1px solid #4D4332' }}>
                                    <img src="/images/yes.png" alt="صورة أرشيفية 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                            </div>
                        </div>

                        <h4 className="font-playfair font-semibold text-lg text-center" style={{ color: '#84593d' }}>النتائج الحاسمة والتأثيرات الممتدة:</h4>
                        <p className="text-xs text-right mt-1" style={{ color: 'rgba(28, 21, 9, 0.8)' }}>
                            كانت عواقب مظاهرات 11 ديسمبر 1960 فاصلة ولا رجعة فيها. فقد ألزمت هذه الانتفاضة الشعبية الحكومة الفرنسية بالاعتراف بفشل مشروعها الإدماجي وشرعية جبهة التحرير الوطني كممثل أوحد للشعب. دولياً، حظيت القضية الجزائرية بدعم هائل من الأمم المتحدة والمحافل الدولية، مما وضع فرنسا في عزلة سياسية. والأهم، أنها عجلت بشكل مباشر بفتح باب المفاوضات الجادة التي أفضت لاحقاً إلى اتفاقيات إيفيان وإعلان الاستقلال عام 1962، مؤكدة أن الإرادة الشعبية هي التي حسمت مصير الأمة.
                            <br /><br />
                            ملخص النتائج المبرزة:
                            <br />
                            اعتراف فرنسا بالفشل: إجبار الحكومة الفرنسية على الاعتراف بفشل مخططاتها.
                            <br />
                            تعزيز شرعية FLN: تثبيت شرعية جبهة التحرير الوطني دولياً وداخلياً.
                            <br />
                            الدعم الدولي: كسب دعم الأمم المتحدة والمحافل الدولية.
                            <br />
                            التعجيل بالاستقلال: التسريع بفتح المفاوضات التي أدت إلى اتفاقيات إيفيان والاستقلال النهائي.
                        </p>

                        <div className="tilt-wrapper mt-3">
                            <div className="tilt-grid">
                                <div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div>
                                <div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div>
                                <div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div>
                                <div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div>
                                <div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div>

                                <div className="tilt-image" style={{ border: '1px solid #4D4332' }}>
                                    <img src="/images/pace.jpg" alt="صورة أرشيفية 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
