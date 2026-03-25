'use client';
import Link from 'next/link';
import { PORTFOLIO_PROJECTS } from '@/lib/constants';
import { useEffect, useRef, useState } from 'react';

const GRADIENTS = [
  'linear-gradient(135deg, #1a1a3e 0%, #0f172a 100%)',
  'linear-gradient(135deg, #1a1a2e 0%, #0a1628 100%)',
  'linear-gradient(135deg, #1e1a2e 0%, #0f0a1e 100%)',
];

export function PortfolioSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="portfolio" ref={ref}>
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">Portafolio</span>
          <h2 className="section-title">Casos de <span className="gradient-text">Éxito</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Resultados reales de optimización SEO y desarrollo web para empresas de diversos sectores.
          </p>
        </div>
        <div className="grid-3">
          {PORTFOLIO_PROJECTS.map((p, i) => (
            <Link
              key={p.slug}
              href={`/portafolio/${p.slug}/`}
              className="glass-card project-card"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(28px)',
                transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.12}s`,
              }}
            >
              <div className="project-image" style={{ background: GRADIENTS[i] }}>
                <div style={{
                  width: '100%', height: '100%',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  padding: 28, textAlign: 'center', gap: 12,
                }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: 14,
                    background: 'rgba(99, 102, 241, 0.12)',
                    border: '1px solid rgba(99, 102, 241, 0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.5rem',
                  }}>
                    {['🛒', '🚀', '🏢'][i]}
                  </div>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 600 }}>{p.subtitle}</span>
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
                <div className="project-meta"><span>{p.year}</span><span>{p.industry}</span></div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 56 }}>
          <Link href="/portafolio/" className="btn btn-secondary">Ver Todos los Proyectos</Link>
        </div>
      </div>
    </section>
  );
}
