import { BRAND, generatePageContent, BAIRROS, INTENTS } from "@/lib/seoData";
import Link from "next/link";

interface SeoPageContentProps {
    intentSlug: string;
    bairroSlug?: string;
}

export default function SeoPageContent({ intentSlug, bairroSlug }: SeoPageContentProps) {
    const content = generatePageContent(intentSlug, bairroSlug);

    // JSON-LD for LocalBusiness
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "HVACBusiness",
        "name": BRAND,
        "url": "https://mfar.com.br",
        "logo": "https://mfar.com.br/logo.png",
        "image": "https://mfar.com.br/hero.jpg",
        "description": content.description,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Curitiba",
            "addressRegion": "PR",
            "addressCountry": "BR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "-25.4297",
            "longitude": "-49.2719"
        },
        "areaServed": {
            "@type": "City",
            "name": "Curitiba"
        },
        "sameAs": ["https://mfar.com.br", "https://loja.mfar.com.br"]
    };

    // JSON-LD for FAQPage
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": content.faq.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a
            }
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <section className="hero">
                <div className="container">
                    <h1>{content.h1}</h1>
                    <p>{content.intro}</p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '30px' }}>
                        <a href={content.ctaMain} className="cta-button">Solicitar Orçamento</a>
                        <a href={content.ctaStore} className="cta-button" style={{ background: 'var(--primary)' }}>Ver na Loja</a>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="grid">
                    <div className="card">
                        <h3>Nossos Benefícios</h3>
                        <ul>
                            {content.benefits.map((b, i) => <li key={i} style={{ marginBottom: '10px' }}>✅ {b}</li>)}
                        </ul>
                    </div>
                    <div className="card" style={{ borderLeftColor: 'var(--accent)' }}>
                        <h3>Sinais de Alerta</h3>
                        <ul>
                            {content.problems.map((p, i) => <li key={i} style={{ marginBottom: '10px' }}>⚠️ {p}</li>)}
                        </ul>
                    </div>
                </div>
            </section>

            <section style={{ background: 'var(--light)' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '40px', color: 'var(--primary)' }}>Serviços Especializados</h2>
                    <div className="grid">
                        {content.services.map((s, i) => (
                            <div key={i} style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                                <p>🛠️ <strong>{s}</strong></p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="container">
                <h2 style={{ marginBottom: '30px', borderBottom: '2px solid var(--accent)', display: 'inline-block' }}>Checklist de Qualidade</h2>
                <div style={{ columns: '2', gap: '40px', marginTop: '20px' }}>
                    {content.checklist.map((c, i) => <p key={i} style={{ marginBottom: '15px' }}>📌 {c}</p>)}
                </div>
            </section>

            <section style={{ background: 'white', borderTop: '1px solid #eee' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Dúvidas Frequentes</h2>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        {content.faq.map((item, i) => (
                            <div key={i} className="faq-item">
                                <h4>{item.q}</h4>
                                <p>{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="container" style={{ textAlign: 'center', background: 'var(--primary)', color: 'white', borderRadius: '15px', margin: '40px auto' }}>
                <h2>Pronto para climatizar seu ambiente?</h2>
                <p style={{ margin: '20px 0' }}>Fale agora com a equipe técnica da {BRAND} e garanta o melhor serviço de Curitiba.</p>
                <a href={content.ctaMain} className="cta-button" style={{ background: 'var(--accent)', fontSize: '1.2rem', padding: '15px 40px' }}>Falar por WhatsApp</a>
            </section>

            <section className="container" style={{ borderTop: '1px solid #eee', marginTop: '40px' }}>
                <h3 style={{ marginBottom: '20px' }}>Outras Localidades em Curitiba</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                    {BAIRROS.filter(b => b !== bairroSlug).map(b => (
                        <Link key={b} href={`/curitiba/${b}/${intentSlug}/`} style={{ fontSize: '0.9rem', color: 'var(--secondary)' }}>
                            {b.replace(/-/g, ' ')}
                        </Link>
                    ))}
                </div>
            </section>

            <section className="container" style={{ borderTop: '1px solid #eee' }}>
                <h3 style={{ marginBottom: '20px' }}>Serviços Relacionados</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                    {INTENTS.filter(i => i.slug !== intentSlug).map(i => (
                        <Link key={i.slug} href={`/curitiba/${bairroSlug ? bairroSlug + '/' : ''}${i.slug}/`} style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 'bold' }}>
                            {i.label} {bairroSlug ? `no ${bairroSlug.replace(/-/g, ' ')}` : 'em Curitiba'}
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
}
