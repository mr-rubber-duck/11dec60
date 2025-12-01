"use client";

export default function NewspaperHeader() {
    return (
        <section id="hero-header" className="max-w-7xl mx-auto px-6 lg:px-8 pt-4">
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '0.75rem',
                fontFamily: 'Roboto Slab, serif',
                borderBottom: '2px solid #1C1509',
                paddingBottom: '0.25rem'
            }}>
                <div className="text-right font-playfair text-base font-bold" style={{ color: '#84592b' }}>
                    ملحمة شعب أراد الحياة
                </div>
                <div className="text-center font-playfair text-base font-bold" style={{ color: '#4D4332' }}>
                    ALGERIA, SUNDAY, DECEMBER 11, 1960
                </div>
                <div className="text-left font-playfair text-base font-bold" style={{ color: '#868859' }}>
                    DIGITAL ARTICLE
                </div>
            </div>

            <div className="text-center my-4 pb-4" style={{ borderBottom: '1px solid #9B9B85' }}>
                <h1 className="heading-shadow font-playfair" style={{
                    fontSize: 'clamp(3rem, 8vw, 6rem)',
                    fontWeight: 900,
                    color: '#84593d',
                    marginBottom: '1rem'
                }}>
                    مظاهرات 11 ديسمبر 1960
                </h1>

                <p className="font-playfair" style={{
                    fontSize: 'clamp(1.25rem, 3vw, 1.875rem)',
                    marginTop: '0.5rem',
                    color: '#1C1509'
                }}>
                    عندما اختار الجزائريون سلوك درب الحرية والطرْق على بابها، كانوا على يقين، كما قال أحمد شوقي بأنّ:
                </p>

                <p className="font-playfair italic" style={{
                    fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                    fontWeight: 700,
                    marginTop: '1rem',
                    marginBottom: '1rem',
                    color: '#868859'
                }}>
                    "للحرية الحمراء باب   بكلّ يد مضرجة يدقٌّ"
                </p>

                <p className="text-base mt-1" style={{ color: '#ffffffff' }}>
                    "تُعدّ مظاهرات 11 ديسمبر 1960 المجيدة، محطة حاسمة وفارقة في تاريخ الكفاح الوطني، ومسمارًا أخيرًا في وضع حد لمشروع الاحتلال الفرنسي الذي جثم على أرضنا أكثر من قرن. لقد كانت هذه الانتفاضة الشعبية العارمة، التي عمت شوارع الجزائر العاصمة وكبرى المدن، تعبيرًا لا لبس فيه عن الإرادة المطلقة للشعب الجزائري في افتكاك حريته واسترداد سيادته كاملة غير منقوصة.
                    <br /><br />
                    لقد أسقطت هذه المظاهرات، التي واجهت وحشية استعمارية مطولة، كل الأوهام التي كان يراهن عليها جنرالات فرنسا وعلى رأسهم ديغول؛ حيث بددت محاولاته اليائسة لفرض حلول استعمارية جزئية، وأثبتت للعالم أن خيار الشعب الجزائري الوحيد هو الاستقلال التام والسيادة الوطنية. لم تكن هذه الأحداث مجرد 'تحول' بل كانت تتويجًا لتضحيات سنوات طويلة، وأعلنت بداية العد التنازلي لإجبار فرنسا على الاعتراف بحقيقة انتصار الثورة."
                </p>
            </div>
        </section>
    );
}
