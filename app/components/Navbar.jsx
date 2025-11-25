"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full text-right bg-black/80 backdrop-blur-md text-white z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">

                    {/* Logo / Title */}
                    <div className="flex-shrink-0">
                        <Link href="/">
              <span className="font-bold text-lg cursor-pointer">
                {/*  i add img*/}
                  <img
                      src="logo.png"
                      alt="Logo"
                      className="w-15 h-12 object-contain"
                  />

              </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        <Link href="/" className="hover:text-yellow-400 transition">الرئيسية</Link>
                        <Link href="/timeline" className="hover:text-yellow-400 transition">المسار</Link>
                        <Link href="/stories" className="hover:text-yellow-400 transition">الارشيف</Link>
                        <Link href="/gallery" className="hover:text-yellow-400 transition">الشهادات</Link>

                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg
                                    className="h-6 w-6"
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
                <div className="md:hidden bg-black/90 backdrop-blur-md">
                    <div className="px-2 pt-2 pb-4 space-y-1">
                        <Link href="/" className="block px-3 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition">Home</Link>
                        <Link href="/timeline" className="block px-3 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition">Timeline</Link>
                        <Link href="/stories" className="block px-3 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition">Stories</Link>
                        <Link href="/gallery" className="block px-3 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition">Gallery</Link>
                        <Link href="/about" className="block px-3 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition">About</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
