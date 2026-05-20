import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import precios from '@/content/precios.json';
import {
  ProfessionalServiceJsonLd,
  FAQPageJsonLd,
  BreadcrumbJsonLd,
  SpeakableJsonLd,
} from '@/components/seo/JsonLd';

const URL = 'https://josegaspard.dev/precios/';

export const metadata: Metadata = {
  title: precios.title,
  description: precios.metaDescription,
  keywords: [
    'precios consultor seo méxico',
    'cuánto cuesta consultor seo',
    'precios seo méxico',
    'tarifas consultor seo',
    'paquetes seo méxico',
    'consultor seo precio',
    'costo seo méxico',
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: precios.title,
    description: precios.metaDescription,
    url: URL,
    type: 'website',
    locale: 'es_MX',
    images: [{ url: 'https://josegaspard.dev/img/josegaspard.png', width: 1200, height: 630, alt: precios.h1 }],
  },
};

const breadcrumbs = [
  { name: 'Inicio', url: 'https://josegaspard.dev/' },
  { name: 'Precios', url: URL },
];

export default function PreciosPage() {
  return (
    <>
      <ProfessionalServiceJsonLd />
      <FAQPageJsonLd faqs={precios.faqs} />
      <BreadcrumbJsonLd items={breadcrumbs} />
      <SpeakableJsonLd url={URL} cssSelectors={['.tldr', 'h1', 'h2', '.pkg-price']} />

      <article className="pillar-article">
        <header className="pillar-header">
          <div className="container">
            <nav aria-label="Breadcrumb" className="pillar-breadcrumbs">
              <ol>
                <li><Link href="/">Inicio</Link><span aria-hidden="true"> / </span></li>
                <li><span>Precios</span></li>
              </ol>
            </nav>
            <h1 className="pillar-h1">{precios.h1}</h1>
            <div className="tldr speakable"><strong>TL;DR — </strong>{precios.tldr}</div>
          </div>
        </header>

        <main className="pillar-body">
          <div className="container">
            <div className="pillar-intro" dangerouslySetInnerHTML={{ __html: precios.intro }} />

            <section className="packages">
              <h2>Paquetes de consultoría SEO</h2>
              <div className="packages-grid">
                {precios.packages.map((p, i) => (
                  <div key={p.name} className={`pkg ${i === 1 ? 'pkg-featured' : ''}`}>
                    <h3>{p.name}</h3>
                    <div className="pkg-price"><strong>{p.price}</strong> {p.currency}/{p.period}</div>
                    <p className="pkg-ideal">{p.ideal}</p>
                    <h4>Incluye:</h4>
                    <ul className="pkg-deliverables">
                      {p.deliverables.map((d) => <li key={d}>{d}</li>)}
                    </ul>
                    <h4>KPIs medibles:</h4>
                    <ul className="pkg-kpis">
                      {p.kpis.map((k) => <li key={k}>{k}</li>)}
                    </ul>
                    <p className="pkg-duration"><strong>{p.duration}</strong></p>
                    <details className="pkg-notincluded">
                      <summary>Qué NO incluye</summary>
                      <ul>
                        {p.notIncluded.map((n) => <li key={n}>{n}</li>)}
                      </ul>
                    </details>
                    <a href={`https://wa.me/525531212956?text=Hola%20Jos%C3%A9%2C%20quiero%20contratar%20${encodeURIComponent(p.name)}`} className="btn-primary">Contratar {p.name}</a>
                  </div>
                ))}
              </div>
            </section>

            <section className="comparison-table">
              <h2>Comparativa de paquetes</h2>
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>{precios.comparison.headers.map((h) => <th key={h}>{h}</th>)}</tr>
                  </thead>
                  <tbody>
                    {precios.comparison.rows.map((row, i) => (
                      <tr key={i}>{row.map((c, j) => <td key={j}>{c}</td>)}</tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="addons">
              <h2>Add-ons: servicios sueltos</h2>
              <div className="addons-grid">
                {precios.addons.map((a) => (
                  <div key={a.name} className="addon-card">
                    <h3>{a.name}</h3>
                    <div className="addon-price"><strong>{a.price}</strong></div>
                    <div className="addon-duration">{a.duration}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="pillar-faqs">
              <h2>Preguntas frecuentes sobre precios</h2>
              <div className="faq-list">
                {precios.faqs.map((f, i) => (
                  <details key={i} className="faq-item">
                    <summary>{f.question}</summary>
                    <div><p>{f.answer}</p></div>
                  </details>
                ))}
              </div>
            </section>

            <section className="pillar-cta-final" dangerouslySetInnerHTML={{ __html: precios.ctaSection }} />

            <div className="cta-buttons" style={{ marginTop: '2rem', justifyContent: 'center', display: 'flex', gap: '1rem' }}>
              <a href="https://wa.me/525531212956" className="btn-primary">WhatsApp +52 55 3121 2956</a>
              <a href="mailto:hola@josegaspard.dev" className="btn-secondary">hola@josegaspard.dev</a>
            </div>
          </div>
        </main>
      </article>

      <Script id="precios-meta" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'PriceSpecification',
          '@id': URL,
          name: 'Precios públicos consultoría SEO José Gaspard',
          priceCurrency: 'MXN',
          minPrice: 15000,
          maxPrice: 75000,
          valueAddedTaxIncluded: false,
        }),
      }} />
    </>
  );
}
