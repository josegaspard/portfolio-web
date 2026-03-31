'use client';
import { useEffect, useRef, useState } from 'react';

const METRICS = [
  { icon: '\uD83D\uDCC8', name: 'Organic Traffic', value: '+300%', sub: 'Crecimiento Orgánico' },
  { icon: '\uD83C\uDFD7\uFE0F', name: 'Frontend Architecture', value: 'Signals Ready', sub: 'Estructura Optimizada' },
  { icon: '\uD83D\uDD0D', name: 'Technical SEO Audit', value: 'Passed', sub: 'Auditoría Completa' },
  { icon: '\uD83D\uDD17', name: 'Authority High DA Links', value: 'DA 85+', sub: 'Links de Autoridad' },
  { icon: '\u26A1', name: 'Backend Speed', value: '100ms', sub: 'Tiempo de Respuesta' },
  { icon: '\uD83C\uDFAF', name: 'Core Web Vitals', value: '98/100', sub: 'Puntuación Lighthouse' },
  { icon: '\uD83C\uDFC6', name: 'Top Rankings', value: '#1 Position', sub: 'Posición en SERPs' },
  { icon: '\uD83D\uDE80', name: 'Performance', value: 'Optimized', sub: 'Rendimiento Máximo' },
  { icon: '\u2705', name: 'Search Console', value: 'Verified', sub: 'Propiedad Verificada' },
  { icon: '\uD83D\uDCBB', name: 'Clean Code', value: 'A+ Quality', sub: 'Calidad de Código' },
];

export function GrowthBoardSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stagger = (index: number) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.96)',
    transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${0.08 + index * 0.08}s`,
  });

  return (
    <section
      ref={sectionRef}
      className="section"
      style={{ overflow: 'hidden', position: 'relative' }}
    >
      {/* Subtle radial glow behind the grid */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '800px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div className="section-header text-center" style={stagger(0)}>
          <span className="section-badge">Resultados</span>
          <h2 className="section-title">
            Ecosistema de <span className="gradient-text">Crecimiento Verificado</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Cada métrica representa un pilar de la estrategia de posicionamiento SEO y desarrollo
            web que aplico en cada proyecto.
          </p>
        </div>

        {/* Metrics Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '20px',
          position: 'relative',
        }} className="growth-grid">
          {METRICS.map((metric, i) => (
            <div
              key={metric.name}
              className="glass-card"
              style={{
                padding: '28px 20px',
                textAlign: 'center',
                position: 'relative',
                ...stagger(i + 1),
              }}
            >
              {/* Subtle connecting dots — top-left & bottom-right of each card */}
              {i > 0 && (
                <div style={{
                  position: 'absolute',
                  top: '-3px',
                  left: '-3px',
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'rgba(99, 102, 241, 0.3)',
                }} />
              )}
              {i < METRICS.length - 1 && (
                <div style={{
                  position: 'absolute',
                  bottom: '-3px',
                  right: '-3px',
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'rgba(168, 85, 247, 0.3)',
                }} />
              )}

              {/* Icon */}
              <div style={{
                fontSize: '1.8rem',
                marginBottom: '12px',
                lineHeight: 1,
              }}>
                {metric.icon}
              </div>

              {/* Value — gradient text */}
              <div style={{
                fontSize: '1.3rem',
                fontWeight: 900,
                background: 'var(--gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '6px',
                lineHeight: 1.2,
              }}>
                {metric.value}
              </div>

              {/* Name */}
              <div style={{
                fontSize: '0.82rem',
                fontWeight: 700,
                color: 'var(--text)',
                marginBottom: '4px',
              }}>
                {metric.name}
              </div>

              {/* Sub-label */}
              <div style={{
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                fontWeight: 500,
              }}>
                {metric.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive grid */}
      <style>{`
        @media (max-width: 1024px) {
          .growth-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .growth-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 14px !important;
          }
        }
      `}</style>
    </section>
  );
}
