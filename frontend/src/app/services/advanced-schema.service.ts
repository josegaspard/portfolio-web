import { Injectable } from '@angular/core';
import { SeoService } from './seo.service';

@Injectable({
    providedIn: 'root'
})
export class AdvancedSchemaService {

    constructor(private seoService: SeoService) { }

    /**
     * Generate comprehensive FAQ schema
     */
    generateFAQSchema(faqs: Array<{ question: string, answer: string }>) {
        return {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                }
            }))
        };
    }

    /**
     * Generate Service schema
     */
    generateServiceSchema() {
        return {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "SEO Consultation & Web Development",
            "provider": {
                "@type": "Person",
                "name": "José Gaspard",
                "jobTitle": "SEO Architect & Full-Stack Engineer"
            },
            "areaServed": {
                "@type": "Country",
                "name": ["Mexico", "United States", "Colombia", "Chile", "Peru"]
            },
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "SEO & Development Services",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Technical SEO Audit",
                            "description": "Comprehensive technical SEO analysis and optimization"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Full-Stack Development",
                            "description": "Custom web application development with Angular, Laravel, and Node.js"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Performance Optimization",
                            "description": "Core Web Vitals optimization and speed improvements"
                        }
                    }
                ]
            }
        };
    }

    /**
     * Generate Review/Rating schema
     */
    generateReviewSchema(reviews: Array<{ author: string, rating: number, text: string, date: string }>) {
        return {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "SEO & Development Services by José Gaspard",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": reviews.length
            },
            "review": reviews.map(review => ({
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": review.author
                },
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": review.rating,
                    "bestRating": "5"
                },
                "reviewBody": review.text,
                "datePublished": review.date
            }))
        };
    }

    /**
     * Generate Portfolio/CreativeWork schema
     */
    generatePortfolioSchema(projects: Array<{ name: string, description: string, url: string, image: string }>) {
        return {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": projects.map((project, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                    "@type": "CreativeWork",
                    "name": project.name,
                    "description": project.description,
                    "url": project.url,
                    "image": project.image,
                    "creator": {
                        "@type": "Person",
                        "name": "José Gaspard"
                    }
                }
            }))
        };
    }

    /**
     * Generate HowTo schema for tutorials
     */
    generateHowToSchema(title: string, steps: Array<{ name: string, text: string, image?: string }>) {
        return {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": title,
            "step": steps.map((step, index) => ({
                "@type": "HowToStep",
                "position": index + 1,
                "name": step.name,
                "text": step.text,
                ...(step.image && { "image": step.image })
            }))
        };
    }

    /**
     * Generate Course schema
     */
    generateCourseSchema(courseName: string, description: string, provider: string) {
        return {
            "@context": "https://schema.org",
            "@type": "Course",
            "name": courseName,
            "description": description,
            "provider": {
                "@type": "Organization",
                "name": provider
            }
        };
    }

    /**
     * Generate VideoObject schema
     */
    generateVideoSchema(video: { name: string, description: string, thumbnailUrl: string, uploadDate: string, duration: string, contentUrl: string }) {
        return {
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": video.name,
            "description": video.description,
            "thumbnailUrl": video.thumbnailUrl,
            "uploadDate": video.uploadDate,
            "duration": video.duration,
            "contentUrl": video.contentUrl
        };
    }

    /**
     * Generate LocalBusiness schema
     */
    generateLocalBusinessSchema() {
        return {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "José Gaspard - SEO & Web Development",
            "image": "https://josegaspard.dev/img/portfolio/josegaspard.jpg",
            "url": "https://josegaspard.dev",
            "telephone": "+52-XXX-XXX-XXXX",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "MX"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": "19.4326",
                "longitude": "-99.1332"
            },
            "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
            }
        };
    }

    /**
     * Generate WebSite schema with search action
     */
    generateWebSiteSchema() {
        return {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "José Gaspard",
            "url": "https://josegaspard.dev",
            "potentialAction": {
                "@type": "SearchAction",
                "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://josegaspard.dev/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
            }
        };
    }

    /**
     * Apply all schemas to page
     */
    applyAllSchemas() {
        // Organization
        this.seoService.addStructuredData(this.seoService.generateOrganizationSchema());

        // Person
        this.seoService.addStructuredData(this.seoService.generatePersonSchema());

        // Website
        this.seoService.addStructuredData(this.generateWebSiteSchema());

        // Service
        this.seoService.addStructuredData(this.generateServiceSchema());
    }
}
