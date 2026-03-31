import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { BreadcrumbJsonLd, ServiceJsonLd, FAQPageJsonLd } from '@/components/seo/JsonLd';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Desarrollo de Aplicaciones Web y Móviles | José Gaspard',
  description: 'Servicio de desarrollo de aplicaciones web y móviles. Creación de apps SaaS, plataformas digitales y software a medida con Next.js, NestJS y React Native.',
  keywords: ['desarrollo de aplicaciones', 'desarrollo de apps', 'desarrollo de software', 'aplicaciones web', 'aplicaciones móviles', 'desarrollo de aplicaciones en méxico', 'programador de aplicaciones'],
  alternates: { canonical: 'https://josegaspard.dev/services/desarrollo-aplicaciones/' },
  openGraph: {
    title: 'Desarrollo de Aplicaciones Web y Móviles | José Gaspard',
    description: 'Servicio de desarrollo de aplicaciones web y móviles. Creación de apps SaaS, plataformas digitales y software a medida con Next.js, NestJS y React Native.',
    type: 'website',
    url: 'https://josegaspard.dev/services/desarrollo-aplicaciones/',
  },
};

const APP_TYPES = [
  {
    icon: '🚀',
    title: 'Aplicaciones SaaS',
    description: 'Desarrollo de plataformas SaaS escalables con suscripciones, multi-tenancy, paneles de usuario y métricas en tiempo real. Arquitectura cloud-native diseñada para crecer con tu negocio.',
  },
  {
    icon: '🛒',
    title: 'Plataformas E-commerce',
    description: 'Creación de marketplaces y tiendas en línea avanzadas con catálogos dinámicos, pasarelas de pago, gestión de inventario y experiencia de compra optimizada para conversión.',
  },
  {
    icon: '📊',
    title: 'Dashboards y CRM',
    description: 'Desarrollo de paneles de administración, sistemas CRM y herramientas de business intelligence con visualización de datos en tiempo real, reportes automatizados y flujos de trabajo personalizados.',
  },
  {
    icon: '📱',
    title: 'Apps Móviles (React Native)',
    description: 'Desarrollo de aplicaciones móviles multiplataforma con React Native para iOS y Android. Una sola base de código, rendimiento nativo y experiencia de usuario excepcional.',
  },
];

const TECH_STACK = [
  'Next.js 15',
  'NestJS',
  'React Native',
  'TypeScript',
  'PostgreSQL',
  'Redis',
  'Docker',
  'AWS',
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery y Planificación',
    description: 'Analizamos tus objetivos de negocio, usuarios finales y requisitos técnicos. Definimos la arquitectura del software, tecnologías y un roadmap detallado del desarrollo de aplicaciones.',
  },
  {
    step: '02',
    title: 'Diseño de Producto',
    description: 'Creamos wireframes, prototipos interactivos y el diseño visual de tu aplicación. Validamos la experiencia de usuario antes de escribir una sola línea de código.',
  },
  {
    step: '03',
    title: 'Desarrollo Backend',
    description: 'Construimos la lógica de negocio, APIs, base de datos y servicios del servidor con NestJS y PostgreSQL. Arquitectura modular, escalable y documentada para tu desarrollo de software.',
  },
  {
    step: '04',
    title: 'Desarrollo Frontend',
    description: 'Implementamos la interfaz de usuario con Next.js o React Native, conectando con el backend mediante APIs RESTful. Rendimiento optimizado y experiencia fluida en todos los dispositivos.',
  },
  {
    step: '05',
    title: 'Testing e Integración',
    description: 'Ejecutamos pruebas unitarias, de integración y end-to-end. Configuramos pipelines CI/CD, Docker y despliegue automatizado en AWS para garantizar la calidad del software.',
  },
  {
    step: '06',
    title: 'Lanzamiento y Evolución',
    description: 'Desplegamos tu aplicación en producción con monitoreo, alertas y métricas. Ofrecemos soporte continuo, iteraciones basadas en feedback de usuarios y desarrollo de nuevas funcionalidades.',
  },
];

const FAQ_ITEMS = [
  {
    question: '¿Cuánto cuesta el desarrollo de una aplicación web o móvil?',
    answer: 'El costo del desarrollo de aplicaciones varía significativamente según la complejidad. Un MVP (producto mínimo viable) puede comenzar desde $5,000 USD, mientras que aplicaciones web completas con múltiples módulos parten de $15,000 USD. Las apps móviles con React Native comienzan desde $8,000 USD. Cada proyecto recibe una cotización personalizada tras el análisis de requerimientos.',
  },
  {
    question: '¿Cuánto tiempo toma desarrollar una aplicación?',
    answer: 'Un MVP funcional puede estar listo en 6-8 semanas. Una aplicación web completa con dashboard, autenticación y múltiples módulos requiere entre 3-5 meses. Las aplicaciones móviles multiplataforma con React Native toman entre 2-4 meses. Trabajamos con metodología ágil y entregas incrementales para que veas avances cada 2 semanas.',
  },
  {
    question: '¿Qué tecnologías utilizan para el desarrollo de software?',
    answer: 'Utilizamos un stack tecnológico moderno y probado: Next.js 15 para aplicaciones web con SSR y SEO, NestJS para backends escalables, React Native para apps móviles multiplataforma, TypeScript para código tipado y mantenible, PostgreSQL como base de datos relacional, Redis para caché y sesiones, Docker para contenedores y AWS para infraestructura cloud.',
  },
  {
    question: '¿Ofrecen soporte y mantenimiento después del lanzamiento?',
    answer: 'Sí, todos nuestros proyectos de desarrollo de aplicaciones incluyen 60 días de soporte post-lanzamiento. Además, ofrecemos planes de mantenimiento mensuales que incluyen monitoreo 24/7, actualizaciones de seguridad, optimización de rendimiento, backups automáticos y desarrollo de nuevas funcionalidades según las necesidades de tu negocio.',
  },
];

export default function DesarrolloAplicacionesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Inicio', url: 'https://josegaspard.dev' },
        { name: 'Servicios', url: 'https://josegaspard.dev/services/' },
        { name: 'Desarrollo de Aplicaciones', url: 'https://josegaspard.dev/services/desarrollo-aplicaciones/' },
      ]} />
      <ServiceJsonLd name="Desarrollo de Aplicaciones Web y Móviles" description="Servicio de desarrollo de aplicaciones web y móviles. Creación de apps SaaS, plataformas digitales y software a medida con Next.js, NestJS y React Native en México." />
      <FAQPageJsonLd faqs={FAQ_ITEMS} />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero" style={{ minHeight: '65vh', paddingTop: 80 }}>
          <div className="blob blob-indigo" />
          <div className="container hero-content text-center" style={{ maxWidth: 850, margin: '0 auto' }}>
            <span className="section-badge">Desarrollo de Aplicaciones</span>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Desarrollo de <span style={{ color: '#3b82f6' }}>Aplicaciones Web y Móviles</span> a Medida
            </h1>
            <p className="hero-subtitle" style={{ margin: '0 auto', maxWidth: 700, fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.7 }}>
              Servicio especializado de <strong>desarrollo de aplicaciones</strong> para empresas que necesitan soluciones digitales robustas. Como <strong>programador de aplicaciones</strong> full-stack, creo <strong>aplicaciones web</strong>, <strong>aplicaciones móviles</strong> y <strong>software a medida</strong> con tecnologías modernas como Next.js, NestJS y React Native.
            </p>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '1.5rem', letterSpacing: '0.02em' }}>
              ✓ Apps escalables · ✓ Código TypeScript · ✓ Arquitectura cloud-native
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginTop: 32 }}>
              <Link href="/contact/" className="btn btn-primary btn-lg" style={{ background: 'linear-gradient(135deg, #f59e0b, #ea580c)', color: '#000', fontWeight: 700, border: 'none' }}>
                Solicitar Presupuesto
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link href="/portafolio/" className="btn btn-secondary btn-lg">
                Ver Proyectos
              </Link>
            </div>
          </div>
        </section>

        {/* Types of Apps */}
        <section className="section">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-badge">Soluciones</span>
              <h2 className="section-title">Tipos de <span style={{ color: '#3b82f6' }}>Aplicaciones</span> que Desarrollamos</h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: 650, margin: '0 auto', lineHeight: 1.7 }}>
                Ofrecemos <strong>desarrollo de apps</strong> para todo tipo de necesidades empresariales. Desde plataformas SaaS hasta <strong>aplicaciones móviles</strong>, cada proyecto se construye con arquitectura escalable y las mejores prácticas de <strong>desarrollo de software</strong>.
              </p>
            </div>
            <div className="grid-2">
              {APP_TYPES.map((app) => (
                <div key={app.title} className="glass-card" style={{ borderTop: '3px solid #3b82f6', padding: '2rem' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{app.icon}</div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.75rem' }}>{app.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>{app.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="section" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="section-header text-center">
              <span className="section-badge">Stack Tecnológico</span>
              <h2 className="section-title">Tecnologías de <span style={{ color: '#3b82f6' }}>Vanguardia</span></h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: 650, margin: '0 auto', lineHeight: 1.7 }}>
                Utilizamos las tecnologías más modernas y demandadas del mercado para garantizar que tu <strong>desarrollo de aplicaciones en México</strong> sea escalable, seguro y de alto rendimiento.
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', maxWidth: 700, margin: '0 auto' }}>
              {TECH_STACK.map((tech) => (
                <span key={tech} style={{
                  background: 'rgba(59, 130, 246, 0.1)',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  color: '#3b82f6',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '2rem',
                  fontSize: '1rem',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-badge">Metodología</span>
              <h2 className="section-title">Proceso de <span style={{ color: '#3b82f6' }}>Desarrollo de Apps</span></h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: 650, margin: '0 auto', lineHeight: 1.7 }}>
                Nuestro proceso de <strong>desarrollo de software</strong> sigue metodología ágil con sprints de 2 semanas, entregas incrementales y comunicación transparente en cada fase del proyecto.
              </p>
            </div>
            <div className="grid-3">
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
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem', color: '#f8fafc' }}>{step.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Mini - Stats */}
        <section className="section" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="section-header text-center">
              <span className="section-badge">Caso de Éxito</span>
              <h2 className="section-title">Resultados Reales de Nuestro <span style={{ color: '#3b82f6' }}>Desarrollo de Apps</span></h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
                Métricas reales de una plataforma SaaS desarrollada con nuestro servicio de <strong>desarrollo de aplicaciones</strong>, desplegada en producción y operando a escala.
              </p>
            </div>
            <div className="grid-3">
              <div className="glass-card" style={{ textAlign: 'center', padding: '2.5rem 2rem', borderTop: '3px solid #3b82f6' }}>
                <div style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#3b82f6', lineHeight: 1 }}>10,000+</div>
                <p style={{ color: '#f8fafc', fontWeight: 600, fontSize: '1.1rem', marginTop: '0.75rem' }}>Usuarios Activos</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Usuarios mensuales activos en la plataforma</p>
              </div>
              <div className="glass-card" style={{ textAlign: 'center', padding: '2.5rem 2rem', borderTop: '3px solid #3b82f6' }}>
                <div style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#3b82f6', lineHeight: 1 }}>99.9%</div>
                <p style={{ color: '#f8fafc', fontWeight: 600, fontSize: '1.1rem', marginTop: '0.75rem' }}>Uptime</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Disponibilidad garantizada en producción</p>
              </div>
              <div className="glass-card" style={{ textAlign: 'center', padding: '2.5rem 2rem', borderTop: '3px solid #3b82f6' }}>
                <div style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#3b82f6', lineHeight: 1 }}>&lt;200ms</div>
                <p style={{ color: '#f8fafc', fontWeight: 600, fontSize: '1.1rem', marginTop: '0.75rem' }}>Response Time</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Tiempo de respuesta promedio del API</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section style={{
          background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
          padding: '4rem 1.5rem',
          textAlign: 'center',
        }}>
          <div className="container" style={{ maxWidth: 750 }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: '#000', marginBottom: '1rem' }}>
              ¿Tienes una idea para una aplicación?
            </h2>
            <p style={{ color: 'rgba(0,0,0,0.75)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              Transformamos tu visión en una <strong>aplicación web</strong> o <strong>aplicación móvil</strong> funcional, escalable y lista para el mercado. Agenda una consulta gratuita y hablemos de tu proyecto.
            </p>
            <Link href="/contact/" className="btn btn-primary btn-lg" style={{ background: '#030712', color: '#f8fafc', fontWeight: 700, border: 'none', padding: '1rem 2.5rem', fontSize: '1.05rem' }}>
              Agendar Consulta Gratuita
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container" style={{ maxWidth: 800 }}>
            <div className="section-header text-center">
              <span className="section-badge">FAQ</span>
              <h2 className="section-title">Preguntas Frecuentes sobre <span style={{ color: '#3b82f6' }}>Desarrollo de Apps</span></h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {FAQ_ITEMS.map((faq, i) => (
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
              Construyamos tu <span style={{ color: '#3b82f6' }}>Aplicación</span> Juntos
            </h2>
            <p style={{ color: '#94a3b8', maxWidth: 600, margin: '1rem auto 2rem', fontSize: '1.1rem', lineHeight: 1.7 }}>
              Como <strong style={{ color: '#f8fafc' }}>programador de aplicaciones</strong> con experiencia en <strong style={{ color: '#f8fafc' }}>desarrollo de aplicaciones en México</strong>, te ayudo a crear el software que tu empresa necesita para crecer y competir en el mercado digital.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact/" className="btn btn-primary btn-lg" style={{ background: 'linear-gradient(135deg, #f59e0b, #ea580c)', color: '#000', fontWeight: 700, border: 'none' }}>
                Comenzar Mi Proyecto
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link href="/services/" className="btn btn-secondary btn-lg">Ver Todos los Servicios</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
