import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { BreadcrumbJsonLd, ServiceJsonLd, FAQPageJsonLd } from '@/components/seo/JsonLd';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Campañas SEM y Google Ads Profesionales | José Gaspard',
  description: 'Gestión profesional de campañas SEM y Google Ads. Publicidad en Google con ROI medible. Campañas PPC optimizadas para conversión en México y LATAM.',
  keywords: ['campañas sem', 'google ads', 'publicidad en google', 'sem en méxico', 'campañas ppc', 'marketing digital', 'publicidad digital', 'google ads méxico'],
  alternates: { canonical: 'https://josegaspard.dev/services/sem/' },
  openGraph: {
    title: 'Campañas SEM y Google Ads Profesionales | José Gaspard',
    description: 'Gestión profesional de campañas SEM y Google Ads. Publicidad en Google con ROI medible. Campañas PPC optimizadas para conversión en México y LATAM.',
    type: 'website',
    url: 'https://josegaspard.dev/services/sem/',
  },
};

const SEM_SERVICES = [
  {
    icon: '🎯',
    title: 'Google Ads Search',
    description: 'Campañas de búsqueda optimizadas para captar clientes con intención de compra. Selección estratégica de keywords, anuncios persuasivos y pujas inteligentes para maximizar cada clic y conversión en Google.',
  },
  {
    icon: '📱',
    title: 'Google Ads Display',
    description: 'Campañas de display para generar awareness y alcanzar a tu audiencia ideal en millones de sitios web. Creatividades impactantes, segmentación avanzada y retargeting para mantener tu marca presente.',
  },
  {
    icon: '🛒',
    title: 'Google Shopping',
    description: 'Campañas de Shopping optimizadas para e-commerce. Feed de productos perfecto, pujas por producto, segmentación por márgenes y automatización para maximizar el ROAS de tu tienda online.',
  },
  {
    icon: '📈',
    title: 'Remarketing',
    description: 'Estrategias de remarketing y retargeting para recuperar visitantes que no convirtieron. Listas de audiencia personalizadas, anuncios dinámicos y secuencias de conversión que aumentan tu tasa de cierre.',
  },
];

const SEO_VS_SEM = {
  seo: {
    title: 'SEO (Orgánico)',
    items: [
      'Resultados a mediano-largo plazo',
      'Tráfico gratuito y sostenido',
      'Mayor credibilidad y confianza',
      'ROI creciente con el tiempo',
      'Posicionamiento permanente',
    ],
  },
  sem: {
    title: 'SEM (Pagado)',
    items: [
      'Resultados inmediatos desde el día 1',
      'Control total del presupuesto',
      'Segmentación precisa de audiencia',
      'Medición exacta del ROI',
      'Escalabilidad rápida',
    ],
  },
};

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Análisis de Mercado y Competencia',
    description: 'Investigamos tu industria, competidores y oportunidades en Google Ads. Analizamos qué campañas SEM funcionan en tu nicho, costos por clic estimados y potencial de conversión.',
  },
  {
    step: '02',
    title: 'Investigación de Keywords PPC',
    description: 'Seleccionamos las keywords más rentables para tus campañas PPC. Priorizamos por intención de compra, volumen, competencia y costo por clic para maximizar el retorno de tu inversión publicitaria.',
  },
  {
    step: '03',
    title: 'Creación de Campañas',
    description: 'Diseñamos la estructura de campañas, grupos de anuncios, extensiones y landing pages. Creamos anuncios persuasivos con copy optimizado para conversión y configuramos el tracking completo.',
  },
  {
    step: '04',
    title: 'Optimización Continua',
    description: 'Monitoreo diario de métricas clave: CPC, CTR, Quality Score, conversiones y ROAS. Ajustamos pujas, negativamos keywords, optimizamos anuncios y mejoramos landing pages constantemente.',
  },
  {
    step: '05',
    title: 'Reporting y Escalado',
    description: 'Reportes semanales y mensuales con métricas claras de rendimiento. Identificamos oportunidades de escalado, nuevos mercados y estrategias para crecer tu inversión con retorno positivo.',
  },
];

const HYBRID_BENEFITS = [
  {
    title: 'Dominio Total de las SERPs',
    description: 'Aparece tanto en resultados orgánicos como pagados. Duplica tu visibilidad y captura más clics que tu competencia en cada búsqueda relevante.',
  },
  {
    title: 'Datos Cruzados para Mejor Estrategia',
    description: 'Los datos de campañas SEM revelan keywords de alta conversión que puedes atacar con SEO. El SEO te muestra oportunidades de contenido para campañas PPC más efectivas.',
  },
  {
    title: 'Resultados Inmediatos + Sostenidos',
    description: 'El SEM genera tráfico y ventas desde el primer día mientras el SEO construye autoridad a largo plazo. Cuando el SEO posiciona, puedes redirigir el presupuesto SEM a nuevas oportunidades.',
  },
  {
    title: 'Protección de Marca Completa',
    description: 'Combina campañas de marca en Google Ads con posicionamiento orgánico para que ningún competidor pueda aparecer arriba de ti en búsquedas de tu marca o industria.',
  },
];

const FAQ = [
  {
    question: '¿Cuánto presupuesto necesito para campañas SEM en Google Ads?',
    answer: 'El presupuesto mínimo recomendado depende de tu industria y competencia. Para la mayoría de negocios en México, recomendamos iniciar con al menos $500-$1,000 USD mensuales en inversión publicitaria más los honorarios de gestión. Lo importante es que cada peso invertido genere retorno medible. En la consulta inicial analizamos tu mercado y definimos el presupuesto óptimo.',
  },
  {
    question: '¿En cuánto tiempo veré resultados con Google Ads?',
    answer: 'A diferencia del SEO, los resultados del SEM son inmediatos. Desde el día 1 de activar tus campañas PPC comenzarás a recibir clics y visitas. Sin embargo, la optimización real de las campañas toma 2-4 semanas para que el algoritmo de Google Ads aprenda y las conversiones se estabilicen. El ROAS óptimo se alcanza típicamente en 4-8 semanas.',
  },
  {
    question: '¿Qué es mejor: SEO o SEM?',
    answer: 'No es una cuestión de uno u otro, sino de cuándo usar cada uno. El SEM es ideal para resultados inmediatos, lanzamientos de productos y validación rápida de mercado. El SEO es mejor para crecimiento sostenido y reducir costos de adquisición a largo plazo. La estrategia ideal combina ambos: SEM para tracción inmediata y SEO para crecimiento orgánico compuesto.',
  },
  {
    question: '¿Cómo miden el éxito de las campañas SEM?',
    answer: 'Medimos el éxito con métricas concretas: ROAS (retorno sobre inversión publicitaria), CPA (costo por adquisición), tasa de conversión, Quality Score, CTR y volumen de conversiones. Configuramos tracking completo con Google Analytics 4, Google Tag Manager y conversiones offline para tener visibilidad total del rendimiento de cada campaña PPC.',
  },
];

export default function SEMServicePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Inicio', url: 'https://josegaspard.dev' },
        { name: 'Servicios', url: 'https://josegaspard.dev/services/' },
        { name: 'SEM y Google Ads', url: 'https://josegaspard.dev/services/sem/' },
      ]} />
      <ServiceJsonLd name="Campañas SEM y Google Ads" description="Gestión profesional de campañas SEM y Google Ads. Publicidad en Google con ROI medible. Campañas PPC optimizadas para conversión en México y LATAM." />
      <FAQPageJsonLd faqs={FAQ} />
      <Header />
      <main>
        {/* Hero */}
        <section className="hero" style={{ minHeight: '70vh' }}>
          <div className="blob blob-indigo" />
          <div className="container hero-content text-center" style={{ maxWidth: 900, margin: '0 auto' }}>
            <span className="section-badge">Campañas SEM y Google Ads</span>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem' }}>
              <span style={{ color: '#3b82f6' }}>Campañas SEM</span> y Google Ads que Generan Resultados Reales
            </h1>
            <p className="hero-subtitle" style={{ margin: '0 auto', maxWidth: 750, fontSize: 'clamp(1rem, 2vw, 1.15rem)', lineHeight: 1.8 }}>
              Gestión profesional de <strong>campañas SEM</strong> y <strong>Google Ads</strong> con ROI medible desde el primer día. Especialista en <strong>publicidad en Google</strong>, <strong>campañas PPC</strong> y <strong>marketing digital</strong> para empresas en México y LATAM. Convierte tu inversión en <strong>publicidad digital</strong> en clientes reales.
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
                { value: '5x', label: 'ROAS promedio' },
                { value: '-40%', label: 'Costo por lead' },
                { value: '+150', label: 'Campañas gestionadas' },
              ].map((stat) => (
                <div key={stat.label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#3b82f6' }}>{stat.value}</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{stat.label}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginTop: 32 }}>
              <Link href="/contact/" className="btn btn-primary btn-lg" style={{ background: 'linear-gradient(135deg, #f59e0b, #ea580c)', color: '#000', fontWeight: 700, border: 'none', padding: '1rem 2.5rem' }}>
                Solicitar Estrategia SEM
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link href="#services" className="btn btn-secondary btn-lg">
                Ver Servicios
              </Link>
            </div>
          </div>
        </section>

        {/* SEO vs SEM Comparison */}
        <section className="section">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-badge">Comparativa</span>
              <h2 className="section-title"><span style={{ color: '#3b82f6' }}>SEO</span> vs <span style={{ color: '#f59e0b' }}>SEM</span>: ¿Cuál Necesitas?</h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: 700, margin: '0 auto', lineHeight: 1.7 }}>
                Entender la diferencia entre SEO y <strong>SEM</strong> es clave para tu estrategia de <strong>marketing digital</strong>. Ambos son complementarios y juntos forman la combinación más poderosa para dominar Google.
              </p>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
              gap: '2rem',
              maxWidth: 900,
              margin: '0 auto',
            }}>
              {/* SEO Column */}
              <div className="glass-card" style={{ padding: '2rem', borderTop: '3px solid #3b82f6' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#3b82f6', marginBottom: '1.5rem', textAlign: 'center' }}>
                  {SEO_VS_SEM.seo.title}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {SEO_VS_SEM.seo.items.map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      <span style={{ color: '#3b82f6', fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                  <Link href="/services/seo/" className="btn btn-secondary" style={{ fontSize: '0.9rem' }}>
                    Ver Servicio SEO
                  </Link>
                </div>
              </div>

              {/* SEM Column */}
              <div className="glass-card" style={{ padding: '2rem', borderTop: '3px solid #f59e0b' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#f59e0b', marginBottom: '1.5rem', textAlign: 'center' }}>
                  {SEO_VS_SEM.sem.title}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {SEO_VS_SEM.sem.items.map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      <span style={{ color: '#f59e0b', fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                  <Link href="/contact/" className="btn btn-primary" style={{ background: 'linear-gradient(135deg, #f59e0b, #ea580c)', color: '#000', fontWeight: 700, border: 'none', fontSize: '0.9rem' }}>
                    Solicitar Estrategia SEM
                  </Link>
                </div>
              </div>
            </div>

            <div className="glass-card" style={{ maxWidth: 700, margin: '2rem auto 0', padding: '1.5rem 2rem', textAlign: 'center', borderTop: '3px solid rgba(59, 130, 246, 0.5)' }}>
              <p style={{ color: '#f8fafc', fontWeight: 600, fontSize: '1.05rem', lineHeight: 1.7 }}>
                💡 <strong>Lo ideal: combinar ambas estrategias.</strong> El SEM te da resultados inmediatos mientras el SEO construye autoridad a largo plazo. Juntos, multiplican tu visibilidad y reducen tu costo de adquisición con el tiempo.
              </p>
            </div>
          </div>
        </section>

        {/* Services - 4 Cards */}
        <section id="services" className="section" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="section-header text-center">
              <span className="section-badge">Servicios SEM</span>
              <h2 className="section-title">Campañas de <span style={{ color: '#3b82f6' }}>Google Ads</span> Profesionales</h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: 700, margin: '0 auto', lineHeight: 1.7 }}>
                Gestionamos todos los tipos de <strong>campañas SEM</strong> en <strong>Google Ads</strong>. Desde búsqueda y display hasta shopping y remarketing, cada campaña se optimiza para maximizar tu retorno de inversión en <strong>publicidad en Google</strong>.
              </p>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '2rem',
              maxWidth: 1100,
              margin: '0 auto',
            }}>
              {SEM_SERVICES.map((card) => (
                <div key={card.title} className="glass-card service-card" style={{ borderTop: '3px solid #3b82f6', padding: '2rem' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{card.icon}</div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.75rem' }}>{card.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process - 5 Steps */}
        <section className="section">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-badge">Metodología</span>
              <h2 className="section-title">Proceso de Gestión de <span style={{ color: '#3b82f6' }}>Campañas SEM</span></h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: 650, margin: '0 auto', lineHeight: 1.7 }}>
                Cada <strong>campaña PPC</strong> sigue un proceso riguroso de 5 fases para garantizar que tu inversión en <strong>publicidad en Google</strong> genere el máximo retorno posible.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1.5rem', maxWidth: 1100, margin: '0 auto' }}>
              {PROCESS_STEPS.map((step) => (
                <div key={step.step} className="glass-card" style={{ textAlign: 'center', padding: '2rem 1.25rem', position: 'relative' }}>
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
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.75rem', color: '#f8fafc' }}>{step.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Combine SEO + SEM */}
        <section className="section" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="section-header text-center">
              <span className="section-badge">Estrategia Híbrida</span>
              <h2 className="section-title">Por Qué Combinar <span style={{ color: '#3b82f6' }}>SEO + SEM</span></h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: 700, margin: '0 auto', lineHeight: 1.7 }}>
                Las empresas más exitosas no eligen entre SEO y <strong>SEM</strong>. Combinan ambas estrategias de <strong>marketing digital</strong> para dominar completamente los resultados de Google y maximizar su crecimiento.
              </p>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '2rem',
              maxWidth: 1100,
              margin: '0 auto',
            }}>
              {HYBRID_BENEFITS.map((benefit) => (
                <div key={benefit.title} className="glass-card" style={{ padding: '2rem', borderLeft: '3px solid #3b82f6' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.75rem' }}>{benefit.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>{benefit.description}</p>
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
              ¿Quieres resultados inmediatos?
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              Con <strong style={{ color: '#f8fafc' }}>campañas SEM</strong> en <strong style={{ color: '#f8fafc' }}>Google Ads</strong> puedes empezar a recibir clientes desde hoy. Solicita una estrategia personalizada y descubre cuánto puede crecer tu negocio con <strong style={{ color: '#f8fafc' }}>publicidad en Google</strong> profesional.
            </p>
            <Link href="/contact/" className="btn btn-primary btn-lg" style={{ background: 'linear-gradient(135deg, #f59e0b, #ea580c)', color: '#000', fontWeight: 700, border: 'none', padding: '1rem 2.5rem', fontSize: '1.05rem' }}>
              Solicitar Estrategia SEM Gratuita
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container" style={{ maxWidth: 800 }}>
            <div className="section-header text-center">
              <span className="section-badge">FAQ</span>
              <h2 className="section-title">Preguntas Frecuentes sobre <span style={{ color: '#3b82f6' }}>SEM y Google Ads</span></h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
                Resolvemos las dudas más comunes sobre <strong>campañas SEM</strong>, <strong>publicidad en Google</strong> y <strong>campañas PPC</strong>.
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
              Empieza a Generar <span style={{ color: '#3b82f6' }}>Resultados Hoy</span>
            </h2>
            <p style={{ color: '#94a3b8', maxWidth: 650, margin: '1rem auto 2rem', fontSize: '1.1rem', lineHeight: 1.7 }}>
              Combina el poder de las <strong style={{ color: '#f8fafc' }}>campañas SEM</strong> con una estrategia de <strong style={{ color: '#f8fafc' }}>SEO</strong> sólida para dominar Google completamente. Solicita tu estrategia personalizada de <strong style={{ color: '#f8fafc' }}>marketing digital</strong>.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact/" className="btn btn-primary btn-lg" style={{ background: 'linear-gradient(135deg, #f59e0b, #ea580c)', color: '#000', fontWeight: 700, border: 'none' }}>
                Agendar Consulta Gratuita
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link href="/services/seo/" className="btn btn-secondary btn-lg">Ver Servicio SEO</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
