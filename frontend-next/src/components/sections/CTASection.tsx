import Link from 'next/link';

export function CTASection() {
  return (
    <section className="cta-section">
      <div className="container" style={{ position: 'relative' }}>
        <h2>¿Listo para <span className="gradient-text">Dominar Google</span>?</h2>
        <p>Agenda una consulta gratuita y descubre cómo puedo transformar tu presencia digital con SEO técnico y desarrollo web profesional.</p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact/" className="btn btn-primary btn-lg">Agendar Consulta</Link>
          <Link href="/portafolio/" className="btn btn-secondary btn-lg">Ver Portafolio</Link>
        </div>
      </div>
    </section>
  );
}
