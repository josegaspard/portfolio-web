import type { Metadata } from 'next';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import cities from '@/content/cities.json';
import {
  ProfessionalServiceJsonLd,
  FAQPageJsonLd,
  BreadcrumbJsonLd,
  SpeakableJsonLd,
} from '@/components/seo/JsonLd';

type CityData = {
  slug: string;
  city: string;
  title: string;
  metaDescription: string;
  h1: string;
  tldr: string;
  intro: string;
  sections: { h2: string; html: string }[];
  localFaqs: { question: string; answer: string }[];
  neighborhoods: string[];
  industries: string[];
  internalLinks: { anchor: string; url: string }[];
};

const CITIES = cities as unknown as CityData[];

const CITY_GEO: Record<string, { lat: string; lng: string }> = {
  cdmx: { lat: '19.4326', lng: '-99.1332' },
  monterrey: { lat: '25.6866', lng: '-100.3161' },
  guadalajara: { lat: '20.6597', lng: '-103.3496' },
  queretaro: { lat: '20.5888', lng: '-100.3899' },
  puebla: { lat: '19.0413', lng: '-98.2062' },
  cancun: { lat: '21.1619', lng: '-86.8515' },
  tijuana: { lat: '32.5149', lng: '-117.0382' },
  merida: { lat: '20.9674', lng: '-89.5926' },
  lima: { lat: '-12.0464', lng: '-77.0428' },
};

export function generateStaticParams() {
  return CITIES.map((c) => ({ ciudad: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ ciudad: string }> }): Promise<Metadata> {
  const { ciudad } = await params;
  const city = CITIES.find((c) => c.slug === ciudad);
  if (!city) return { title: 'Página no encontrada' };
  const url = `https://josegaspard.dev/consultor-seo/${city.slug}/`;
  return {
    title: city.title,
    description: city.metaDescription,
    keywords: [
      `consultor seo ${city.city.toLowerCase()}`,
      `consultor seo en ${city.city.toLowerCase()}`,
      `asesor seo ${city.city.toLowerCase()}`,
      `experto seo ${city.city.toLowerCase()}`,
      `seo ${city.city.toLowerCase()}`,
      `posicionamiento web ${city.city.toLowerCase()}`,
    ],
    alternates: { canonical: url },
    openGraph: {
      title: city.title,
      description: city.metaDescription,
      url,
      type: 'website',
      locale: 'es_MX',
      images: [{ url: 'https://josegaspard.dev/img/josegaspard.png', width: 1200, height: 630, alt: city.h1 }],
    },
  };
}

export default async function CityPage({ params }: { params: Promise<{ ciudad: string }> }) {
  const { ciudad } = await params;
  const city = CITIES.find((c) => c.slug === ciudad);
  if (!city) notFound();

  const url = `https://josegaspard.dev/consultor-seo/${city.slug}/`;
  const breadcrumbs = [
    { name: 'Inicio', url: 'https://josegaspard.dev/' },
    { name: 'Consultor SEO en México', url: 'https://josegaspard.dev/consultor-seo/' },
    { name: city.city, url },
  ];

  return (
    <>
      <ProfessionalServiceJsonLd city={city.city} geo={CITY_GEO[city.slug]} />
      <FAQPageJsonLd faqs={city.localFaqs} />
      <BreadcrumbJsonLd items={breadcrumbs} />
      <SpeakableJsonLd url={url} cssSelectors={['.tldr', 'h1', 'h2']} />

      <article className="pillar-article">
        <header className="pillar-header">
          <div className="container">
            <nav aria-label="Breadcrumb" className="pillar-breadcrumbs">
              <ol>
                <li><Link href="/">Inicio</Link><span aria-hidden="true"> / </span></li>
                <li><Link href="/consultor-seo/">Consultor SEO en México</Link><span aria-hidden="true"> / </span></li>
                <li><span>{city.city}</span></li>
              </ol>
            </nav>
            <h1 className="pillar-h1">{city.h1}</h1>
            <div className="tldr speakable">
              <strong>TL;DR — </strong>{city.tldr}
            </div>
            <div className="pillar-cta-top">
              <a href="https://wa.me/525531212956" className="btn-primary">Diagnóstico gratis por WhatsApp</a>
              <Link href="/precios/" className="btn-secondary">Ver precios públicos</Link>
            </div>
          </div>
        </header>

        <main className="pillar-body">
          <div className="container">
            <div className="pillar-intro" dangerouslySetInnerHTML={{ __html: city.intro }} />

            {city.sections.map((sec, i) => (
              <section key={i} className="pillar-section speakable">
                <h2>{sec.h2}</h2>
                <div className="pillar-section-content" dangerouslySetInnerHTML={{ __html: sec.html }} />
              </section>
            ))}

            {city.neighborhoods && city.neighborhoods.length > 0 && (
              <section className="city-zones">
                <h2>Zonas y colonias que atiendo en {city.city}</h2>
                <ul className="zones-list">
                  {city.neighborhoods.map((n) => <li key={n}>{n}</li>)}
                </ul>
              </section>
            )}

            {city.industries && city.industries.length > 0 && (
              <section className="city-industries">
                <h2>Sectores en {city.city} con experiencia comprobable</h2>
                <ul className="industries-list">
                  {city.industries.map((ind) => <li key={ind}>{ind}</li>)}
                </ul>
              </section>
            )}

            <section className="pillar-faqs">
              <h2>Preguntas frecuentes sobre consultoría SEO en {city.city}</h2>
              <div className="faq-list">
                {city.localFaqs.map((f, i) => (
                  <details key={i} className="faq-item">
                    <summary>{f.question}</summary>
                    <div><p>{f.answer}</p></div>
                  </details>
                ))}
              </div>
            </section>

            {city.internalLinks && city.internalLinks.length > 0 && (
              <section className="related-links">
                <h2>Recursos relacionados</h2>
                <ul className="related-list">
                  {city.internalLinks.map((l, i) => (
                    <li key={i}><Link href={l.url}>{l.anchor}</Link></li>
                  ))}
                </ul>
              </section>
            )}

            <section className="pillar-cta-final">
              <h2>Trabajemos en tu SEO en {city.city}</h2>
              <p>Llamada inicial de 30 minutos sin compromiso. Reviso tu Search Console y te digo si soy el fit.</p>
              <div className="cta-buttons">
                <a href="https://wa.me/525531212956" className="btn-primary">WhatsApp +52 55 3121 2956</a>
                <a href="mailto:hola@josegaspard.dev" className="btn-secondary">hola@josegaspard.dev</a>
              </div>
            </section>
          </div>
        </main>
      </article>

      <Script id="city-page-meta" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': url,
          url,
          name: city.title,
          description: city.metaDescription,
          inLanguage: 'es-MX',
          isPartOf: { '@id': 'https://josegaspard.dev/#website' },
        }),
      }} />
    </>
  );
}
