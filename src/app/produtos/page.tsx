import { Metadata } from "next";
import productsData from "@/lib/products.generated.json";
import ProductList from "@/components/ProductList";
import { BRAND } from "@/lib/seoData";

export const metadata: Metadata = {
    title: `Produtos e Soluções de Ar Condicionado | ${BRAND}`,
    description: "Conheça nossa linha completa de produtos, equipamentos de ar condicionado e peças para climatização em Curitiba.",
    alternates: {
        canonical: "https://arcondicionado.curitiba.br/produtos/",
    }
};

export default function ProdutosHub() {
    const topProducts = productsData.slice(0, 60);

    return (
        <>
            <section className="hero" style={{ padding: '60px 0' }}>
                <div className="container">
                    <h1>Produtos e Soluções em Climatização</h1>
                    <p>Encontre o equipamento ideal para o seu projeto com a qualidade {BRAND}.</p>
                </div>
            </section>

            <section className="container" style={{ padding: '40px 15px' }}>
                <ProductList initialProducts={topProducts} />

                {productsData.length > 60 && (
                    <div style={{ textAlign: "center", marginTop: "40px" }}>
                        <a href="https://loja.mfar.com.br" target="_blank" rel="noopener noreferrer" className="cta-button">
                            Ver linha completa na Loja
                        </a>
                    </div>
                )}
            </section>
        </>
    );
}
