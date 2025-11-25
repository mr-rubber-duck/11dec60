import Image from "next/image";
import Link from "next/link";

export default function AboutSnapshot() {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* النص */}
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold   text-right text-red-800 dark:text-red-400">
                        لمحة عن 11 ديسمبر 1960
                    </h2>
                    <p className="text-lg text-gray-700 text-right dark:text-gray-300">
                        في 11 ديسمبر 1960، اجتاحت المظاهرات شوارع الجزائر، لتكون واحدة من أقوى
                        التعبيرات الجماعية للمطالبة بالاستقلال. كان هذا اليوم نقطة تحول في المقاومة
                        النضالية وساهم بشكل كبير في تأجيج القضية الجزائرية أمام العالم

                    </p>
                    <p className="text-base text-gray-600 text-right dark:text-gray-400">

                        خرج آلاف الجزائريين في مسيرات سلمية تحمل شعارات الحرية والكرامة،
                        وجّهوا رسالة واضحة للعالم أن الشعب الجزائري لن يستسلم للاستعمار، وأن حقه في تقرير مصيره لا بديل عنه



                    </p>


                </div>


                <div className="relative w-full h-64 md:h-96">
                    <Image
                        src="/pic/id1.jpg"
                        alt="مظاهرات 11 ديسمبر 1960"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md shadow-lg"
                    />
                </div>
                            {/*poster number 2 */}

                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-right text-red-800 dark:text-red-400">
                        أسباب المظاهرات
                    </h2>
                    <p className="text-lg text-gray-700 text-right dark:text-gray-300">
                        وجاءت هذه المظاهرات التي أرادها الشعب الجزائري، سلمية، حيث خرج فيها  الجزائريون لتأكيد رفضهم  لسياسة الجنرال شارلديغول الرامية إلى الإبقاء على  الجزائر جزء من فرنسا  وضد حلم المعمرين الفرنسيين الهادف إلى ترسيخ وتجسيد فكرة الجزائرفرنسية، بيد أن سلمية المتظاهرين الجزائريين في جميع أحياءالعاصمة الجزائر وعديد المدن والقرى الجزائرية  قابلها قمعالسلطات الاستعمارية بوحشية مما أدى إلى سقوط العديد من الشهداء.


                    </p>
                    {/*<p className="text-base text-gray-600 text-right dark:text-gray-400">*/}
                    {/*    خرج آلاف الجزائريين في مسيرات سلمية تحمل شعارات الحرية والكرامة، وجّهوا رسالة واضحة للعالم*/}
                    {/*    أن الشعب الجزائري لن يستسلم للاستعمار، وأن حقه في تقرير مصيره لا يلغي.*/}
                    {/*</p>*/}


                </div>


                <div className="relative w-full h-64 md:h-96">
                    <Image
                        src="/pic/id2.jpg"
                        alt="مظاهرات"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md shadow-lg"
                    />
                </div>



            </div>
        </section>
    );
}
