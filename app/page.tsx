import Hero from "@/app/components/hero";
import AboutSnapshot from "@/app/components/AboutSnapshot/AboutSnapshot";
import NewspaperHeader from "@/app/components/NewspaperHeader";
import DigitalBook from "@/app/components/DigitalBook";
import TimelineSection from "@/app/components/TimelineSection";
// import GallerySection from "@/app/components/GallerySection";


export default function Home() {
    return (
        <main>

            <Hero />

            <NewspaperHeader />
            <AboutSnapshot />
            <DigitalBook />
            <TimelineSection />


        </main>
    );
}
