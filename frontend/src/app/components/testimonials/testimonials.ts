import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section py-xxl" id="testimonials">
      <div class="container">
        <div class="section-header text-center mb-20" data-aos="fade-up">
          <h2 class="section-title-2line">
            <span class="title-line-white">Historias de</span>
            <span class="title-line-gradient">Éxito</span>
          </h2>
          <p class="text-xl text-gray-400 max-width-700 mx-auto">{{ t('testimonials_subtitle') }}</p>
        </div>
        
        <div class="testimonials-grid">
          <div *ngFor="let t of testimonials" class="testimonial-card glass-premium" data-aos="fade-up">
            <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
            <p class="testimonial-text">{{ t.text }}</p>
            <div class="testimonial-author">
              <div class="author-info">
                <span class="author-name">{{ t.name }}</span>
                <span class="author-role">{{ t.role }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 3rem;
    }
    .testimonial-card {
      padding: 3rem;
      border-radius: 30px;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      transition: var(--transition-medium);
      position: relative;
    }
    .testimonial-card:hover {
      transform: translateY(-10px);
      border-color: var(--color-primary);
    }
    .quote-icon {
      font-size: 2rem;
      color: var(--color-primary);
      opacity: 0.5;
    }
    .testimonial-text {
      font-size: 1.1rem;
      line-height: 1.8;
      font-style: italic;
      color: var(--color-text-light);
    }
    .author-name {
      display: block;
      font-weight: 800;
      font-size: 1.2rem;
      color: white;
    }
    .author-role {
      font-size: 0.9rem;
      color: var(--color-primary);
      font-weight: 600;
    }
  `]
})
export class TestimonialsComponent {
  translationService = inject(TranslationService);
  testimonials = [
    { name: 'Director de Marketing', role: 'Canva Mexico', text: 'José no solo entiende el SEO técnico, entiende el negocio. Su capacidad para escalar tráfico orgánico en mercados competitivos es inigualable.' },
    { name: 'Founder & CEO', role: 'Tech Startup Lima', text: 'La reestructuración de nuestra arquitectura web por parte de José resultó en un aumento del 400% en conversiones en menos de un trimestre.' },
    { name: 'E-commerce Manager', role: 'Global Retailer', text: 'Tener a un experto que domine tanto el código como la estrategia de crecimiento es una ventaja competitiva brutal. Recomendado 100%.' }
  ];

  t(key: string) { return this.translationService.translate(key); }
}
