export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'José Gaspard - Consultor SEO & Desarrollador Web',
    url: 'https://josegaspard.dev',
    logo: 'https://josegaspard.dev/img/josegaspard.png',
    description: 'Agencia SEO y desarrollo web profesional en México. Servicio de SEO técnico, optimización SEO, link building, posicionamiento web y desarrollo full-stack para empresas en LATAM.',
    email: 'hola@josegaspard.dev',
    telephone: '+525531212956',
    address: { '@type': 'PostalAddress', addressLocality: 'Ciudad de México', addressCountry: 'MX' },
    sameAs: [
      'https://linkedin.com/in/josegaspard',
      'https://github.com/josegaspard',
      'https://twitter.com/josegaspard',
    ],
    founder: { '@type': 'Person', name: 'José Gaspard' },
    knowsAbout: ['SEO', 'Desarrollo Web', 'Link Building', 'Marketing Digital', 'Core Web Vitals', 'Next.js', 'NestJS'],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function PersonJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'José Gaspard',
    jobTitle: 'Arquitecto SEO & Desarrollador Full-Stack',
    description: 'Experto SEO, programador y desarrollador web con +15 años de experiencia. Especialista en optimización SEO, conferencias de SEO y marketing digital.',
    url: 'https://josegaspard.dev',
    image: 'https://josegaspard.dev/img/josegaspard.png',
    email: 'hola@josegaspard.dev',
    telephone: '+525531212956',
    address: { '@type': 'PostalAddress', addressLocality: 'Ciudad de México', addressCountry: 'MX' },
    worksFor: { '@type': 'Organization', name: 'GestoMarketing' },
    alumniOf: [
      { '@type': 'EducationalOrganization', name: 'UPC - Universidad Peruana de Ciencias Aplicadas' },
      { '@type': 'EducationalOrganization', name: 'Universidad de Piura' },
      { '@type': 'EducationalOrganization', name: 'Platzi' },
    ],
    knowsAbout: ['SEO Técnico', 'Link Building', 'Desarrollo Web', 'Next.js', 'NestJS', 'TypeScript', 'WordPress', 'PHP', 'Angular', 'Core Web Vitals', 'Posicionamiento Web', 'Marketing Digital'],
    sameAs: ['https://linkedin.com/in/josegaspard', 'https://github.com/josegaspard', 'https://twitter.com/josegaspard'],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function WebSiteJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'José Gaspard - Arquitecto SEO & Desarrollador Full-Stack',
    url: 'https://josegaspard.dev',
    description: 'Servicio de SEO, empresa de SEO, agencia SEO, cursos de SEO, conferencias de marketing y desarrollo web profesional en México.',
    inLanguage: 'es',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://josegaspard.dev/blog/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function ProfessionalServiceJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'José Gaspard - Servicio de SEO y Desarrollo Web',
    description: 'Empresa de SEO especializada en optimización SEO, posicionamiento web, link building, desarrollo backend, conferencias de SEO y cursos de marketing digital.',
    url: 'https://josegaspard.dev',
    image: 'https://josegaspard.dev/img/josegaspard.png',
    telephone: '+525531212956',
    email: 'hola@josegaspard.dev',
    address: { '@type': 'PostalAddress', addressLocality: 'Ciudad de México', addressRegion: 'CDMX', addressCountry: 'MX' },
    geo: { '@type': 'GeoCoordinates', latitude: '19.4326', longitude: '-99.1332' },
    priceRange: '$$',
    areaServed: [
      { '@type': 'Country', name: 'México' },
      { '@type': 'Country', name: 'España' },
      { '@type': 'Country', name: 'Perú' },
      { '@type': 'Country', name: 'Colombia' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios SEO y Desarrollo',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Auditoría SEO Técnica', description: 'Análisis técnico profundo de SEO para identificar oportunidades de optimización y posicionamiento web.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO + Desarrollo Web', description: 'Servicio integral de optimización SEO y desarrollo web profesional con Next.js y NestJS.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Enterprise Growth', description: 'Estrategia de crecimiento empresarial con link building agresivo, contenido SEO y desarrollo a medida.' } },
      ],
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function FAQPageJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function ArticleJsonLd({ title, description, datePublished, dateModified, image, url }: {
  title: string; description: string; datePublished: string; dateModified?: string; image?: string; url: string;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished,
    dateModified: dateModified || datePublished,
    author: { '@type': 'Person', name: 'José Gaspard', url: 'https://josegaspard.dev' },
    publisher: { '@type': 'Organization', name: 'José Gaspard', logo: { '@type': 'ImageObject', url: 'https://josegaspard.dev/img/josegaspard.png' } },
    image: image || 'https://josegaspard.dev/img/og-default.jpg',
    mainEntityOfPage: url,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function ServiceJsonLd({ name, description }: { name: string; description: string }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: { '@type': 'Person', name: 'José Gaspard', url: 'https://josegaspard.dev' },
    areaServed: { '@type': 'Country', name: 'México' },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
