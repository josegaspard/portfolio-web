'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export function SpeakerSection() {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stagger = (index: number) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
    transition: `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${0.1 + index * 0.12}s`,
  });

  return (
    <section ref={sectionRef} className="section" style={{ overflow: 'hidden' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header text-center" style={stagger(0)}>
          <span className="section-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Conferencias &amp; Keynotes
          </span>
          <h2 className="section-title">
            Speaker <span className="gradient-text">Internacional</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Comparto conocimiento sobre SEO técnico, inteligencia artificial y desarrollo web
            en los escenarios más importantes de la industria digital.
          </p>
        </div>

        {/* Featured Keynote Card */}
        <div
          className="highlight-card"
          style={{
            maxWidth: 860,
            margin: '0 auto 48px',
            position: 'relative',
            ...stagger(1),
          }}
        >
          {/* Date badge — top right */}
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '24px',
            background: 'var(--gradient-btn)',
            color: '#fff',
            padding: '6px 18px',
            borderRadius: '9999px',
            fontSize: '0.72rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
          }}>
            FEBRERO 2026
          </div>

          <div style={{ textAlign: 'center' }}>
            {/* Subtitle */}
            <p style={{
              fontSize: '0.88rem',
              fontWeight: 600,
              color: 'var(--text-muted)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}>
              Live Keynote &middot; CDMX
            </p>

            {/* Event name */}
            <h3 style={{
              fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
              fontWeight: 900,
              marginBottom: '12px',
              letterSpacing: '-0.02em',
            }}>
              Warner Play Latino
            </h3>

            {/* Talk title */}
            <p style={{
              fontSize: 'clamp(1.05rem, 2.5vw, 1.3rem)',
              fontWeight: 700,
              marginBottom: '24px',
            }}>
              <span className="gradient-text">AI &amp; the Future of SEO (GEO)</span>
            </p>

            {/* Description */}
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              fontSize: '0.95rem',
              maxWidth: 640,
              margin: '0 auto 28px',
            }}>
              Keynote sobre la transición del SEO tradicional a GEO (Generative Engine Optimization).
              Cómo dominar el tráfico de cultura geek y eSports mediante arquitectura de autoridad,
              procesamiento de datos con agentes de IA y estrategias avanzadas de posicionamiento
              para motores de búsqueda generativos en 2026.
            </p>

            {/* Key Takeaway Quote */}
            <div style={{
              background: 'rgba(99, 102, 241, 0.06)',
              border: '1px solid rgba(99, 102, 241, 0.15)',
              borderRadius: '12px',
              padding: '20px 28px',
              maxWidth: 560,
              margin: '0 auto 28px',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute',
                top: '-1px',
                left: '28px',
                width: '40px',
                height: '3px',
                background: 'var(--gradient)',
                borderRadius: '2px',
              }} />
              <p style={{
                fontStyle: 'italic',
                color: 'var(--text-secondary)',
                fontSize: '0.92rem',
                lineHeight: 1.7,
                margin: 0,
              }}>
                &ldquo;El futuro del SEO no es optimizar para motores de búsqueda,
                es optimizar para motores de respuesta. GEO redefine las reglas del juego.&rdquo;
              </p>
            </div>

            {/* Tags */}
            <div style={{
              display: 'flex',
              gap: '8px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}>
              {[
                'GEO',
                'AI Search',
                'eSports SEO',
                'Query Fan-Out',
                'Conferencia SEO',
                'Marketing Digital',
              ].map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Availability Note */}
        <div style={{
          textAlign: 'center',
          ...stagger(3),
        }}>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1rem',
            marginBottom: '28px',
            lineHeight: 1.7,
          }}>
            Disponible para conferencias de SEO, marketing digital y tecnología.
            <br />
            <span style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
              Formato presencial o virtual. Español e inglés.
            </span>
          </p>

          <Link href="/contact/" className="btn btn-primary">
            Invítame a tu Evento
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
