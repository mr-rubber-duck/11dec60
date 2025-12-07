import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
    title: "مظاهرات 11 ديسمبر",
    description: "بداية الانتصار",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ar">

            <body className="flex flex-col min-h-screen pt-24">
                <Navbar />
                <main className="flex-grow">{children}</main>
         
            </body>
        </html>
    );
}
