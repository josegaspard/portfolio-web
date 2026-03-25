import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { BreadcrumbJsonLd, ServiceJsonLd, FAQPageJsonLd } from '@/components/seo/JsonLd';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Desarrollo Web Profesional WordPress y Laravel | José Gaspard',
  description: 'Servicio de desarrollo web profesional con WordPress y Laravel. Creación de páginas web de alto rendimiento, e-commerce, aplicaciones web y sitios corporativos en México.',
  keywords: ['desarrollo web', 'desarrollo web wordpress', 'desarrollo web laravel', 'diseño web profesional', 'programador web', 'creación de páginas web', 'desarrollo web en méxico'],
  alternates: { canonical: 'https://josegaspard.dev/services/desarrollo-web/' },
  openGraph: {
    title: 'Desarrollo Web Profesional WordPress y Laravel | José Gaspard',
    description: 'Servicio de desarrollo web profesional con WordPress y Laravel. Creación de páginas web de alto rendimiento, e-commerce, aplicaciones web y sitios corporativos en México.',
    type: 'website',
    url: 'https://josegaspard.dev/services/desarrollo-web/',
  },
};

const WP_FEATURES = [
  'Themes a medida',
  'Plugins personalizados',
  'WooCommerce',
  'Elementor Pro',
  'Optimización de velocidad',
  'Seguridad avanzada',
];

const LARAVEL_FEATURES = [
  'APIs RESTful',
  'Paneles admin',
  'Sistemas CRM/ERP',
  'Pasarelas de pago',
  'Autenticación avanzada',
  'Arquitectura escalable',
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Análisis de Requerimientos',
    description: 'Estudiamos a fondo tu negocio, objetivos y público objetivo para definir la arquitectura ideal de tu sitio web. Cada proyecto de desarrollo web comienza con una comprensión profunda de tus necesidades.',
  },
  {
    step: '02',
    title: 'Diseño UX/UI',
    description: 'Creamos wireframes y prototipos de diseño web profesional centrados en la experiencia de usuario. Cada interfaz se diseña para maximizar conversiones y facilitar la navegación.',
  },
  {
    step: '03',
    title: 'Desarrollo y Programación',
    description: 'Nuestro equipo de programadores web transforma el diseño en código limpio y optimizado, ya sea con WordPress, Laravel o tecnologías modernas. Cada línea de código sigue las mejores prácticas de la industria.',
  },
  {
    step: '04',
    title: 'Testing y QA',
    description: 'Realizamos pruebas exhaustivas de rendimiento, compatibilidad cross-browser, responsividad y seguridad. Garantizamos que tu página web funcione perfectamente en todos los dispositivos.',
  },
  {
    step: '05',
    title: 'Lanzamiento y Soporte',
    description: 'Desplegamos tu sitio web en producción con configuración de hosting optimizado, SSL, CDN y monitoreo. Ofrecemos soporte técnico continuo y mantenimiento preventivo post-lanzamiento.',
  },
];

const FAQ_ITEMS = [
  {
    question: '¿Cuánto cuesta el desarrollo de una página web profesional?',
    answer: 'El costo de desarrollo web varía según la complejidad del proyecto. Un sitio corporativo en WordPress comienza desde $800 USD, mientras que un e-commerce con WooCommerce parte de $1,500 USD. Las aplicaciones web a medida con Laravel se cotizan de manera personalizada según los requerimientos. Ofrecemos una consulta gratuita para evaluar tu proyecto y darte un presupuesto detallado.',
  },
  {
    question: '¿Cuánto tiempo toma la creación de un sitio web?',
    answer: 'Los tiempos de desarrollo web dependen del alcance del proyecto. Una landing page profesional se entrega en 1-2 semanas. Un sitio corporativo completo en WordPress toma entre 3-5 semanas. Un e-commerce con funcionalidades avanzadas requiere de 4-8 semanas. Proyectos a medida con Laravel pueden tomar entre 6-12 semanas dependiendo de la complejidad.',
  },
  {
    question: '¿Incluyen mantenimiento y soporte después del lanzamiento?',
    answer: 'Sí, todos nuestros proyectos de desarrollo web incluyen 30 días de soporte post-lanzamiento sin costo adicional. Además, ofrecemos planes de mantenimiento mensual que incluyen actualizaciones de seguridad, backups automáticos, monitoreo de rendimiento y soporte técnico prioritario. El mantenimiento es fundamental para mantener tu sitio web seguro y optimizado.',
  },
  {
    question: '¿Los sitios web que desarrollan están optimizados para SEO?',
    answer: 'Absolutamente. Cada proyecto de desarrollo web que realizamos incluye optimización SEO desde el código: estructura semántica HTML5, meta tags optimizados, Schema markup, URLs amigables, carga rápida, Core Web Vitals optimizados y diseño responsive. Como programador web y especialista SEO, me aseguro de que cada sitio web esté preparado para posicionar en Google desde el primer día.',
  },
];

export default function DesarrolloWebPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Inicio', url: 'https://josegaspard.dev' },
        { name: 'Servicios', url: 'https://josegaspard.dev/services/' },
        { name: 'Desarrollo Web', url: 'https://josegaspard.dev/services/desarrollo-web/' },
      ]} />
      <ServiceJsonLd name="Desarrollo Web Profesional" description="Servicio de desarrollo web profesional con WordPress y Laravel. Creación de páginas web de alto rendimiento, e-commerce, aplicaciones web y sitios corporativos en México." />
      <FAQPageJsonLd faqs={FAQ_ITEMS} />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero" style={{ minHeight: '65vh', paddingTop: 80 }}>
          <div className="blob blob-indigo" />
          <div className="container hero-content text-center" style={{ maxWidth: 850, margin: '0 auto' }}>
            <span className="section-badge">Desarrollo Web</span>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Desarrollo Web Profesional con <span style={{ color: '#3b82f6' }}>WordPress</span> y <span style={{ color: '#3b82f6' }}>Laravel</span>
            </h1>
            <p className="hero-subtitle" style={{ margin: '0 auto', maxWidth: 700, fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.7 }}>
              Servicio de <strong>desarrollo web</strong> especializado en la <strong>creación de páginas web</strong> de alto rendimiento. Como <strong>programador web</strong> con más de 15 años de experiencia, desarrollo sitios corporativos, e-commerce y aplicaciones web con <strong>diseño web profesional</strong> optimizado para SEO y conversión.
            </p>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '1.5rem', letterSpacing: '0.02em' }}>
              ✓ +200 sitios desarrollados · ✓ Código limpio · ✓ SEO desde el código
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginTop: 32 }}>
              <Link href="/contact/" className="btn btn-primary btn-lg" style={{ background: 'linear-gradient(135deg, #f59e0b, #ea580c)', color: '#000', fontWeight: 700, border: 'none' }}>
                Solicitar Presupuesto
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link href="/portafolio/" className="btn btn-secondary btn-lg">
                Ver Portafolio
              </Link>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="section">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-badge">Tecnologías</span>
              <h2 className="section-title">Especialistas en <span style={{ color: '#3b82f6' }}>WordPress y Laravel</span></h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: 650, margin: '0 auto', lineHeight: 1.7 }}>
                Combinamos las plataformas más potentes del mercado para ofrecer soluciones de <strong>desarrollo web en México</strong> que se adaptan a cada tipo de proyecto y presupuesto.
              </p>
            </div>
            <div className="grid-2">
              {/* WordPress Card */}
              <div className="glass-card" style={{ borderTop: '3px solid #3b82f6', padding: '2.5rem 2rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔷</div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f8fafc', marginBottom: '1rem' }}>
                  Desarrollo WordPress Profesional
                </h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  Creamos sitios web WordPress personalizados que van más allá de las plantillas genéricas. Cada proyecto de <strong>desarrollo web WordPress</strong> incluye themes a medida, plugins personalizados y optimización avanzada para lograr un <strong>diseño web profesional</strong> que destaque en tu industria.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  {WP_FEATURES.map((f) => (
                    <li key={f} style={{ color: '#94a3b8', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ color: '#3b82f6', fontWeight: 700 }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <p style={{ color: '#3b82f6', fontSize: '0.9rem', fontWeight: 600, borderTop: '1px solid rgba(59, 130, 246, 0.2)', paddingTop: '1rem' }}>
                  Ideal para: Blogs, corporativos, e-commerce, directorios
                </p>
              </div>

              {/* Laravel Card */}
              <div className="glass-card" style={{ borderTop: '3px solid #06b6d4', padding: '2.5rem 2rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔶</div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f8fafc', marginBottom: '1rem' }}>
                  Desarrollo Laravel a Medida
                </h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  Desarrollamos aplicaciones web robustas y escalables con Laravel, el framework PHP más popular del mundo. Nuestro servicio de <strong>desarrollo web Laravel</strong> está diseñado para proyectos que requieren lógica de negocio compleja, integraciones avanzadas y una arquitectura sólida.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  {LARAVEL_FEATURES.map((f) => (
                    <li key={f} style={{ color: '#94a3b8', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ color: '#06b6d4', fontWeight: 700 }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <p style={{ color: '#06b6d4', fontSize: '0.9rem', fontWeight: 600, borderTop: '1px solid rgba(6, 182, 212, 0.2)', paddingTop: '1rem' }}>
                  Ideal para: SaaS, marketplaces, apps empresariales
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="section-header text-center">
              <span className="section-badge">Metodología</span>
              <h2 className="section-title">Proceso de <span style={{ color: '#3b82f6' }}>Desarrollo Web</span></h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: 650, margin: '0 auto', lineHeight: 1.7 }}>
                Cada proyecto de <strong>creación de páginas web</strong> sigue un proceso estructurado de 5 fases que garantiza calidad, cumplimiento de plazos y resultados excepcionales.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '2rem', maxWidth: 1100, margin: '0 auto' }}>
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

        {/* Portfolio Mini - Stats */}
        <section className="section">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-badge">Resultados</span>
              <h2 className="section-title">Números que Respaldan Nuestro <span style={{ color: '#3b82f6' }}>Desarrollo Web</span></h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
                Más de una década como <strong>programador web</strong> profesional creando soluciones digitales de alto impacto para empresas en México y Latinoamérica.
              </p>
            </div>
            <div className="grid-3">
              <div className="glass-card" style={{ textAlign: 'center', padding: '2.5rem 2rem', borderTop: '3px solid #3b82f6' }}>
                <div style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#3b82f6', lineHeight: 1 }}>200+</div>
                <p style={{ color: '#f8fafc', fontWeight: 600, fontSize: '1.1rem', marginTop: '0.75rem' }}>Sitios Web Creados</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Proyectos de desarrollo web entregados exitosamente</p>
              </div>
              <div className="glass-card" style={{ textAlign: 'center', padding: '2.5rem 2rem', borderTop: '3px solid #3b82f6' }}>
                <div style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#3b82f6', lineHeight: 1 }}>20+</div>
                <p style={{ color: '#f8fafc', fontWeight: 600, fontSize: '1.1rem', marginTop: '0.75rem' }}>Plugins WordPress</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Plugins personalizados desarrollados para clientes</p>
              </div>
              <div className="glass-card" style={{ textAlign: 'center', padding: '2.5rem 2rem', borderTop: '3px solid #3b82f6' }}>
                <div style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#3b82f6', lineHeight: 1 }}>98/100</div>
                <p style={{ color: '#f8fafc', fontWeight: 600, fontSize: '1.1rem', marginTop: '0.75rem' }}>Performance Score</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Puntuación promedio en Google PageSpeed Insights</p>
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
              ¿Necesitas un sitio web profesional?
            </h2>
            <p style={{ color: 'rgba(0,0,0,0.75)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              Transforma tu presencia digital con un sitio web de alto rendimiento. Solicita una consulta gratuita y recibe un presupuesto personalizado para tu proyecto de <strong>desarrollo web</strong>.
            </p>
            <Link href="/contact/" className="btn btn-primary btn-lg" style={{ background: '#030712', color: '#f8fafc', fontWeight: 700, border: 'none', padding: '1rem 2.5rem', fontSize: '1.05rem' }}>
              Solicitar Presupuesto Gratuito
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container" style={{ maxWidth: 800 }}>
            <div className="section-header text-center">
              <span className="section-badge">FAQ</span>
              <h2 className="section-title">Preguntas Frecuentes sobre <span style={{ color: '#3b82f6' }}>Desarrollo Web</span></h2>
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
              Lleva tu Negocio al <span style={{ color: '#3b82f6' }}>Siguiente Nivel</span>
            </h2>
            <p style={{ color: '#94a3b8', maxWidth: 600, margin: '1rem auto 2rem', fontSize: '1.1rem', lineHeight: 1.7 }}>
              Como <strong style={{ color: '#f8fafc' }}>programador web</strong> especializado en <strong style={{ color: '#f8fafc' }}>desarrollo web en México</strong>, te ayudo a crear la página web perfecta para tu negocio. Desde sitios corporativos hasta plataformas e-commerce complejas.
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
