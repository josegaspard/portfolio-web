import Link from 'next/link';

interface Section {
  h2: string;
  html: string;
  speakable?: boolean;
}

interface FAQ {
  question: string;
  answer: string;
}

interface PillarRendererProps {
  h1: string;
  tldr: string;
  sections: Section[];
  faqs: FAQ[];
  breadcrumbs?: { name: string; url: string }[];
  ctaText?: string;
  ctaHref?: string;
}

export default function PillarPageRenderer({
  h1,
  tldr,
  sections,
  faqs,
  breadcrumbs,
  ctaText = 'Agendar diagnóstico gratuito de 30 minutos',
  ctaHref = 'https://wa.me/525531212956?text=Hola%20Jos%C3%A9%2C%20quiero%20agendar%20un%20diagn%C3%B3stico%20SEO%20gratuito',
}: PillarRendererProps) {
  return (
    <article className="pillar-article" itemScope itemType="https://schema.org/Article">
      <header className="pillar-header">
        <div className="container">
          {breadcrumbs && (
            <nav aria-label="Breadcrumb" className="pillar-breadcrumbs">
              <ol>
                {breadcrumbs.map((b, i) => (
                  <li key={b.url}>
                    {i < breadcrumbs.length - 1 ? <Link href={b.url}>{b.name}</Link> : <span>{b.name}</span>}
                    {i < breadcrumbs.length - 1 && <span aria-hidden="true"> / </span>}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <h1 className="pillar-h1" itemProp="headline">{h1}</h1>
          <div className="tldr speakable" data-speakable="true">
            <strong>TL;DR — </strong>{tldr}
          </div>
          <div className="pillar-cta-top">
            <a href={ctaHref} className="btn-primary" rel="noopener">{ctaText}</a>
            <Link href="/precios/" className="btn-secondary">Ver precios públicos</Link>
          </div>
        </div>
      </header>

      <main className="pillar-body">
        <div className="container">
          {sections.map((sec, i) => (
            <section key={i} className={`pillar-section ${sec.speakable ? 'speakable' : ''}`}>
              <h2 id={`s-${i}`}>{sec.h2}</h2>
              <div
                className="pillar-section-content"
                dangerouslySetInnerHTML={{ __html: sec.html }}
              />
            </section>
          ))}

          {faqs && faqs.length > 0 && (
            <section className="pillar-faqs">
              <h2>Preguntas frecuentes</h2>
              <div className="faq-list">
                {faqs.map((faq, i) => (
                  <details key={i} className="faq-item">
                    <summary itemProp="name">{faq.question}</summary>
                    <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                      <p itemProp="text">{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )}

          <section className="pillar-cta-final">
            <h2>¿Listo para empezar?</h2>
            <p>Diagnóstico inicial gratuito de 30 minutos. WhatsApp directo o email.</p>
            <div className="cta-buttons">
              <a href={ctaHref} className="btn-primary">WhatsApp +52 55 3121 2956</a>
              <a href="mailto:hola@josegaspard.dev" className="btn-secondary">hola@josegaspard.dev</a>
            </div>
          </section>
        </div>
      </main>
    </article>
  );
}
