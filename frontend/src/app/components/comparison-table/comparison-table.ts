import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-comparison-table',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="section comparison-table-section" id="comparison">
      <div class="container">
        <!-- Section Header -->
        <h2 class="section-title-2line" data-aos="fade-up">
          <span class="title-line-white">¿Por qué contratarme</span>
          <span class="title-line-gradient">a mí?</span>
        </h2>
        <p class="text-xl text-center text-gray-400 max-width-700 mx-auto mb-16" data-aos="fade-up" data-aos-delay="100">
          La ventaja competitiva de un profesional híbrido que domina tanto SEO como desarrollo full-stack
        </p>

        <!-- Comparison Table -->
        <div class="comparison-table-container" data-aos="fade-up" data-aos-delay="200">
          <div class="comparison-table">
            <!-- Header Row -->
            <div class="table-header">
              <div class="header-cell metric-label">Capacidad</div>
              <div class="header-cell">
                <div class="profile-badge solo-seo">
                  <i class="fas fa-search"></i>
                  <span>Solo SEO</span>
                </div>
              </div>
              <div class="header-cell">
                <div class="profile-badge solo-dev">
                  <i class="fas fa-code"></i>
                  <span>Solo Developer</span>
                </div>
              </div>
              <div class="header-cell featured">
                <div class="profile-badge hybrid">
                  <i class="fas fa-bolt"></i>
                  <span>Hybrid Architect</span>
                  <div class="elite-badge">TÚ</div>
                </div>
              </div>
            </div>

            <!-- Comparison Rows -->
            <div class="table-row" *ngFor="let metric of metrics; let i = index" [attr.data-aos]="'fade-up'" [attr.data-aos-delay]="300 + (i * 50)">
              <div class="metric-cell">
                <i [class]="metric.icon"></i>
                <span>{{ metric.name }}</span>
              </div>
              <div class="value-cell">
                <span class="rating" [class]="'rating-' + metric.seo">
                  <i *ngFor="let star of getStars(metric.seo)" [class]="star"></i>
                </span>
              </div>
              <div class="value-cell">
                <span class="rating" [class]="'rating-' + metric.dev">
                  <i *ngFor="let star of getStars(metric.dev)" [class]="star"></i>
                </span>
              </div>
              <div class="value-cell featured">
                <span class="rating rating-5">
                  <i *ngFor="let star of getStars(5)" [class]="star"></i>
                </span>
              </div>
            </div>

            <!-- Summary Row -->
            <div class="table-footer">
              <div class="footer-cell">Resultado Final</div>
              <div class="footer-cell">
                <span class="result-badge partial">Dependencia Técnica</span>
              </div>
              <div class="footer-cell">
                <span class="result-badge partial">Desconexión SEO</span>
              </div>
              <div class="footer-cell featured">
                <span class="result-badge elite">Dominio Absoluto</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Benefits Grid -->
        <div class="benefits-grid" data-aos="fade-up" data-aos-delay="400">
          <div class="benefit-card glass-premium" *ngFor="let benefit of benefits; let i = index" [attr.data-aos]="'zoom-in'" [attr.data-aos-delay]="500 + (i * 100)">
            <div class="benefit-icon">
              <i [class]="benefit.icon"></i>
            </div>
            <h4>{{ benefit.title }}</h4>
            <p>{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
    styleUrls: ['./comparison-table.css']
})
export class ComparisonTableComponent {
    metrics = [
        { name: 'Conocimiento SEO Técnico', icon: 'fas fa-cogs', seo: 5, dev: 1 },
        { name: 'Habilidades de Desarrollo', icon: 'fas fa-laptop-code', seo: 1, dev: 5 },
        { name: 'Optimización de Rendimiento', icon: 'fas fa-tachometer-alt', seo: 2, dev: 4 },
        { name: 'Arquitectura de Información', icon: 'fas fa-sitemap', seo: 3, dev: 2 },
        { name: 'Implementación Rápida', icon: 'fas fa-rocket', seo: 2, dev: 3 },
        { name: 'Visión de Negocio/ROI', icon: 'fas fa-chart-line', seo: 4, dev: 2 },
        { name: 'Solución de Problemas Integral', icon: 'fas fa-puzzle-piece', seo: 2, dev: 3 },
        { name: 'Escalabilidad Técnica', icon: 'fas fa-expand-arrows-alt', seo: 2, dev: 4 }
    ];

    benefits = [
        {
            icon: 'fas fa-bolt',
            title: 'Velocidad de Implementación',
            description: 'No necesitas coordinar entre equipos. Una sola persona ejecuta la estrategia SEO y el desarrollo técnico simultáneamente.'
        },
        {
            icon: 'fas fa-dollar-sign',
            title: 'Ahorro de Costos',
            description: 'Evita pagar a dos especialistas separados y elimina los costos de coordinación y comunicación entre equipos.'
        },
        {
            icon: 'fas fa-brain',
            title: 'Visión Holística',
            description: 'Entiendo cómo cada línea de código impacta el SEO y cómo cada estrategia SEO requiere soporte técnico específico.'
        },
        {
            icon: 'fas fa-shield-alt',
            title: 'Sin Dependencias',
            description: 'No esperas a que un developer implemente tus ideas SEO ni a que un SEO entienda las limitaciones técnicas.'
        }
    ];

    getStars(rating: number): string[] {
        const stars: string[] = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(i <= rating ? 'fas fa-star' : 'far fa-star');
        }
        return stars;
    }
}
