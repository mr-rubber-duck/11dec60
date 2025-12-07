'use client'

import { Github, Linkedin, Globe } from 'lucide-react'
import Footer from '../components/Footer'

export default function Contact() {
    return (
        <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
            <section className="section">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '3rem' }}>
                        <h1 className="heading">تواصل معنا</h1>
                        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
                            يمكنكم التواصل معنا ومتابعة آخر المستجدات عبر منصاتنا الرسمية.
                        </p>
                        <div className="newspaper-divider" style={{ margin: '1.5rem auto', width: '80px' }}></div>
                    </div>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '3rem',
                        flexWrap: 'wrap',
                        marginTop: '2rem'
                    }}>
                        {/* GitHub */}
                        <a href="https://github.com/mr-rubber-duck" target="_blank" rel="noopener noreferrer" className="social-card">
                            <div className="icon-wrapper">
                                <Github size={64} strokeWidth={1.5} />
                            </div>
                            <h3>GitHub</h3>
                        </a>

                        {/* LinkedIn */}
                        {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-card">
                            <div className="icon-wrapper">
                                <Linkedin size={64} strokeWidth={1.5} />
                            </div>
                            <h3>LinkedIn</h3>
                        </a> */}

                        {/* Official Website */}
                        <a href="https://linktr.ee/TahaAmine.L" target="_blank" rel="noopener noreferrer" className="social-card">
                            <div className="icon-wrapper">
                                <Globe size={64} strokeWidth={1.5} />
                            </div>
                            <h3>الروابط الرسمية </h3>
                        </a>
                    </div>
                </div>

            </section>
            <Footer />
            <style jsx>{`
                .social-card {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background-color: var(--bg-secondary);
                    border: 1px solid var(--border-accent);
                    padding: 3rem;
                    border-radius: 12px;
                    width: 250px;
                    height: 250px;
                    transition: all 0.3s ease;
                    text-decoration: none;
                    box-shadow: 0 4px 15px var(--shadow-sm);
                }

                .social-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 10px 30px var(--shadow-md);
                    background-color: var(--bg-elevated);
                    border-color: var(--accent-light);
                }

                .icon-wrapper {
                    color: var(--text-secondary);
                    margin-bottom: 1.5rem;
                    transition: color 0.3s ease;
                }

                .social-card:hover .icon-wrapper {
                    color: var(--accent-primary);
                }

                h3 {
                    color: var(--text-primary);
                    font-size: 1.25rem;
                    font-weight: 700;
                    margin: 0;
                    font-family: 'Playfair Display', serif;
                }
            `}</style>
        </div>

    )
}