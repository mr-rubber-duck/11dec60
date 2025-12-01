"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer style={{
            backgroundColor: '#0f0f0f',
            borderTop: '1px solid rgba(139, 38, 53, 0.3)',
            textAlign: 'right',
            color: '#8a8a8a',
            paddingTop: '4rem',
            paddingBottom: '2rem'
        }}>
            <div className="grid" style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 1.5rem',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '3rem'
            }}>

                {/* Right Section - Contact */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <h5 className="font-playfair" style={{
                        color: '#f5f5f5',
                        fontWeight: 'bold',
                        fontSize: '1.125rem'
                    }}>تواصل معنا</h5>
                    <p style={{
                        fontSize: '0.875rem',
                        lineHeight: '1.75',
                        color: '#c4c4c4'
                    }}>
                        إذا لديك صور أرشيفية، شهادات، أو وثائق، تواصل معنا لتضمينها في الأرشيف.
                        نحن نسعى لتوثيق كل لحظة من هذا اليوم التاريخي.
                    </p>
                    <Link
                        href="/contact"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.75rem 1.5rem',
                            background: 'linear-gradient(135deg, #8b2635 0%, #6b1e2a 100%)',
                            color: '#f5f5f5',
                            fontSize: '0.875rem',
                            fontWeight: 500,
                            borderRadius: '0.5rem',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 6px rgba(139, 38, 53, 0.15)',
                            textDecoration: 'none',
                            width: 'fit-content'
                        }}
                        className="contact-btn"
                    >
                        <Mail size={16} />
                        أرسل رسالة
                    </Link>
                </div>

                {/* Middle Section - Links */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <h5 className="font-playfair" style={{
                        color: '#f5f5f5',
                        fontWeight: 'bold',
                        fontSize: '1.125rem'
                    }}>روابط سريعة</h5>
                    <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.75rem'
                    }}>
                        <li>
                            <Link href="/" className="footer-link" style={{
                                color: '#c4c4c4',
                                transition: 'color 0.3s ease',
                                display: 'block'
                            }}>الصفحة الرئيسية</Link>
                        </li>
                        <li>
                            <Link href="/timeline" className="footer-link" style={{
                                color: '#c4c4c4',
                                transition: 'color 0.3s ease',
                                display: 'block'
                            }}>الخط الزمني</Link>
                        </li>
                        <li>
                            <Link href="/gallery" className="footer-link" style={{
                                color: '#c4c4c4',
                                transition: 'color 0.3s ease',
                                display: 'block'
                            }}>معرض الصور</Link>
                        </li>
                        <li>
                            <Link href="/documents" className="footer-link" style={{
                                color: '#c4c4c4',
                                transition: 'color 0.3s ease',
                                display: 'block'
                            }}>وثائق</Link>
                        </li>
                        <li>
                            <Link href="/testimonies" className="footer-link" style={{
                                color: '#c4c4c4',
                                transition: 'color 0.3s ease',
                                display: 'block'
                            }}>شهادات</Link>
                        </li>
                        <li>
                            <Link href="/about" className="footer-link" style={{
                                color: '#c4c4c4',
                                transition: 'color 0.3s ease',
                                display: 'block'
                            }}>حول الموقع</Link>
                        </li>
                    </ul>
                </div>

                {/* Left Section - About */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <h4 className="font-playfair" style={{
                        color: '#f5f5f5',
                        fontWeight: 'bold',
                        fontSize: '1.25rem'
                    }}>أرشيف 11 ديسمبر</h4>
                    <p style={{
                        fontSize: '0.875rem',
                        lineHeight: '1.75',
                        color: '#c4c4c4'
                    }}>
                        موقع أرشيفي يوثّق مظاهرات 11 ديسمبر 1960، ويضم مصادر تاريخية، صوراً، شهادات، وتحليلات لتلك اللحظة الحاسمة في تاريخ الجزائر.
                        هذا المشروع هو محاولة للحفاظ على الذاكرة الجماعية.
                    </p>
                    <div style={{
                        paddingTop: '1rem',
                        borderTop: '1px solid rgba(139, 38, 53, 0.2)'
                    }}>
                        <p style={{
                            fontSize: '0.75rem',
                            color: '#8a8a8a'
                        }}>
                            © {new Date().getFullYear()} أرشيف 11 ديسمبر. جميع الحقوق محفوظة.
                        </p>
                    </div>
                </div>

            </div>

            <style jsx global>{`
                .footer-link:hover {
                    color: #a63446 !important;
                    text-decoration: underline;
                }
                .contact-btn:hover {
                    background: linear-gradient(135deg, #a63446 0%, #8b2635 100%) !important;
                    box-shadow: 0 6px 12px rgba(139, 38, 53, 0.25) !important;
                    transform: translateY(-2px);
                }
            `}</style>
        </footer>
    );
}
