export default function AlternateSection({ title, text, imageSrc, reverse }) {
    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div
                    className={`
            ${reverse ? "md:order-2" : "md:order-1"}
          `}
                >
                    <img
                        src={imageSrc}
                        alt={title}
                        className="w-full h-auto rounded-md shadow-lg"
                    />
                </div>
                <div
                    className={`
            ${reverse ? "md:order-1" : "md:order-2"}
          `}
                >
                    <h2 className="text-2xl font-bold mb-4">{title}</h2>
                    <p className="text-lg">{text}</p>
                </div>
            </div>
        </section>
    );
}
