import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import casos from '@/content/casos.json';
import {
  FAQPageJsonLd,
  BreadcrumbJsonLd,
  SpeakableJsonLd,
  ItemListJsonLd,
} from '@/components/seo/JsonLd';

const URL = 'https://josegaspard.dev/casos/';

export const metadata: Metadata = {
  title: casos.title,
  description: casos.metaDescription,
  keywords: [
    'casos de éxito seo méxico',
    'casos consultor seo',
    'resultados seo méxico',
    'casos seo verificables',
    'screenshots gsc seo',
    'casos posicionamiento web',
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: casos.title,
    description: casos.metaDescription,
    url: URL,
    type: 'website',
    locale: 'es_MX',
    images: [{ url: 'https://josegaspard.dev/img/josegaspard.png', width: 1200, height: 630, alt: casos.h1 }],
  },
};

const breadcrumbs = [
  { name: 'Inicio', url: 'https://josegaspard.dev/' },
  { name: 'Casos de éxito', url: URL },
];

export default function CasosPage() {
  return (
    <>
      <FAQPageJsonLd faqs={casos.faqs} />
      <BreadcrumbJsonLd items={breadcrumbs} />
      <SpeakableJsonLd url={URL} cssSelectors={['.tldr', 'h1', 'h2', '.case-metric']} />
      <ItemListJsonLd items={casos.caseStudies.map((c) => ({
        name: `${c.client} — ${c.industry}`,
        url: `${URL}#${c.slug}`,
        description: c.result,
      }))} />

      <article className="pillar-article">
        <header className="pillar-header">
          <div className="container">
            <nav aria-label="Breadcrumb" className="pillar-breadcrumbs">
              <ol>
                <li><Link href="/">Inicio</Link><span aria-hidden="true"> / </span></li>
                <li><span>Casos de éxito</span></li>
              </ol>
            </nav>
            <h1 className="pillar-h1">{casos.h1}</h1>
            <div className="tldr speakable"><strong>TL;DR — </strong>{casos.tldr}</div>
          </div>
        </header>

        <main className="pillar-body">
          <div className="container">
            <div className="pillar-intro" dangerouslySetInnerHTML={{ __html: casos.intro }} />

            <section className="cases-grid">
              {casos.caseStudies.map((c) => (
                <article key={c.slug} id={c.slug} className="case-card">
                  <header>
                    <h2>{c.client}</h2>
                    <p className="case-industry"><em>{c.industry}</em> · {c.duration}</p>
                  </header>
                  <p className="case-challenge"><strong>Reto:</strong> {c.challenge}</p>
                  <p className="case-result"><strong>Resultado:</strong> {c.result}</p>
                  <div className="case-metrics">
                    <h3>Métricas verificables</h3>
                    <div className="metrics-grid">
                      {c.metrics.map((m, i) => (
                        <div key={i} className="case-metric">
                          <div className="metric-label">{m.label}</div>
                          <div className="metric-before">Antes: <strong>{m.before}</strong></div>
                          <div className="metric-after">Después: <strong>{m.after}</strong></div>
                          <div className="metric-delta"><strong>{m.delta}</strong></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </section>

            <section className="methodology" dangerouslySetInnerHTML={{ __html: casos.methodology }} />

            {casos.industries && (
              <section className="industries-served">
                <h2>Industrias atendidas</h2>
                <ul className="industries-list">
                  {casos.industries.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </section>
            )}

            <section className="pillar-faqs">
              <h2>Preguntas frecuentes sobre estos casos</h2>
              <div className="faq-list">
                {casos.faqs.map((f, i) => (
                  <details key={i} className="faq-item">
                    <summary>{f.question}</summary>
                    <div><p>{f.answer}</p></div>
                  </details>
                ))}
              </div>
            </section>

            <section className="pillar-cta-final">
              <h2>¿Quieres ser el próximo caso?</h2>
              <p>Llamada inicial de 30 minutos sin compromiso. Reviso tu Search Console y proponemos un plan.</p>
              <div className="cta-buttons">
                <a href="https://wa.me/525531212956" className="btn-primary">WhatsApp +52 55 3121 2956</a>
                <Link href="/precios/" className="btn-secondary">Ver precios públicos</Link>
              </div>
            </section>
          </div>
        </main>
      </article>

      <Script id="casos-meta" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          '@id': URL,
          url: URL,
          name: casos.title,
          description: casos.metaDescription,
          inLanguage: 'es-MX',
          isPartOf: { '@id': 'https://josegaspard.dev/#website' },
        }),
      }} />
    </>
  );
}
