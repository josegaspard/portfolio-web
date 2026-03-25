'use client';
import { ACHIEVEMENTS } from '@/lib/constants';
import { useEffect, useRef, useState } from 'react';

export function AboutSection() {
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
    <section className="section" id="about" ref={ref} style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        <div className="section-header" style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
        }}>
          <span className="section-badge">Sobre Mí</span>
          <h2 className="section-title">El Arquitecto del <span className="gradient-text">Crecimiento Digital</span></h2>
        </div>
        <div className="grid-2" style={{ alignItems: 'start', gap: 56 }}>
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(-24px)',
            transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
          }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: 24 }}>
              Soy un especialista SEO con resultados comprobados en México y LATAM, transformando estrategias digitales en éxitos medibles: mejores rankings, aumento exponencial del tráfico orgánico y generación efectiva de leads cualificados.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: 24 }}>
              Mi experiencia abarca SEO técnico avanzado, SEO On-Page y Off-Page, estrategias de Link Building de alta calidad y marketing de contenidos estratégico. Me especializo en soluciones web integrales, incluyendo aplicaciones personalizadas y plataformas e-commerce.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.85 }}>
              Como programador y desarrollador web full-stack, combino conocimiento técnico profundo con visión estratégica de negocio — una combinación única en el mercado.
            </p>
          </div>
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(24px)',
            transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.35s',
          }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 24 }}>Logros Destacados</h3>
            <div className="achievement-list">
              {ACHIEVEMENTS.map((a, i) => (
                <div key={i} className="achievement-item" style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateX(0)' : 'translateX(16px)',
                  transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${0.4 + i * 0.06}s`,
                }}>
                  <span className="achievement-check">✓</span>
                  <span>{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
