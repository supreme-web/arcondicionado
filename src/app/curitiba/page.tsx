import { INTENTS, BRAND } from "@/lib/seoData";
import { BAIRROS } from "@/lib/bairrosCuritiba";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: `Ar Condicionado por Bairro em Curitiba | ${BRAND}`,
    description: `Encontre serviços de ar condicionado em todos os bairros de Curitiba. Atendimento local com a qualidade ${BRAND}.`,
};

export default function CuritibaHub() {
    return (
        <>
            <section className="hero" style={{ padding: '60px 0' }}>
                <div className="container">
                    <h1>Ar Condicionado em Curitiba</h1>
                    <p>Selecione seu bairro para encontrar o técnico mais próximo de você.</p>
                </div>
            </section>

            <section className="container">
                <div className="grid">
                    {BAIRROS.map(bairro => (
                        <div key={bairro.slug} className="card" style={{ padding: '20px' }}>
                            <h3 style={{ fontSize: '1.2rem', textTransform: 'capitalize' }}>{bairro.nome}</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '15px' }}>
                                {INTENTS.map(intent => (
                                    <Link
                                        key={intent.slug}
                                        href={`/curitiba/${bairro.slug}/${intent.slug}/`}
                                        style={{ fontSize: '0.85rem', color: 'var(--secondary)' }}
                                    >
                                        • {intent.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
