'use client';
import { useEffect, useRef, useState } from 'react';

const COLUMNS = [
  {
    title: 'El SEO Solitario',
    description:
      'Entiende de palabras clave pero no sabe por qué el sitio carga lento. Depende de un dev para cada cambio técnico.',
    badge: 'Dependencia Técnica',
    badgeColor: 'rgba(239, 68, 68, 0.15)',
    badgeBorder: 'rgba(239, 68, 68, 0.3)',
    badgeText: '#f87171',
    highlighted: false,
  },
  {
    title: 'El Arquitecto Híbrido',
    description:
      'Ingeniería + Estrategia. Eliminación total de fricción: código de alto rendimiento optimizado para Google desde el minuto cero.',
    badge: 'Dominio Absoluto',
    badgeColor: 'rgba(16, 185, 129, 0.12)',
    badgeBorder: 'rgba(99, 102, 241, 0.4)',
    badgeText: '#10b981',
    highlighted: true,
    eliteBadge: true,
  },
  {
    title: 'El Programador Solitario',
    description:
      'Escribe código limpio pero ignora el CLS y la jerarquía de encabezados. No entiende la intención de búsqueda.',
    badge: 'Desconexión de Negocio',
    badgeColor: 'rgba(239, 68, 68, 0.15)',
    badgeBorder: 'rgba(239, 68, 68, 0.3)',
    badgeText: '#f87171',
    highlighted: false,
  },
];

const TABLE_ROWS = [
  { capability: 'Auditoría SEO Técnica', seo: true, dev: false, hybrid: true },
  { capability: 'Core Web Vitals', seo: false, dev: true, hybrid: true },
  { capability: 'Arquitectura de Información', seo: true, dev: false, hybrid: true },
  { capability: 'Desarrollo Custom', seo: false, dev: true, hybrid: true },
  { capability: 'Link Building Estratégico', seo: true, dev: false, hybrid: true },
  { capability: 'Optimización de Rendimiento', seo: false, dev: true, hybrid: true },
  { capability: 'Intención de Búsqueda', seo: true, dev: false, hybrid: true },
  { capability: 'Implementación Inmediata', seo: false, dev: false, hybrid: true },
];

const ADVANTAGES = [
  {
    icon: '\u26A1',
    title: 'Velocidad de Implementación',
    description:
      'Sin fricción entre equipos. Las optimizaciones técnicas de SEO y código se ejecutan en el mismo sprint, reduciendo tiempos de entrega hasta un 70%.',
  },
  {
    icon: '\uD83D\uDCB0',
    title: 'Ahorro de Costos',
    description:
      'Un solo profesional reemplaza la coordinación entre consultor SEO y equipo de desarrollo. Menos overhead, más resultados directos.',
  },
  {
    icon: '\uD83D\uDD0D',
    title: 'Visión Holística',
    description:
      'Cada línea de código se escribe pensando en el posicionamiento orgánico. Cada estrategia SEO se valida con conocimiento técnico real.',
  },
  {
    icon: '\uD83D\uDD13',
    title: 'Sin Dependencias',
    description:
      'No necesitas esperar a que otro equipo implemente tus cambios. Autonomía total desde la auditoría hasta el deploy en producción.',
  },
];

export function GaspardMethodSection() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stagger = (index: number) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${0.1 + index * 0.12}s`,
  });

  return (
    <section ref={sectionRef} className="section" style={{ overflow: 'hidden' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header text-center" style={stagger(0)}>
          <span className="section-badge">El Método Gaspard</span>
          <h2 className="section-title">
            ¿Por Qué Elegir un{' '}
            <span className="gradient-text">Arquitecto Híbrido</span>?
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            La diferencia entre contratar por separado y tener un experto que domina ambos mundos:
            ingeniería de software y estrategia de crecimiento orgánico.
          </p>
        </div>

        {/* 3-Column Comparison */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          marginBottom: '72px',
        }} className="method-columns">
          {COLUMNS.map((col, i) => (
            <div
              key={col.title}
              className="glass-card"
              style={{
                padding: '28px 20px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'visible',
                ...stagger(i + 1),
                ...(col.highlighted
                  ? {
                      borderColor: 'rgba(59, 130, 246, 0.4)',
                      background:
                        'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(6,182,212,0.06))',
                      boxShadow: '0 0 30px rgba(59,130,246,0.1), 0 12px 32px rgba(0,0,0,0.2)',
                      marginTop: 14,
                    }
                  : {}),
              }}
            >
              {col.eliteBadge && (
                <div style={{
                  position: 'absolute',
                  top: '-13px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--gradient-btn)',
                  color: '#fff',
                  padding: '5px 20px',
                  borderRadius: '9999px',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}>
                  ELITE
                </div>
              )}

              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: 800,
                marginBottom: '16px',
                marginTop: col.eliteBadge ? '8px' : 0,
                ...(col.highlighted
                  ? {
                      background: 'var(--gradient)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }
                  : {}),
              }}>
                {col.title}
              </h3>

              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.92rem',
                lineHeight: 1.75,
                marginBottom: '24px',
                minHeight: '80px',
              }}>
                {col.description}
              </p>

              <span style={{
                display: 'inline-block',
                padding: '6px 18px',
                borderRadius: '9999px',
                background: col.badgeColor,
                border: `1px solid ${col.badgeBorder}`,
                color: col.badgeText,
                fontSize: '0.78rem',
                fontWeight: 700,
              }}>
                {col.badge}
              </span>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div style={{
          ...stagger(5),
          marginBottom: '72px',
          overflowX: 'auto',
        }}>
          <h3 style={{
            fontSize: '1.3rem',
            fontWeight: 800,
            marginBottom: '28px',
            textAlign: 'center',
          }}>
            Comparativa de <span className="gradient-text">Capacidades</span>
          </h3>

          <div className="glass-card" style={{ overflow: 'hidden' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '0.9rem',
            }}>
              <thead>
                <tr>
                  <th style={{
                    padding: '18px 24px',
                    textAlign: 'left',
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--text-muted)',
                    borderBottom: '1px solid var(--border)',
                  }}>
                    Capacidad
                  </th>
                  {['Solo SEO', 'Solo Dev', 'Híbrido'].map((header, idx) => (
                    <th key={header} style={{
                      padding: '18px 24px',
                      textAlign: 'center',
                      fontWeight: 700,
                      fontSize: '0.8rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: idx === 2 ? 'var(--indigo)' : 'var(--text-muted)',
                      borderBottom: '1px solid var(--border)',
                    }}>
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map((row, i) => (
                  <tr key={row.capability} style={{
                    borderBottom:
                      i < TABLE_ROWS.length - 1 ? '1px solid var(--border)' : 'none',
                  }}>
                    <td style={{
                      padding: '16px 24px',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                    }}>
                      {row.capability}
                    </td>
                    {[row.seo, row.dev, row.hybrid].map((val, colIdx) => (
                      <td key={colIdx} style={{
                        padding: '16px 24px',
                        textAlign: 'center',
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        color: val
                          ? colIdx === 2
                            ? '#10b981'
                            : 'var(--text-secondary)'
                          : 'rgba(239, 68, 68, 0.6)',
                      }}>
                        {val ? '\u2713' : '\u2717'}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Advantage Cards */}
        <div style={stagger(7)}>
          <h3 style={{
            fontSize: '1.3rem',
            fontWeight: 800,
            marginBottom: '28px',
            textAlign: 'center',
          }}>
            Ventajas del <span className="gradient-text">Enfoque Híbrido</span>
          </h3>

          <div className="grid-2 advantage-grid" style={{ gap: '24px' }}>
            {ADVANTAGES.map((adv, i) => (
              <div
                key={adv.title}
                className="glass-card"
                style={{
                  padding: '32px 28px',
                  ...stagger(8 + i),
                }}
              >
                <div style={{
                  fontSize: '2rem',
                  marginBottom: '14px',
                  lineHeight: 1,
                }}>
                  {adv.icon}
                </div>
                <h4 style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  marginBottom: '10px',
                }}>
                  {adv.title}
                </h4>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  lineHeight: 1.75,
                }}>
                  {adv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 1024px) {
          .method-columns {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }
          .method-columns > div {
            padding: 20px 16px !important;
          }
          .method-columns h3 {
            font-size: 1.05rem !important;
          }
          .method-columns p {
            font-size: 0.85rem !important;
          }
          .advantage-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </section>
  );
}
