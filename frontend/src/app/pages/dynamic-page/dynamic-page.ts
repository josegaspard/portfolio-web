import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { ContentService } from '../../services/content';
import { Content } from '../../interfaces/content.interface';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';
import { Subscription } from 'rxjs';
import * as AOS from 'aos';

@Component({
  selector: 'app-dynamic-page',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './dynamic-page.html',
  styleUrl: './dynamic-page.css',
})
export class DynamicPageComponent implements OnInit, OnDestroy, AfterViewInit {
  content: Content | null = null;
  loading = true;
  private routeSub: Subscription | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentService: ContentService,
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      const slug = params['slug'];
      if (slug) {
        this.loadContent(slug);
      }
    });
  }

  ngAfterViewInit() {
    this.initAos();
  }

  private initAos() {
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
      });
    }
  }

  ngOnDestroy() {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

  loadContent(slug: string) {
    this.loading = true;
    this.contentService.getBySlug(slug).subscribe({
      next: (data) => {
        this.loading = false;
        if (!data) {
          console.warn(`DynamicPageComponent: Content not found for slug "${slug}"`);
          this.router.navigate(['/']);
          return;
        }
        this.content = data;
        this.updateSEO(data);
        setTimeout(() => {
          if (typeof window !== 'undefined') {
            AOS.refresh();
          }
        }, 100);
      },
      error: (err) => {
        console.error('Error loading dynamic page:', err);
        this.loading = false;
        this.router.navigate(['/']);
      }
    });
  }

  updateSEO(content: Content) {
    const seo = content.seo;
    const title = seo?.metaTitle || content.title;
    const description = seo?.metaDescription || '';

    this.titleService.setTitle(`${title} | Jose Gaspard`);

    if (description) {
      this.metaService.updateTag({ name: 'description', content: description });
    }

    if (seo?.keywords) {
      this.metaService.updateTag({ name: 'keywords', content: seo.keywords });
    }

    // OG Tags
    this.metaService.updateTag({ property: 'og:title', content: title });
    if (description) {
      this.metaService.updateTag({ property: 'og:description', content: description });
    }
    if (content.coverImage) {
      this.metaService.updateTag({ property: 'og:image', content: content.coverImage });
    }
  }
}
