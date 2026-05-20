import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import sobre from '@/content/sobre-mi.json';
import {
  PersonJsonLd,
  AboutPageJsonLd,
  FAQPageJsonLd,
  BreadcrumbJsonLd,
  SpeakableJsonLd,
} from '@/components/seo/JsonLd';

const URL = 'https://josegaspard.dev/sobre-mi/';

export const metadata: Metadata = {
  title: sobre.title,
  description: sobre.metaDescription,
  keywords: [
    'josé gaspard consultor seo',
    'jose gaspard seo méxico',
    'speaker seo cdmx',
    'consultor seo experiencia',
    'biografía consultor seo méxico',
    'cerebro seo dashboard',
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: sobre.title,
    description: sobre.metaDescription,
    url: URL,
    type: 'profile',
    locale: 'es_MX',
    images: [{ url: 'https://josegaspard.dev/img/josegaspard.png', width: 1200, height: 630, alt: 'José Gaspard - Consultor SEO Senior' }],
  },
};

const breadcrumbs = [
  { name: 'Inicio', url: 'https://josegaspard.dev/' },
  { name: 'Sobre mí', url: URL },
];

export default function SobreMiPage() {
  return (
    <>
      <PersonJsonLd />
      <AboutPageJsonLd />
      <FAQPageJsonLd faqs={sobre.faqs} />
      <BreadcrumbJsonLd items={breadcrumbs} />
      <SpeakableJsonLd url={URL} cssSelectors={['.tldr', 'h1', 'h2', '.bio p:first-of-type']} />

      <article className="pillar-article about-page">
        <header className="pillar-header">
          <div className="container">
            <nav aria-label="Breadcrumb" className="pillar-breadcrumbs">
              <ol>
                <li><Link href="/">Inicio</Link><span aria-hidden="true"> / </span></li>
                <li><span>Sobre mí</span></li>
              </ol>
            </nav>
            <h1 className="pillar-h1">{sobre.h1}</h1>
            <div className="tldr speakable"><strong>TL;DR — </strong>{sobre.tldr}</div>
          </div>
        </header>

        <main className="pillar-body">
          <div className="container">
            <section className="bio" dangerouslySetInnerHTML={{ __html: sobre.bio }} />

            <section className="timeline">
              <h2>Trayectoria profesional</h2>
              <ol className="timeline-list">
                {sobre.timeline.map((t, i) => (
                  <li key={i} className="timeline-item">
                    <strong className="timeline-year">{t.year}</strong>
                    <span className="timeline-event">{t.event}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section className="education">
              <h2>Formación académica</h2>
              <ul className="education-list">
                {sobre.education.map((e, i) => (
                  <li key={i}>
                    <strong>{e.degree}</strong> — {e.institution} ({e.year})
                  </li>
                ))}
              </ul>
            </section>

            <section className="certifications">
              <h2>Certificaciones</h2>
              <ul className="certifications-list">
                {sobre.certifications.map((c, i) => (
                  <li key={i}>
                    <strong>{c.name}</strong> — {c.issuer} ({c.year})
                  </li>
                ))}
              </ul>
            </section>

            <section className="speaking">
              <h2>Charlas y conferencias</h2>
              <ul className="speaking-list">
                {sobre.speaking.map((s, i) => (
                  <li key={i}>
                    <strong>{s.event}</strong> — {s.topic} · <em>{s.location}</em>
                  </li>
                ))}
              </ul>
            </section>

            <section className="publications">
              <h2>Publicaciones y menciones</h2>
              <ul className="publications-list">
                {sobre.publications.map((p, i) => (
                  <li key={i}>
                    <strong>{p.title}</strong> — {p.outlet} ({p.date})
                  </li>
                ))}
              </ul>
            </section>

            <section className="tools">
              <h2>Herramientas propias y red</h2>
              <ul className="tools-list">
                {sobre.tools.map((t, i) => (
                  <li key={i}>
                    <strong>{t.name}</strong> — {t.description}
                  </li>
                ))}
              </ul>
            </section>

            <section className="personal-note" dangerouslySetInnerHTML={{ __html: sobre.personalNote }} />

            <section className="pillar-faqs">
              <h2>Preguntas frecuentes sobre mí</h2>
              <div className="faq-list">
                {sobre.faqs.map((f, i) => (
                  <details key={i} className="faq-item">
                    <summary>{f.question}</summary>
                    <div><p>{f.answer}</p></div>
                  </details>
                ))}
              </div>
            </section>

            <section className="pillar-cta-final">
              <h2>¿Hablamos?</h2>
              <p>Llamada inicial de 30 minutos sin compromiso.</p>
              <div className="cta-buttons">
                <a href="https://wa.me/525531212956" className="btn-primary">WhatsApp +52 55 3121 2956</a>
                <a href="mailto:hola@josegaspard.dev" className="btn-secondary">hola@josegaspard.dev</a>
              </div>
            </section>
          </div>
        </main>
      </article>

      <Script id="sobre-meta" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ProfilePage',
          '@id': URL,
          url: URL,
          name: sobre.title,
          description: sobre.metaDescription,
          mainEntity: { '@id': 'https://josegaspard.dev/#person' },
          inLanguage: 'es-MX',
        }),
      }} />
    </>
  );
}
