'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const STATS = [
  { value: '15+', label: 'Años' },
  { value: '200+', label: 'Proyectos' },
  { value: '+300%', label: 'ROI' },
  { value: '98', label: 'Web Vitals' },
];

const LOGOS = ['Google', 'Canva', 'PayPal', 'Fiverr', 'Warner'];

export function HeroSection() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 100),
      setTimeout(() => setStep(2), 300),
      setTimeout(() => setStep(3), 500),
      setTimeout(() => setStep(4), 700),
      setTimeout(() => setStep(5), 900),
      setTimeout(() => setStep(6), 1100),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const show = (n: number) => ({
    opacity: step >= n ? 1 : 0,
    transform: step >= n ? 'translateY(0)' : 'translateY(24px)',
    transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
  });

  return (
    <section style={{
      minHeight: '100vh',
      maxHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '100px 0 40px',
    }}>
      {/* === BACKGROUND === */}
      <div style={{
        position: 'absolute', top: '-20%', right: '-10%',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none',
        animation: 'float 25s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', bottom: '-15%', left: '-10%',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none',
        animation: 'float 20s ease-in-out infinite reverse',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(59,130,246,0.03) 1px, transparent 1px)',
        backgroundSize: '32px 32px', pointerEvents: 'none',
      }} />

      {/* === CONTENT === */}
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 300px',
          gap: 48,
          alignItems: 'center',
        }}>

          {/* LEFT: Text */}
          <div>
            {/* Badge */}
            <div style={show(1)}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '6px 16px', borderRadius: 9999,
                background: 'rgba(59,130,246,0.06)',
                border: '1px solid rgba(59,130,246,0.2)',
                fontSize: '0.82rem', fontWeight: 600,
                color: '#60a5fa', backdropFilter: 'blur(8px)',
                marginBottom: 20,
              }}>
                <span style={{
                  width: 7, height: 7, borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 10px rgba(16,185,129,0.6)',
                  animation: 'glow 2s ease-in-out infinite',
                }} />
                Disponible para proyectos
              </span>
            </div>

            {/* H1 */}
            <h1 style={{
              fontSize: 'clamp(2.4rem, 5.5vw, 3.8rem)',
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: '-0.04em',
              marginBottom: 16,
              ...show(2),
            }}>
              Transformo{' '}
              <span style={{
                background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Búsquedas</span>
              <br />en{' '}
              <span style={{
                background: 'linear-gradient(135deg, #f59e0b, #f97316)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Ingresos</span>
            </h1>

            {/* Subtitle */}
            <p style={{
              fontSize: '1.05rem', lineHeight: 1.7,
              color: '#9ca3af', maxWidth: 500,
              marginBottom: 12,
              ...show(3),
            }}>
              Consultor SEO y desarrollador full-stack con +15 años de experiencia.
              Ayudo a empresas a dominar Google con SEO técnico, link building
              y desarrollo web de alto rendimiento.
            </p>

            {/* CTA trust text */}
            <p style={{
              fontSize: '0.82rem', color: '#6b7280',
              marginBottom: 28,
              display: 'flex', gap: 12, flexWrap: 'wrap',
              ...show(3),
            }}>
              <span>✓ Consulta gratuita</span>
              <span>✓ Resultados en 90 días</span>
              <span>✓ Sin contratos largos</span>
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 36, ...show(4) }}>
              <Link href="/contact/" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '12px 28px', borderRadius: 12,
                background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
                color: '#fff', fontWeight: 700, fontSize: '0.95rem',
                textDecoration: 'none',
                boxShadow: '0 8px 32px rgba(245,158,11,0.3)',
                transition: 'all 0.3s ease',
              }}>
                Agendar consulta gratuita
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
              <Link href="/portafolio/" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '12px 28px', borderRadius: 12,
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#d1d5db', fontWeight: 600, fontSize: '0.95rem',
                textDecoration: 'none',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(59,130,246,0.5)';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.color = '#d1d5db';
              }}
              >
                Ver mis proyectos
              </Link>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', marginBottom: 20, ...show(5) }}>
              {STATS.map((s) => (
                <div key={s.label}>
                  <div style={{
                    fontSize: '1.7rem', fontWeight: 900, lineHeight: 1.1,
                    background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>{s.value}</div>
                  <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: 2, fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Trust row - company logos */}
            <div style={{ ...show(6) }}>
              <div style={{
                display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap',
                fontSize: '0.72rem', color: '#4b5563', textTransform: 'uppercase',
                letterSpacing: '0.06em', fontWeight: 600,
              }}>
                <span style={{ opacity: 0.6 }}>Ha trabajado con:</span>
                {LOGOS.map((name) => (
                  <span key={name} style={{
                    fontWeight: 700, color: '#4b5563',
                    letterSpacing: '0.02em',
                  }}>{name}</span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Photo */}
          <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            position: 'relative',
            opacity: step >= 2 ? 1 : 0,
            transform: step >= 2 ? 'scale(1)' : 'scale(0.9)',
            transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
          }}>
            {/* Glow behind photo */}
            <div style={{
              position: 'absolute',
              width: 280, height: 280,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
              filter: 'blur(40px)',
              animation: 'float 8s ease-in-out infinite',
            }} />

            {/* Photo container */}
            <div className="hero-photo" style={{
              width: 240, height: 240,
              borderRadius: '50%',
              overflow: 'hidden',
              border: '3px solid rgba(59,130,246,0.2)',
              boxShadow: '0 0 50px rgba(59,130,246,0.12), 0 16px 32px rgba(0,0,0,0.3)',
              position: 'relative',
              zIndex: 2,
            }}>
              <Image
                src="/img/josegaspard.png"
                alt="José Gaspard - Consultor SEO y Desarrollador Web en México"
                width={240}
                height={240}
                priority
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 48px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            text-align: center;
          }
          .hero-grid > div:first-child {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-grid > div:last-child {
            order: -1;
          }
          .hero-photo {
            width: 160px !important;
            height: 160px !important;
          }
        }
        @media (max-width: 600px) {
          .hero-photo {
            width: 160px !important;
            height: 160px !important;
          }
        }
      `}</style>
    </section>
  );
}
