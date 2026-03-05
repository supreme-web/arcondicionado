import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { BRAND } from "@/lib/seoData";
import { getWhatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: `Ar Condicionado em Curitiba | ${BRAND} Climatização`,
  description: "Especialista em instalação, manutenção e limpeza de ar condicionado em todos os bairros de Curitiba. Atendimento ágil e garantia MFAR.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const wpLink = getWhatsappLink();
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <div className="container">
            <nav>
              <Link href="/" className="logo">{BRAND}</Link>
              <div className="nav-links">
                <Link href="/">Início</Link>
                <Link href="/curitiba/">Curitiba</Link>
                <Link href="/curitiba/manutencao-de-ar-condicionado/">Manutenção</Link>
                <Link href="/curitiba/tecnico-de-ar-condicionado/">Técnico</Link>
                <Link href="/curitiba/empresa-de-ar-condicionado/">Empresa</Link>
                <a href="https://loja.mfar.com.br" target="_blank" rel="noopener noreferrer">Loja</a>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <a href={wpLink} target="_blank" rel="noopener noreferrer" className="cta-button" style={{ backgroundColor: "#25D366", borderColor: "#25D366" }}>WhatsApp</a>
                <a href="https://mfar.com.br" target="_blank" rel="noopener noreferrer" className="cta-button">Orçamento</a>
              </div>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer>
          <div className="container">
            <p>&copy; {new Date().getFullYear()} {BRAND} Climatização - Todos os direitos reservados.</p>
            <p style={{ marginTop: '10px', fontSize: '0.8rem', opacity: '0.6' }}>Especialista em Ar Condicionado em Curitiba e Região Metropolitana.</p>
            <div className="footer-links">
              <a href="https://mfar.com.br" target="_blank" rel="noopener noreferrer">Site Oficial</a>
              <a href="https://loja.mfar.com.br" target="_blank" rel="noopener noreferrer">Loja Virtual</a>
              <Link href="/curitiba/">Mapa de Bairros</Link>
            </div>
          </div>
        </footer>

        {/* WhatsApp Floating Button */}
        <a
          href={wpLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#25D366",
            color: "#fff",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            zIndex: 9999,
            fontSize: "24px",
            textDecoration: "none"
          }}
          aria-label="Falar conosco no WhatsApp"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </a>
      </body>
    </html>
  );
}
