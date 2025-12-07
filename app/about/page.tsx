"use client";

import React from 'react';
import Footer from '../components/Footer';

export default function AboutPage() {
    return (
        <>
            <section className="about-section">
                <div className="about-container">
                    {/* Project Definition Section */}
                    <div className="about-header">
                        <h1 className="about-title">
                            عن المشروع
                        </h1>
                        <div className="about-divider"></div>

                        <div className="about-intro-card">
                            <p className="about-intro-text">
                                مشروع "أرشيفي" هو منصة رقمية تفاعلية تهدف إلى حفظ وتوثيق ذاكرة مظاهرات 11 ديسمبر 1960 المجيدة.
                                نسعى من خلال هذا المشروع إلى نقل البطولات والتضحيات التي قدمها الشعب الجزائري للأجيال القادمة،
                                مستخدمين أحدث التقنيات لتقديم تجربة تاريخية غامرة.
                            </p>
                            {/* Decorative corner elements */}
                            <div className="corner-decoration top-left"></div>
                            <div className="corner-decoration top-right"></div>
                            <div className="corner-decoration bottom-left"></div>
                            <div className="corner-decoration bottom-right"></div>
                        </div>
                    </div>

                    {/* Team Section */}
                    <div className="team-section">
                        <h2 className="team-title">
                            فريق العمل
                        </h2>

                        <div className="team-grid">
                            {/* Developer Card */}
                            <TeamCard
                                role="المطور"
                                title="Developer"
                                icon="💻"
                                names={["Taha amine lassami"]}
                                description="بناء وتطوير الواجهة والأنظمة الخلفية للمشروع." />

                            {/* Designer Card */}
                            <TeamCard
                                role="المصمم"
                                title="Designer"
                                icon="🎨"
                                names={["lasami taha amine", "aya  minnet allah merdaci", "aya marir"]}
                                description="تصميم التجربة البصرية والواجهة الفنية للموقع." />

                            {/* Helper Card */}
                            <TeamCard
                                role="المساعد"
                                title="Helper"
                                icon="🤝"
                                names={["hana Ghell"]}
                                description="المساهمة في جمع المحتوى." />
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .about-section {
                        min-height: 100vh;
                        padding-top: 6rem;
                        padding-bottom: 3rem;
                    }
                    
                    .about-container {
                        max-width: 1200px;
                        margin: 0 auto;
                        padding: 0 1.5rem;
                    }
                    
                    .about-header {
                        text-align: center;
                        margin-bottom: 3rem;
                    }
                    
                    .about-title {
                        font-family: 'Playfair Display', serif;
                        font-size: clamp(2rem, 5vw, 3.5rem);
                        margin-bottom: 1rem;
                        text-shadow: 2px 2px 8px var(--shadow-md);
                    }
                    
                    .about-divider {
                        width: 100px;
                        height: 2px;
                        background: var(--gradient-accent);
                        margin: 0 auto 2rem;
                    }
                    
                    .about-intro-card {
                        max-width: 900px;
                        margin: 0 auto;
                        padding: 2rem;
                        background: var(--bg-secondary);
                        border: 1px solid var(--border-accent);
                        position: relative;
                        border-radius: 8px;
                    }
                    
                    .about-intro-text {
                        font-size: clamp(1rem, 2.5vw, 1.25rem);
                        line-height: 2;
                        color: var(--text-secondary);
                        font-family: 'Roboto Slab', serif;
                        text-align: center;
                        margin: 0;
                    }
                    
                    .corner-decoration {
                        position: absolute;
                        width: 15px;
                        height: 15px;
                        border-color: var(--accent-primary);
                    }
                    
                    .top-left {
                        top: 8px;
                        left: 8px;
                        border-top: 2px solid;
                        border-left: 2px solid;
                    }
                    
                    .top-right {
                        top: 8px;
                        right: 8px;
                        border-top: 2px solid;
                        border-right: 2px solid;
                    }
                    
                    .bottom-left {
                        bottom: 8px;
                        left: 8px;
                        border-bottom: 2px solid;
                        border-left: 2px solid;
                    }
                    
                    .bottom-right {
                        bottom: 8px;
                        right: 8px;
                        border-bottom: 2px solid;
                        border-right: 2px solid;
                    }
                    
                    .team-section {
                        max-width: 1200px;
                        margin: 0 auto;
                        width: 100%;
                    }
                    
                    .team-title {
                        font-family: 'Playfair Display', serif;
                        font-size: clamp(1.75rem, 4vw, 2.5rem);
                        text-align: center;
                        margin-bottom: 2rem;
                        color: var(--text-primary);
                        text-shadow: 2px 2px 8px var(--shadow-md);
                    }
                    
                    .team-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                        gap: 1.5rem;
                        padding: 0;
                    }
                    
                    /* Tablet */
                    @media (max-width: 768px) {
                        .about-section {
                            padding-top: 5rem;
                            padding-bottom: 2rem;
                        }
                        
                        .about-container {
                            padding: 0 1rem;
                        }
                        
                        .about-header {
                            margin-bottom: 2rem;
                        }
                        
                        .about-intro-card {
                            padding: 1.5rem;
                        }
                        
                        .team-grid {
                            grid-template-columns: 1fr;
                            gap: 1rem;
                        }
                    }
                    
                    /* Mobile */
                    @media (max-width: 480px) {
                        .about-section {
                            padding-top: 4.5rem;
                            padding-bottom: 1.5rem;
                        }
                        
                        .about-container {
                            padding: 0 0.75rem;
                        }
                        
                        .about-intro-card {
                            padding: 1rem;
                        }
                        
                        .about-divider {
                            width: 60px;
                            margin-bottom: 1.5rem;
                        }
                        
                        .corner-decoration {
                            width: 12px;
                            height: 12px;
                        }
                    }
                `}</style>
            </section>
            <Footer />
        </>
    );
}


function TeamCard({ role, title, icon, names, description }: { role: string, title: string, icon: string, names: string[], description: string }) {
    return (
        <div className="team-card">
            <div className="team-icon">{icon}</div>
            <h3 className="team-role">{role}</h3>
            <span className="team-title-label">{title}</span>
            <div className="team-divider"></div>

            {names.length > 0 && (
                <div className="team-names">
                    {names.map((name, index) => (
                        <p key={index} className="team-name">{name}</p>
                    ))}
                </div>
            )}

            <p className="team-description">{description}</p>

            <style jsx>{`
                .team-card {
                    padding: 1.5rem;
                    text-align: center;
                    background: var(--bg-elevated);
                    border: 1px solid var(--border-subtle);
                    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
                    cursor: default;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.75rem;
                    border-radius: 8px;
                }
                
                .team-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 15px 30px var(--shadow-lg);
                    border-color: var(--accent-light);
                }
                
                .team-icon {
                    width: 70px;
                    height: 70px;
                    border-radius: 50%;
                    background: var(--gradient-subtle);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 2rem;
                    box-shadow: 0 5px 15px var(--shadow-md);
                }
                
                .team-role {
                    font-family: 'Playfair Display', serif;
                    font-size: 1.5rem;
                    color: var(--text-primary);
                    margin: 0;
                }
                
                .team-title-label {
                    font-size: 0.85rem;
                    color: var(--accent-light);
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    font-weight: bold;
                }
                
                .team-divider {
                    width: 40px;
                    height: 2px;
                    background: var(--gradient-accent);
                    margin: 0.5rem auto;
                }
                
                .team-names {
                    background: var(--bg-tertiary);
                    padding: 0.625rem 1rem;
                    border-radius: 6px;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 0.375rem;
                }
                
                .team-name {
                    color: var(--text-secondary);
                    font-family: 'Roboto Slab', serif;
                    font-size: 0.95rem;
                    margin: 0;
                }
                
                .team-description {
                    color: var(--text-muted);
                    font-size: 0.875rem;
                    line-height: 1.6;
                    margin: 0;
                }
                
                /* Mobile */
                @media (max-width: 480px) {
                    .team-card {
                        padding: 1.25rem 1rem;
                    }
                    
                    .team-icon {
                        width: 60px;
                        height: 60px;
                        font-size: 1.75rem;
                    }
                    
                    .team-role {
                        font-size: 1.25rem;
                    }
                    
                    .team-title-label {
                        font-size: 0.75rem;
                    }
                    
                    .team-name {
                        font-size: 0.875rem;
                    }
                    
                    .team-description {
                        font-size: 0.8rem;
                    }
                }
            `}</style>
        </div>
    );
}
