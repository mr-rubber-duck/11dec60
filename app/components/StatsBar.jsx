"use client";

import React from "react";
import { motion } from "motion/react";

export default function StatsBar() {
    const stats = [
        { label: "ديسمبر 1960", value: "11", sub: "تاريخ الانطلاق" },
        { label: "أيام من الصمود", value: "10", sub: "مدة المظاهرات" },
        { label: "شهيد (تقديراً)", value: "+800", sub: "تضحيات الشعب" },
        { label: "مدن منتفضة", value: "+7", sub: "رقعة الاحتجاج" },
    ];

    return (
        <section style={{
            backgroundColor: '#4D4332',
            borderTop: '2px solid #9B9B85',
            borderBottom: '2px solid #9B9B85',
            position: 'relative',
            zIndex: 20,
            margin: '2rem 1rem',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px rgba(28, 21, 9, 0.3)',
            overflow: 'hidden'
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(155, 155, 133, 0.1)',
                backdropFilter: 'blur(4px)'
            }}></div>

            <div className="grid" style={{
                position: 'relative',
                zIndex: 10,
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '2rem',
                padding: '2rem 1rem'
            }}>
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex flex-col items-center text-center"
                    >
                        <span className="font-playfair" style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 900,
                            color: '#9B9B85',
                            marginBottom: '0.5rem'
                        }}>
                            {stat.value}
                        </span>
                        <span style={{
                            fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                            color: '#FFF9EC',
                            fontWeight: 500
                        }}>
                            {stat.sub}
                        </span>
                        <span style={{
                            fontSize: '0.75rem',
                            color: '#9B9B85',
                            marginTop: '0.25rem'
                        }}>
                            {stat.label}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
