import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/seo/JsonLd';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Asesor SEO para Empresas | Consultoría SEO Empresarial - José Gaspard',
  description: 'Asesor SEO especializado en empresas. Consultoría SEO empresarial con estrategias personalizadas para PyMEs y corporaciones. +15 años asesorando empresas en México y LATAM.',
  keywords: ['asesor seo', 'consultor seo para empresas', 'asesoría seo', 'consultoría seo', 'asesor seo empresarial', 'consultor seo méxico', 'estrategia seo para empresas'],
  alternates: { canonical: 'https://josegaspard.dev/services/asesor-seo/' },
  openGraph: {
    title: 'Asesor SEO para Empresas | Consultoría SEO Empresarial - José Gaspard',
    description: 'Asesor SEO especializado en empresas. Consultoría SEO empresarial con estrategias personalizadas para PyMEs y corporaciones.',
    type: 'website',
    url: 'https://josegaspard.dev/services/asesor-seo/',
  },
};

const ADVISORY_SERVICES = [
  { icon: '📋', title: 'Auditoría SEO Integral', desc: 'Análisis exhaustivo de tu sitio web: SEO técnico, contenido, arquitectura, Core Web Vitals, perfil de enlaces y análisis competitivo. Identificamos cada oportunidad de mejora.' },
  { icon: '🎯', title: 'Estrategia SEO Personalizada', desc: 'Plan de acción diseñado exclusivamente para tu empresa. Definimos objetivos, KPIs, cronograma y acciones priorizadas por impacto y viabilidad.' },
  { icon: '👥', title: 'Capacitación de Equipos', desc: 'Formo a tu equipo de marketing y desarrollo en las mejores prácticas de SEO para que sean autosuficientes y tomen decisiones informadas.' },
  { icon: '📊', title: 'Reportes y KPIs Mensuales', desc: 'Informes ejecutivos con métricas claras: rankings, tráfico orgánico, conversiones, Core Web Vitals y análisis de progreso vs. objetivos.' },
  { icon: '🔗', title: 'Supervisión de Link Building', desc: 'Dirijo y superviso la estrategia de adquisición de enlaces: prospección, outreach, análisis de calidad y monitoreo del perfil de backlinks.' },
  { icon: '⚡', title: 'Optimización de Core Web Vitals', desc: 'Mejora del rendimiento web: LCP, INP, CLS. Optimización técnica que impacta directamente en rankings y experiencia de usuario.' },
];

const TARGET_PROFILES = [
  { icon: '🏢', title: 'PyMEs que quieren crecer orgánicamente', desc: 'Empresas pequeñas y medianas que necesitan un asesor SEO externo para competir con jugadores más grandes sin depender solo de publicidad pagada.' },
  { icon: '🚀', title: 'Startups que necesitan posicionarse rápido', desc: 'Startups en etapa de crecimiento que requieren una estrategia SEO agresiva y bien ejecutada para ganar visibilidad en su mercado desde el inicio.' },
  { icon: '🛒', title: 'E-commerce que busca más ventas orgánicas', desc: 'Tiendas online que quieren aumentar su tráfico orgánico, mejorar la conversión de sus fichas de producto y dominar las búsquedas transaccionales.' },
  { icon: '🏛️', title: 'Corporaciones que necesitan un experto externo', desc: 'Grandes empresas que requieren un consultor SEO independiente para auditar, asesorar y guiar a sus equipos internos con visión estratégica.' },
];

const PROCESS_STEPS = [
  { step: '01', title: 'Diagnóstico inicial gratuito', desc: 'Analizamos tu situación actual: posicionamiento, competencia, oportunidades y puntos de dolor. Sin compromiso, para que sepas exactamente dónde estás y hacia dónde puedes ir.' },
  { step: '02', title: 'Plan de acción personalizado', desc: 'Diseño una estrategia SEO a medida con objetivos claros, KPIs medibles y un roadmap priorizado por impacto. Cada acción tiene un propósito definido.' },
  { step: '03', title: 'Implementación y seguimiento', desc: 'Superviso la ejecución de cada mejora, trabajo junto a tu equipo y verifico que las implementaciones técnicas se realicen correctamente.' },
  { step: '04', title: 'Optimización y escalado', desc: 'Analizo resultados, ajusto la estrategia y escalamos lo que funciona. Mejora continua basada en datos reales de Search Console, Ahrefs y analítica.' },
];

const FAQ = [
  {
    question: '¿Cuál es la diferencia entre un asesor SEO y una agencia SEO?',
    answer: 'Un asesor SEO trabaja de forma personal y directa contigo. No hay intermediarios, ejecutivos de cuenta ni rotación de personal. Yo personalmente analizo tu proyecto, diseño la estrategia y superviso cada implementación. Esto garantiza continuidad, conocimiento profundo de tu negocio y comunicación directa con quien toma las decisiones estratégicas.',
  },
  {
    question: '¿Cuánto tiempo necesita una empresa para ver resultados con asesoría SEO?',
    answer: 'Las mejoras técnicas (Core Web Vitals, indexación, estructura) son visibles en 2-4 semanas. El impacto en rankings y tráfico orgánico se percibe entre 3-6 meses. Para resultados sostenibles y un ROI sólido, recomiendo un compromiso mínimo de 6 meses de asesoría SEO continua.',
  },
  {
    question: '¿La asesoría SEO incluye implementación técnica?',
    answer: 'Mi rol como asesor SEO es diagnosticar, diseñar la estrategia y supervisar la implementación. Puedo trabajar con tu equipo de desarrollo para guiar los cambios técnicos, o si no tienes equipo, ofrezco el servicio de implementación como complemento a la consultoría SEO.',
  },
  {
    question: '¿Trabajas con empresas fuera de México?',
    answer: 'Sí. Asesoro empresas en toda Latinoamérica y España. La asesoría SEO se realiza de forma remota con videollamadas semanales, acceso a herramientas compartidas y comunicación directa por Slack o WhatsApp. He trabajado con empresas en más de 5 países.',
  },
];

export default function AsesorSeoPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Inicio', url: 'https://josegaspard.dev' },
        { name: 'Servicios', url: 'https://josegaspard.dev/services/' },
        { name: 'Asesor SEO', url: 'https://josegaspard.dev/services/asesor-seo/' },
      ]} />
      <ServiceJsonLd
        name="Asesoría SEO Empresarial"
        description="Asesor SEO especializado en empresas. Consultoría SEO empresarial con estrategias personalizadas para PyMEs y corporaciones en México y LATAM."
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="hero" style={{ minHeight: '65vh' }}>
          <div className="blob blob-indigo" />
          <div className="container hero-content text-center" style={{ maxWidth: 850, margin: '0 auto' }}>
            <span className="section-badge">Consultoría SEO Empresarial</span>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Asesor SEO para Tu Empresa — <span style={{ color: '#3b82f6' }}>Consultoría SEO Empresarial</span> Personalizada
            </h1>
            <p className="hero-subtitle" style={{ margin: '0 auto', maxWidth: 720, fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.7 }}>
              Actúo como tu <strong>asesor SEO externo</strong>: analizo, diseño la estrategia y superviso cada implementación directamente. Sin intermediarios, sin agencias — un <strong>consultor SEO para empresas</strong> que se involucra al 100% con tu proyecto y tu equipo.
            </p>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '1rem', letterSpacing: '0.5px' }}>
              <strong style={{ color: '#f8fafc' }}>Google Expert</strong> · <strong style={{ color: '#f8fafc' }}>Canva</strong> · <strong style={{ color: '#f8fafc' }}>PayPal</strong> · <strong style={{ color: '#f8fafc' }}>+200 proyectos</strong>
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginTop: 32 }}>
              <Link href="/contact/" className="btn btn-primary btn-lg" style={{ background: 'linear-gradient(135deg, #f59e0b, #ea580c)', color: '#000', fontWeight: 700, border: 'none' }}>
                Agendar Asesoría Gratuita
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* What is SEO Advisory */}
        <section className="section">
          <div className="container" style={{ maxWidth: 900 }}>
            <div className="section-header text-center">
              <span className="section-badge">¿Qué es?</span>
              <h2 className="section-title">¿Qué Hace un <span style={{ color: '#3b82f6' }}>Asesor SEO</span> por Tu Empresa?</h2>
            </div>
            <div className="glass-card" style={{ padding: '2.5rem', borderTop: '3px solid #3b82f6' }}>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                Un <strong style={{ color: '#f8fafc' }}>asesor SEO empresarial</strong> es tu aliado estratégico para el crecimiento orgánico. Mi trabajo consiste en cuatro pilares fundamentales: <strong style={{ color: '#f8fafc' }}>auditoría</strong> profunda de tu presencia digital, diseño de una <strong style={{ color: '#f8fafc' }}>estrategia SEO</strong> a medida, <strong style={{ color: '#f8fafc' }}>supervisión</strong> de la implementación técnica y <strong style={{ color: '#f8fafc' }}>capacitación</strong> de tu equipo para mantener los resultados.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                A diferencia de una agencia SEO tradicional, como <strong style={{ color: '#f8fafc' }}>consultor SEO para empresas</strong> trabajo de forma personal y directa. Tú hablas conmigo, no con un ejecutivo de cuenta. Conozco cada detalle de tu proyecto porque yo mismo lo analizo y lo gestiono. Esto se traduce en decisiones más rápidas, estrategias más precisas y un nivel de compromiso que solo un <strong style={{ color: '#f8fafc' }}>asesor SEO</strong> dedicado puede ofrecer.
              </p>
            </div>
          </div>
        </section>

        {/* Services as Advisor */}
        <section className="section" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="section-header text-center">
              <span className="section-badge">Servicios</span>
              <h2 className="section-title">Mi <span style={{ color: '#3b82f6' }}>Asesoría SEO</span> Incluye</h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: 650, margin: '0 auto', lineHeight: 1.7 }}>
                Cada servicio de <strong>consultoría SEO</strong> está diseñado para generar impacto real en el posicionamiento y crecimiento orgánico de tu empresa.
              </p>
            </div>
            <div className="grid-3">
              {ADVISORY_SERVICES.map((service) => (
                <div key={service.title} className="glass-card" style={{ padding: '2rem', borderTop: '3px solid #3b82f6' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{service.icon}</div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.75rem' }}>{service.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who is This For */}
        <section className="section">
          <div className="container" style={{ maxWidth: 950 }}>
            <div className="section-header text-center">
              <span className="section-badge">Para Quién</span>
              <h2 className="section-title">¿Para Quién es la <span style={{ color: '#3b82f6' }}>Consultoría SEO</span>?</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '1.5rem' }}>
              {TARGET_PROFILES.map((profile) => (
                <div key={profile.title} className="glass-card" style={{ padding: '2rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '2rem', minWidth: 40 }}>{profile.icon}</div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.5rem' }}>{profile.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>{profile.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advisory Process */}
        <section className="section" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="section-header text-center">
              <span className="section-badge">Proceso</span>
              <h2 className="section-title">Mi Proceso de <span style={{ color: '#3b82f6' }}>Asesoría SEO</span></h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
                Una metodología clara y transparente como <strong>asesor SEO empresarial</strong> para garantizar resultados medibles desde el primer mes.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '2rem', maxWidth: 1000, margin: '0 auto' }}>
              {PROCESS_STEPS.map((step) => (
                <div key={step.step} className="glass-card" style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
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
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.75rem', color: '#f8fafc' }}>{step.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Companies I've Advised */}
        <section className="section">
          <div className="container" style={{ maxWidth: 800, textAlign: 'center' }}>
            <div className="section-header text-center">
              <span className="section-badge">Confianza</span>
              <h2 className="section-title">Empresas que Han <span style={{ color: '#3b82f6' }}>Confiado</span> en Mi Asesoría</h2>
            </div>
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
              {['Google', 'Canva', 'PayPal', 'GestoMarketing'].map((company) => (
                <span key={company} style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#94a3b8',
                  padding: '0.75rem 1.5rem',
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: 12,
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  {company}
                </span>
              ))}
            </div>
            <p style={{ color: '#64748b', marginTop: '1.5rem', fontSize: '0.95rem' }}>+ empresas en 5 países de Latinoamérica y España</p>
          </div>
        </section>

        {/* Pricing */}
        <section className="section" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container" style={{ maxWidth: 900 }}>
            <div className="section-header text-center">
              <span className="section-badge">Inversión</span>
              <h2 className="section-title">Planes de <span style={{ color: '#3b82f6' }}>Asesoría SEO</span></h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: '2rem' }}>
              {/* Plan Mensual */}
              <div className="glass-card" style={{ padding: '2.5rem', borderTop: '3px solid #3b82f6' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#f8fafc', marginBottom: '0.5rem' }}>Asesoría Mensual</h3>
                <p className="price" style={{ color: '#3b82f6', fontSize: '2rem', fontWeight: 800, margin: '1rem 0' }}>Desde $999 USD<span style={{ fontSize: '1rem', fontWeight: 400 }}>/mes</span></p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {['Calls semanales de seguimiento', 'Reportes mensuales con KPIs', 'Estrategia SEO personalizada', 'Revisión técnica continua', 'Acceso directo por Slack/WhatsApp', 'Análisis competitivo mensual'].map((feature) => (
                    <li key={feature} style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', display: 'flex', gap: 8, alignItems: 'center' }}>
                      <span style={{ color: '#3b82f6', fontWeight: 700 }}>&#10003;</span> {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact/" className="btn btn-primary" style={{ width: '100%', background: '#3b82f6', color: '#fff', fontWeight: 700, border: 'none' }}>
                  Solicitar Asesoría Mensual
                </Link>
              </div>

              {/* Plan Enterprise */}
              <div className="glass-card" style={{ padding: '2.5rem', borderTop: '3px solid #f59e0b', position: 'relative' }}>
                <span style={{
                  position: 'absolute',
                  top: -12,
                  right: 24,
                  background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
                  color: '#000',
                  padding: '0.3rem 1rem',
                  borderRadius: 20,
                  fontSize: '0.8rem',
                  fontWeight: 700,
                }}>
                  Empresas
                </span>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#f8fafc', marginBottom: '0.5rem' }}>Asesoría Enterprise</h3>
                <p className="price" style={{ color: '#f59e0b', fontSize: '2rem', fontWeight: 800, margin: '1rem 0' }}>Personalizado</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {['Todo en Asesoría Mensual', 'Equipo dedicado a tu proyecto', 'Implementación técnica incluida', 'Capacitación de equipos internos', 'Reportes ejecutivos para C-level', 'SLA con tiempos de respuesta'].map((feature) => (
                    <li key={feature} style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', display: 'flex', gap: 8, alignItems: 'center' }}>
                      <span style={{ color: '#f59e0b', fontWeight: 700 }}>&#10003;</span> {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact/" className="btn btn-primary" style={{ width: '100%', background: 'linear-gradient(135deg, #f59e0b, #ea580c)', color: '#000', fontWeight: 700, border: 'none' }}>
                  Solicitar Cotización Enterprise
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 800 }}>
              ¿Tu empresa necesita un <span style={{ color: '#3b82f6' }}>asesor SEO</span>?
            </h2>
            <p style={{ color: '#94a3b8', maxWidth: 650, margin: '1rem auto 2rem', fontSize: '1.1rem', lineHeight: 1.7 }}>
              Agenda una <strong style={{ color: '#f8fafc' }}>consulta gratuita</strong> y descubre cómo mi <strong style={{ color: '#f8fafc' }}>consultoría SEO empresarial</strong> puede transformar el crecimiento orgánico de tu negocio.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact/" className="btn btn-primary btn-lg" style={{ background: 'linear-gradient(135deg, #f59e0b, #ea580c)', color: '#000', fontWeight: 700, border: 'none' }}>
                Agendar Asesoría Gratuita
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link href="/portafolio/" className="btn btn-secondary btn-lg">Ver Portafolio</Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container" style={{ maxWidth: 800 }}>
            <div className="section-header text-center">
              <span className="section-badge">FAQ</span>
              <h2 className="section-title">Preguntas <span style={{ color: '#3b82f6' }}>Frecuentes</span></h2>
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
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
