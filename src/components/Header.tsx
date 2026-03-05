"use client";

import { useState } from "react";
import Link from "next/link";
import { BRAND } from "@/lib/seoData";
import { getWhatsappLink } from "@/lib/whatsapp";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const wpLink = getWhatsappLink();

    return (
        <header className="site-header">
            <div className="container header-container">

                {/* Esquerda: Logo */}
                <Link href="/" className="logo-link">
                    <img src="/mfar-logo.jpg" alt={`${BRAND} Climatização`} className="header-logo" />
                </Link>

                {/* Centro: Menu Desktop */}
                <nav className="desktop-nav">
                    <Link href="/">Início</Link>
                    <Link href="/curitiba/">Curitiba</Link>
                    <Link href="/curitiba/manutencao-de-ar-condicionado/">Manutenção</Link>
                    <Link href="/curitiba/tecnico-de-ar-condicionado/">Técnico</Link>
                    <Link href="/curitiba/empresa-de-ar-condicionado/">Empresa</Link>
                    <a href="https://loja.mfar.com.br" target="_blank" rel="noopener noreferrer">Loja</a>
                </nav>

                {/* Direita: Botões e Hamburger */}
                <div className="header-actions">
                    <a href={wpLink} target="_blank" rel="noopener noreferrer" className="cta-button btn-whatsapp">
                        WhatsApp
                    </a>
                    <a href="https://mfar.com.br" target="_blank" rel="noopener noreferrer" className="cta-button btn-orcamento">
                        Orçamento
                    </a>

                    <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d={menuOpen ? "M18 6L6 18M6 6l12 12" : "M3 12h18M3 6h18M3 18h18"} />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div className="mobile-menu-dropdown">
                    <nav className="mobile-nav">
                        <Link href="/" onClick={() => setMenuOpen(false)}>Início</Link>
                        <Link href="/curitiba/" onClick={() => setMenuOpen(false)}>Curitiba</Link>
                        <Link href="/curitiba/manutencao-de-ar-condicionado/" onClick={() => setMenuOpen(false)}>Manutenção</Link>
                        <Link href="/curitiba/tecnico-de-ar-condicionado/" onClick={() => setMenuOpen(false)}>Técnico</Link>
                        <Link href="/curitiba/empresa-de-ar-condicionado/" onClick={() => setMenuOpen(false)}>Empresa</Link>
                        <a href="https://loja.mfar.com.br" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>Loja</a>
                    </nav>
                </div>
            )}
        </header>
    );
}
