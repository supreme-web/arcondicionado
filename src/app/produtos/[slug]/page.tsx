import { Metadata } from "next";
import Link from "next/link";
import productsData from "@/lib/products.generated.json";
import { BRAND, SITE_DOMAIN } from "@/lib/seoData";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return productsData.map((product) => ({
        slug: product.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const product = productsData.find(p => p.slug === slug);
    const title = `${product?.name || 'Produto'} em Curitiba | ${BRAND}`;
    const description = `Soluções em ${product?.name || 'ar condicionado'} em Curitiba. Orientação, dicas de uso e instalação com a equipe técnica da ${BRAND}.`;

    return {
        title,
        description,
        alternates: {
            canonical: `${SITE_DOMAIN}/produtos/${slug}/`,
        },
    };
}

export default async function ProductPage({ params }: Props) {
    const { slug } = await params;
    const product = productsData.find(p => p.slug === slug);

    if (!product) {
        return (
            <div className="container" style={{ padding: "60px 15px", textAlign: "center" }}>
                <h1>Produto não encontrado</h1>
                <Link href="/produtos/" className="cta-button" style={{ marginTop: "20px", display: "inline-block" }}>Voltar para Produtos</Link>
            </div>
        );
    }

    const storeUrl = `${product.url}?utm_source=arcondicionado.curitiba.br&utm_medium=produto&utm_campaign=seo_programatico`;

    // FAQ Schema
    const faqData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": `O produto ${product.name} é indicado para quais ambientes?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `A aplicação ideal depende da carga térmica do local. Consulte a equipe da ${BRAND} para o dimensionamento correto em projetos residenciais ou corporativos em Curitiba.`
                }
            },
            {
                "@type": "Question",
                "name": "Como funciona a instalação?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nossa equipe técnica realiza a instalação seguindo rigorosamente as recomendações dos fabricantes, garantindo segurança e a manutenção da garantia de fábrica."
                }
            },
            {
                "@type": "Question",
                "name": "De quanto em quanto tempo preciso fazer manutenção?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A limpeza regular dos filtros deve ser feita mensalmente, com uma revisão técnica completa recomendada a cada 6 meses a 1 ano."
                }
            }
        ]
    };

    // Product Schema
    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "description": `Informações técnicas e orientação sobre ${product.name} na região de Curitiba.`,
        "brand": {
            "@type": "Brand",
            "name": BRAND
        }
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

            <section className="hero" style={{ padding: '60px 0' }}>
                <div className="container">
                    <h1>{product.name} em Curitiba</h1>
                    <p>Análise técnica, recomendações de uso e suporte especializado da {BRAND}.</p>
                </div>
            </section>

            <section className="container content-grid" style={{ padding: '40px 15px' }}>
                <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                    <h2>Solução em Climatização: {product.name}</h2>
                    <p>
                        O fornecimento adequado de sistemas de climatização exige cuidado técnico. Aqui em Curitiba, as grandes variações de temperatura tornam essencial escolher o equipamento correto. O <strong>{product.name}</strong> pode ser uma excelente escolha, desde que o dimensionamento acompanhe as exigências do seu ambiente.
                    </p>

                    <h3>Quando é Recomendado?</h3>
                    <p>
                        Equipamentos modernos oferecem eficiência energética superior. Se você busca climatizar um espaço residencial (salas, quartos) ou mesmo um ambiente comercial, é importante avaliar a capacidade, o tipo de compressão (Inverter ou convencional) e a infraestrutura necessária para a instalação do {product.name}.
                    </p>

                    <h3>Dicas de Instalação e Cuidados Técnicos</h3>
                    <ul>
                        <li>Garanta que a infraestrutura elétrica suporte a carga do equipamento.</li>
                        <li>A linha frigorífica deve ser instalada com tubulação de espessura adequada e isolamento térmico de alta densidade.</li>
                        <li>O dreno precisa de inclinação suficiente para evitar o acúmulo de água ou infiltrações na alvenaria.</li>
                        <li>Realize o teste de estanqueidade para certificar possíveis vazamentos microscópicos antes da liberação.</li>
                    </ul>

                    <div style={{ margin: "40px 0", textAlign: "center", padding: "30px", backgroundColor: "#f8fbff", borderRadius: "8px", border: "1px solid #e2edff" }}>
                        <h3 style={{ marginTop: 0 }}>Gostou deste produto?</h3>
                        <p style={{ marginBottom: "20px" }}>Verifique a disponibilidade, especificações completas e opções de compra diretamente em nossa loja oficial.</p>
                        <a href={storeUrl} target="_blank" rel="noopener noreferrer" className="cta-button" style={{ display: "inline-block", fontSize: "1.1rem" }}>
                            Ver e comprar na Loja MFAR
                        </a>
                    </div>

                    <h3>Perguntas Frequentes</h3>
                    <div className="faq-section" style={{ marginTop: "20px" }}>
                        <div className="faq-item" style={{ marginBottom: "15px" }}>
                            <h4 style={{ margin: "0 0 5px 0" }}>O produto {product.name} é indicado para quais ambientes?</h4>
                            <p style={{ margin: 0, fontSize: "0.95rem", opacity: 0.9 }}>A aplicação ideal depende da carga térmica do local. Consulte a equipe da {BRAND} para o dimensionamento correto em projetos residenciais ou corporativos em Curitiba.</p>
                        </div>
                        <div className="faq-item" style={{ marginBottom: "15px" }}>
                            <h4 style={{ margin: "0 0 5px 0" }}>Como funciona a instalação?</h4>
                            <p style={{ margin: 0, fontSize: "0.95rem", opacity: 0.9 }}>Nossa equipe técnica realiza a instalação seguindo rigorosamente as recomendações dos fabricantes, garantindo segurança e a manutenção da garantia de fábrica.</p>
                        </div>
                        <div className="faq-item">
                            <h4 style={{ margin: "0 0 5px 0" }}>De quanto em quanto tempo preciso fazer manutenção?</h4>
                            <p style={{ margin: 0, fontSize: "0.95rem", opacity: 0.9 }}>A limpeza regular dos filtros deve ser feita mensalmente, com uma revisão técnica completa recomendada a cada 6 meses a 1 ano.</p>
                        </div>
                    </div>

                    <h3 style={{ marginTop: "40px" }}>Serviços Especializados</h3>
                    <p>Conte conosco para o suporte completo em Curitiba:</p>
                    <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <li><Link href="/curitiba/ar-condicionado/">Projetos de Ar Condicionado</Link></li>
                        <li><Link href="/curitiba/manutencao-de-ar-condicionado/">Manutenção Preventiva e Corretiva</Link></li>
                        <li><Link href="/curitiba/tecnico-de-ar-condicionado/">Visita Técnica</Link></li>
                        <li><Link href="/curitiba/empresa-de-ar-condicionado/">Atendimento Empresarial (PMOC)</Link></li>
                    </ul>
                </div>
            </section>
        </>
    );
}
