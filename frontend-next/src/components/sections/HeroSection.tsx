'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  return (
    <section className="hero">
      {/* Animated background orbs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      {/* Subtle grid pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(rgba(99, 102, 241, 0.06) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        opacity: 0.5,
        pointerEvents: 'none',
      }} />

      <div className="container hero-content">
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        }}>
          <span className="section-badge">
            <span style={{
              width: 6, height: 6, borderRadius: '50%',
              background: '#10b981',
              display: 'inline-block',
              boxShadow: '0 0 8px rgba(16, 185, 129, 0.6)',
              animation: 'glow 2s ease-in-out infinite',
            }} />
            Arquitecto SEO &amp; Ingeniero Full-Stack
          </span>
        </div>

        <h1 style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.15s',
        }}>
          Transformo{' '}
          <span className="gradient-text">Búsquedas</span>
          <br />
          en <span className="gradient-text">Ingresos</span>
        </h1>

        <p className="hero-subtitle" style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s',
        }}>
          Estrategias SEO técnicas + desarrollo full-stack para empresas que buscan dominar su mercado.
          Consultor SEO, programador y desarrollador web con +15 años de experiencia en México y LATAM.
        </p>

        <div className="hero-buttons" style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.45s',
        }}>
          <Link href="/portafolio/" className="btn btn-primary btn-lg">
            Ver Portafolio
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
          <Link href="/contact/" className="btn btn-secondary btn-lg">Contactar</Link>
        </div>

        <div className="hero-stats" style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s',
        }}>
          {[
            { value: '15+', label: 'Años de Experiencia' },
            { value: '200+', label: 'Proyectos Exitosos' },
            { value: '+300%', label: 'ROI Promedio' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="hero-stat-value">{stat.value}</div>
              <div className="hero-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
