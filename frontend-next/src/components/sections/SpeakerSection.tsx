export function SpeakerSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">Conferencias</span>
          <h2 className="section-title">Keynote <span className="gradient-text">Speaker</span></h2>
        </div>
        <div className="highlight-card" style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ marginBottom: 16 }}>
            <span className="tag">Febrero 2026</span>
          </div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 12 }}>Warner Play Latino</h3>
          <p style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--accent-indigo)', marginBottom: 20 }}>
            AI &amp; the Future of SEO (GEO)
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 24, maxWidth: 600, margin: '0 auto 24px' }}>
            Keynote sobre la transición del SEO tradicional a GEO (Generative Engine Optimization). Cómo dominar el tráfico de cultura geek y eSports mediante arquitectura de autoridad y procesamiento de datos con agentes de IA para 2026.
          </p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['GEO', 'AI Search', 'eSports SEO', 'Query Fan-Out', 'Conferencia SEO', 'Conferencia de Marketing'].map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
