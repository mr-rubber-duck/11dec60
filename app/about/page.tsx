import React from 'react';

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center" style={{
            paddingTop: '6rem',
            paddingBottom: '2rem',
            paddingLeft: '2rem',
            paddingRight: '2rem'
        }}>
            <h1 className="font-playfair heading-shadow text-center mb-4" style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)'
            }}>
                عن المشروع
            </h1>
            <div className="newspaper-divider" style={{ width: '200px', margin: '1.5rem auto' }}></div>
            <p className="text-center" style={{
                fontSize: '1.125rem',
                maxWidth: '800px',
                margin: '0 auto'
            }}>
                مشروع أرشيفي يهدف لحفظ ذاكرة مظاهرات 11 ديسمبر 1960 ونقلها للأجيال القادمة.
            </p>
        </div>
    );
}
