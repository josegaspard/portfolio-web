import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ContentManagerService } from '../../services/content-manager.service';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';

interface BlogPost {
    id: string;
    title: string;
    subtitle: string;
    author: string;
    authorRole: string;
    publishDate: string;
    readingTime: number;
    category: string;
    tags: string[];
    featuredImage: string;
    content: string;
    relatedPosts: string[];
}

@Component({
    selector: 'app-blog-post',
    standalone: true,
    imports: [CommonModule, HeaderComponent, FooterComponent],
    templateUrl: './blog-post.html',
    styleUrls: ['./blog-post.css']
})
export class BlogPostComponent implements OnInit {
    private route = inject(ActivatedRoute);
    private sanitizer = inject(DomSanitizer);

    readingProgress = 0;

    post: BlogPost = {
        id: 'seo-tecnico-2024',
        title: 'Guía Completa de SEO Técnico para 2024',
        subtitle: 'Domina los Core Web Vitals y la arquitectura de información para rankings superiores',
        author: 'José Gaspard',
        authorRole: 'SEO Architect & Full-Stack Engineer',
        publishDate: '15 de Enero, 2024',
        readingTime: 12,
        category: 'SEO Técnico',
        tags: ['SEO', 'Core Web Vitals', 'Performance', 'Technical SEO'],
        featuredImage: '/assets/blog/seo-tecnico-2024.jpg',
        content: `
            <h2>Introducción</h2>
            <p>El SEO técnico es la base fundamental de cualquier estrategia de posicionamiento exitosa en 2024. No se trata solo de palabras clave, sino de cómo los motores de búsqueda rastrean, indexan y comprenden tu sitio.</p>
            
            <h2>Core Web Vitals: La Nueva Frontera</h2>
            <p>Google ha dejado claro que la experiencia del usuario (UX) es un factor determinante del ranking. El LCP, FID y CLS ya no son opcionales.</p>
            
            <h2>Arquitectura de Información</h2>
            <p>Una estructura lógica no solo ayuda a los bots, sino que guía al usuario hacia la conversión de manera natural y fluida.</p>
            
            <h2>Conclusión</h2>
            <p>Invertir en SEO técnico es asegurar la longevidad de tu activo digital frente a los cambios constantes del algoritmo.</p>
        `,
        relatedPosts: ['post-1', 'post-2', 'post-3']
    };

    ngOnInit() {
        // Scroll progress tracking
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', this.updateProgress.bind(this));
        }

        // Add JSON-LD schema
        this.addSchemaMarkup();
    }

    updateProgress() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        this.readingProgress = (winScroll / height) * 100;
    }

    get safeContent(): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(this.post.content);
    }

    private addSchemaMarkup() {
        if (typeof document === 'undefined') return;

        const schema = {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": this.post.title,
            "description": this.post.subtitle,
            "image": this.post.featuredImage,
            "author": {
                "@type": "Person",
                "name": this.post.author,
                "jobTitle": this.post.authorRole
            },
            "datePublished": this.post.publishDate,
            "dateModified": this.post.publishDate
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(schema);
        document.head.appendChild(script);
    }
}
