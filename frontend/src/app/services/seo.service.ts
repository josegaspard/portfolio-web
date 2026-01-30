import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

interface SEOConfig {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
    author?: string;
    publishedTime?: string;
    modifiedTime?: string;
}

@Injectable({
    providedIn: 'root'
})
export class SeoService {
    private meta = inject(Meta);
    private titleService = inject(Title);
    private router = inject(Router);

    private defaultConfig: SEOConfig = {
        title: 'José Gaspard | SEO Architect & Full-Stack Engineer',
        description: 'Expert SEO consultation and full-stack development for high-growth organizations. Transform search intent into revenue with technical SEO mastery and scalable web architectures.',
        keywords: 'SEO técnico, desarrollo full-stack, arquitecto SEO, Angular, Laravel, WordPress, optimización web, Core Web Vitals',
        image: 'https://josegaspard.dev/img/og-image.jpg',
        url: 'https://josegaspard.dev',
        type: 'website',
        author: 'José Gaspard'
    };

    constructor() {
        // Update canonical URL on route changes
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe(() => {
            this.updateCanonicalUrl();
        });
    }

    updateMeta(config: SEOConfig) {
        const seoConfig = { ...this.defaultConfig, ...config };

        // Title
        this.titleService.setTitle(seoConfig.title!);

        // Standard Meta Tags
        this.meta.updateTag({ name: 'description', content: seoConfig.description! });
        this.meta.updateTag({ name: 'keywords', content: seoConfig.keywords! });
        this.meta.updateTag({ name: 'author', content: seoConfig.author! });

        // Open Graph Tags
        this.meta.updateTag({ property: 'og:title', content: seoConfig.title! });
        this.meta.updateTag({ property: 'og:description', content: seoConfig.description! });
        this.meta.updateTag({ property: 'og:image', content: seoConfig.image! });
        this.meta.updateTag({ property: 'og:url', content: seoConfig.url! });
        this.meta.updateTag({ property: 'og:type', content: seoConfig.type! });
        this.meta.updateTag({ property: 'og:site_name', content: 'José Gaspard' });

        // Twitter Card Tags
        this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
        this.meta.updateTag({ name: 'twitter:title', content: seoConfig.title! });
        this.meta.updateTag({ name: 'twitter:description', content: seoConfig.description! });
        this.meta.updateTag({ name: 'twitter:image', content: seoConfig.image! });
        this.meta.updateTag({ name: 'twitter:creator', content: '@josegaspard' });

        // Article specific tags
        if (seoConfig.publishedTime) {
            this.meta.updateTag({ property: 'article:published_time', content: seoConfig.publishedTime });
        }
        if (seoConfig.modifiedTime) {
            this.meta.updateTag({ property: 'article:modified_time', content: seoConfig.modifiedTime });
        }

        // Update canonical URL
        this.updateCanonicalUrl(seoConfig.url);
    }

    private updateCanonicalUrl(url?: string) {
        const canonicalUrl = url || (typeof window !== 'undefined' ? window.location.href : this.defaultConfig.url!);

        let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
        if (!link) {
            link = document.createElement('link');
            link.setAttribute('rel', 'canonical');
            document.head.appendChild(link);
        }
        link.setAttribute('href', canonicalUrl);
    }

    addStructuredData(schema: any) {
        let script: HTMLScriptElement | null = document.querySelector('script[type="application/ld+json"]');
        if (!script) {
            script = document.createElement('script');
            script.type = 'application/ld+json';
            document.head.appendChild(script);
        }
        script.textContent = JSON.stringify(schema);
    }

    generateOrganizationSchema() {
        return {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "José Gaspard",
            "url": "https://josegaspard.dev",
            "logo": "https://josegaspard.dev/logo.png",
            "description": "SEO Architect & Full-Stack Engineer specializing in technical SEO and scalable web development",
            "founder": {
                "@type": "Person",
                "name": "José Gaspard",
                "jobTitle": "SEO Architect & Full-Stack Engineer"
            },
            "sameAs": [
                "https://linkedin.com/in/josegaspard",
                "https://twitter.com/josegaspard",
                "https://github.com/josegaspard"
            ]
        };
    }

    generatePersonSchema() {
        return {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "José Gaspard",
            "jobTitle": "SEO Architect & Full-Stack Engineer",
            "url": "https://josegaspard.dev",
            "image": "https://josegaspard.dev/img/portfolio/josegaspard.jpg",
            "description": "Expert in technical SEO and full-stack development with 15+ years of experience",
            "sameAs": [
                "https://linkedin.com/in/josegaspard",
                "https://twitter.com/josegaspard",
                "https://github.com/josegaspard"
            ]
        };
    }

    generateBreadcrumbSchema(items: Array<{ name: string, url: string }>) {
        return {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": items.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": item.name,
                "item": item.url
            }))
        };
    }

    generateSiteNavigationSchema() {
        return {
            "@context": "https://schema.org",
            "@type": "SiteNavigationElement",
            "name": [
                "Sobre Mí",
                "Experiencia",
                "Portafolio",
                "Contacto"
            ]
        };
    }
}
