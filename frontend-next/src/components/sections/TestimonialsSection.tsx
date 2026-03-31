'use client';
import { TESTIMONIALS } from '@/lib/constants';
import { useEffect, useRef, useState } from 'react';

export function TestimonialsSection() {
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
    <section className="section" ref={ref} style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">Testimonios</span>
          <h2 className="section-title">Lo Que Dicen Mis <span className="gradient-text">Clientes</span></h2>
        </div>
        <div className="grid-3">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="glass-card testimonial-card"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.12}s`,
              }}
            >
              {/* Stars */}
              <div style={{ marginBottom: 20, display: 'flex', gap: 4 }}>
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="#eab308" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: 'var(--gradient-btn)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1rem', fontWeight: 700, color: '#fff',
                  flexShrink: 0,
                }}>
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="testimonial-author">{t.author}</div>
                  <div className="testimonial-position">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
