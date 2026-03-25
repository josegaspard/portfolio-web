import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { BreadcrumbJsonLd, ServiceJsonLd, FAQPageJsonLd } from '@/components/seo/JsonLd';
import { SERVICES_PILLARS, TESTIMONIALS } from '@/lib/constants';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Servicios de SEO Técnico y Desarrollo Web Profesional | Agencia SEO en México',
  description: 'Servicio de SEO técnico, optimización SEO, link building, desarrollo web profesional y consultoría digital. Empresa de SEO con resultados comprobados. Consultor SEO especializado en posicionamiento web en México y LATAM.',
  keywords: ['servicio de seo', 'agencia seo', 'empresa de seo', 'optimización seo', 'desarrollo web', 'consultor seo', 'posicionamiento web', 'link building', 'cursos de seo', 'seo técnico', 'seo méxico'],
  alternates: { canonical: 'https://josegaspard.dev/services/' },
  openGraph: {
    title: 'Servicios de SEO Técnico y Desarrollo Web Profesional en México',
    description: 'Agencia SEO especializada en optimización técnica, link building y desarrollo web. Consultor SEO con +15 años de experiencia.',
    type: 'website',
    url: 'https://josegaspard.dev/services/',
  },
};

const PRICING = [
  {
    name: 'Auditoría SEO',
    price: 'Desde $499 USD',
    desc: 'Análisis técnico profundo para identificar oportunidades de posicionamiento web',
    features: ['Auditoría técnica completa', 'Plan de acción priorizado', 'Análisis Core Web Vitals', 'Análisis de competencia', 'Reporte detallado PDF'],
  },
  {
    name: 'SEO + Desarrollo',
    price: 'Desde $1,499 USD/mes',
    desc: 'Servicio de SEO integral con implementación técnica incluida',
    popular: true,
    features: ['Todo en Auditoría', 'Implementación técnica', 'Optimización de rendimiento', 'Link Building estratégico', 'Monitoreo mensual', 'Soporte dedicado'],
  },
  {
    name: 'Enterprise Growth',
    price: 'Personalizado',
    desc: 'Estrategia empresarial de crecimiento y dominación del mercado',
    features: ['Todo en SEO + Dev', 'Link building agresivo', 'Estrategia de contenido', 'Soporte dedicado 24/7', 'Reportes ejecutivos', 'Consultoría estratégica'],
  },
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Auditoría',
    description: 'Análisis técnico profundo de tu sitio web, competencia y mercado. Identificamos cada oportunidad de optimización SEO y posicionamiento web.',
  },
  {
    step: '02',
    title: 'Estrategia',
    description: 'Diseñamos un plan personalizado de servicio de SEO basado en datos reales. Definimos KPIs, cronograma y acciones prioritarias para tu empresa.',
  },
  {
    step: '03',
    title: 'Implementación',
    description: 'Ejecutamos las mejoras técnicas, optimización SEO on-page y off-page, link building estratégico y desarrollo web con las mejores prácticas.',
  },
  {
    step: '04',
    title: 'Optimización',
    description: 'Monitoreo continuo, ajustes estratégicos y reportes mensuales. Iteramos basándonos en datos para maximizar tu retorno de inversión.',
  },
];

const SERVICES_FAQ = [
  {
    question: '¿Cuánto cuesta un servicio de SEO profesional?',
    answer: 'Nuestros servicios de SEO comienzan desde $499 USD para auditorías y desde $1,499 USD/mes para planes de optimización SEO continua. El precio final depende de la complejidad del proyecto, la competencia del mercado y los objetivos de posicionamiento web. Ofrecemos una consulta gratuita para evaluar tu caso específico.',
  },
  {
    question: '¿En cuánto tiempo veré resultados con la optimización SEO?',
    answer: 'Los primeros resultados técnicos (Core Web Vitals, indexación) son visibles en 2-4 semanas. Las mejoras significativas en rankings y tráfico orgánico se observan entre 3-6 meses. El ROI completo de una estrategia de posicionamiento web se alcanza típicamente entre 6-12 meses, dependiendo de la competencia del mercado.',
  },
  {
    question: '¿Ofrecen garantías de posicionamiento en Google?',
    answer: 'Ningún consultor SEO o agencia SEO honesta puede garantizar la posición #1 en Google. Lo que sí garantizamos es una metodología probada, transparencia total en cada etapa del proceso, y resultados medibles con métricas claras desde el primer mes de trabajo. Nuestra empresa de SEO trabaja con KPIs concretos y reportes mensuales.',
  },
  {
    question: '¿Qué incluye el servicio de SEO mensual?',
    answer: 'Nuestro servicio de SEO mensual incluye: optimización técnica continua, monitoreo de Core Web Vitals, estrategia de link building, optimización de contenido, análisis de competencia, reportes detallados con métricas de Search Console y Ahrefs, y soporte dedicado. Cada plan se adapta a las necesidades de tu negocio.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Inicio', url: 'https://josegaspard.dev' }, { name: 'Servicios', url: 'https://josegaspard.dev/services/' }]} />
      <ServiceJsonLd name="Auditoría SEO Técnica" description="Servicio de auditoría SEO profesional. Análisis técnico profundo para optimización SEO y posicionamiento web en México." />
      <ServiceJsonLd name="SEO + Desarrollo Web" description="Servicio integral de optimización SEO y desarrollo web profesional con Next.js y NestJS. Agencia SEO con resultados comprobados." />
      <ServiceJsonLd name="Enterprise Growth" description="Estrategia empresarial de crecimiento con link building, contenido SEO y desarrollo a medida. Empresa de SEO para grandes proyectos." />
      <ServiceJsonLd name="Consultoría SEO" description="Consultor SEO especializado en posicionamiento web, optimización técnica y estrategias de crecimiento orgánico para empresas en México y LATAM." />
      <ServiceJsonLd name="Link Building Profesional" description="Servicio de link building de alta calidad para mejorar la autoridad de dominio y el posicionamiento web de tu empresa." />
      <ServiceJsonLd name="Desarrollo Web Profesional" description="Desarrollo web con Next.js, NestJS y tecnologías modernas. Sitios optimizados para SEO desde el código." />
      <FAQPageJsonLd faqs={SERVICES_FAQ} />
      <Header />
      <main>
        {/* Hero */}
        <section className="hero" style={{ minHeight: '65vh' }}>
          <div className="blob blob-indigo" />
          <div className="container hero-content text-center" style={{ maxWidth: 850, margin: '0 auto' }}>
            <span className="section-badge">Servicios SEO y Desarrollo Web</span>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Servicios de <span style={{ color: '#3b82f6' }}>SEO Técnico</span> y Desarrollo Web Profesional en México
            </h1>
            <p className="hero-subtitle" style={{ margin: '0 auto', maxWidth: 700, fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.7 }}>
              Como <strong>agencia SEO</strong> especializada, ofrecemos <strong>servicio de SEO</strong> técnico avanzado, <strong>optimización SEO</strong> integral y desarrollo web profesional. Somos la <strong>empresa de SEO</strong> que necesitas para dominar Google en México y LATAM.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginTop: 32 }}>
              <Link href="/contact/" className="btn btn-primary btn-lg" style={{ background: '#f59e0b', color: '#000', fontWeight: 700, border: 'none' }}>
                Solicitar Consulta Gratuita
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link href="#pricing" className="btn btn-secondary btn-lg">
                Ver Planes y Precios
              </Link>
            </div>
          </div>
        </section>

        {/* 6 Service Pillars */}
        <section className="section">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-badge">Nuestros Servicios</span>
              <h2 className="section-title">Los 6 Pilares del <span style={{ color: '#3b82f6' }}>SEO Engineering</span></h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: 650, margin: '0 auto', lineHeight: 1.7 }}>
                Como <strong>consultor SEO</strong> con +15 años de experiencia, he desarrollado una metodología integral de <strong>posicionamiento web</strong> que abarca todos los aspectos críticos del crecimiento orgánico.
              </p>
            </div>
            <div className="grid-3">
              {SERVICES_PILLARS.map((s) => (
                <div key={s.number} className="glass-card service-card" style={{ borderTop: '3px solid #3b82f6' }}>
                  <span className="service-number" style={{ color: '#3b82f6' }}>{s.number}</span>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Servicios Especializados */}
        <section className="section" style={{ background: 'var(--bg-alt)' }}>
          <div className="container">
            <div className="section-header text-center">
              <span className="section-badge">Servicios Especializados</span>
              <h2 className="section-title">Soluciones <span style={{ color: '#3b82f6' }}>a Medida</span></h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
                Cada negocio es único. Explora nuestros servicios especializados y encuentra la solución perfecta para tus necesidades.
              </p>
            </div>
            <div className="grid-3">
              {[
                { href: '/services/seo/', icon: '🔍', title: 'SEO Profesional', desc: 'Posicionamiento web, SEO técnico, link building y optimización para dominar Google.' },
                { href: '/services/desarrollo-web/', icon: '💻', title: 'Desarrollo Web', desc: 'Sitios web profesionales con WordPress, Laravel y tecnologías modernas.' },
                { href: '/services/desarrollo-aplicaciones/', icon: '📱', title: 'Desarrollo de Apps', desc: 'Aplicaciones web y móviles a medida con Next.js, NestJS y React Native.' },
                { href: '/services/sem/', icon: '🎯', title: 'Campañas SEM', desc: 'Google Ads y publicidad digital con ROI medible y optimización continua.' },
                { href: '/services/conferencista/', icon: '🎤', title: 'Conferencista', desc: 'Keynotes, workshops y capacitaciones en SEO, marketing digital y tecnología.' },
                { href: '/services/asesor-seo/', icon: '🧠', title: 'Asesor SEO Empresarial', desc: 'Consultoría SEO personalizada para PyMEs y corporaciones.' },
              ].map((s) => (
                <Link key={s.href} href={s.href} className="glass-card" style={{ padding: '28px 24px', display: 'block', textDecoration: 'none', borderTop: '3px solid #3b82f6' }}>
                  <div style={{ fontSize: '2rem', marginBottom: 16 }}>{s.icon}</div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 8, color: '#f3f4f6' }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: 16 }}>{s.desc}</p>
                  <span style={{ color: '#3b82f6', fontSize: '0.85rem', fontWeight: 600 }}>Ver más →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Mid-page CTA Banner */}
        <section style={{
          background: 'linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)',
          padding: '4rem 1.5rem',
          textAlign: 'center',
          borderTop: '2px solid rgba(59, 130, 246, 0.3)',
          borderBottom: '2px solid rgba(59, 130, 246, 0.3)',
        }}>
          <div className="container" style={{ maxWidth: 750 }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: '#f8fafc', marginBottom: '1rem' }}>
              ¿Listo para multiplicar tu tráfico orgánico?
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              Agenda una consulta gratuita con nuestro <strong style={{ color: '#f8fafc' }}>consultor SEO</strong> y descubre cómo nuestra <strong style={{ color: '#f8fafc' }}>agencia SEO</strong> puede transformar tu presencia digital.
            </p>
            <Link href="/contact/" className="btn btn-primary btn-lg" style={{ background: '#f59e0b', color: '#000', fontWeight: 700, border: 'none', padding: '1rem 2.5rem', fontSize: '1.05rem' }}>
              Agendar Consulta Gratuita
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </section>

        {/* Proceso de Trabajo */}
        <section className="section">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-badge">Metodología</span>
              <h2 className="section-title">Proceso de <span style={{ color: '#3b82f6' }}>Trabajo</span></h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
                Nuestra <strong>empresa de SEO</strong> sigue un proceso estructurado y transparente para garantizar resultados medibles en cada proyecto de <strong>optimización SEO</strong>.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '2rem', maxWidth: 1000, margin: '0 auto' }}>
              {PROCESS_STEPS.map((step) => (
                <div key={step.step} className="glass-card" style={{ textAlign: 'center', padding: '2rem 1.5rem', position: 'relative' }}>
                  <div style={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    background: 'rgba(59, 130, 246, 0.15)',
                    border: '2px solid #3b82f6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: '#3b82f6',
                  }}>
                    {step.step}
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', color: '#f8fafc' }}>{step.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="section" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="section-header text-center">
              <span className="section-badge">Inversión</span>
              <h2 className="section-title">Planes de <span style={{ color: '#3b82f6' }}>Crecimiento</span></h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
                Cada <strong>servicio de SEO</strong> se adapta a las necesidades y objetivos de tu negocio. Elige el plan ideal para tu estrategia de <strong>posicionamiento web</strong>.
              </p>
            </div>
            <div className="grid-3">
              {PRICING.map((plan) => (
                <div key={plan.name} className={`glass-card pricing-card ${plan.popular ? 'popular' : ''}`} style={{ borderTop: plan.popular ? '3px solid #f59e0b' : '3px solid #3b82f6' }}>
                  {plan.popular && <span className="pricing-popular-badge" style={{ background: '#f59e0b', color: '#000' }}>Más Popular</span>}
                  <h3>{plan.name}</h3>
                  <p className="price" style={{ color: '#3b82f6' }}>{plan.price}</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 24 }}>{plan.desc}</p>
                  <ul className="pricing-features">
                    {plan.features.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                  <Link href="/contact/" className="btn btn-primary" style={{
                    width: '100%',
                    background: plan.popular ? '#f59e0b' : '#3b82f6',
                    color: plan.popular ? '#000' : '#fff',
                    fontWeight: 700,
                    border: 'none',
                  }}>
                    Solicitar Presupuesto
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-badge">Testimonios</span>
              <h2 className="section-title">Lo Que Dicen Nuestros <span style={{ color: '#3b82f6' }}>Clientes</span></h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
                Resultados reales de empresas que confiaron en nuestro <strong>servicio de SEO</strong> y <strong>optimización SEO</strong> profesional.
              </p>
            </div>
            <div className="grid-3">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="glass-card testimonial-card" style={{ padding: '2rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', opacity: 0.15, marginBottom: 8 }}>&ldquo;</div>
                  <p style={{ fontSize: '1rem', fontStyle: 'italic', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 20, borderLeft: 'none', paddingLeft: 0 }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="testimonial-author">{t.author}</div>
                  <div className="testimonial-position">{t.company}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container" style={{ maxWidth: 800 }}>
            <div className="section-header text-center">
              <span className="section-badge">FAQ</span>
              <h2 className="section-title">Preguntas <span style={{ color: '#3b82f6' }}>Frecuentes</span></h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {SERVICES_FAQ.map((faq, i) => (
                <div key={i} className="glass-card" style={{ padding: '1.5rem 2rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.75rem' }}>{faq.question}</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="cta-section">
          <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 800 }}>
              ¿Listo para Dominar <span style={{ color: '#3b82f6' }}>Google</span>?
            </h2>
            <p style={{ color: '#94a3b8', maxWidth: 600, margin: '1rem auto 2rem', fontSize: '1.1rem', lineHeight: 1.7 }}>
              Contacta con nuestro <strong style={{ color: '#f8fafc' }}>consultor SEO</strong> hoy y comienza tu camino hacia el <strong style={{ color: '#f8fafc' }}>posicionamiento web</strong> que tu negocio merece.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact/" className="btn btn-primary btn-lg" style={{ background: '#f59e0b', color: '#000', fontWeight: 700, border: 'none' }}>
                Agendar Consulta Gratuita
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link href="/portafolio/" className="btn btn-secondary btn-lg">Ver Portafolio</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
