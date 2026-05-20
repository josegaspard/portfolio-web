import type { Metadata } from 'next';
import '@/styles/globals.css';
import '@/styles/pillar.css';
import { OrganizationJsonLd, PersonJsonLd, WebSiteJsonLd, ProfessionalServiceJsonLd } from '@/components/seo/JsonLd';
import { LanguageProvider } from '@/context/LanguageContext';
import { ConfigProvider } from '@/context/ConfigContext';

export const metadata: Metadata = {
  metadataBase: new URL('https://josegaspard.dev'),
  title: {
    default: 'José Gaspard | Arquitecto SEO & Desarrollador Full-Stack en México',
    template: '%s | José Gaspard',
  },
  description:
    'Experto SEO y desarrollador web con +15 años de experiencia. Especialista en SEO técnico, link building, optimización SEO y desarrollo full-stack. Agencia SEO en Ciudad de México. He trabajado con Google, Canva y PayPal.',
  keywords: [
    'servicio de seo',
    'consultor seo',
    'experto seo',
    'agencia seo',
    'empresa de seo',
    'optimización seo',
    'seo técnico',
    'posicionamiento web',
    'desarrollador web',
    'programador',
    'desarrollador backend',
    'desarrollo web profesional',
    'link building',
    'marketing digital',
    'conferencia seo',
    'conferencia de marketing',
    'cursos de seo',
    'especialista seo méxico',
    'consultor seo méxico',
    'José Gaspard',
    'Next.js',
    'NestJS',
    'Core Web Vitals',
  ],
  authors: [{ name: 'José Gaspard', url: 'https://josegaspard.dev' }],
  creator: 'José Gaspard',
  publisher: 'José Gaspard',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://josegaspard.dev',
    siteName: 'José Gaspard - Arquitecto SEO',
    title: 'José Gaspard | Arquitecto SEO & Desarrollador Full-Stack',
    description:
      'Transformo búsquedas en ingresos. +15 años de experiencia en SEO técnico, link building y desarrollo web para empresas en México y LATAM.',
    images: [
      {
        url: 'https://josegaspard.dev/img/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'José Gaspard - Arquitecto SEO & Desarrollador Full-Stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@josegaspard',
    title: 'José Gaspard | Arquitecto SEO & Desarrollador Full-Stack',
    description:
      'Transformo búsquedas en ingresos. Especialista en SEO técnico y desarrollo web.',
    images: ['https://josegaspard.dev/img/og-default.jpg'],
  },
  alternates: {
    canonical: 'https://josegaspard.dev',
    languages: {
      'es-MX': 'https://josegaspard.dev',
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <OrganizationJsonLd />
        <PersonJsonLd />
        <WebSiteJsonLd />
        <ProfessionalServiceJsonLd />
      </head>
      <body>
        <ConfigProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ConfigProvider>
      </body>
    </html>
  );
}
