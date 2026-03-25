'use client';
import Link from 'next/link';
import { SERVICES_PILLARS } from '@/lib/constants';
import { useEffect, useRef, useState } from 'react';

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="services" ref={ref}>
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">Servicios</span>
          <h2 className="section-title">Los 6 Pilares del <span className="gradient-text">SEO Engineering</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Servicio de SEO integral que combina optimización técnica, link building estratégico y desarrollo web profesional.
          </p>
        </div>
        <div className="grid-3">
          {SERVICES_PILLARS.map((s, i) => (
            <div
              key={s.number}
              className="glass-card service-card"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(28px)',
                transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.1}s`,
              }}
            >
              <span className="service-number">{s.number}</span>
              <div style={{
                width: 48, height: 48,
                borderRadius: 12,
                background: `linear-gradient(135deg, rgba(99, 102, 241, ${0.1 + i * 0.02}), rgba(168, 85, 247, ${0.05 + i * 0.02}))`,
                border: '1px solid rgba(99, 102, 241, 0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 20,
                fontSize: '1.2rem',
              }}>
                {['⚡', '🔗', '📝', '📊', '🤖', '🎯'][i]}
              </div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 56 }}>
          <Link href="/services/" className="btn btn-primary">
            Ver Todos los Servicios
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
