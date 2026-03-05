import { BRAND, INTENTS, BAIRROS } from "@/lib/seoData";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Especialista em Ar Condicionado em Curitiba</h1>
          <p>Conforto térmico, ar puro e economia de energia para sua casa ou empresa em Curitiba. A MFAR é sua parceira ideal em climatização.</p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '30px' }}>
            <a href="https://mfar.com.br" className="cta-button">Solicitar Orçamento</a>
            <Link href="/curitiba/" className="cta-button" style={{ background: 'var(--primary)' }}>Ver Bairros</Link>
          </div>
        </div>
      </section>

      <section className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Nossos Principais Serviços</h2>
        <div className="grid">
          {INTENTS.map((intent) => (
            <div key={intent.slug} className="card">
              <h3>{intent.label}</h3>
              <p style={{ marginBottom: '20px' }}>{intent.descTemplate()}</p>
              <Link href={`/curitiba/${intent.slug}/`} style={{ color: 'var(--secondary)', fontWeight: 'bold' }}>
                Saiba Mais &rarr;
              </Link>
            </div>
          ))}
          <div className="card">
            <h3>Peças de Ar Condicionado</h3>
            <p style={{ marginBottom: '20px' }}>
              Encontre peças e acessórios para ar condicionado com qualidade e procedência. Trabalhamos com componentes compatíveis para manutenção e reposição em diversos modelos.
            </p>
            <Link href="/produtos" style={{ color: 'var(--secondary)', fontWeight: 'bold' }}>
              Saiba Mais &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--light)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Atendimento em Toda Curitiba</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '15px' }}>
            {BAIRROS.map(bairro => (
              <Link key={bairro} href={`/curitiba/${bairro}/ar-condicionado/`} style={{ padding: '10px', background: 'white', borderRadius: '5px', textAlign: 'center', fontSize: '0.9rem', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                {bairro.replace(/-/g, ' ')}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container" style={{ textAlign: 'center' }}>
        <h2>Por que escolher a {BRAND}?</h2>
        <div className="grid" style={{ marginTop: '40px' }}>
          <div style={{ padding: '20px' }}>
            <h4 style={{ color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '10px' }}>10+ Anos</h4>
            <p>De experiência no mercado paranaense.</p>
          </div>
          <div style={{ padding: '20px' }}>
            <h4 style={{ color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '10px' }}>Premium</h4>
            <p>Atendimento técnico especializado e ágil.</p>
          </div>
          <div style={{ padding: '20px' }}>
            <h4 style={{ color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '10px' }}>Garantia</h4>
            <p>Suporte completo em todos os serviços realizados.</p>
          </div>
        </div>
      </section>
    </>
  );
}
