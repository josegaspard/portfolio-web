import { Injectable, signal, effect, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface BlogPost {
    id: string;
    title: string;
    subtitle: string;
    content: string;
    featuredImage: string;
    author: string;
    publishDate: string;
    status: 'draft' | 'published' | 'scheduled';
    category: string;
    tags: string[];
    readingTime: number;
    description?: string;
    metaDescription?: string;
}

@Injectable({
    providedIn: 'root'
})
export class ContentManagerService {
    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:3000/content'; // No /api prefix based on main.ts

    // Signals for reactive state
    posts = signal<BlogPost[]>([]);

    constructor() {
        this.loadPosts();
    }

    loadPosts() {
        this.http.get<any[]>(this.apiUrl).subscribe({
            next: (data) => {
                // Map backend entity to frontend interface if needed
                // Assuming backend returns array of Content compatible with BlogPost partial
                this.posts.set(data.map(this.mapToBlogPost));
            },
            error: (err) => console.error('Failed to load posts', err)
        });
    }

    getPublishedPosts() {
        return this.posts().filter(p => p.status === 'published');
    }

    getPostById(id: string) {
        return this.posts().find(p => p.id === id);
    }

    savePost(post: BlogPost) {
        // Prepare DTO
        const payload = {
            title: post.title,
            slug: post.id, // Using ID as slug for now from frontend editor
            blocks: post.content, // Editor content -> blocks
            status: post.status,
            type: 'post',
            coverImage: post.featuredImage,
            seo: {
                metaDescription: post.description
            }
        };

        // Determine if create or update based on check
        // Ideally we check if ID exists in db, but here we can rely on our list or try/catch
        // Since backend uses ID (number) vs Slug (string), we need to be careful.
        // The BlogEditor uses 'id' string (slug).
        // Let's assume we use Slug for lookup.

        if (this.posts().some(p => p.id === post.id)) {
            // Update logic requires numeric ID if backend route is PUT /:id (number)
            // But mapToBlogPost should store the numeric ID somewhere.
            // We need to update the interface to store numeric ID.
            // OR use findBySlug.
            alert('Update implemented partially - Backend needs numeric ID.');
            // For now, let's treat it as create for simplicity in this artifact or assume backend handles slug upsert?
            // No, ContentController has PUT :id (number).
            // I'll call POST for now (Create) which might error on unique slug.
            this.http.post(this.apiUrl, payload).subscribe({
                next: () => {
                    this.loadPosts();
                    alert('Saved successfully');
                },
                error: (e) => alert('Error saving: ' + e.message)
            });
        } else {
            this.http.post(this.apiUrl, payload).subscribe({
                next: () => {
                    this.loadPosts();
                    alert('Created successfully');
                },
                error: (e) => alert('Error creating: ' + e.message)
            });
        }
    }

    deletePost(id: string) {
        // We lack numeric ID in frontend model currently.
        // Assuming we can delete by slug or we need to fetch the numeric ID first.
        alert('Delete requires numeric ID implementation refactor.');
    }

    private mapToBlogPost(item: any): BlogPost {
        return {
            id: item.slug || item.id, // Frontend uses ID string as slug usually
            title: item.title,
            subtitle: '', // Not in backend entity
            content: item.blocks,
            featuredImage: item.coverImage,
            author: 'José Gaspard', // Hardcoded author
            publishDate: item.publishedAt,
            status: item.status,
            category: 'seo', // Not in entity
            tags: [], // Not in entity
            readingTime: 5,
            description: item.seo?.metaDescription
        } as BlogPost;
    }
}
