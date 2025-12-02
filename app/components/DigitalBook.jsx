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
                            من يوميات شهيد جزائري
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <div className="board" id="board">
                            <div className="board-text">
                                <span style={{ display: 'block', textAlign: 'center' }}><br />
                                    المكان: الجزائر العاصمة، قلب الشارع.<br />
                                    <span style={{ display: 'block', textAlign: 'center' }}>
                                        الزمن: العصر، قبيل مغيب شمس العزة.
                                        <br />
                                        لم أكن أعلم أن الحناجر يمكن أن تحمل كل هذا النور.
                                        <br />
                                        الهواء هنا ليس هواء، إنه مزيج من الدخان والصراخ، ورائحة البارود، وشيء أقدس من كل ذلك: رائحة الجزائر وهي تسترد أنفاسها. منذ الفجر، ونحن نتدفق. لم نخرج لنتظاهر،
                                        خرجنا لنؤكد أننا أحياء، وأن هذا التراب لنا.

                                        كنت أرى الإيمان في عيون النساء اللواتي تقدمن الصفوف، يرفعن أعلاماً خيّطت بالسر، كأنهن يحملن النجوم بين أيديهن. الهتاف يمزق السكون: "تحيا الجزائر حرة!" كانت صيحة واحدة، لكنها حملت صوت مليون ونصف شهيد من قبلنا. شعرتُ حينها أن كل من سقط عاد ليقف بجانبنا اليوم.

                                        أصواتهم الآن قريبة، زيهم الغريب يتقدم ببطء، يحملون العنف في نظراتهم. نعم، هم يملكون البنادق، ونحن لا نملك إلا صدورنا وأعلامنا. لكن الفرق شاسع: بندقيتهم تخفي خوفاً، وصدورنا تخفي وطناً.
                                        <br />
                                        أشعر ببرودة الرصاص الذي بدأ ينثر حولنا، لكن العرق الذي يبلل جبهتي هو عرق الخجل لو أنني لم أخرج.
                                        <br />
                                        قد لا أعود لأرى شمس الغد. قد يُغلق هذا الدفتر على هذا السطر. فليكن! إذا سقطت، فاعلموا يا أبناء جيلي والأجيال القادمة، أنني لم أمت، بل أصبحت جزءاً من الأرض التي قاتلتُ لأجلها.
                                        <br />
                                        رسالتي الأخيرة:
                                        <br />
                                        الحرية لم تكن حبراً على ورق، بل كانت دماً يُسفك في سبيل الكرامة. لا تدعوا الشجرة التي ارتوت اليوم تجف غداً.  <br />حافظوا على الأمانة. لا تنسوا ضحكات اليوم، ولا دموعه، ولا صرخاته.

                                        أنا ذاهب لأكون شاهداً، فكونوا أنتم الورثة الصادقين.

                                        وداعاً أيها الدفتر الشاهد. وداعاً يا وطني، أنت الآن في القلب لا في الأوراق.
                                        <br />
                                        الله أكبر.
                                    </span>
                                </span>
                            </div>

                            <button className="note" style={{ '--x': '14%', '--y': '23%', '--r': '-12deg' }} aria-label="Journal Page">
                                <img src="/images/photo1.jpg" alt="يوميات شهيد" />
                            </button>

                            <button className="note" style={{ '--x': '89%', '--y': '23%', '--r': '8deg' }} aria-label="Protest Crowd">
                                <img src="/images/photo2.jpg" alt="مظاهرات" />
                            </button>

                            <button className="note" style={{ '--x': '87%', '--y': '76%', '--r': '8deg' }} aria-label="Protest">
                                <img src="/images/photo6.jpg" alt="مظاهرات" />
                            </button>

                            <button className="note" style={{ '--x': '14%', '--y': '76%', '--r': '-12deg' }} aria-label="Journal Page">
                                <img src="/images/photo5.jpg" alt="يوميات شهيد" />
                            </button>

                            <button className="note" style={{ '--x': '14%', '--y': '48%', '--r': '8deg' }} aria-label="Document">
                                <img src="/images/photo3.jpg" alt="وثيقة" />
                            </button>

                            <button className="note" style={{ '--x': '86%', '--y': '48%', '--r': '-12deg' }} aria-label="Victory">
                                <img src="/images/photo4.jpg" alt="الانتصار" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
