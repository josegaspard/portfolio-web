import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { SpeakerSection } from '@/components/sections/SpeakerSection';
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
            question: '¿Qué diferencia a tu consultoría SEO de una agencia tradicional?',
            answer:
              'Mi enfoque combina ingeniería de software personalizada con estrategias de crecimiento basadas en datos. No solo optimizo contenido; reestructuro tu arquitectura digital para dominar el LCP y otros Core Web Vitals mientras escalo tu autoridad.',
          },
          {
            question: '¿Cuánto tiempo toma ver resultados reales en SEO?',
            answer:
              'Los primeros resultados técnicos son visibles en 2-4 semanas. Mejoras significativas en rankings entre 3-6 meses. ROI completo típicamente en 6-12 meses dependiendo de la competencia del mercado.',
          },
          {
            question: '¿Ofreces servicios de desarrollo web además de SEO?',
            answer:
              'Sí, soy desarrollador full-stack con experiencia en Next.js, NestJS, Node.js, PHP y WordPress. Desarrollo sitios web de alto rendimiento optimizados para SEO desde el código.',
          },
          {
            question: '¿Trabajas con empresas de cualquier tamaño?',
            answer:
              'Trabajo con startups, PyMEs y grandes corporaciones. He colaborado con empresas como Google, Canva y PayPal, así como con emprendedores que inician su presencia digital.',
          },
        ]}
      />
      <BreadcrumbJsonLd items={[{ name: 'Inicio', url: 'https://josegaspard.dev' }]} />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ServicesSection />
        <PortfolioSection />
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
