import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="hero">
      <div className="blob blob-indigo" />
      <div className="blob blob-purple" />
      <div className="container hero-content">
        <span className="section-badge">Arquitecto SEO &amp; Ingeniero Full-Stack</span>
        <h1>
          Transformo <span className="gradient-text">Búsquedas</span> en{' '}
          <span className="gradient-text">Ingresos</span>
        </h1>
        <p className="hero-subtitle">
          Estrategias SEO técnicas + desarrollo full-stack para empresas que buscan dominar su mercado.
          Consultor SEO, programador y desarrollador web con +15 años de experiencia en México y LATAM.
        </p>
        <div className="hero-buttons">
          <Link href="/portafolio/" className="btn btn-primary btn-lg">Ver Portafolio</Link>
          <Link href="/contact/" className="btn btn-secondary btn-lg">Contactar</Link>
        </div>
        <div className="hero-stats">
          <div><div className="hero-stat-value">15+</div><div className="hero-stat-label">Años de Experiencia</div></div>
          <div><div className="hero-stat-value">200+</div><div className="hero-stat-label">Proyectos Exitosos</div></div>
          <div><div className="hero-stat-value">+300%</div><div className="hero-stat-label">ROI Promedio</div></div>
        </div>
      </div>
    </section>
  );
}
