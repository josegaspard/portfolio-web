import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrls: ['./experience.css']
})
export class ExperienceComponent {
  translationService = inject(TranslationService);
  modalService = inject(ModalService);

  experiences = [
    {
      id: 'gestomarketing',
      company: 'GestoMarketing',
      icon: 'fas fa-rocket',
      date: 'July 2024 - Present',
      titleKey: 'gestomarketing_title',
      image: 'https://gestomarketing.com/wp-content/uploads/2021/07/Logo-definitivo-gesto-marketing-png-1200x1200.png',
      descKey: 'gestomarketing_desc',
      modalId: 'modal-gestomarketing'
    },
    {
      id: 'canva',
      company: 'Canva',
      icon: 'fab fa-canva',
      date: 'November 2024 - July 2025',
      titleKey: 'canva_title',
      image: 'https://images.ctfassets.net/kftzwdyauwt9/7lqBnA8Gaz7fvmABCmlQ4x/6ce679925b23e96d410c8b5509480806/Canva.png?w=200&h=200&fit=fill',
      descKey: 'canva_desc',
      modalId: 'modal-canva'
    },
    {
      id: 'google',
      company: 'Google',
      icon: 'fab fa-google',
      date: 'January 2023 - September 2023',
      titleKey: 'google_title',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_\"G\"_logo.svg/1024px-Google_\"G\"_logo.svg.png',
      descKey: 'google_desc',
      modalId: 'modal-google'
    },
    {
      id: 'nebulab',
      company: 'Nebu-lab',
      icon: 'fas fa-flask',
      date: 'July 2023 - July 2024',
      titleKey: 'nebulab_title',
      image: 'https://i.imgur.com/yEWDWnB.png',
      descKey: 'nebulab_desc',
      modalId: 'modal-nebulab'
    },
    {
      id: 'paypal',
      company: 'PayPal',
      icon: 'fab fa-paypal',
      date: 'January 2022 - December 2022',
      titleKey: 'paypal_title',
      image: 'https://cdn-icons-png.flaticon.com/512/825/825488.png',
      descKey: 'paypal_desc',
      modalId: 'modal-paypal'
    },
    {
      id: '3rcore',
      company: '3RCore',
      icon: 'fas fa-chart-line',
      date: 'July 2022 - March 2023',
      titleKey: 'seo_manager',
      image: 'https://i.imgur.com/U8SmfVn.png',
      descKey: 'tricore_desc',
      modalId: 'modal-3rcore'
    },
    {
      id: 'rekrea',
      company: 'Rekrea',
      icon: 'fas fa-tree',
      date: 'October 2020 - March 2023',
      titleKey: 'seo_web_dev_specialist',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT78sbgh4HG3WVSGil00G9IeJqBvOwTV4AOA&s',
      descKey: 'rekrea_desc',
      modalId: 'modal-rekrea'
    },
    {
      id: 'cuartel',
      company: 'Cuartel Media Group',
      icon: 'fas fa-music',
      date: 'April 2019 - March 2023',
      titleKey: 'founder_director',
      image: 'https://i.imgur.com/rKBZSPK.png',
      descKey: 'cuartel_desc',
      modalId: 'modal-cuartel'
    },
    {
      id: 'octonove',
      company: 'Octonove',
      icon: 'fas fa-search',
      date: 'November 2021 - December 2022',
      titleKey: 'seo_specialist',
      image: 'https://i.imgur.com/WP6ZLQj.png',
      descKey: 'octonove_desc',
      modalId: 'modal-octonove'
    },
    {
      id: 'fiverr',
      company: 'Fiverr',
      icon: 'fas fa-globe',
      date: 'January 2020 - Present',
      titleKey: 'web_dev_seo_plugin_dev',
      image: 'https://imgs.search.brave.com/4vfBR2MLWen5QtIVyPbVxpFwp1oc6LAJ3od1BW4YG5I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1NjczOTYw/M3RyYW5zcGFyZW50/LWZpdmVyci1sb2dv/LnBuZw',
      descKey: 'fiverr_desc',
      modalId: 'modal-fiverr'
    },
    {
      id: 'josegaspard',
      company: 'JoseGaspard.dev',
      icon: 'fas fa-user-ninja',
      date: 'January 2019 - Present',
      titleKey: 'josegaspard_dev_title',
      image: 'file:///Users/josegaspard/.gemini/antigravity/brain/628b4bb6-0b9b-48db-8ac5-4c7f76a412b0/architect_growth_bio_1768068507102.png',
      descKey: 'josegaspard_dev_desc',
      modalId: 'modal-josegaspard'
    }
  ];

  t(key: string) {
    return this.translationService.translate(key);
  }

  openModal(modalId: string) {
    this.modalService.open(modalId);
  }
}
