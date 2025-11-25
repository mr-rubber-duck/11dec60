export default function Hero() {
    return (
        <section className="relative top-3 border-5 h-screen w-full overflow-hidden border-radius-22 ">
            {/* Background Video */}
            <video


                autoPlay
                loop
                muted
                playsInline
                className="absolute top-10 border-white  w-full h-full object-cover"
            >
                <source src="/Videos/vid.mp4" type="video/mp4" />
            </video>

            {/* Overlay (optional dark layer) */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Foreground Content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6 drop-shadow-lg">
                <h1 className="text-3xl md:text-6xl text-right font-bold  bottom-5 typing-loop  ">
                    <br/> يوم نهض الشعب وغيّر مجرى التاريخ<br/>صوت الشعب… بداية الانتصار
                </h1>

                <p className="text-xl mr:text-2xl  text-right mt-4">
                    لحظة كسرت هيمنة الاستعمار، وأعلنت أن الجزائر أقوى من القمع.
                </p>

                <p className=" md:text-xl  top-1  text-right mt-4 max-w-2xl">
                    في هذا اليوم خرج الجزائريون ليعلنوا للعالم أن إرادة التحرر أقوى من أي قوة
                    عسكرية. كان ذلك التحوّل الحقيقي في مسار الثورة، وفي نظرة العالم للقضية
                    الجزائرية.
                </p>
            </div>



        </section>



    );
}
