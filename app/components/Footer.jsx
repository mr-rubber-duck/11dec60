"use client";

import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Right Section - Contact */}
                <div className="footer-section">
                    <h5 className="footer-heading">تواصل معنا</h5>
                    <p className="footer-text">
                        إذا لديك صور أرشيفية، شهادات، أو وثائق، تواصل معنا لتضمينها في الأرشيف.
                        نحن نسعى لتوثيق كل لحظة من هذا اليوم التاريخي.
                    </p>
                    <Link href="/contact" className="contact-btn">
                        <Mail size={16} />
                        تواصل مع المطور
                    </Link>
                </div>

                {/* Middle Section - Links */}
                <div className="footer-section">
                    <h5 className="footer-heading">روابط سريعة</h5>
                    <ul className="footer-links">
                        <li>
                            <Link href="/" className="footer-link">الصفحة الرئيسية</Link>
                        </li>
                        <li>
                            <Link href="/story" className="footer-link">القصة</Link></li>
                        <li>
                            <Link href="/docementry" className="footer-link">الوثائقي</Link>
                        </li>

                        <li>
                            <Link href="/gallery" className="footer-link">معرض الصور</Link>
                        </li>
                        <li>
                            <Link href="/chat" className="footer-link">الدردشة</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="footer-link">المطور</Link>
                        </li>
                    </ul>
                </div>

                {/* Left Section - About */}
                <div className="footer-section">
                    <h4 className="footer-brand">أرشيف 11 ديسمبر</h4>
                    <p className="footer-text">
                        موقع أرشيفي يوثّق مظاهرات 11 ديسمبر 1960، ويضم مصادر تاريخية، صوراً، شهادات، وتحليلات لتلك اللحظة الحاسمة في تاريخ الجزائر.
                        هذا المشروع هو محاولة للحفاظ على الذاكرة الجماعية.
                    </p>
                    <div className="footer-copyright">
                        <p className="copyright-text">
                            © {new Date().getFullYear()} أرشيف 11 ديسمبر. جميع الحقوق محفوظة.
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .footer {
                    background-color: #0f0f0f;
                    border-top: 1px solid rgba(139, 38, 53, 0.3);
                    text-align: right;
                    color: #8a8a8a;
                    padding: 3rem 0 1.5rem;
                }
                
                .footer-container {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1.5rem;
                }
                
                .footer-section {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                
                .footer-heading {
                    font-family: 'Playfair Display', serif;
                    color: #f5f5f5;
                    font-weight: bold;
                    font-size: 1.125rem;
                    margin: 0;
                }
                
                .footer-brand {
                    font-family: 'Playfair Display', serif;
                    color: #f5f5f5;
                    font-weight: bold;
                    font-size: 1.25rem;
                    margin: 0;
                }
                
                .footer-text {
                    font-size: 0.875rem;
                    line-height: 1.75;
                    color: #c4c4c4;
                    margin: 0;
                }
                
                .footer-links {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 0.625rem;
                }
                
                .footer-copyright {
                    padding-top: 0.75rem;
                    border-top: 1px solid rgba(139, 38, 53, 0.2);
                    margin-top: auto;
                }
                
                .copyright-text {
                    font-size: 0.75rem;
                    color: #8a8a8a;
                    margin: 0;
                }
                
                /* Tablet */
                @media (max-width: 768px) {
                    .footer {
                        padding: 2rem 0 1.25rem;
                    }
                    
                    .footer-container {
                        grid-template-columns: 1fr;
                        gap: 1.5rem;
                        padding: 0 1rem;
                    }
                    
                    .footer-section {
                        text-align: center;
                        align-items: center;
                    }
                }
                
                /* Mobile */
                @media (max-width: 480px) {
                    .footer {
                        padding: 1.5rem 0 1rem;
                    }
                    
                    .footer-container {
                        gap: 1.25rem;
                        padding: 0 0.75rem;
                    }
                    
                    .footer-heading {
                        font-size: 1rem;
                    }
                    
                    .footer-brand {
                        font-size: 1.1rem;
                    }
                    
                    .footer-text {
                        font-size: 0.8rem;
                    }
                    
                    .copyright-text {
                        font-size: 0.7rem;
                    }
                }
            `}</style>

            <style jsx global>{`
                .contact-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.75rem 1.5rem;
                    background: linear-gradient(135deg, #8b2635 0%, #6b1e2a 100%);
                    color: #f5f5f5;
                    font-size: 0.875rem;
                    font-weight: 500;
                    border-radius: 0.5rem;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 6px rgba(139, 38, 53, 0.15);
                    text-decoration: none;
                    width: fit-content;
                }
                
                .contact-btn:hover {
                    background: linear-gradient(135deg, #a63446 0%, #8b2635 100%);
                    box-shadow: 0 6px 12px rgba(139, 38, 53, 0.25);
                    transform: translateY(-2px);
                }
                
                .footer-link {
                    color: #c4c4c4;
                    transition: color 0.3s ease;
                    display: block;
                    text-decoration: none;
                }
                
                .footer-link:hover {
                    color: #a63446;
                    text-decoration: underline;
                }
                
                @media (max-width: 768px) {
                    .contact-btn {
                        padding: 0.625rem 1.25rem;
                        font-size: 0.8rem;
                    }
                }
                
                @media (max-width: 480px) {
                    .contact-btn {
                        padding: 0.5rem 1rem;
                        font-size: 0.75rem;
                    }
                }
            `}</style>
        </footer>
    );
}
