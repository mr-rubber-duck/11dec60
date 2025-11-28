export default function AlternateSection({ title, text, imageSrc, reverse }) {
    return (
        <section className="section">
            <div className="container grid grid-2 gap-4" style={{
                alignItems: 'center'
            }}>
                <div style={{
                    order: reverse ? 2 : 1
                }}>
                    <img
                        src={imageSrc}
                        alt={title}
                        style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '0.375rem',
                            boxShadow: '0 4px 6px rgba(28, 21, 9, 0.2)'
                        }}
                    />
                </div>
                <div style={{
                    order: reverse ? 1 : 2
                }}>
                    <h2 className="font-playfair heading-shadow mb-3">{title}</h2>
                    <div className="newspaper-divider"></div>
                    <p style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>{text}</p>
                </div>
            </div>
        </section>
    );
}
