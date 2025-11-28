"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>

            <nav style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                textAlign: 'right',
                backgroundColor: 'rgba(28, 21, 9, 0.95)',
                backdropFilter: 'blur(10px)',
                color: '#FFF9EC',
                zIndex: 50,
                borderBottom: '2px solid #9B9B85'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '0 1.5rem'
                }}>
                    <div className="flex justify-between items-center" style={{ height: '4rem' }}>

                        {/* Logo / Title */}
                        <div style={{ flexShrink: 0 }}>
                            <Link href="/">
                                <span className="font-playfair" style={{
                                    fontWeight: 'bold',
                                    fontSize: '1.125rem',
                                    cursor: 'pointer'
                                }}>
                                    <img
                                        src="logo.png"
                                        alt="Logo"
                                        style={{
                                            width: '3.75rem',
                                            height: '3rem',
                                            objectFit: 'contain'
                                        }}
                                    />
                                </span>
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="desktop-menu">
                            <Link href="/" className="nav-link">الرئيسية</Link>
                            <Link href="/story" className="nav-link">القصة</Link>
                            <Link href="/timeline" className="nav-link">الخط الزمني</Link>
                            <Link href="/gallery" className="nav-link">المعرض</Link>
                            <Link href="/testimonies" className="nav-link">الشهادات</Link>
                            <Link href="/impact" className="nav-link">الأثر</Link>
                            <Link href="/about" className="nav-link">عن المشروع</Link>
                        </div>

                        {/* Mobile menu button */}
                        <div className="mobile-menu-button">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                style={{
                                    outline: 'none',
                                    border: 'none',
                                    background: 'transparent',
                                    color: '#FFF9EC',
                                    cursor: 'pointer'
                                }}
                            >
                                <span className="sr-only">Open main menu</span>
                                {isOpen ? (
                                    <svg
                                        style={{ height: '1.5rem', width: '1.5rem' }}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg
                                        style={{ height: '1.5rem', width: '1.5rem' }}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="mobile-menu">
                        <div className="flex flex-col" style={{
                            padding: '0.5rem',
                            paddingTop: '0.5rem',
                            paddingBottom: '1rem',
                            gap: '0.25rem'
                        }}>
                            <Link href="/" className="mobile-link">الرئيسية</Link>
                            <Link href="/story" className="mobile-link">القصة</Link>
                            <Link href="/timeline" className="mobile-link">الخط الزمني</Link>
                            <Link href="/gallery" className="mobile-link">المعرض</Link>
                            <Link href="/testimonies" className="mobile-link">الشهادات</Link>
                            <Link href="/impact" className="mobile-link">الأثر</Link>
                            <Link href="/about" className="mobile-link">عن المشروع</Link>
                        </div>
                    </div>
                )}
            </nav>

            <style jsx global>{`
                .sr-only {
                    position: absolute;
                    width: 1px;
                    height: 1px;
                    padding: 0;
                    margin: -1px;
                    overflow: hidden;
                    clip: rect(0,0,0,0);
                    white-space: nowrap;
                    border-width: 0;
                }

                .desktop-menu {
                    display: none;
                    gap: 0.75rem;
                }

                @media (min-width: 768px) {
                    .desktop-menu {
                        display: flex;
                    }
                    .mobile-menu-button {
                        display: none;
                    }
                }

                .nav-link {
                    color: #FFF9EC;
                    transition: color 0.3s ease;
                    font-family: 'Roboto Slab', serif;
                    text-decoration: none;
                }

                .nav-link:hover {
                    color: #9B9B85;
                }

                .mobile-menu {
                    background-color: rgba(28, 21, 9, 0.98);
                    backdrop-filter: blur(10px);
                    text-align: right;
                    border-top: 1px solid #9B9B85;
                }

                @media (min-width: 768px) {
                    .mobile-menu {
                        display: none;
                    }
                }

                .mobile-link {
                    display: block;
                    padding: 0.75rem;
                    border-radius: 0.375rem;
                    color: #FFF9EC;
                    transition: all 0.3s ease;
                    text-decoration: none;
                }

                .mobile-link:hover {
                    background-color: #9B9B85;
                    color: #1C1509;
                }
            `}</style>
        </>
    );
}
