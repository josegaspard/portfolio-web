// ============================================================
// JSON-LD Schema Components - José Gaspard Consultor SEO
// E-E-A-T + GEO/AEO optimized for #1 ranking "consultor seo"
// ============================================================

const PERSON_SAMEAS = [
  'https://linkedin.com/in/josegaspard',
  'https://github.com/josegaspard',
  'https://twitter.com/josegaspard',
  'https://x.com/josegaspard',
  'https://www.youtube.com/@josegaspard',
  'https://www.facebook.com/josegaspard.dev',
  'https://www.instagram.com/josegaspard.dev',
  'https://www.crunchbase.com/person/jose-gaspard',
  'https://about.me/josegaspard',
  'https://josegaspard.medium.com',
  'https://g.page/josegaspard-seo',
];

const PERSON_BASE = {
  '@type': 'Person',
  '@id': 'https://josegaspard.dev/#person',
  name: 'José Gaspard',
  givenName: 'José',
  familyName: 'Gaspard',
  jobTitle: 'Consultor SEO Senior',
  description: 'Consultor SEO con +15 años de experiencia en México y LATAM. Especialista en SEO técnico, link building, E-E-A-T, GEO/AEO y posicionamiento web. Speaker Warner Play Latino 2026.',
  url: 'https://josegaspard.dev',
  image: 'https://josegaspard.dev/img/josegaspard.png',
  email: 'hola@josegaspard.dev',
  telephone: '+525531212956',
  birthPlace: { '@type': 'Place', name: 'Perú' },
  nationality: 'Peruano-Mexicano',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Roma Norte',
    addressLocality: 'Ciudad de México',
    addressRegion: 'CDMX',
    postalCode: '06700',
    addressCountry: 'MX',
  },
  worksFor: { '@type': 'Organization', name: 'Nebu-Lab', url: 'https://nebu-lab.com' },
  alumniOf: [
    { '@type': 'EducationalOrganization', name: 'UPC - Universidad Peruana de Ciencias Aplicadas' },
    { '@type': 'EducationalOrganization', name: 'Universidad de Piura' },
    { '@type': 'EducationalOrganization', name: 'Platzi' },
  ],
  knowsAbout: [
    'Consultor SEO', 'SEO Técnico', 'Link Building', 'Posicionamiento Web',
    'E-E-A-T', 'GEO', 'AEO', 'Core Web Vitals', 'Schema.org', 'Programmatic SEO',
    'Migración SEO', 'SEO Local', 'SEO Internacional', 'SEO eCommerce',
    'Next.js', 'NestJS', 'WordPress', 'TypeScript', 'PHP',
  ],
  knowsLanguage: ['es', 'en', 'pt'],
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Consultor SEO',
    occupationLocation: { '@type': 'City', name: 'Ciudad de México' },
    estimatedSalary: { '@type': 'MonetaryAmountDistribution', name: 'fee', currency: 'MXN', median: 35000 },
  },
  award: [
    'Keynote Speaker Warner Play Latino 2026',
    '+200 proyectos SEO completados',
    '+300% ROI promedio para clientes',
  ],
  sameAs: PERSON_SAMEAS,
};

const AGGREGATE_RATING = {
  '@type': 'AggregateRating',
  ratingValue: '4.9',
  reviewCount: '47',
  bestRating: '5',
  worstRating: '1',
};

const REVIEWS_DATA = [
  { author: 'Carlos Mendoza', role: 'CMO, Colloky', rating: 5, text: 'José nos llevó de 12K a 78K clicks/mes orgánicos en 8 meses. Su enfoque técnico + contenido es de otro nivel.' },
  { author: 'Ana Lucía Ramírez', role: 'Founder, Casa Goliana', rating: 5, text: 'Logró posicionarnos #1 en "café especialidad CDMX" en 4 meses. Plan SEO ejecutado al pie de la letra.' },
  { author: 'Roberto Salinas', role: 'CEO, Imprenta Peruana', rating: 5, text: 'Tráfico orgánico +420% en 12 meses. José entiende SEO técnico como nadie.' },
  { author: 'Daniela Torres', role: 'Marketing Director, LaFFoto', rating: 5, text: 'Reestructuración completa del sitio + 60+ posts. ROI clarísimo desde el mes 3.' },
  { author: 'Miguel Ángel Vargas', role: 'Owner, Cuartel del Metal', rating: 5, text: 'Llevó al sitio de 0 a 18K clicks/mes en 6 meses con automatización SEO + contenido editorial. Trabajo brutal.' },
];

// ============================================================
// 1. Person — autoridad principal
// ============================================================
export function PersonJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    ...PERSON_BASE,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

// ============================================================
// 2. Organization
// ============================================================
export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://josegaspard.dev/#organization',
    name: 'José Gaspard — Consultor SEO',
    legalName: 'Nebu-Lab',
    url: 'https://josegaspard.dev',
    logo: { '@type': 'ImageObject', url: 'https://josegaspard.dev/img/josegaspard.png', width: 512, height: 512 },
    image: 'https://josegaspard.dev/img/josegaspard.png',
    description: 'Consultor SEO en México y LATAM. Auditorías técnicas, link building, GEO/AEO, programmatic SEO y desarrollo web profesional.',
    email: 'hola@josegaspard.dev',
    telephone: '+525531212956',
    foundingDate: '2010',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ciudad de México',
      addressRegion: 'CDMX',
      postalCode: '06700',
      addressCountry: 'MX',
    },
    contactPoint: [{
      '@type': 'ContactPoint',
      telephone: '+525531212956',
      contactType: 'customer service',
      areaServed: ['MX', 'PE', 'CO', 'ES', 'US'],
      availableLanguage: ['es', 'en'],
    }],
    sameAs: PERSON_SAMEAS,
    founder: PERSON_BASE,
    knowsAbout: PERSON_BASE.knowsAbout,
    aggregateRating: AGGREGATE_RATING,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

// ============================================================
// 3. WebSite + SearchAction
// ============================================================
export function WebSiteJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://josegaspard.dev/#website',
    name: 'José Gaspard — Consultor SEO en México',
    url: 'https://josegaspard.dev',
    description: 'Consultor SEO en México: auditorías técnicas, link building, GEO/AEO, posicionamiento web y desarrollo. +15 años, +200 proyectos.',
    inLanguage: ['es-MX', 'es', 'en'],
    publisher: { '@id': 'https://josegaspard.dev/#person' },
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: 'https://josegaspard.dev/blog/?q={search_term_string}' },
      'query-input': 'required name=search_term_string',
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

// ============================================================
// 4. ProfessionalService + AggregateRating + Reviews
// ============================================================
export function ProfessionalServiceJsonLd({ city, geo }: { city?: string; geo?: { lat: string; lng: string } } = {}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'LocalBusiness'],
    '@id': `https://josegaspard.dev/#service${city ? '-' + city.toLowerCase() : ''}`,
    name: city ? `Consultor SEO en ${city} — José Gaspard` : 'Consultor SEO en México — José Gaspard',
    alternateName: 'Nebu-Lab',
    description: city
      ? `Consultor SEO en ${city}. Auditorías técnicas, link building, posicionamiento web y GEO/AEO para empresas locales. +15 años de experiencia.`
      : 'Consultor SEO en México: SEO técnico, link building, posicionamiento web, GEO/AEO, programmatic SEO. +200 proyectos en LATAM.',
    url: city ? `https://josegaspard.dev/consultor-seo/${city.toLowerCase().replace(/\s/g, '-')}/` : 'https://josegaspard.dev',
    image: 'https://josegaspard.dev/img/josegaspard.png',
    logo: 'https://josegaspard.dev/img/josegaspard.png',
    telephone: '+525531212956',
    email: 'hola@josegaspard.dev',
    priceRange: '$$-$$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: city || 'Ciudad de México',
      addressRegion: city === 'Monterrey' ? 'NL' : city === 'Guadalajara' ? 'JAL' : 'CDMX',
      addressCountry: 'MX',
    },
    geo: geo
      ? { '@type': 'GeoCoordinates', latitude: geo.lat, longitude: geo.lng }
      : { '@type': 'GeoCoordinates', latitude: '19.4326', longitude: '-99.1332' },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
    areaServed: [
      { '@type': 'Country', name: 'México' },
      { '@type': 'Country', name: 'España' },
      { '@type': 'Country', name: 'Perú' },
      { '@type': 'Country', name: 'Colombia' },
      { '@type': 'Country', name: 'Argentina' },
      { '@type': 'Country', name: 'Chile' },
    ],
    serviceType: ['SEO Técnico', 'Link Building', 'SEO Local', 'GEO', 'AEO', 'Programmatic SEO', 'Migración SEO', 'Auditoría SEO'],
    provider: { '@id': 'https://josegaspard.dev/#person' },
    aggregateRating: AGGREGATE_RATING,
    review: REVIEWS_DATA.map((r) => ({
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
      author: { '@type': 'Person', name: r.author },
      reviewBody: r.text,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Paquetes de Consultoría SEO',
      itemListElement: [
        { '@type': 'Offer', name: 'SEO Starter', price: '15000', priceCurrency: 'MXN', priceSpecification: { '@type': 'UnitPriceSpecification', price: '15000', priceCurrency: 'MXN', unitCode: 'MON' }, itemOffered: { '@type': 'Service', name: 'SEO Starter — Auditoría + Optimización mensual' } },
        { '@type': 'Offer', name: 'SEO Growth', price: '35000', priceCurrency: 'MXN', priceSpecification: { '@type': 'UnitPriceSpecification', price: '35000', priceCurrency: 'MXN', unitCode: 'MON' }, itemOffered: { '@type': 'Service', name: 'SEO Growth — Estrategia completa + Link building + Contenidos' } },
        { '@type': 'Offer', name: 'SEO Enterprise', price: '75000', priceCurrency: 'MXN', priceSpecification: { '@type': 'UnitPriceSpecification', price: '75000', priceCurrency: 'MXN', unitCode: 'MON' }, itemOffered: { '@type': 'Service', name: 'SEO Enterprise — Programmatic + Migraciones + GEO/AEO + Dev custom' } },
      ],
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

// ============================================================
// 5. BreadcrumbList
// ============================================================
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

// ============================================================
// 6. FAQPage
// ============================================================
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

// ============================================================
// 7. Article (blog posts + casos)
// ============================================================
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
    author: { '@id': 'https://josegaspard.dev/#person' },
    publisher: { '@id': 'https://josegaspard.dev/#organization' },
    image: image || 'https://josegaspard.dev/img/og-default.jpg',
    mainEntityOfPage: url,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

// ============================================================
// 8. Service (individual)
// ============================================================
export function ServiceJsonLd({ name, description, price, area }: {
  name: string; description: string; price?: { amount: string; currency: string }; area?: string;
}) {
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: { '@id': 'https://josegaspard.dev/#person' },
    areaServed: { '@type': area ? 'City' : 'Country', name: area || 'México' },
    serviceType: 'SEO',
  };
  if (price) {
    data.offers = {
      '@type': 'Offer',
      price: price.amount,
      priceCurrency: price.currency,
      availability: 'https://schema.org/InStock',
    };
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

// ============================================================
// 9. Speakable (GEO/AEO — AI Overviews + voice)
// ============================================================
export function SpeakableJsonLd({ url, cssSelectors }: { url: string; cssSelectors?: string[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: cssSelectors || ['.tldr', 'h1', 'h2', '.speakable'],
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

// ============================================================
// 10. VideoObject
// ============================================================
export function VideoObjectJsonLd({ name, description, thumbnailUrl, uploadDate, contentUrl, duration }: {
  name: string; description: string; thumbnailUrl: string; uploadDate: string; contentUrl: string; duration?: string;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name,
    description,
    thumbnailUrl,
    uploadDate,
    contentUrl,
    duration: duration || 'PT3M',
    publisher: { '@id': 'https://josegaspard.dev/#organization' },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

// ============================================================
// 11. AboutPage (sobre-mi)
// ============================================================
export function AboutPageJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    url: 'https://josegaspard.dev/sobre-mi/',
    mainEntity: { '@id': 'https://josegaspard.dev/#person' },
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.tldr', 'h1', 'h2'] },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

// ============================================================
// 12. ItemList (city pages hub, casos hub)
// ============================================================
export function ItemListJsonLd({ items }: { items: { name: string; url: string; description?: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: item.url,
      ...(item.description ? { description: item.description } : {}),
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
