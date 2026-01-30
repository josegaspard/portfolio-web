import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.css']
})
export class PortfolioComponent {
  translationService = inject(TranslationService);
  modalService = inject(ModalService);
  currentFilter = signal<string>('all');

  projects = [
    {
      id: 'jungle',
      title: 'Jungle Experiences',
      category: 'seo',
      categoryKey: 'jungle_category',
      image: 'file:///Users/josegaspard/.gemini/antigravity/brain/628b4bb6-0b9b-48db-8ac5-4c7f76a412b0/seo_results_dashboard_1768066043391.png',
      link: 'https://jungleexperiences.com/',
      modalId: 'modal-jungle'
    },
    {
      id: 'losgirasoles',
      title: 'Los Girasoles Hotel',
      category: 'programming',
      categoryKey: 'web_development',
      image: 'https://josegaspard.dev/img/portfolio/girasoles.jpg',
      link: 'https://hotellosgirasoles.com/',
      modalId: 'modal-girasoles'
    },
    {
      id: 'turbopost',
      title: 'TurboPost AI',
      category: 'programming',
      categoryKey: 'web_application',
      image: 'file:///Users/josegaspard/.gemini/antigravity/brain/628b4bb6-0b9b-48db-8ac5-4c7f76a412b0/tech_stack_visual_1768066056044.png',
      link: 'https://turbopost.ai/',
      modalId: 'modal-dashboard-saas'
    },
    {
      id: 'hikov',
      title: 'Hi-Kov Nigiri House',
      category: 'programming',
      categoryKey: 'category_ordering_system',
      image: 'https://josegaspard.dev/img/portfolio/hikov.jpg',
      link: 'https://hikov.com/',
      modalId: 'modal-hikov-ordering'
    },
    {
      id: 'madridista',
      title: 'Casa del Madridista',
      category: 'programming',
      categoryKey: 'category_madridista_landing',
      image: 'https://josegaspard.dev/img/portfolio/madridista.jpg',
      link: '#',
      modalId: 'modal-madridista-landing'
    },
    {
      id: 'metalfest',
      title: 'The Metal Fest',
      category: 'seo',
      categoryKey: 'category_metalfest_landing',
      image: 'https://josegaspard.dev/img/portfolio/metalfest.jpg',
      link: 'https://themetalfest.mx/',
      modalId: 'modal-metalfest-landing'
    },
    {
      id: 'yakupark',
      title: 'YakuPark',
      category: 'seo',
      categoryKey: 'jungle_category',
      image: 'https://josegaspard.dev/img/portfolio/yakupark.jpg',
      link: 'https://yakupark.pe/',
      modalId: 'modal-yakupark'
    },
    {
      id: 'tensco',
      title: 'Tensco',
      category: 'seo',
      categoryKey: 'jungle_category',
      image: 'https://josegaspard.dev/img/portfolio/tensco.jpg',
      link: 'https://tensco.pe/',
      modalId: 'modal-tensco'
    },
    {
      id: 'alsur',
      title: 'AlSur',
      category: 'programming',
      categoryKey: 'web_development',
      image: 'https://josegaspard.dev/img/portfolio/alsur.jpg',
      link: 'https://josegaspard.dev/alsur/',
      modalId: 'modal-alsur'
    },
    {
      id: 'hotperrote',
      title: 'HotPerrote',
      category: 'programming',
      categoryKey: 'web_application',
      image: 'https://josegaspard.dev/img/portfolio/hotperrote.jpg',
      link: 'https://hotperrote.com/',
      modalId: 'modal-hotperrote'
    },
    {
      id: 'lafstudio',
      title: 'LAF Studio',
      category: 'programming',
      categoryKey: 'web_application',
      image: 'https://josegaspard.dev/img/portfolio/lafstudio.jpg',
      link: 'https://lafstudio.com/',
      modalId: 'modal-lafstudio'
    },
    {
      id: 'cuartelmetal',
      title: 'Cuartel del Metal',
      category: 'seo',
      categoryKey: 'jungle_category',
      image: 'https://josegaspard.dev/img/portfolio/cuarteldelmetal.jpg',
      link: 'https://cuarteldelmetal.com/',
      modalId: 'modal-cuartel'
    },
    {
      id: 'whatsappplus',
      title: 'WhatsApp Plus',
      category: 'seo',
      categoryKey: 'jungle_category',
      image: 'https://josegaspard.dev/img/portfolio/whatsappplus.jpg',
      link: 'https://whatsappplus.com/',
      modalId: 'modal-whatsappplus'
    },
    {
      id: 'experienciaslg',
      title: 'Experiencias LG',
      category: 'programming',
      categoryKey: 'web_development',
      image: 'https://josegaspard.dev/img/portfolio/experienciaslg.jpg',
      link: 'https://experienciaslg.pe/',
      modalId: 'modal-experienciaslg'
    },
    {
      id: 'poketme',
      title: 'Poket.me',
      category: 'programming',
      categoryKey: 'web_application',
      image: 'https://josegaspard.dev/img/portfolio/poketme.jpg',
      link: 'https://poket.me/',
      modalId: 'modal-poketme'
    },
    {
      id: 'soytufan',
      title: 'Soytufan.net',
      category: 'programming',
      categoryKey: 'web_application',
      image: 'https://josegaspard.dev/img/portfolio/soytufan.jpg',
      link: 'https://soytufan.net/',
      modalId: 'modal-soytufan'
    },
    {
      id: 'uribe',
      title: 'Cirugía Estética Uribe',
      category: 'seo',
      categoryKey: 'jungle_category',
      image: 'https://josegaspard.dev/img/portfolio/uribe.jpg',
      link: 'https://cirugiaesteticauribe.pe/',
      modalId: 'modal-uribe'
    },
    {
      id: 'martinez',
      title: 'Doctora Martinez',
      category: 'seo',
      categoryKey: 'jungle_category',
      image: 'https://josegaspard.dev/img/portfolio/martinez.jpg',
      link: 'https://doctoramartinez.pe/',
      modalId: 'modal-martinez'
    },
    {
      id: 'elspot',
      title: 'Elspot',
      category: 'seo',
      categoryKey: 'jungle_category',
      image: 'https://josegaspard.dev/img/portfolio/elspot.jpg',
      link: 'https://elspot.pe/',
      modalId: 'modal-elspot'
    }
  ];

  filteredProjects() {
    const filter = this.currentFilter();
    if (filter === 'all') return this.projects;
    return this.projects.filter(p => p.category === filter);
  }

  setFilter(filter: string) {
    this.currentFilter.set(filter);
  }

  t(key: string) {
    return this.translationService.translate(key);
  }

  openModal(modalId: string) {
    this.modalService.open(modalId);
  }
}
