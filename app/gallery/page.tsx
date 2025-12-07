"use client";

export default function GallerySection() {
    // All images array
    const images = [
        { src: "/pic/id1.jpg", alt: "صورة أرشيفية 1" },
        { src: "/pic/id0.jpg", alt: "صورة أرشيفية 2" },
        { src: "/pic/id2.jpg", alt: "صورة أرشيفية 3" },
        { src: "/pic/id3.jpg", alt: "صورة أرشيفية 4" },
        { src: "/pic/id4.jpg", alt: "صورة أرشيفية 5" },
        { src: "/images/str1.jpg", alt: "صورة أرشيفية 6" },
        { src: "/images/str2.jpg", alt: "صورة أرشيفية 7" },
        { src: "/images/str6.jpg", alt: "صورة أرشيفية 8" },
        { src: "/images/str7.jpg", alt: "صورة أرشيفية 9" },
        { src: "/images/str8.jpg", alt: "صورة أرشيفية 10" },
        { src: "/images/str9.jpg", alt: "صورة أرشيفية 11" },
        { src: "/images/str3.jpg", alt: "صورة أرشيفية 12" },
    ];

    // Distribute images evenly across 3 columns
    const column1 = images.filter((_, i) => i % 3 === 0);
    const column2 = images.filter((_, i) => i % 3 === 1);
    const column3 = images.filter((_, i) => i % 3 === 2);

    const TiltImage = ({ src, alt }: { src: string; alt: string }) => (
        <div className="tilt-wrapper">
            <div className="tilt-grid">
                <div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div>
                <div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div>
                <div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div>
                <div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div>
                <div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div><div className="tilt-area"></div>
                <div className="tilt-image gallery-image">
                    <img src={src} alt={alt} />
                </div>
            </div>
        </div>
    );

    return (
        <main style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingTop: '70px' }}>
            <section id="gallery-section" className="gallery-container">
                <h2 className="gallery-title">
                    معرض الصور والوثائق
                </h2>

                <div className="gallery-grid">
                    {/* Column 1 */}
                    <div className="gallery-column">
                        {column1.map((img, index) => (
                            <TiltImage key={`col1-${index}`} src={img.src} alt={img.alt} />
                        ))}
                    </div>

                    {/* Column 2 */}
                    <div className="gallery-column">
                        {column2.map((img, index) => (
                            <TiltImage key={`col2-${index}`} src={img.src} alt={img.alt} />
                        ))}
                    </div>

                    {/* Column 3 */}
                    <div className="gallery-column">
                        {column3.map((img, index) => (
                            <TiltImage key={`col3-${index}`} src={img.src} alt={img.alt} />
                        ))}
                    </div>
                </div>
            </section>

            <style jsx>{`
                .gallery-container {
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 2rem 1.5rem;
                }
                
                .gallery-title {
                    font-size: clamp(1.5rem, 4vw, 2.5rem);
                    font-family: 'Playfair Display', serif;
                    font-weight: 700;
                    text-align: center;
                    margin-bottom: 2rem;
                    color: #b7957f;
                }
                
                .gallery-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.5rem;
                }
                
                .gallery-column {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    border: 1px solid #4D4332;
                    padding: 0.75rem;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                    background-color: var(--bg-secondary);
                }
                
                /* Tablet - 2 columns */
                @media (max-width: 1024px) {
                    .gallery-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 1rem;
                    }
                    
                    .gallery-container {
                        padding: 1.5rem 1rem;
                    }
                }
                
                /* Mobile - 1 column */
                @media (max-width: 768px) {
                    .gallery-grid {
                        grid-template-columns: 1fr;
                        gap: 1rem;
                    }
                    
                    .gallery-container {
                        padding: 1rem 0.75rem;
                    }
                    
                    .gallery-column {
                        padding: 0.5rem;
                    }
                    
                    .gallery-title {
                        margin-bottom: 1.5rem;
                    }
                }
                
                /* Small mobile */
                @media (max-width: 480px) {
                    .gallery-container {
                        padding: 0.75rem 0.5rem;
                    }
                    
                    .gallery-column {
                        padding: 0.375rem;
                    }
                    
                    .gallery-title {
                        font-size: 1.25rem;
                        margin-bottom: 1rem;
                    }
                }
            `}</style>

            <style jsx global>{`
                .gallery-column .tilt-wrapper {
                    width: 100%;
                    height: auto;
                    aspect-ratio: 4/3;
                }
                
                .gallery-image {
                    border: 1px solid #4D4332;
                }
                
                .gallery-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            `}</style>
        </main>
    );
}
