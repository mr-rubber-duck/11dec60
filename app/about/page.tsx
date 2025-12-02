"use client";

import React from 'react';

export default function AboutPage() {
    return (
        <div className="container" style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '8rem',
            paddingBottom: '4rem',
        }}>
            {/* Project Definition Section */}
            <div className="text-center mb-5" style={{ marginBottom: '4rem' }}>
                <h1 className="font-playfair heading-shadow" style={{
                    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                    marginBottom: '1.5rem'
                }}>
                    عن المشروع
                </h1>
                <div className="newspaper-divider" style={{ margin: '0 auto 2rem auto', width: '150px' }}></div>

                <div className="card" style={{
                    maxWidth: '900px',
                    margin: '0 auto',
                    padding: '3rem',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-accent)',
                    position: 'relative'
                }}>
                    <p style={{
                        fontSize: '1.25rem',
                        lineHeight: '2',
                        color: 'var(--text-secondary)',
                        fontFamily: "'Roboto Slab', serif",
                        textAlign: 'center'
                    }}>
                        مشروع "أرشيفي" هو منصة رقمية تفاعلية تهدف إلى حفظ وتوثيق ذاكرة مظاهرات 11 ديسمبر 1960 المجيدة.
                        نسعى من خلال هذا المشروع إلى نقل البطولات والتضحيات التي قدمها الشعب الجزائري للأجيال القادمة،
                        مستخدمين أحدث التقنيات لتقديم تجربة تاريخية غامرة.
                    </p>
                    {/* Decorative corner elements */}
                    <div style={{ position: 'absolute', top: '10px', left: '10px', width: '20px', height: '20px', borderTop: '2px solid var(--accent-primary)', borderLeft: '2px solid var(--accent-primary)' }}></div>
                    <div style={{ position: 'absolute', top: '10px', right: '10px', width: '20px', height: '20px', borderTop: '2px solid var(--accent-primary)', borderRight: '2px solid var(--accent-primary)' }}></div>
                    <div style={{ position: 'absolute', bottom: '10px', left: '10px', width: '20px', height: '20px', borderBottom: '2px solid var(--accent-primary)', borderLeft: '2px solid var(--accent-primary)' }}></div>
                    <div style={{ position: 'absolute', bottom: '10px', right: '10px', width: '20px', height: '20px', borderBottom: '2px solid var(--accent-primary)', borderRight: '2px solid var(--accent-primary)' }}></div>
                </div>
            </div>

            {/* Team Section */}
            <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
                <h2 className="font-playfair text-center heading-shadow" style={{
                    fontSize: '2.5rem',
                    marginBottom: '3rem',
                    color: 'var(--text-primary)'
                }}>
                    فريق العمل
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    padding: '0 1rem'
                }}>
                    {/* Developer Card */}
                    <TeamCard
                        role="المطور"
                        title="Developer"
                        icon="💻"
                        description="بناء وتطوير الواجهة والأنظمة الخلفية للمشروع."
                    />

                    {/* Designer Card */}
                    <TeamCard
                        role="المصمم"
                        title="Designer"
                        icon="🎨"
                        description="تصميم التجربة البصرية والواجهة الفنية للموقع."
                    />

                    {/* Helper Card */}
                    <TeamCard
                        role="المساعد"
                        title="Helper"
                        icon="🤝"
                        description="المساهمة في جمع المحتوى وتدقيق المعلومات التاريخية."
                    />
                </div>
            </div>
        </div>
    );
}

function TeamCard({ role, title, icon, description }: { role: string, title: string, icon: string, description: string }) {
    return (
        <div className="card" style={{
            padding: '2rem',
            textAlign: 'center',
            background: 'var(--bg-elevated)',
            border: '1px solid var(--border-subtle)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'default',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
        }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 15px 30px var(--shadow-lg)';
                e.currentTarget.style.borderColor = 'var(--accent-light)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
            }}
        >
            <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'var(--gradient-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.5rem',
                marginBottom: '0.5rem',
                boxShadow: '0 5px 15px var(--shadow-md)'
            }}>
                {icon}
            </div>

            <h3 className="font-playfair" style={{
                fontSize: '1.75rem',
                color: 'var(--text-primary)',
                marginBottom: '0.25rem'
            }}>
                {role}
            </h3>

            <span style={{
                fontSize: '0.9rem',
                color: 'var(--accent-light)',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                fontWeight: 'bold'
            }}>
                {title}
            </span>

            <div className="newspaper-divider" style={{ width: '50px', margin: '1rem auto' }}></div>

            <div style={{
                background: 'var(--bg-tertiary)',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                width: '100%',
                marginBottom: '1rem'
            }}>
                <p style={{
                    color: 'var(--text-secondary)',
                    fontFamily: "'Roboto Slab', serif",
                    fontSize: '1.1rem'
                }}>
                    [الاسم هنا]
                </p>
            </div>

            <p style={{
                color: 'var(--text-muted)',
                fontSize: '0.95rem',
                lineHeight: '1.6'
            }}>
                {description}
            </p>
        </div>
    );
}
