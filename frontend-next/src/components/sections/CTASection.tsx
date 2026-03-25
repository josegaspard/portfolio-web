'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="cta-section" ref={ref}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative' }}>
        <h2 style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
        }}>
          ¿Listo para <span className="gradient-text">Dominar Google</span>?
        </h2>
        <p style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.15s',
        }}>
          Agenda una consulta gratuita y descubre cómo puedo transformar tu presencia digital con SEO técnico y desarrollo web profesional.
        </p>
        <div style={{
          display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.3s',
        }}>
          <Link href="/contact/" className="btn btn-primary btn-lg">
            Agendar Consulta
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
          <Link href="/portafolio/" className="btn btn-secondary btn-lg">Ver Portafolio</Link>
        </div>
      </div>
    </section>
  );
}
