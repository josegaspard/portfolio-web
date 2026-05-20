import type { Metadata } from 'next';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import industries from '@/content/industries.json';
import {
  ProfessionalServiceJsonLd,
  FAQPageJsonLd,
  BreadcrumbJsonLd,
  SpeakableJsonLd,
  ServiceJsonLd,
} from '@/components/seo/JsonLd';

type IndustryData = {
  slug: string;
  industry: string;
  title: string;
  metaDescription: string;
  h1: string;
  tldr: string;
  intro: string;
  sections: { h2: string; html: string }[];
  industryFaqs: { question: string; answer: string }[];
  specificServices: string[];
  internalLinks: { anchor: string; url: string }[];
};

const INDUSTRIES = industries as unknown as IndustryData[];

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ industria: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ industria: string }> }): Promise<Metadata> {
  const { industria } = await params;
  const ind = INDUSTRIES.find((i) => i.slug === industria);
  if (!ind) return { title: 'Página no encontrada' };
  const url = `https://josegaspard.dev/consultor-seo-industria/${ind.slug}/`;
  return {
    title: ind.title,
    description: ind.metaDescription,
    keywords: [
      `consultor seo ${ind.industry.toLowerCase()}`,
      `seo ${ind.industry.toLowerCase()}`,
      `consultor seo para ${ind.industry.toLowerCase()}`,
      `agencia seo ${ind.industry.toLowerCase()}`,
      `experto seo ${ind.industry.toLowerCase()}`,
    ],
    alternates: { canonical: url },
    openGraph: {
      title: ind.title,
      description: ind.metaDescription,
      url,
      type: 'website',
      locale: 'es_MX',
      images: [{ url: 'https://josegaspard.dev/img/josegaspard.png', width: 1200, height: 630, alt: ind.h1 }],
    },
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ industria: string }> }) {
  const { industria } = await params;
  const ind = INDUSTRIES.find((i) => i.slug === industria);
  if (!ind) notFound();

  const url = `https://josegaspard.dev/consultor-seo-industria/${ind.slug}/`;
  const breadcrumbs = [
    { name: 'Inicio', url: 'https://josegaspard.dev/' },
    { name: 'Consultor SEO en México', url: 'https://josegaspard.dev/consultor-seo/' },
    { name: ind.industry, url },
  ];

  return (
    <>
      <ProfessionalServiceJsonLd />
      <ServiceJsonLd
        name={`Consultor SEO para ${ind.industry}`}
        description={ind.metaDescription}
        price={{ amount: '15000', currency: 'MXN' }}
      />
      <FAQPageJsonLd faqs={ind.industryFaqs} />
      <BreadcrumbJsonLd items={breadcrumbs} />
      <SpeakableJsonLd url={url} cssSelectors={['.tldr', 'h1', 'h2']} />

      <article className="pillar-article">
        <header className="pillar-header">
          <div className="container">
            <nav aria-label="Breadcrumb" className="pillar-breadcrumbs">
              <ol>
                <li><Link href="/">Inicio</Link><span aria-hidden="true"> / </span></li>
                <li><Link href="/consultor-seo/">Consultor SEO en México</Link><span aria-hidden="true"> / </span></li>
                <li><span>{ind.industry}</span></li>
              </ol>
            </nav>
            <h1 className="pillar-h1">{ind.h1}</h1>
            <div className="tldr speakable"><strong>TL;DR — </strong>{ind.tldr}</div>
            <div className="pillar-cta-top">
              <a href="https://wa.me/525531212956" className="btn-primary">Diagnóstico SEO gratis para {ind.industry}</a>
              <Link href="/precios/" className="btn-secondary">Ver precios públicos</Link>
            </div>
          </div>
        </header>

        <main className="pillar-body">
          <div className="container">
            <div className="pillar-intro" dangerouslySetInnerHTML={{ __html: ind.intro }} />

            {ind.sections.map((sec, i) => (
              <section key={i} className="pillar-section speakable">
                <h2>{sec.h2}</h2>
                <div className="pillar-section-content" dangerouslySetInnerHTML={{ __html: sec.html }} />
              </section>
            ))}

            {ind.specificServices && ind.specificServices.length > 0 && (
              <section className="industry-services">
                <h2>Servicios específicos para {ind.industry}</h2>
                <ul className="services-list">
                  {ind.specificServices.map((s) => <li key={s}>{s}</li>)}
                </ul>
              </section>
            )}

            <section className="pillar-faqs">
              <h2>Preguntas frecuentes — SEO para {ind.industry}</h2>
              <div className="faq-list">
                {ind.industryFaqs.map((f, i) => (
                  <details key={i} className="faq-item">
                    <summary>{f.question}</summary>
                    <div><p>{f.answer}</p></div>
                  </details>
                ))}
              </div>
            </section>

            {ind.internalLinks && ind.internalLinks.length > 0 && (
              <section className="related-links">
                <h2>Recursos relacionados</h2>
                <ul className="related-list">
                  {ind.internalLinks.map((l, i) => (
                    <li key={i}><Link href={l.url}>{l.anchor}</Link></li>
                  ))}
                </ul>
              </section>
            )}

            <section className="pillar-cta-final">
              <h2>Hablemos de tu proyecto en {ind.industry}</h2>
              <p>Llamada inicial de 30 minutos sin compromiso.</p>
              <div className="cta-buttons">
                <a href="https://wa.me/525531212956" className="btn-primary">WhatsApp +52 55 3121 2956</a>
                <a href="mailto:hola@josegaspard.dev" className="btn-secondary">hola@josegaspard.dev</a>
              </div>
            </section>
          </div>
        </main>
      </article>

      <Script id="industry-page-meta" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': url,
          url,
          name: ind.title,
          description: ind.metaDescription,
          inLanguage: 'es-MX',
          isPartOf: { '@id': 'https://josegaspard.dev/#website' },
        }),
      }} />
    </>
  );
}
