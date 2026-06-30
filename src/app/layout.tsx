import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";
import { BRAND } from "@/lib/seoData";
import Header from "@/components/Header";

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
        <Header />

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

        {/* Supremeweb CRM Widget — botão flutuante próprio + captura de lead
            antes de qualquer link de WhatsApp (data-auto-whatsapp-links). */}
        <Script
          src="https://crm.supremeweb.com.br/crm-widget/v1.js?v=1.3.2-sites"
          strategy="afterInteractive"
          data-client-slug="mfar"
          data-client-token="5zQRrJbIjOZK_H1QOAhf4QhGmhTcCQnM"
          data-whatsapp="5541998623691"
          data-default-service="Ar Condicionado"
          data-floating-button="true"
          data-button-position="right"
          data-auto-whatsapp-links="true"
        />
      </body>
    </html>
  );
}
