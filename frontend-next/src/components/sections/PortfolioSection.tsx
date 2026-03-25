import Link from 'next/link';
import { PORTFOLIO_PROJECTS } from '@/lib/constants';

export function PortfolioSection() {
  return (
    <section className="section" id="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Portafolio</span>
          <h2 className="section-title">Casos de <span className="gradient-text">Éxito</span></h2>
          <p className="section-subtitle">Resultados reales de optimización SEO y desarrollo web para empresas de diversos sectores.</p>
        </div>
        <div className="grid-3">
          {PORTFOLIO_PROJECTS.map((p) => (
            <Link key={p.slug} href={`/portafolio/${p.slug}/`} className="glass-card project-card">
              <div className="project-image">
                <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, var(--bg-tertiary), var(--bg-secondary))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  {p.title}
                </div>
                <div className="project-overlay">
                  <span className="btn btn-primary btn-sm">Ver Proyecto →</span>
                </div>
              </div>
              <div className="project-body">
                <div className="project-tags">
                  {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="project-meta">
                  <span>{p.year}</span>
                  <span>{p.industry}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <Link href="/portafolio/" className="btn btn-secondary">Ver Todos los Proyectos</Link>
        </div>
      </div>
    </section>
  );
}
