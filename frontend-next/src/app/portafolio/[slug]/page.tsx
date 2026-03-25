import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { PORTFOLIO_PROJECTS } from '@/lib/constants';
import Link from 'next/link';

export function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: 'Proyecto no encontrado' };
  return {
    title: `${project.title} | Portafolio José Gaspard`,
    description: project.description,
    alternates: { canonical: `https://josegaspard.dev/portafolio/${project.slug}/` },
  };
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
  if (!project) return <div>Proyecto no encontrado</div>;

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Inicio', url: 'https://josegaspard.dev' },
        { name: 'Portafolio', url: 'https://josegaspard.dev/portafolio/' },
        { name: project.title, url: `https://josegaspard.dev/portafolio/${project.slug}/` },
      ]} />
      <Header />
      <main>
        <section className="hero" style={{ minHeight: '50vh' }}>
          <div className="blob blob-indigo" />
          <div className="container hero-content">
            <Link href="/portafolio/" style={{ color: 'var(--accent-indigo)', fontSize: '0.9rem', marginBottom: 16, display: 'inline-block' }}>← Volver al Portafolio</Link>
            <div className="project-tags" style={{ marginBottom: 16 }}>
              {project.tags.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>{project.title}</h1>
            <p className="hero-subtitle">{project.description}</p>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Cliente: {project.client} · {project.year} · {project.industry}</div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="section-title mb-8">Resultados <span className="gradient-text">Obtenidos</span></h2>
            <div className="grid-4">
              {project.results.map((r, i) => (
                <div key={i} className="glass-card stat-card">
                  <div className="stat-value">{r.metric}</div>
                  <div className="stat-label">{r.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container" style={{ position: 'relative' }}>
            <h2>¿Quieres Resultados <span className="gradient-text">Similares</span>?</h2>
            <p>Contacta conmigo para una consulta gratuita y descubre cómo puedo ayudar a tu negocio.</p>
            <Link href="/contact/" className="btn btn-primary btn-lg">Agendar Consulta</Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
