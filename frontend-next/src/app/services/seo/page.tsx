import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { BreadcrumbJsonLd, ServiceJsonLd, FAQPageJsonLd } from '@/components/seo/JsonLd';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Servicio de SEO Profesional y Posicionamiento Web | José Gaspard',
  description: 'Servicio de SEO técnico y posicionamiento web: auditoría, optimización on-page, link building y Core Web Vitals. +15 años de experiencia. Diagnóstico gratuito.',
  keywords: ['servicio de seo', 'posicionamiento web', 'optimización seo', 'seo técnico', 'link building', 'auditoría seo', 'core web vitals'],
  alternates: { canonical: 'https://josegaspard.dev/services/seo/' },
  openGraph: {
    title: 'Servicio de SEO Profesional y Posicionamiento Web | José Gaspard',
    description: 'Servicio de SEO técnico y posicionamiento web: auditoría, optimización on-page, link building y Core Web Vitals. +15 años de experiencia.',
    type: 'website',
    url: 'https://josegaspard.dev/services/seo/',
  },
};

const SERVICE_CARDS = [
  {
    icon: '🔍',
    title: 'SEO Técnico Avanzado',
    description: 'Optimización de Core Web Vitals, implementación de schema markup, mejora de arquitectura web, velocidad de carga y rastreo eficiente. La base técnica que tu sitio necesita para competir en Google.',
  },
  {
    icon: '🔗',
    title: 'Link Building Estratégico',
    description: 'Adquisición de backlinks de alta autoridad (DA 60+), campañas de Digital PR, outreach personalizado y estrategias de linkable assets para aumentar tu autoridad de dominio.',
  },
  {
    icon: '📝',
    title: 'SEO On-Page',
    description: 'Investigación de keywords, optimización de contenido, meta tags estratégicos, estructura de encabezados, internal linking y experiencia de usuario enfocada en conversión.',
  },
  {
    icon: '🌐',
    title: 'SEO Off-Page',
    description: 'Construcción de autoridad de marca, menciones en medios relevantes, estrategia E-E-A-T, señales de confianza y reputación digital que Google valora para el posicionamiento web.',
  },
  {
    icon: '📊',
    title: 'Analítica SEO',
    description: 'Configuración y monitoreo de Search Console, análisis con Ahrefs y Semrush, dashboards personalizados, reportes mensuales detallados y tracking de KPIs de posicionamiento.',
  },
  {
    icon: '🤖',
    title: 'SEO con IA',
    description: 'Generative Engine Optimization (GEO), SEO programático a escala, automatización de auditorías, análisis predictivo de tendencias y optimización asistida por inteligencia artificial.',
  },
];

const RESULTS = [
  { metric: '+300%', label: 'Tráfico orgánico promedio', description: 'Incremento sostenido en visitas desde Google' },
  { metric: '+200', label: 'Proyectos SEO completados', description: 'Empresas en México y LATAM' },
  { metric: '#1', label: 'En keywords competitivas', description: 'Posicionamiento comprobado en nichos difíciles' },
  { metric: '15+', label: 'Años de experiencia', description: 'Consultor SEO desde 2010' },
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Auditoría SEO',
    description: 'Análisis técnico profundo de tu sitio web: Core Web Vitals, arquitectura, indexación, backlinks, competencia y oportunidades de posicionamiento web. Identificamos cada punto de mejora.',
  },
  {
    step: '02',
    title: 'Estrategia Personalizada',
    description: 'Diseñamos un plan de acción basado en datos reales. Definimos keywords objetivo, prioridades técnicas, estrategia de contenido y cronograma de link building adaptado a tu mercado.',
  },
  {
    step: '03',
    title: 'Implementación',
    description: 'Ejecutamos las optimizaciones técnicas, on-page y off-page. Mejoramos velocidad, estructura, contenido y comenzamos las campañas de link building estratégico con backlinks de calidad.',
  },
  {
    step: '04',
    title: 'Optimización Continua',
    description: 'Monitoreo constante de rankings, tráfico y conversiones. Ajustes estratégicos mensuales, reportes detallados y mejora iterativa para maximizar tu retorno de inversión en SEO.',
  },
];

const PRICING = [
  {
    name: 'Auditoría SEO',
    price: 'Desde $499 USD',
    period: 'one-time',
    desc: 'Análisis técnico profundo para identificar todas las oportunidades de optimización SEO y posicionamiento web.',
    features: ['Auditoría técnica completa', 'Análisis de Core Web Vitals', 'Revisión de arquitectura web', 'Análisis de backlinks', 'Estudio de competencia', 'Reporte PDF con plan de acción'],
  },
  {
    name: 'SEO Mensual',
    price: 'Desde $1,499 USD/mes',
    period: 'mensual',
    desc: 'Servicio de SEO integral con implementación técnica, contenido y link building para crecimiento sostenido.',
    popular: true,
    features: ['Todo en Auditoría SEO', 'Optimización técnica continua', 'Link building estratégico', 'Optimización de contenido', 'Monitoreo de rankings', 'Reportes mensuales detallados', 'Soporte dedicado'],
  },
  {
    name: 'Enterprise',
    price: 'Personalizado',
    period: 'a medida',
    desc: 'Estrategia empresarial de SEO a escala con equipo dedicado y objetivos de dominación de mercado.',
    features: ['Todo en SEO Mensual', 'Link building agresivo DA 60+', 'SEO programático con IA', 'Estrategia de contenido completa', 'Soporte prioritario 24/7', 'Consultoría estratégica semanal', 'Reportes ejecutivos personalizados'],
  },
];

const TESTIMONIALS = [
  {
    quote: 'Gracias al servicio de SEO de José, nuestro tráfico orgánico creció un 450% en 8 meses. Su enfoque técnico y estratégico es impecable. El mejor consultor SEO con el que hemos trabajado.',
    author: 'Carlos Mendoza',
    position: 'CEO, TechStartup MX',
  },
  {
    quote: 'Pasamos de la página 3 a los primeros 3 resultados en nuestras keywords principales. La estrategia de link building y optimización SEO que implementó José transformó completamente nuestra visibilidad en Google.',
    author: 'María Fernández',
    position: 'Directora de Marketing, E-commerce LATAM',
  },
];

const FAQ = [
  {
    question: '¿Cuánto cuesta un servicio de SEO?',
    answer: 'Nuestros servicios de SEO comienzan desde $499 USD para auditorías puntuales y desde $1,499 USD/mes para planes de optimización SEO continua. El precio final depende de la complejidad del proyecto, la competencia en tu nicho y los objetivos de posicionamiento web. Ofrecemos una auditoría SEO gratuita inicial para evaluar tu caso y darte un presupuesto personalizado.',
  },
  {
    question: '¿En cuánto tiempo veré resultados?',
    answer: 'Los resultados técnicos (mejoras en Core Web Vitals, indexación, errores) son visibles en 2-4 semanas. Las mejoras significativas en rankings y tráfico orgánico se observan entre 3-6 meses. El ROI completo de una estrategia de posicionamiento web se consolida entre 6-12 meses, dependiendo de la competencia del mercado y la autoridad actual de tu dominio.',
  },
  {
    question: '¿Qué incluye el servicio de SEO mensual?',
    answer: 'El servicio de SEO mensual incluye: optimización técnica continua, monitoreo y mejora de Core Web Vitals, estrategia de link building con backlinks de calidad, optimización de contenido existente, investigación de nuevas keywords, análisis mensual de competencia, reportes detallados con datos de Search Console y Ahrefs, y soporte dedicado para resolver cualquier duda o incidencia.',
  },
  {
    question: '¿Trabajan con empresas pequeñas?',
    answer: 'Sí, trabajamos con empresas de todos los tamaños. Nuestra agencia SEO tiene planes adaptados desde startups hasta corporaciones enterprise. El plan de Auditoría SEO es ideal para empresas pequeñas que quieren empezar, y el plan mensual se ajusta al presupuesto y objetivos de cada negocio. Lo importante es la calidad del servicio, no el tamaño de la empresa.',
  },
  {
    question: '¿Garantizan el posicionamiento #1?',
    answer: 'Ningún consultor SEO o agencia SEO honesta puede garantizar la posición #1 en Google, ya que los algoritmos dependen de cientos de factores que cambian constantemente. Lo que sí garantizamos es una metodología probada con +15 años de experiencia, transparencia total en cada etapa, resultados medibles con KPIs claros, y un compromiso genuino con el crecimiento de tu negocio.',
  },
];

export default function SEOServicePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Inicio', url: 'https://josegaspard.dev' },
        { name: 'Servicios', url: 'https://josegaspard.dev/services/' },
        { name: 'SEO', url: 'https://josegaspard.dev/services/seo/' },
      ]} />
      <ServiceJsonLd name="Servicio de SEO Profesional" description="Servicio de SEO técnico y posicionamiento web profesional. Consultor SEO especializado en link building, optimización SEO, Core Web Vitals y estrategias de crecimiento orgánico en México." />
      <FAQPageJsonLd faqs={FAQ} />
      <Header />
      <main>
        {/* Hero */}
        <section className="hero" style={{ minHeight: '70vh' }}>
          <div className="blob blob-indigo" />
          <div className="container hero-content text-center" style={{ maxWidth: 900, margin: '0 auto' }}>
            <span className="section-badge">Servicio de SEO Profesional</span>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Servicio de <span style={{ color: '#3b82f6' }}>SEO Profesional</span> y Posicionamiento Web con +15 Años de Experiencia
            </h1>
            <p className="hero-subtitle" style={{ margin: '0 auto', maxWidth: 750, fontSize: 'clamp(1rem, 2vw, 1.15rem)', lineHeight: 1.8 }}>
              Un <strong>servicio de SEO</strong> integral que combina <strong>SEO técnico</strong> avanzado, <strong>link building</strong> estratégico y <strong>optimización SEO</strong> basada en datos, con foco en resultados medibles y crecimiento sostenido. ¿Buscas un <Link href="/consultor-seo/">consultor SEO en México</Link>? Conoce la metodología completa, casos y precios públicos.
            </p>

            {/* Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '1.5rem',
              marginTop: '2.5rem',
              maxWidth: 650,
              margin: '2.5rem auto 0',
            }}>
              {[
                { value: '+300%', label: 'Tráfico promedio' },
                { value: '98/100', label: 'Core Web Vitals' },
                { value: 'DA 85+', label: 'Links obtenidos' },
              ].map((stat) => (
                <div key={stat.label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#3b82f6' }}>{stat.value}</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{stat.label}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginTop: 32 }}>
              <Link href="/contact/" className="btn btn-primary btn-lg" style={{ background: 'linear-gradient(135deg, #f59e0b, #ea580c)', color: '#000', fontWeight: 700, border: 'none', padding: '1rem 2.5rem' }}>
                Solicitar Auditoría SEO Gratuita
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link href="#pricing" className="btn btn-secondary btn-lg">
                Ver Planes y Precios
              </Link>
            </div>
          </div>
        </section>

        {/* What I Offer - 6 Service Cards */}
        <section className="section">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-badge">Qué Ofrezco</span>
              <h2 className="section-title">Servicio de SEO Completo para <span style={{ color: '#3b82f6' }}>Dominar Google</span></h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: 700, margin: '0 auto', lineHeight: 1.7 }}>
                Como <strong>consultor SEO</strong> con más de 15 años de experiencia, ofrezco un <strong>servicio de SEO</strong> integral que abarca todos los pilares del <strong>posicionamiento web</strong> moderno. Mi enfoque combina <strong>SEO técnico</strong>, estrategia de contenido y <strong>link building</strong> de alta calidad.
              </p>
            </div>
            <div className="grid-3">
              {SERVICE_CARDS.map((card) => (
                <div key={card.title} className="glass-card service-card" style={{ borderTop: '3px solid #3b82f6', padding: '2rem' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{card.icon}</div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.75rem' }}>{card.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="section" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="section-header text-center">
              <span className="section-badge">Resultados Comprobados</span>
              <h2 className="section-title">Métricas que Hablan por Nuestro <span style={{ color: '#3b82f6' }}>Servicio de SEO</span></h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: 650, margin: '0 auto', lineHeight: 1.7 }}>
                Más de una década como <strong>agencia SEO</strong> nos respalda. Estos son los resultados promedio que logramos con nuestra <strong>optimización SEO</strong> y estrategias de <strong>posicionamiento web</strong>.
              </p>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
              gap: '2rem',
              maxWidth: 1000,
              margin: '0 auto',
            }}>
              {RESULTS.map((item) => (
                <div key={item.label} className="glass-card" style={{ textAlign: 'center', padding: '2.5rem 1.5rem' }}>
                  <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#3b82f6', marginBottom: '0.5rem' }}>{item.metric}</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.5rem' }}>{item.label}</div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-badge">Metodología</span>
              <h2 className="section-title">Proceso de <span style={{ color: '#3b82f6' }}>Optimización SEO</span></h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: 650, margin: '0 auto', lineHeight: 1.7 }}>
                Mi <strong>empresa de SEO</strong> sigue un proceso estructurado y transparente. Cada etapa está diseñada para maximizar los resultados de tu estrategia de <strong>posicionamiento web</strong>.
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
              <h2 className="section-title">Planes de <span style={{ color: '#3b82f6' }}>SEO Profesional</span></h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: 650, margin: '0 auto', lineHeight: 1.7 }}>
                Cada <strong>servicio de SEO</strong> se adapta a las necesidades de tu negocio. Elige el plan ideal para tu estrategia de <strong>posicionamiento web</strong> y comienza a crecer en Google.
              </p>
            </div>
            <div className="grid-3">
              {PRICING.map((plan) => (
                <div key={plan.name} className={`glass-card pricing-card ${plan.popular ? 'popular' : ''}`} style={{ borderTop: plan.popular ? '3px solid #f59e0b' : '3px solid #3b82f6' }}>
                  {plan.popular && <span className="pricing-popular-badge" style={{ background: 'linear-gradient(135deg, #f59e0b, #ea580c)', color: '#000' }}>Más Popular</span>}
                  <h3>{plan.name}</h3>
                  <p className="price" style={{ color: '#3b82f6' }}>{plan.price}</p>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '-0.5rem', marginBottom: '0.5rem' }}>{plan.period}</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 24 }}>{plan.desc}</p>
                  <ul className="pricing-features">
                    {plan.features.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                  <Link href="/contact/" className="btn btn-primary" style={{
                    width: '100%',
                    background: plan.popular ? 'linear-gradient(135deg, #f59e0b, #ea580c)' : '#3b82f6',
                    color: plan.popular ? '#000' : '#fff',
                    fontWeight: 700,
                    border: 'none',
                  }}>
                    {plan.popular ? 'Comenzar Ahora' : 'Solicitar Presupuesto'}
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
              <h2 className="section-title">Lo Que Dicen de Nuestro <span style={{ color: '#3b82f6' }}>Servicio de SEO</span></h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
                Resultados reales de empresas que confiaron en nuestro <strong>consultor SEO</strong> para transformar su presencia digital.
              </p>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
              gap: '2rem',
              maxWidth: 900,
              margin: '0 auto',
            }}>
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="glass-card testimonial-card" style={{ padding: '2rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', opacity: 0.15, marginBottom: 8 }}>&ldquo;</div>
                  <p style={{ fontSize: '1rem', fontStyle: 'italic', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 20 }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="testimonial-author">{t.author}</div>
                  <div className="testimonial-position">{t.position}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section style={{
          background: 'linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)',
          padding: '4rem 1.5rem',
          textAlign: 'center',
          borderTop: '2px solid rgba(59, 130, 246, 0.3)',
          borderBottom: '2px solid rgba(59, 130, 246, 0.3)',
        }}>
          <div className="container" style={{ maxWidth: 750 }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: '#f8fafc', marginBottom: '1rem' }}>
              ¿Tu sitio web no aparece en Google?
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              No pierdas más clientes potenciales. Como <strong style={{ color: '#f8fafc' }}>consultor SEO</strong> especializado, puedo identificar exactamente por qué tu sitio no posiciona y crear una estrategia de <strong style={{ color: '#f8fafc' }}>optimización SEO</strong> que te lleve a los primeros resultados.
            </p>
            <Link href="/contact/" className="btn btn-primary btn-lg" style={{ background: 'linear-gradient(135deg, #f59e0b, #ea580c)', color: '#000', fontWeight: 700, border: 'none', padding: '1rem 2.5rem', fontSize: '1.05rem' }}>
              Solicitar Auditoría SEO Gratuita
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container" style={{ maxWidth: 800 }}>
            <div className="section-header text-center">
              <span className="section-badge">FAQ</span>
              <h2 className="section-title">Preguntas Frecuentes sobre <span style={{ color: '#3b82f6' }}>SEO</span></h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
                Resolvemos las dudas más comunes sobre nuestro <strong>servicio de SEO</strong> profesional y <strong>posicionamiento web</strong>.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {FAQ.map((faq, i) => (
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
              Impulsa tu <span style={{ color: '#3b82f6' }}>Posicionamiento Web</span> Hoy
            </h2>
            <p style={{ color: '#94a3b8', maxWidth: 650, margin: '1rem auto 2rem', fontSize: '1.1rem', lineHeight: 1.7 }}>
              Contacta con tu <strong style={{ color: '#f8fafc' }}>consultor SEO</strong> de confianza y comienza a dominar Google con una estrategia de <strong style={{ color: '#f8fafc' }}>SEO técnico</strong> probada. Más de 200 proyectos exitosos nos respaldan.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact/" className="btn btn-primary btn-lg" style={{ background: 'linear-gradient(135deg, #f59e0b, #ea580c)', color: '#000', fontWeight: 700, border: 'none' }}>
                Agendar Consulta Gratuita
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link href="/services/sem/" className="btn btn-secondary btn-lg">Ver Servicio SEM</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
