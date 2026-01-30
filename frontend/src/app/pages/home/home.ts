import { Component, OnInit, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroComponent } from '../../components/hero/hero';
import { HeaderComponent } from '../../components/header/header';
import { WhatsappButtonComponent } from '../../components/whatsapp-button/whatsapp-button';
import { AboutComponent } from '../../components/about/about';
import { ExperienceComponent } from '../../components/experience/experience';
import { PortfolioComponent } from '../../components/portfolio/portfolio';
import { ContactComponent } from '../../components/contact/contact';
import { ModalComponent } from '../../components/modal/modal';
import { SeoContentComponent } from '../../components/seo-content/seo-content';
import { ComparisonComponent } from '../../components/comparison/comparison';
import { ComparisonTableComponent } from '../../components/comparison-table/comparison-table';
import { MarqueeComponent } from '../../components/marquee/marquee';
import { VisualBoardComponent } from '../../components/visual-board/visual-board';
import { TestimonialsComponent } from '../../components/testimonials/testimonials';
import { PricingComponent } from '../../components/pricing/pricing';
import { FaqComponent } from '../../components/faq/faq';
import { AnimationService } from '../../services/animation.service';
import { SeoService } from '../../services/seo.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    PortfolioComponent,
    ContactComponent,
    ModalComponent,
    SeoContentComponent,
    ComparisonComponent,
    ComparisonTableComponent,
    MarqueeComponent,
    VisualBoardComponent,
    TestimonialsComponent,
    PricingComponent,
    FaqComponent,
    HeaderComponent,
    WhatsappButtonComponent
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  private animationService = inject(AnimationService);
  private seoService = inject(SeoService);

  techSkills = [
    { icon: 'fab fa-angular', label: 'Angular 19' },
    { icon: 'fab fa-node-js', label: 'Node.js' },
    { icon: 'fab fa-js', label: 'TypeScript' },
    { icon: 'fab fa-php', label: 'Laravel' },
    { icon: 'fab fa-wordpress', label: 'WordPress' },
    { icon: 'fas fa-search', label: 'Technical SEO' }
  ];

  ngOnInit() {
    this.seoService.updateMeta({
      title: "Senior SEO Architect & Web Systems Engineer | José Gaspard",
      description: "Expert SEO consultation and full-stack development for high-growth organizations. From technical audits to scalable web architectures that dominate markets."
    });
  }

  ngAfterViewInit() {
    // Initialize AOS
    if (typeof window !== 'undefined') {
      AOS.init({ duration: 1000, once: true });

      // GSAP Centralized Animations
      this.animationService.reveal('.hero-title', 0);
      this.animationService.reveal('.about-content', 0.2);
      this.animationService.reveal('.visual-board', 0.4);
      this.animationService.reveal('.pillar-card', 0.1, 0.1); // Staggered
      this.animationService.reveal('.comparison-card', 0.1, 0.1); // Staggered
      this.animationService.reveal('.achievement-card', 0.1, 0.1); // Staggered
      this.animationService.reveal('.academic-item-elite', 0.1, 0.1); // Staggered
      this.animationService.reveal('.exp-elite-card', 0.1, 0.1); // Staggered reveal for experience
      this.animationService.hoverScale('.board-item');
      this.animationService.orbit('.floating-node');
    }
  }
}
