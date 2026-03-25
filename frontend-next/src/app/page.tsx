import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GaspardMethodSection } from '@/components/sections/GaspardMethodSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { GrowthBoardSection } from '@/components/sections/GrowthBoardSection';
import { SpeakerSection } from '@/components/sections/SpeakerSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { CTASection } from '@/components/sections/CTASection';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { FAQPageJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd';

export default function HomePage() {
  return (
    <>
      <FAQPageJsonLd
        faqs={[
          {
            question: '¿Que diferencia a tu consultoria SEO de una agencia tradicional?',
            answer:
              'Mi enfoque combina ingenieria de software personalizada con estrategias de crecimiento basadas en datos. No solo optimizo contenido; reestructuro tu arquitectura digital para dominar el LCP y otros Core Web Vitals mientras escalo tu autoridad.',
          },
          {
            question: '¿Cuanto tiempo toma ver resultados reales en SEO?',
            answer:
              'Los primeros resultados tecnicos son visibles en 2-4 semanas. Mejoras significativas en rankings entre 3-6 meses. ROI completo tipicamente en 6-12 meses dependiendo de la competencia del mercado.',
          },
          {
            question: '¿Ofreces servicios de desarrollo web ademas de SEO?',
            answer:
              'Si, soy desarrollador full-stack con experiencia en Next.js, NestJS, Node.js, PHP y WordPress. Desarrollo sitios web de alto rendimiento optimizados para SEO desde el codigo.',
          },
          {
            question: '¿Trabajas con empresas de cualquier tamano?',
            answer:
              'Trabajo con startups, PyMEs y grandes corporaciones. He colaborado con empresas como Google, Canva y PayPal, asi como con emprendedores que inician su presencia digital.',
          },
          {
            question: '¿Que es el Metodo Gaspard y como puede ayudar a mi negocio?',
            answer:
              'El Metodo Gaspard es mi framework propietario que integra SEO tecnico, desarrollo web de alto rendimiento y estrategia de contenido basada en datos. Combina lo mejor de la ingenieria de software con growth marketing para generar resultados medibles y sostenibles.',
          },
          {
            question: '¿Cual es tu proceso de trabajo con nuevos clientes?',
            answer:
              'Inicio con una auditoria tecnica completa de tu sitio, analisis de competencia y definicion de KPIs. Luego presento un roadmap personalizado con acciones priorizadas por impacto. Cada mes entrego reportes detallados con metricas de progreso.',
          },
          {
            question: '¿Puedes ayudar con SEO internacional y multilingue?',
            answer:
              'Si, tengo experiencia implementando estrategias de SEO internacional con hreflang, estructuras de URL optimizadas y contenido localizado para mercados en LATAM, Estados Unidos y Europa.',
          },
          {
            question: '¿Ofreces capacitaciones o charlas para equipos de marketing?',
            answer:
              'Si, imparto workshops y conferencias sobre SEO tecnico, desarrollo web y growth marketing. He sido speaker en eventos de Google y otras plataformas tecnologicas a nivel internacional.',
          },
        ]}
      />
      <BreadcrumbJsonLd items={[{ name: 'Inicio', url: 'https://josegaspard.dev' }]} />
      <Header />
      {/* Social Proof Bar */}
      <div className="proof-bar" style={{ marginTop: 56 }}>
        <span>🏆 <strong>+200</strong> proyectos exitosos</span>
        <span>⭐ <strong>Google, Canva, PayPal</strong></span>
        <span>📈 <strong>+300%</strong> ROI promedio</span>
        <span>🌎 México, España, LATAM</span>
      </div>
      <main>
        <HeroSection />

        {/* Trust Badges */}
        <div className="trust-badges">
          <div className="trust-badge">
            <div className="trust-badge-icon">🔒</div>
            <span>Consulta 100% Gratuita</span>
          </div>
          <div className="trust-badge">
            <div className="trust-badge-icon">⚡</div>
            <span>Resultados en 90 Días</span>
          </div>
          <div className="trust-badge">
            <div className="trust-badge-icon">📊</div>
            <span>Reportes Mensuales</span>
          </div>
          <div className="trust-badge">
            <div className="trust-badge-icon">🤝</div>
            <span>Sin Contratos Largos</span>
          </div>
          <div className="trust-badge">
            <div className="trust-badge-icon">🏅</div>
            <span>+15 Años Experiencia</span>
          </div>
        </div>

        <AboutSection />
        <ExperienceSection />
        <ServicesSection />
        <GaspardMethodSection />
        <PortfolioSection />
        <GrowthBoardSection />
        <SpeakerSection />
        <TestimonialsSection />
        <SkillsSection />
        <FAQSection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
