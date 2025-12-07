"use client";

import { useEffect } from 'react';

export default function DigitalBook() {
    useEffect(() => {
        // Touch-friendliness for the Whiteboard
        const notes = document.querySelectorAll('.note');

        function isTouch() {
            return ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
        }

        if (!isTouch()) return;

        notes.forEach(n => {
            n.addEventListener('touchstart', e => {
                notes.forEach(x => x.classList.remove('hover-touch'));
                n.classList.add('hover-touch');
                e.stopPropagation();
            }, { passive: true });
        });

        document.addEventListener('touchstart', () => {
            notes.forEach(x => x.classList.remove('hover-touch'));
        }, { passive: true });
    }, []);

    return (
        <section id="article" className="px-6 lg:px-8 py-12">
            <div className="max-w-7xl mx-auto">
                <div style={{
                    border: '4px solid #4D4332',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    padding: '1.5rem',
                    backgroundColor: 'rgba(19, 18, 18, 0.5)',
                    position: 'relative',
                    height: 'auto',
                    paddingBottom: '3rem'
                }}>
                    <div className="text-center mb-8">
                        <h3 className="font-playfair font-bold text-3xl mb-2" style={{ color: '#4D4332' }}>
                            الكتاب الرقمي: لمحة من الماضي
                        </h3>
                        <p className="font-playfair font-medium text-xl" style={{ color: 'rgba(28, 21, 9, 0.8)' }}>

                            <br />  مظاهرات 11 ديسمبر 1960 بين إنقاذ الثورة
                            <br /> والقضاء على مخططات ديغول الكاتب: ذياب هشام
                        </p>
                    </div>

                    <div className="flex  text-right justify-center">
                        <div className="board" id="board">
                            <div className="board-text">
                                <span style={{ display: 'block', textAlign: 'center' }}><br />
                                    مظاهرات 11 ديسمبر 1960 ودورها في تقرير مصير<br />
                                    القضية الجزائرية<br />
                                    <span style={{ display: 'block', textAlign: 'center' }}>

                                        مظاهرات 11 ديسمبر 1960 ودورها في تقرير مصير
                                        القضية الجزائرية الملخص: كان من أهداف بيان
                                        أوّل نوفمبر تدويل القضية الجزائرية، كما أكّد
                                        قادة الثورة على رغبتهم في السلم حيث دعا بيان
                                        أوّل نوفمبر الفرنسيين إلى التفاوض على أساس
                                        الاعتراف بالسيادة الوطنية ووحدة التراب والأمة
                                        والشعب الجزائري. لكن فرنسا رفضت وجنّدت
                                        الحكومات المتعاقبة كل إمكانياتها المادية
                                        والبشرية للقضاء على الثورة، كما استعانت بقوات
                                        الحلف الأطلسي لكنها فشلت.
                                        <br />
                                        استنجد الفرنسيون بالجنرال ديغول سنة 1958
                                        للحفاظ على “الجزائر الفرنسية”. رغم الجهود
                                        الدبلوماسية للوفد الخارجي لجبهة التحرير الوطني
                                        والحكومة المؤقتة، كان الدعم الدولي ضعيفاً إلى
                                        غاية 1959. إثر زيارة ديغول إلى الجزائر يوم 09
                                        ديسمبر 1960، خرج الجزائريون في مظاهرات عارمة
                                        غطت مختلف المدن، وحظيت بتغطية إعلامية واسعة،
                                        وكانت بمثابة استفتاء شعبي أكد تمسك الشعب
                                        بالاستقلال وقضى على مشاريع ديغول وأنصار
                                        الجزائر الفرنسية.

                                        <br />
                                        دفعت هذه المظاهرات عدّة دول للاعتراف بالحكومة
                                        المؤقتة، وفتحت آفاقاً دبلوماسية جديدة، وأصدرت
                                        الأمم المتحدة القرار رقم 1514 بتاريخ 20 ديسمبر
                                        1960 الذي ينص على حق الشعب الجزائري في تقرير
                                        مصيره وإجراء استفتاء تحت إشراف الأمم المتحدة.


                                    </span>
                                </span>
                            </div>

                            <button className="note" style={{ '--x': '14%', '--y': '23%', '--r': '-12deg' }} aria-label="Journal Page">
                                <img src="/images/str2.jpg" alt="يوميات شهيد" />
                            </button>

                            <button className="note" style={{ '--x': '89%', '--y': '23%', '--r': '8deg' }} aria-label="Protest Crowd">
                                <img src="/images/str3.jpg" alt="مظاهرات" />
                            </button>

                            <button className="note" style={{ '--x': '87%', '--y': '76%', '--r': '8deg' }} aria-label="Protest">
                                <img src="/pic/id4.jpg" alt="مظاهرات" />
                            </button>

                            <button className="note" style={{ '--x': '14%', '--y': '76%', '--r': '-12deg' }} aria-label="Journal Page">
                                <img src="/images/str5.jpg" alt="يوميات شهيد" />
                            </button>

                            <button className="note" style={{ '--x': '14%', '--y': '48%', '--r': '8deg' }} aria-label="Document">
                                <img src="/images/str4.jpg" alt="وثيقة" />
                            </button>

                            <button className="note" style={{ '--x': '86%', '--y': '48%', '--r': '-12deg' }} aria-label="Victory">
                                <img src="/pic/id1.jpg" alt="الانتصار" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
