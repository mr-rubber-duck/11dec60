"use client";
import Image from "next/image";
import styles from './AboutSnapshot.module.css';

export default function AboutSnapshot() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                {/* القسم الأول: صورة على اليمين، نص على اليسار */}
                <div className={styles.aboutRow}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/pic/id1.jpg"
                            alt="مظاهرات 11 ديسمبر 1960"
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                    </div>
                    <div className={styles.textContent}>
                        <h2 className={styles.heading}>لمحة عن 11 ديسمبر 1960</h2>
                        <div className={styles.newspaperDivider}></div>
                        <p>
                            في 11 ديسمبر 1960، اجتاحت المظاهرات شوارع الجزائر، لتكون واحدة من أقوى
                            التعبيرات الجماعية للمطالبة بالاستقلال. كان هذا اليوم نقطة تحول في المقاومة
                            النضالية وساهم بشكل كبير في تأجيج القضية الجزائرية أمام العالم.
                        </p>
                        <p>
                            خرج آلاف الجزائريين في مسيرات سلمية تحمل شعارات الحرية والكرامة،
                            وجّهوا رسالة واضحة للعالم أن الشعب الجزائري لن يستسلم للاستعمار، وأن حقه في تقرير مصيره لا بديل عنه.
                        </p>
                    </div>
                </div>

                {/* القسم الثاني: نص على اليمين، صورة على اليسار */}
                <div className={styles.aboutRowReverse}>
                    <div className={styles.textContent}>
                        <h2 className={styles.heading}>أسباب المظاهرات</h2>
                        <div className={styles.newspaperDivider}></div>
                        <p>
                            وجاءت هذه المظاهرات التي أرادها الشعب الجزائري، سلمية، حيث خرج فيها الجزائريون لتأكيد رفضهم لسياسة الجنرال شارل ديغول الرامية إلى الإبقاء على الجزائر جزء من فرنسا وضد حلم المعمرين الفرنسيين الهادف إلى ترسيخ وتجسيد فكرة الجزائر فرنسية.
                            <br /><br />
                            بيد أن سلمية المتظاهرين الجزائريين في جميع أحياء العاصمة الجزائر وعديد المدن والقرى الجزائرية قابلها قمع السلطات الاستعمارية بوحشية مما أدى إلى سقوط العديد من الشهداء.
                        </p>
                    </div>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/pic/id2.jpg"
                            alt="المظاهرات السلمية"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>
                {/* poster3  */}



                {/* القسم الأول: صورة على اليمين، نص على اليسار */}
                <div className={styles.aboutRow}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/pic/id1.jpg"
                            alt="مظاهرات 11 ديسمبر 1960"
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                    </div>
                    <div className={styles.textContent}>
                        <h2 className={styles.heading}>لمحة عن 11 ديسمبر 1960</h2>
                        <div className={styles.newspaperDivider}></div>
                        <p>
                            في 11 ديسمبر 1960، اجتاحت المظاهرات شوارع الجزائر، لتكون واحدة من أقوى
                            التعبيرات الجماعية للمطالبة بالاستقلال. كان هذا اليوم نقطة تحول في المقاومة
                            النضالية وساهم بشكل كبير في تأجيج القضية الجزائرية أمام العالم.
                        </p>
                        <p>
                            خرج آلاف الجزائريين في مسيرات سلمية تحمل شعارات الحرية والكرامة،
                            وجّهوا رسالة واضحة للعالم أن الشعب الجزائري لن يستسلم للاستعمار، وأن حقه في تقرير مصيره لا بديل عنه.
                        </p>
                    </div>
                </div>

                {/* poster4  */}
                <div className={styles.aboutRowReverse}>
                    <div className={styles.textContent}>
                        <h2 className={styles.heading}>أسباب المظاهرات</h2>
                        <div className={styles.newspaperDivider}></div>
                        <p>
                            وجاءت هذه المظاهرات التي أرادها الشعب الجزائري، سلمية، حيث خرج فيها الجزائريون لتأكيد رفضهم لسياسة الجنرال شارل ديغول الرامية إلى الإبقاء على الجزائر جزء من فرنسا وضد حلم المعمرين الفرنسيين الهادف إلى ترسيخ وتجسيد فكرة الجزائر فرنسية.
                            <br /><br />
                            بيد أن سلمية المتظاهرين الجزائريين في جميع أحياء العاصمة الجزائر وعديد المدن والقرى الجزائرية قابلها قمع السلطات الاستعمارية بوحشية مما أدى إلى سقوط العديد من الشهداء.
                        </p>
                    </div>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/pic/id2.jpg"
                            alt="المظاهرات السلمية"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
