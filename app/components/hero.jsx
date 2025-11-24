export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden border-radius-md">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/Videos/vid.mp4" type="video/mp4" />
            </video>

            {/* Overlay (optional dark layer) */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Foreground Content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6 drop-shadow-lg">
                <h1 className="text-4xl md:text-6xl font-bold">
                    مظاهرات 11 ديسمبر 1960<br/>صوت الشعب… بداية الانتصار
                </h1>

                <p className="text-xl md:text-2xl mt-4">
                    لحظة كسرت هيمنة الاستعمار، وأعلنت أن الجزائر أقوى من القمع.
                </p>

                <p className="text-lg md:text-xl mt-4 max-w-2xl">
                    في هذا اليوم خرج الجزائريون ليعلنوا للعالم أن إرادة التحرر أقوى من أي قوة
                    عسكرية. كان ذلك التحوّل الحقيقي في مسار الثورة، وفي نظرة العالم للقضية
                    الجزائرية.
                </p>
            </div>



        </section>



    );
}
