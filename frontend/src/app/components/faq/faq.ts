import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section py-xxl" id="faq">
      <div class="container max-width-800 mx-auto">
        <div class="section-header text-center mb-20" data-aos="fade-up">
          <h2 class="section-title-2line">
            <span class="title-line-white">Preguntas</span>
            <span class="title-line-gradient">Frecuentes</span>
          </h2>
          <p class="text-xl text-gray-400">{{ t('faq_subtitle') }}</p>
        </div>

        <div class="faq-list">
          <div *ngFor="let item of faqs; let i = index" 
               class="faq-item glass-premium mb-6" 
               [class.active]="activeItem() === i"
               data-aos="fade-up"
               (click)="toggle(i)">
            <div class="faq-question">
              <span>{{ item.q }}</span>
              <i class="fas" [class.fa-plus]="activeItem() !== i" [class.fa-minus]="activeItem() === i"></i>
            </div>
            <div class="faq-answer" *ngIf="activeItem() === i">
              <p>{{ item.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .faq-item {
      padding: 1.5rem 2rem;
      border-radius: 20px;
      cursor: pointer;
      transition: var(--transition-medium);
    }
    .faq-item:hover {
      border-color: var(--color-primary);
    }
    .faq-question {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 700;
      font-size: 1.2rem;
      color: white;
    }
    .faq-question i {
      font-size: 1rem;
      color: var(--color-primary);
    }
    .faq-answer {
      margin-top: 1.5rem;
      color: var(--color-text-light);
      line-height: 1.8;
      animation: fadeIn 0.3s ease;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class FaqComponent {
  translationService = inject(TranslationService);
  activeItem = signal<number | null>(0);

  faqs = [
    { q: '¿Qué diferencia a tu consultoría de una agencia tradicional?', a: 'Mi enfoque combina ingeniería de software personalizada con estrategias de crecimiento basadas en datos. No solo optimizo contenido; reestructuro tu arquitectura digital para dominar el LCP y otros Core Web Vitals mientras escalo tu autoridad.' },
    { q: '¿Cuánto tiempo toma ver resultados reales en SEO?', a: 'Aunque el SEO es una estrategia de medio a largo plazo, mis optimizaciones técnicas suelen generar impactos visibles en los rankings de 8 a 12 semanas. El crecimiento exponencial se consolida entre los 6 y 12 meses.' },
    { q: '¿Desarrollas soluciones a medida o usas plantillas?', a: 'Todo mi desarrollo es 100% a medida o basado en arquitecturas de alto rendimiento (Laravel, NestJS, Angular). La exclusividad y el rendimiento son los pilares de mi trabajo de élite.' },
    { q: '¿Por qué la inversión es mayor que en servicios genéricos?', a: 'Estás invirtiendo en un activo digital optimizado para generar ingresos masivos. Mi consultoría ahorra meses de experimentación fallida y proporciona una ventaja competitiva tecnológica que las agencias estándar no pueden ofrecer.' },
    { q: '¿Trabajas con empresas de cualquier tamaño?', a: 'Me especializo en startups de alto crecimiento y empresas establecidas que buscan dominar su mercado. Si tu objetivo es escalar agresivamente y tienes el compromiso de invertir en excelencia técnica, somos el match perfecto.' },
    { q: '¿Ofreces garantías de posicionamiento #1 en Google?', a: 'No ofrezco garantías de posiciones específicas porque eso sería poco ético. Lo que sí garantizo es una mejora medible en tráfico orgánico, autoridad de dominio y conversiones mediante estrategias probadas y arquitectura técnica superior.' },
    { q: '¿Cómo mides el éxito de una campaña SEO?', a: 'Utilizo métricas de negocio reales: tráfico orgánico cualificado, tasa de conversión, ingresos atribuibles a SEO, y posiciones en keywords de alta intención. No me enfoco en vanity metrics sino en ROI tangible.' },
    { q: '¿Trabajas solo o tienes un equipo?', a: 'Trabajo de forma independiente para proyectos boutique, pero también lidero equipos especializados cuando el proyecto lo requiere. Mi red incluye expertos en contenido, diseño UX y desarrollo que comparten mi estándar de excelencia.' },
    { q: '¿Qué tecnologías y herramientas utilizas?', a: 'Mi stack incluye Ahrefs, SEMrush, Screaming Frog, Google Search Console para SEO; y Laravel, Angular, NestJS, WordPress para desarrollo. Selecciono las herramientas según las necesidades específicas del proyecto.' },
    { q: '¿Ofreces soporte continuo después del lanzamiento?', a: 'Sí, ofrezco planes de mantenimiento y optimización continua. El SEO no es un proyecto de una sola vez; es un proceso evolutivo que requiere monitoreo, ajustes y mejoras constantes para mantener y aumentar el dominio del mercado.' },
    { q: '¿Puedes ayudar con sitios que ya tienen penalizaciones de Google?', a: 'Absolutamente. He recuperado múltiples sitios de penalizaciones manuales y algorítmicas. Realizo auditorías exhaustivas, identifico los problemas, ejecuto la recuperación y establezco protocolos para evitar futuras penalizaciones.' },
    { q: '¿Trabajas con clientes internacionales o solo en LATAM?', a: 'Trabajo con clientes globales, aunque mi especialización es en mercados de LATAM (México, Colombia, Chile, Perú) y Estados Unidos. Tengo experiencia optimizando sitios multilingües y multi-región con estrategias hreflang avanzadas.' }
  ];

  toggle(i: number) {
    this.activeItem.set(this.activeItem() === i ? null : i);
  }

  t(key: string) { return this.translationService.translate(key); }
}
