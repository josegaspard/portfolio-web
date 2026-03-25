import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto | Agenda tu Consulta SEO Gratuita — José Gaspard',
  description: 'Contacta a José Gaspard para servicios de SEO técnico, desarrollo web y consultoría digital en México. Respuesta en menos de 24 horas. Consulta gratuita sin compromiso.',
  keywords: [
    'contacto consultor seo', 'consulta seo gratuita', 'contacto agencia seo',
    'presupuesto seo', 'contacto desarrollo web', 'josé gaspard contacto',
  ],
  alternates: { canonical: 'https://josegaspard.dev/contact/' },
  openGraph: {
    title: 'Contacto | José Gaspard — Consultor SEO',
    description: 'Agenda tu consulta SEO gratuita. Respuesta en menos de 24 horas.',
    url: 'https://josegaspard.dev/contact/',
    type: 'website',
    images: [{ url: 'https://josegaspard.dev/img/josegaspard.png', width: 1200, height: 630 }],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
