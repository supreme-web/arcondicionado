import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { BRAND } from "@/lib/seoData";

export const metadata: Metadata = {
  title: `Ar Condicionado em Curitiba | ${BRAND} Climatização`,
  description: "Especialista em instalação, manutenção e limpeza de ar condicionado em todos os bairros de Curitiba. Atendimento ágil e garantia MFAR.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
                <a href="https://loja.mfar.com.br" target="_blank">Loja</a>
              </div>
              <a href="https://mfar.com.br" target="_blank" className="cta-button">Orçamento</a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer>
          <div className="container">
            <p>&copy; {new Date().getFullYear()} {BRAND} Climatização - Todos os direitos reservados.</p>
            <p style={{ marginTop: '10px', fontSize: '0.8rem', opacity: '0.6' }}>Especialista em Ar Condicionado em Curitiba e Região Metropolitana.</p>
            <div className="footer-links">
              <a href="https://mfar.com.br" target="_blank">Site Oficial</a>
              <a href="https://loja.mfar.com.br" target="_blank">Loja Virtual</a>
              <Link href="/curitiba/">Mapa de Bairros</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
