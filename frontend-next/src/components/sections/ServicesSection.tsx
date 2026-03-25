import Link from 'next/link';
import { SERVICES_PILLARS } from '@/lib/constants';

export function ServicesSection() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Servicios</span>
          <h2 className="section-title">Los 6 Pilares del <span className="gradient-text">SEO Engineering</span></h2>
          <p className="section-subtitle">Servicio de SEO integral que combina optimización técnica, link building estratégico y desarrollo web profesional.</p>
        </div>
        <div className="grid-3">
          {SERVICES_PILLARS.map((s) => (
            <div key={s.number} className="glass-card service-card">
              <span className="service-number">{s.number}</span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <Link href="/services/" className="btn btn-primary">Ver Todos los Servicios</Link>
        </div>
      </div>
    </section>
  );
}
