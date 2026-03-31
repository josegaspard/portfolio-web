'use client';
import { useState } from 'react';
import { EXPERIENCE } from '@/lib/constants';

export function ExperienceSection() {
  const [showAll, setShowAll] = useState(false);
  const items = showAll ? EXPERIENCE : EXPERIENCE.slice(0, 5);

  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Experiencia</span>
          <h2 className="section-title">Trayectoria <span className="gradient-text">Profesional</span></h2>
          <p className="section-subtitle">Más de 15 años trabajando con empresas líderes como Google, Canva y PayPal.</p>
        </div>
        <div className="timeline">
          {items.map((exp, i) => (
            <div key={i} className={`timeline-item ${exp.isCurrent ? 'current' : ''}`}>
              <div className="timeline-company">{exp.company}</div>
              <div className="timeline-role">{exp.role}</div>
              <div className="timeline-period">{exp.period}</div>
              <div className="timeline-desc">{exp.description}</div>
            </div>
          ))}
        </div>
        {!showAll && EXPERIENCE.length > 5 && (
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <button className="btn btn-secondary" onClick={() => setShowAll(true)}>
              Ver Toda la Experiencia ({EXPERIENCE.length - 5} más)
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
