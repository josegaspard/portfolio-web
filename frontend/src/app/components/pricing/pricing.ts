import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section py-xxl" id="pricing">
      <div class="container">
        <div class="section-header text-center mb-20" data-aos="fade-up">
          <h2 class="section-title-2line">
            <span class="title-line-white">Inversión</span>
            <span class="title-line-gradient">Estratégica</span>
          </h2>
          <p class="text-xl text-gray-400 max-width-700 mx-auto">{{ t('pricing_subtitle') }}</p>
        </div>

        <div class="pricing-grid">
          <div *ngFor="let plan of plans" class="pricing-card glass-premium" [class.popular]="plan.popular" data-aos="fade-up">
            <div *ngIf="plan.popular" class="popular-badge">Most Popular</div>
            <h3 class="plan-name">{{ plan.name }}</h3>
            <div class="plan-price">
              <span class="currency">$</span>
              <span class="amount">{{ plan.price }}</span>
              <span class="period">/month</span>
            </div>
            <ul class="plan-features">
              <li *ngFor="let feature of plan.features">
                <i class="fas fa-check-circle"></i> {{ feature }}
              </li>
            </ul>
            <a href="#contact" class="btn btn-block" [class.btn-primary]="plan.popular" [class.btn-outline]="!plan.popular">
              {{ t('get_started') }}
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .pricing-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 3rem;
    }
    .pricing-card {
      padding: 3rem 2rem;
      border-radius: 30px;
      text-align: center;
      transition: var(--transition-medium);
      position: relative;
    }
    .pricing-card.popular {
      border-color: var(--color-primary);
      transform: scale(1.05);
      z-index: 2;
    }
    .popular-badge {
      position: absolute;
      top: -15px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--color-primary);
      padding: 0.5rem 1.5rem;
      border-radius: 50px;
      font-size: 0.8rem;
      font-weight: 800;
      color: white;
      text-transform: uppercase;
    }
    .plan-name {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      color: white;
    }
    .plan-price {
      margin-bottom: 2rem;
    }
    .amount {
      font-size: 4rem;
      font-weight: 900;
      color: white;
    }
    .currency, .period {
      color: var(--color-text-light);
      font-weight: 600;
    }
    .plan-features {
      list-style: none;
      padding: 0;
      margin-bottom: 3rem;
      text-align: left;
    }
    .plan-features li {
      margin-bottom: 1rem;
      color: var(--color-text-light);
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }
    .plan-features i {
      color: var(--color-primary);
    }
  `]
})
export class PricingComponent {
  translationService = inject(TranslationService);
  plans = [
    {
      name: 'Technical SEO Audit',
      price: '1,500',
      features: ['Full Crawler Analysis', 'Core Web Vitals Check', 'Actionable Roadmap', 'Implementation Support'],
      popular: false
    },
    {
      name: 'Organic Domination',
      price: '3,500',
      features: ['Technical SEO Management', 'High-Authority Link Building', 'Content Engine Strategy', 'Monthly Growth Reports'],
      popular: true
    },
    {
      name: 'Full-Stack Performance',
      price: '5,000',
      features: ['Custom Web Architecture', 'Advanced Conversion Ops', 'Lighthouse 100 Optimization', 'Direct Priority Access'],
      popular: false
    }
  ];

  t(key: string) { return this.translationService.translate(key); }
}
