import { Injectable } from '@angular/core';

interface SitemapUrl {
    loc: string;
    lastmod?: string;
    changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority?: number;
}

@Injectable({
    providedIn: 'root'
})
export class SitemapService {
    private baseUrl = 'https://josegaspard.dev';

    /**
     * Generate sitemap XML
     */
    generateSitemap(urls: SitemapUrl[]): string {
        const urlElements = urls.map(url => `
    <url>
        <loc>${url.loc}</loc>
        ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
        ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
        ${url.priority !== undefined ? `<priority>${url.priority}</priority>` : ''}
    </url>`).join('');

        return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>`;
    }

    /**
     * Get default sitemap URLs
     */
    getDefaultUrls(): SitemapUrl[] {
        const today = new Date().toISOString().split('T')[0];

        return [
            {
                loc: `${this.baseUrl}/`,
                lastmod: today,
                changefreq: 'weekly',
                priority: 1.0
            },
            {
                loc: `${this.baseUrl}/blog`,
                lastmod: today,
                changefreq: 'daily',
                priority: 0.9
            },
            {
                loc: `${this.baseUrl}/about`,
                lastmod: today,
                changefreq: 'monthly',
                priority: 0.8
            },
            {
                loc: `${this.baseUrl}/portfolio`,
                lastmod: today,
                changefreq: 'weekly',
                priority: 0.8
            },
            {
                loc: `${this.baseUrl}/contact`,
                lastmod: today,
                changefreq: 'monthly',
                priority: 0.7
            }
        ];
    }

    /**
     * Add blog posts to sitemap
     */
    addBlogPosts(posts: Array<{ slug: string, publishDate: string }>): SitemapUrl[] {
        return posts.map(post => ({
            loc: `${this.baseUrl}/blog/${post.slug}`,
            lastmod: post.publishDate,
            changefreq: 'monthly' as const,
            priority: 0.7
        }));
    }

    /**
     * Generate robots.txt content
     */
    generateRobotsTxt(): string {
        return `# robots.txt for ${this.baseUrl}
User-agent: *
Allow: /

# Sitemaps
Sitemap: ${this.baseUrl}/sitemap.xml

# Disallow admin areas
Disallow: /admin/
Disallow: /dashboard/
Disallow: /api/

# Crawl-delay
Crawl-delay: 1

# Specific bots
User-agent: Googlebot
Allow: /

User-agent: Googlebot-Image
Allow: /

User-agent: Bingbot
Allow: /
`;
    }
}
