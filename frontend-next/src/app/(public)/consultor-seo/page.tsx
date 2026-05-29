import type { Metadata } from 'next';
import Script from 'next/script';
import pillar from '@/content/pillar.json';
import PillarPageRenderer from '@/components/seo/PillarPageRenderer';
import {
  ProfessionalServiceJsonLd,
  FAQPageJsonLd,
  BreadcrumbJsonLd,
  SpeakableJsonLd,
} from '@/components/seo/JsonLd';

const URL = 'https://josegaspard.dev/consultor-seo/';

export const metadata: Metadata = {
  title: pillar.title,
  description: pillar.metaDescription,
  keywords: [
    'consultor seo',
    'consultor seo méxico',
    'consultor seo cdmx',
    'consultor seo ciudad de méxico',
    'consultor seo monterrey',
    'consultor seo guadalajara',
    'consultor seo freelance',
    'experto seo méxico',
    'asesor seo méxico',
    'seo senior méxico',
  ],
  alternates: { canonical: URL, languages: { 'es-MX': URL, 'es': URL, 'en': 'https://josegaspard.dev/en/seo-consultant-mexico/' } },
  openGraph: {
    title: pillar.title,
    description: pillar.metaDescription,
    url: URL,
    type: 'website',
    locale: 'es_MX',
    images: [{ url: 'https://josegaspard.dev/img/josegaspard.png', width: 1200, height: 630, alt: 'José Gaspard - Consultor SEO en México' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pillar.title,
    description: pillar.metaDescription,
    images: ['https://josegaspard.dev/img/josegaspard.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const breadcrumbs = [
  { name: 'Inicio', url: 'https://josegaspard.dev/' },
  { name: 'Consultor SEO en México', url: URL },
];

export default function ConsultorSEOPillarPage() {
  return (
    <>
      <ProfessionalServiceJsonLd />
      <FAQPageJsonLd faqs={pillar.faqs} />
      <BreadcrumbJsonLd items={breadcrumbs} />
      <SpeakableJsonLd url={URL} cssSelectors={['.tldr', 'h1', '.speakable h2', '.speakable p:first-of-type']} />
      <PillarPageRenderer
        h1={pillar.h1}
        tldr={pillar.tldr}
        updated={pillar.updated}
        sections={pillar.sections}
        faqs={pillar.faqs}
        breadcrumbs={[
          { name: 'Inicio', url: '/' },
          { name: 'Consultor SEO en México', url: '/consultor-seo/' },
        ]}
      />
      <Script id="page-meta" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': URL,
          url: URL,
          name: pillar.title,
          description: pillar.metaDescription,
          dateModified: pillar.updated,
          inLanguage: 'es-MX',
          isPartOf: { '@id': 'https://josegaspard.dev/#website' },
          about: { '@id': 'https://josegaspard.dev/#person' },
          primaryImageOfPage: 'https://josegaspard.dev/img/josegaspard.png',
        }),
      }} />
    </>
  );
}
