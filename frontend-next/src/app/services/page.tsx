import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/seo/JsonLd';
import { SERVICES_PILLARS } from '@/lib/constants';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Servicios SEO y Desarrollo Web | Agencia SEO en México',
  description: 'Servicio de SEO técnico, optimización SEO, link building, desarrollo web profesional y consultoría digital. Empresa de SEO con resultados comprobados en México y LATAM.',
  keywords: ['servicio de seo', 'agencia seo', 'empresa de seo', 'optimización seo', 'desarrollo web', 'consultor seo', 'posicionamiento web', 'link building', 'cursos de seo'],
  alternates: { canonical: 'https://josegaspard.dev/services/' },
};

const PRICING = [
  { name: 'Auditoría SEO', price: 'Personalizado', desc: 'Análisis técnico profundo', features: ['Auditoría técnica completa', 'Plan de acción priorizado', 'Análisis Core Web Vitals', 'Análisis de competencia', 'Reporte detallado'] },
  { name: 'SEO + Desarrollo', price: 'Personalizado', desc: 'Optimización completa', popular: true, features: ['Todo en Auditoría', 'Implementación técnica', 'Optimización de rendimiento', 'Link Building estratégico', 'Monitoreo mensual', 'Soporte dedicado'] },
  { name: 'Enterprise Growth', price: 'Personalizado', desc: 'Dominación del mercado', features: ['Todo en SEO + Dev', 'Link building agresivo', 'Estrategia de contenido', 'Soporte dedicado 24/7', 'Reportes ejecutivos', 'Consultoría estratégica'] },
];

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Inicio', url: 'https://josegaspard.dev' }, { name: 'Servicios', url: 'https://josegaspard.dev/services/' }]} />
      <ServiceJsonLd name="Auditoría SEO Técnica" description="Servicio de auditoría SEO profesional. Análisis técnico profundo para optimización SEO y posicionamiento web." />
      <ServiceJsonLd name="SEO + Desarrollo Web" description="Servicio integral de optimización SEO y desarrollo web profesional con Next.js y NestJS." />
      <ServiceJsonLd name="Enterprise Growth" description="Estrategia empresarial de crecimiento con link building, contenido SEO y desarrollo a medida." />
      <Header />
      <main>
        <section className="hero" style={{ minHeight: '60vh' }}>
          <div className="blob blob-indigo" />
          <div className="container hero-content text-center" style={{ maxWidth: 800, margin: '0 auto' }}>
            <span className="section-badge">Servicios</span>
            <h1>Servicios de <span className="gradient-text">SEO &amp; Desarrollo Web</span></h1>
            <p className="hero-subtitle" style={{ margin: '0 auto' }}>Agencia SEO especializada en optimización técnica, link building estratégico y desarrollo web profesional para empresas que quieren dominar Google.</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header text-center">
              <h2 className="section-title">Los 6 Pilares del <span className="gradient-text">SEO Engineering</span></h2>
            </div>
            <div className="grid-3">
              {SERVICES_PILLARS.map((s) => (
                <div key={s.number} className="glass-card service-card">
                  <span className="service-number">{s.number}</span>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="section-header text-center">
              <span className="section-badge">Inversión</span>
              <h2 className="section-title">Planes de <span className="gradient-text">Crecimiento</span></h2>
            </div>
            <div className="grid-3">
              {PRICING.map((plan) => (
                <div key={plan.name} className={`glass-card pricing-card ${plan.popular ? 'popular' : ''}`}>
                  {plan.popular && <span className="pricing-popular-badge">Más Popular</span>}
                  <h3>{plan.name}</h3>
                  <p className="price">{plan.price}</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 24 }}>{plan.desc}</p>
                  <ul className="pricing-features">
                    {plan.features.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                  <Link href="/contact/" className="btn btn-primary" style={{ width: '100%' }}>Solicitar Presupuesto</Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
