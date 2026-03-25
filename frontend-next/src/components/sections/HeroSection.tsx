'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const FLOATING_METRICS = [
  { label: 'Core Web Vitals', value: '98/100', top: '12%', left: '2%', delay: 0.8 },
  { label: 'Organic Traffic', value: '+300%', top: '8%', right: '5%', delay: 1.0 },
  { label: 'Authority Links', value: 'DA 85+', top: '35%', right: '0%', delay: 1.2 },
  { label: 'Top Rankings', value: '#1', bottom: '38%', right: '3%', delay: 1.4 },
  { label: 'Backend Speed', value: '100ms', bottom: '18%', right: '8%', delay: 1.6 },
  { label: 'Performance', value: 'Optimized', bottom: '12%', left: '5%', delay: 1.8 },
  { label: 'Search Console', value: 'Verified', top: '55%', left: '0%', delay: 2.0 },
  { label: 'Clean Code', value: 'A+', top: '28%', left: '1%', delay: 2.2 },
];

export function HeroSection() {
  const [visible, setVisible] = useState(false);
  const [metricsVisible, setMetricsVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => setMetricsVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" style={{ position: 'relative' }}>
      {/* Animated background blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      {/* Dot grid pattern overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(rgba(99, 102, 241, 0.06) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        opacity: 0.5,
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      {/* Floating metric badges — desktop only */}
      {FLOATING_METRICS.map((metric, i) => (
        <div
          key={metric.label}
          style={{
            position: 'absolute',
            top: metric.top,
            left: metric.left,
            right: metric.right,
            bottom: metric.bottom,
            zIndex: 3,
            opacity: metricsVisible ? 1 : 0,
            transform: metricsVisible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.9)',
            transition: `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${metric.delay}s`,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            borderRadius: '9999px',
            background: 'rgba(17, 24, 39, 0.6)',
            border: '1px solid rgba(99, 102, 241, 0.2)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            fontSize: '0.72rem',
            fontWeight: 500,
            color: 'var(--text-secondary)',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            animation: metricsVisible ? `float ${18 + i * 2}s ease-in-out infinite ${i * 0.5}s` : 'none',
          }}
          className="hero-floating-metric"
        >
          <span style={{
            fontWeight: 800,
            fontSize: '0.78rem',
            background: 'var(--gradient)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            {metric.value}
          </span>
          {metric.label}
        </div>
      ))}

      <div className="container hero-content" style={{ position: 'relative', zIndex: 4 }}>
        {/* Availability badge */}
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        }}>
          <span className="section-badge">
            <span style={{
              width: 8, height: 8, borderRadius: '50%',
              background: '#10b981',
              display: 'inline-block',
              boxShadow: '0 0 8px rgba(16, 185, 129, 0.6)',
              animation: 'glow 2s ease-in-out infinite',
              flexShrink: 0,
            }} />
            Disponible para proyectos &middot; Arquitecto SEO &amp; Ingeniero Full-Stack
          </span>
        </div>

        {/* Profile photo placeholder + heading row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
          flexWrap: 'wrap',
          marginBottom: '8px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s',
        }}>
          {/* Profile photo placeholder */}
          <div style={{
            width: 160,
            height: 160,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #6366f1, #a855f7)',
            border: '3px solid rgba(99,102,241,0.3)',
            boxShadow: '0 0 40px rgba(99,102,241,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            position: 'relative',
          }}>
            <span style={{
              fontSize: '3.2rem',
              fontWeight: 900,
              color: '#fff',
              letterSpacing: '-0.02em',
              lineHeight: 1,
            }}>JG</span>
            {/* Outer glow ring */}
            <div style={{
              position: 'absolute',
              inset: '-6px',
              borderRadius: '50%',
              border: '2px solid rgba(99,102,241,0.15)',
              animation: 'glow 3s ease-in-out infinite',
            }} />
          </div>
        </div>

        {/* H1 */}
        <h1 style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
        }}>
          Transformo{' '}
          <span className="gradient-text">Búsquedas</span>
          <br />
          en <span className="gradient-text">Ingresos</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle" style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.35s',
        }}>
          Estrategias de SEO técnico avanzado combinadas con desarrollo full-stack de alto rendimiento
          para empresas que buscan dominar su mercado digital. Consultor SEO, programador
          y desarrollador web con +15 años de experiencia en México y LATAM.
        </p>

        {/* CTA Buttons */}
        <div className="hero-buttons" style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.5s',
        }}>
          <Link href="/portafolio/" className="btn btn-primary btn-lg">
            Ver Portafolio
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link href="/contact/" className="btn btn-secondary btn-lg">
            Agendar Consulta
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Stats row */}
        <div className="hero-stats" style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.65s',
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

      {/* Hide floating metrics on mobile/tablet */}
      <style>{`
        .hero-floating-metric {
          display: none !important;
        }
        @media (min-width: 1025px) {
          .hero-floating-metric {
            display: flex !important;
          }
        }
      `}</style>
    </section>
  );
}
