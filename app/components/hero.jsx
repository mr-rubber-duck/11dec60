"use client";

import { motion } from "motion/react";

export default function Hero() {
    return (
        <section className="hero-poster-section">

            {/* Video Background */}
            <div className="hero-video-container">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hero-video"
                >
                    <source src="/Videos/vid.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Gradient Overlay */}
            <div className="hero-overlay"></div>

            {/* Decorative Border Frame */}
            <div className="hero-frame"></div>

            {/* Content Container */}
            <div className="hero-content-container">
                {/* Top Decorative Line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="hero-decorative-line hero-decorative-line-top"
                ></motion.div>

                {/* Main Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="hero-main-content"
                >
                    {/* Main Title */}
                    <h1 className="font-playfair hero-main-title">
                        <span className="hero-title-accent">
                            يوم نهض الشعب
                        </span>
                        <span>وغيّر مجرى التاريخ</span>
                    </h1>

                    {/* Subtitle & Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    >
                        <h2 className="font-playfair hero-subtitle">
                            صوت الشعب… بداية الانتصار
                        </h2>

                        <p className="hero-description">
                            لحظة كسرت هيمنة الاستعمار، وأعلنت أن الجزائر أقوى من القمع.
                            <br />
                            في هذا اليوم خرج الجزائريون ليعلنوا للعالم أن إرادة التحرر أقوى من أي قوة عسكرية.
                        </p>

                        {/* Call to Action Buttons */}
                        <div className="hero-cta-container ">
                            <motion.a
                                href="/gallery"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="hero-btn hero-btn-primary"
                            >
                                شاهد المعرض
                            </motion.a>
                            <motion.a
                                href="/timeline"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="hero-btn hero-btn-secondary"
                            >
                                تتبع المسار الزمني
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Bottom Decorative Line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="hero-decorative-line hero-decorative-line-bottom"
                ></motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="hero-scroll-indicator"
                >
                    <span className="hero-scroll-text">
                        اكتشف المزيد
                    </span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="hero-scroll-mouse"
                    >
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="hero-scroll-wheel"
                        ></motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

