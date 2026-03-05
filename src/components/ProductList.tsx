"use client";

import { useState } from "react";
import Link from "next/link";

interface Product {
    url: string;
    slug: string;
    name: string;
}

export default function ProductList({ initialProducts }: { initialProducts: Product[] }) {
    const [search, setSearch] = useState("");

    const filtered = initialProducts.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div>
            <div style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    placeholder="Buscar produtos..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "12px",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                        fontSize: "1rem"
                    }}
                />
            </div>

            <div className="grid">
                {filtered.length > 0 ? (
                    filtered.map(product => (
                        <div key={product.slug} className="card" style={{ padding: "20px" }}>
                            <h3 style={{ fontSize: "1.1rem", marginBottom: "15px" }}>{product.name}</h3>
                            <Link href={`/produtos/${product.slug}/`} className="cta-button" style={{ display: "inline-block", fontSize: "0.9rem", padding: "8px 15px" }}>
                                Ver Detalhes
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>Nenhum produto encontrado.</p>
                )}
            </div>
        </div>
    );
}
