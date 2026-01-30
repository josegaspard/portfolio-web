import { Component, OnInit, inject, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { ContentManagerService, BlogPost } from '../../services/content-manager.service';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';

@Component({
    selector: 'app-blog-archive',
    standalone: true,
    imports: [CommonModule, RouterModule, FormsModule, HeaderComponent, FooterComponent],
    template: `
    <app-header></app-header>
    <div class="blog-archive-page">
        <!-- Hero Section -->
        <section class="archive-hero">
            <div class="container">
                <h1 class="archive-title">Blog</h1>
                <p class="archive-subtitle">
                    Artículos sobre SEO técnico, desarrollo web, y estrategias de crecimiento digital
                </p>
            </div>
        </section>

        <!-- Filters -->
        <section class="archive-filters">
            <div class="container">
                <div class="filter-buttons">
                    <button 
                        class="filter-btn" 
                        [class.active]="selectedCategory() === 'all'"
                        (click)="filterByCategory('all')">
                        Todos
                    </button>
                    <button 
                        class="filter-btn" 
                        [class.active]="selectedCategory() === 'seo'"
                        (click)="filterByCategory('seo')">
                        SEO Técnico
                    </button>
                </div>
            </div>
        </section>

        <!-- Posts Grid -->
        <section class="archive-posts">
            <div class="container">
                <div class="posts-grid">
                    <article class="post-card glass-premium" *ngFor="let post of filteredPosts()">
                        <a [routerLink]="['/blog', post.id]" class="post-link">
                            <div class="post-image">
                                <img [src]="post.featuredImage" [alt]="post.title">
                                <span class="post-category">{{ post.category }}</span>
                            </div>
                            <div class="post-content">
                                <div class="post-meta">
                                    <span class="post-date">
                                        <i class="far fa-calendar"></i>
                                        {{ post.publishDate | date }}
                                    </span>
                                </div>
                                <h2 class="post-title">{{ post.title }}</h2>
                                <p class="post-excerpt">{{ post.description }}</p>
                                <div class="post-footer">
                                    <span class="read-more">
                                        Leer más
                                        <i class="fas fa-arrow-right"></i>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </article>
                </div>
            </div>
        </section>
    </div>
    <app-footer></app-footer>
    `,
    styleUrls: ['./blog-archive.css']
})
export class BlogArchiveComponent implements OnInit {
    private contentManager = inject(ContentManagerService);

    posts = signal<BlogPost[]>([]);
    selectedCategory = signal('all');
    filteredPosts = signal<BlogPost[]>([]);

    ngOnInit() {
        this.loadPosts();
    }

    async loadPosts() {
        try {
            this.contentManager.loadPosts();
            // The service updates its internal 'posts' signal.
            // Component can effect on it or just use it.
            effect(() => {
                this.posts.set(this.contentManager.posts());
                this.filterByCategory(this.selectedCategory());
            }, { allowSignalWrites: true });
        } catch (error) {
            console.error('Error loading posts:', error);
        }
    }

    filterByCategory(category: string) {
        this.selectedCategory.set(category);
        if (category === 'all') {
            this.filteredPosts.set(this.posts());
        } else {
            this.filteredPosts.set(
                this.posts().filter(post => post.category === category)
            );
        }
    }
}
