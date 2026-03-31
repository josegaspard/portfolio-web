import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { PORTFOLIO_PROJECTS } from '@/lib/constants';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Portafolio de Proyectos SEO y Desarrollo Web | José Gaspard',
  description: 'Casos de éxito reales en SEO técnico y desarrollo web. Aumentos de 300-500% en tráfico orgánico para e-commerce, SaaS y sitios corporativos.',
  keywords: ['portafolio seo', 'casos de éxito seo', 'proyectos web', 'desarrollo nextjs', 'optimización seo'],
  alternates: { canonical: 'https://josegaspard.dev/portafolio/' },
};

export default function PortfolioPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Inicio', url: 'https://josegaspard.dev' }, { name: 'Portafolio', url: 'https://josegaspard.dev/portafolio/' }]} />
      <Header />
      <main>
        <section className="hero" style={{ minHeight: '50vh' }}>
          <div className="blob blob-indigo" />
          <div className="container hero-content text-center" style={{ maxWidth: 700, margin: '0 auto' }}>
            <span className="section-badge">Portafolio</span>
            <h1>Mi <span className="gradient-text">Portafolio</span></h1>
            <p className="hero-subtitle" style={{ margin: '0 auto' }}>Casos de éxito reales que demuestran resultados medibles en SEO y desarrollo web.</p>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="grid-3">
              {PORTFOLIO_PROJECTS.map((p) => (
                <Link key={p.slug} href={`/portafolio/${p.slug}/`} className="glass-card project-card">
                  <div className="project-image">
                    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, var(--bg-tertiary), var(--bg-secondary))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontSize: '0.9rem', padding: 20, textAlign: 'center' }}>{p.title}</div>
                    <div className="project-overlay"><span className="btn btn-primary btn-sm">Ver Proyecto →</span></div>
                  </div>
                  <div className="project-body">
                    <div className="project-tags">{p.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    <div className="project-meta"><span>{p.year}</span><span>{p.industry}</span></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
