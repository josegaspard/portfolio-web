'use client';
import { SKILLS } from '@/lib/constants';
import { useEffect, useRef, useState } from 'react';

export function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const categories = [
    { label: 'Frontend & Frameworks', items: SKILLS.frontend },
    { label: 'Backend & Server', items: SKILLS.backend },
    { label: 'SEO & Marketing', items: SKILLS.seo },
    { label: 'Herramientas', items: SKILLS.tools },
    { label: 'CMS', items: SKILLS.cms },
  ];

  let badgeIndex = 0;

  return (
    <section className="section" ref={ref}>
      <div className="container">
        <div className="section-header text-center" style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
        }}>
          <span className="section-badge">Stack Tecnológico</span>
          <h2 className="section-title">Herramientas &amp; <span className="gradient-text">Tecnologías</span></h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 44 }}>
          {categories.map((cat, ci) => (
            <div key={cat.label} style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${ci * 0.1}s`,
            }}>
              <h3 style={{
                fontSize: '0.85rem', fontWeight: 600,
                color: 'var(--text-muted)', textTransform: 'uppercase',
                letterSpacing: '0.06em', marginBottom: 18,
              }}>{cat.label}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                {cat.items.map((skill) => {
                  const idx = badgeIndex++;
                  return (
                    <span key={skill} className="skill-badge" style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.95)',
                      transition: `all 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${0.1 + idx * 0.03}s`,
                    }}>
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
