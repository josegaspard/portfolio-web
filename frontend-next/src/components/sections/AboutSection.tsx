import { ACHIEVEMENTS } from '@/lib/constants';

export function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Sobre Mí</span>
          <h2 className="section-title">El Arquitecto del <span className="gradient-text">Crecimiento Digital</span></h2>
        </div>
        <div className="grid-2" style={{ alignItems: 'start' }}>
          <div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: 24 }}>
              Soy un especialista SEO con resultados comprobados en México y LATAM, transformando estrategias digitales en éxitos medibles: mejores rankings, aumento exponencial del tráfico orgánico y generación efectiva de leads cualificados.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: 24 }}>
              Mi experiencia abarca SEO técnico avanzado, SEO On-Page y Off-Page, estrategias de Link Building de alta calidad y marketing de contenidos estratégico. Me especializo en soluciones web integrales, incluyendo aplicaciones personalizadas, plugins de WordPress y plataformas e-commerce optimizadas para la conversión.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8 }}>
              Como programador y desarrollador web full-stack, combino conocimiento técnico profundo con visión estratégica de negocio — una combinación única en el mercado.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 20 }}>Logros Destacados</h3>
            <div className="achievement-list">
              {ACHIEVEMENTS.map((a, i) => (
                <div key={i} className="achievement-item">
                  <span className="achievement-check">✓</span>
                  <span>{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
