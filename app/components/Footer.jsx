// app/components/Footer.jsx

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-gray-300 pt-10 pb-6">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* القسم الأيسر — معلومات الموقع */}
                <div className="space-y-4">
                    <h4 className="text-white font-semibold text-lg">أرشيف 11 ديسمبر</h4>
                    <p className="text-sm">
                        موقع أرشيفي يوثّق مظاهرات 11 ديسمبر 1960، ويضم مصادر تاريخية، صوراً، شهادات، وتحليلات لتلك اللحظة الحاسمة في تاريخ الجزائر.
                    </p>
                </div>

                {/* القسم الأوسط — روابط الموقع */}
                <div className="space-y-2">
                    <h5 className="text-white font-medium">روابط سريعة</h5>
                    <ul className="space-y-1">
                        <li>
                            <Link href="/" className="hover:text-white transition">الصفحة الرئيسية</Link>
                        </li>
                        <li>
                            <Link href="/timeline" className="hover:text-white transition">الخط الزمني</Link>
                        </li>
                        <li>
                            <Link href="/gallery" className="hover:text-white transition">معرض الصور</Link>
                        </li>
                        <li>
                            <Link href="/documents" className="hover:text-white transition">وثائق</Link>
                        </li>
                        <li>
                            <Link href="/testimonies" className="hover:text-white transition">شهادات</Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-white transition">حول الموقع</Link>
                        </li>
                    </ul>
                </div>

                {/* القسم الأيمن — تواصل / حقوق نشر */}
                <div className="space-y-4">
                    <h5 className="text-white font-medium">تواصل معنا</h5>
                    <p className="text-sm">
                        إذا لديك صور أرشيفية، شهادات، أو وثائق، تواصل معنا لتضمينها في الأرشيف.
                    </p>
                    <Link href="/contact" className="inline-block px-4 py-2 bg-red-800 hover:bg-red-900 text-white text-sm rounded-md transition">
                        أرسل رسالة
                    </Link>

                    <p className="text-xs mt-4">
                        © {new Date().getFullYear()} أرشيف 11 ديسمبر. جميع الحقوق محفوظة.
                    </p>
                </div>
            </div>
        </footer>
    );
}
