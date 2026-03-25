import { TESTIMONIALS } from '@/lib/constants';

export function TestimonialsSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">Testimonios</span>
          <h2 className="section-title">Lo Que Dicen Mis <span className="gradient-text">Clientes</span></h2>
        </div>
        <div className="grid-3">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="glass-card testimonial-card">
              <div style={{ color: 'var(--accent-indigo)', fontSize: '2rem', marginBottom: 16, opacity: 0.5 }}>&ldquo;</div>
              <p className="testimonial-quote">{t.quote}</p>
              <div className="testimonial-author">{t.author}</div>
              <div className="testimonial-position">{t.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
