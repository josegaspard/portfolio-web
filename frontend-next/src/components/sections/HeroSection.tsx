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
    // Staggered entrance: 0→1→2→3→4→5
    const timers = [
      setTimeout(() => setStep(1), 100),
      setTimeout(() => setStep(2), 350),
      setTimeout(() => setStep(3), 600),
      setTimeout(() => setStep(4), 850),
      setTimeout(() => setStep(5), 1100),
      setTimeout(() => setStep(6), 1400),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const show = (n: number) => ({
    opacity: step >= n ? 1 : 0,
    transform: step >= n ? 'translateY(0)' : 'translateY(32px)',
    transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
  });

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '120px 0 80px',
    }}>
      {/* === BACKGROUND === */}
      {/* Gradient orbs */}
      <div style={{
        position: 'absolute', top: '-20%', right: '-10%',
        width: 700, height: 700, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none',
        animation: 'float 25s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', bottom: '-15%', left: '-10%',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(168,85,247,0.10) 0%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none',
        animation: 'float 20s ease-in-out infinite reverse',
      }} />
      {/* Grid dots */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(99,102,241,0.04) 1px, transparent 1px)',
        backgroundSize: '32px 32px', pointerEvents: 'none',
      }} />

      {/* === CONTENT === */}
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 400px',
          gap: 60,
          alignItems: 'center',
        }} className="hero-grid">

          {/* LEFT: Text */}
          <div>
            {/* Badge */}
            <div style={show(1)}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '8px 20px', borderRadius: 9999,
                background: 'rgba(99,102,241,0.06)',
                border: '1px solid rgba(99,102,241,0.2)',
                fontSize: '0.85rem', fontWeight: 600,
                color: '#818cf8', backdropFilter: 'blur(8px)',
                marginBottom: 28,
              }}>
                <span style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 12px rgba(16,185,129,0.6)',
                  animation: 'glow 2s ease-in-out infinite',
                }} />
                Disponible para proyectos
              </span>
            </div>

            {/* H1 */}
            <h1 style={{
              fontSize: 'clamp(2.8rem, 6vw, 4.2rem)',
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: '-0.04em',
              marginBottom: 24,
              ...show(2),
            }}>
              Transformo{' '}
              <span style={{
                background: 'linear-gradient(135deg, #818cf8, #a78bfa, #c084fc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Búsquedas</span>
              <br />en{' '}
              <span style={{
                background: 'linear-gradient(135deg, #c084fc, #e879f9, #f472b6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Ingresos</span>
            </h1>

            {/* Subtitle */}
            <p style={{
              fontSize: '1.15rem', lineHeight: 1.8,
              color: '#9ca3af', maxWidth: 520,
              marginBottom: 40,
              ...show(3),
            }}>
              Consultor SEO y desarrollador full-stack con +15 años de experiencia.
              Ayudo a empresas a dominar Google con SEO técnico, link building
              y desarrollo web de alto rendimiento.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 56, ...show(4) }}>
              <Link href="/portafolio/" className="btn btn-primary btn-lg">
                Ver mis proyectos
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
              <Link href="/contact/" className="btn btn-secondary btn-lg">
                Agendar consulta
              </Link>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap', ...show(5) }}>
              {STATS.map((s) => (
                <div key={s.label}>
                  <div style={{
                    fontSize: '2rem', fontWeight: 900, lineHeight: 1.1,
                    background: 'linear-gradient(135deg, #818cf8, #c084fc)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>{s.value}</div>
                  <div style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: 4, fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Trusted by logos */}
            <div style={{ marginTop: 48, ...show(6) }}>
              <div style={{ fontSize: '0.75rem', color: '#4b5563', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, marginBottom: 16 }}>
                Ha trabajado con
              </div>
              <div style={{ display: 'flex', gap: 28, alignItems: 'center', flexWrap: 'wrap' }}>
                {LOGOS.map((name) => (
                  <span key={name} style={{
                    fontSize: '0.9rem', fontWeight: 700,
                    color: '#374151', letterSpacing: '0.02em',
                    transition: 'color 0.3s ease',
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
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
          }}>
            {/* Glow behind photo */}
            <div style={{
              position: 'absolute',
              width: 340, height: 340,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
              filter: 'blur(40px)',
              animation: 'float 8s ease-in-out infinite',
            }} />

            {/* Outer ring */}
            <div style={{
              position: 'absolute',
              width: 320, height: 320,
              borderRadius: '50%',
              border: '1px solid rgba(99,102,241,0.12)',
              animation: 'float 12s ease-in-out infinite reverse',
            }} />

            {/* Photo container */}
            <div style={{
              width: 280, height: 280,
              borderRadius: '50%',
              overflow: 'hidden',
              border: '3px solid rgba(99,102,241,0.25)',
              boxShadow: '0 0 60px rgba(99,102,241,0.15), 0 20px 40px rgba(0,0,0,0.3)',
              position: 'relative',
              zIndex: 2,
            }}>
              <Image
                src="/img/josegaspard.png"
                alt="José Gaspard - Consultor SEO y Desarrollador Web en México"
                width={280}
                height={280}
                priority
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>

            {/* Floating badges around photo */}
            <div style={{
              position: 'absolute', top: 10, right: -20,
              padding: '8px 16px', borderRadius: 9999,
              background: 'rgba(17,24,39,0.7)',
              border: '1px solid rgba(99,102,241,0.2)',
              backdropFilter: 'blur(12px)',
              fontSize: '0.75rem', fontWeight: 600,
              color: '#9ca3af',
              animation: 'float 6s ease-in-out infinite',
              opacity: step >= 5 ? 1 : 0,
              transition: 'opacity 0.8s ease 1.2s',
            }}>
              <span style={{ color: '#818cf8', fontWeight: 800 }}>98/100</span> Web Vitals
            </div>

            <div style={{
              position: 'absolute', bottom: 20, left: -30,
              padding: '8px 16px', borderRadius: 9999,
              background: 'rgba(17,24,39,0.7)',
              border: '1px solid rgba(168,85,247,0.2)',
              backdropFilter: 'blur(12px)',
              fontSize: '0.75rem', fontWeight: 600,
              color: '#9ca3af',
              animation: 'float 7s ease-in-out infinite 2s',
              opacity: step >= 5 ? 1 : 0,
              transition: 'opacity 0.8s ease 1.5s',
            }}>
              <span style={{ color: '#c084fc', fontWeight: 800 }}>#1</span> Rankings
            </div>

            <div style={{
              position: 'absolute', bottom: -10, right: 10,
              padding: '8px 16px', borderRadius: 9999,
              background: 'rgba(17,24,39,0.7)',
              border: '1px solid rgba(16,185,129,0.2)',
              backdropFilter: 'blur(12px)',
              fontSize: '0.75rem', fontWeight: 600,
              color: '#9ca3af',
              animation: 'float 8s ease-in-out infinite 1s',
              opacity: step >= 5 ? 1 : 0,
              transition: 'opacity 0.8s ease 1.8s',
            }}>
              <span style={{ color: '#34d399', fontWeight: 800 }}>+300%</span> Traffic
            </div>
          </div>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center;
          }
          .hero-grid > div:last-child {
            order: -1;
          }
          .hero-grid > div:last-child > div:nth-child(3) {
            width: 220px !important;
            height: 220px !important;
          }
        }
      `}</style>
    </section>
  );
}
