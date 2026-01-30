import { Injectable } from '@angular/core';

interface ImageOptimizationOptions {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'webp' | 'jpeg' | 'png';
    lazy?: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class ImageOptimizerService {

    /**
     * Generate responsive image srcset
     */
    generateSrcSet(baseUrl: string, widths: number[] = [320, 640, 768, 1024, 1280, 1920]): string {
        return widths
            .map(width => `${this.optimizeUrl(baseUrl, { width })} ${width}w`)
            .join(', ');
    }

    /**
     * Generate sizes attribute for responsive images
     */
    generateSizes(breakpoints: Array<{ maxWidth: string, size: string }>): string {
        const sizesArray = breakpoints.map(bp => `(max-width: ${bp.maxWidth}) ${bp.size}`);
        sizesArray.push('100vw'); // Default size
        return sizesArray.join(', ');
    }

    /**
     * Optimize image URL with parameters
     */
    optimizeUrl(url: string, options: ImageOptimizationOptions = {}): string {
        const params = new URLSearchParams();

        if (options.width) params.append('w', options.width.toString());
        if (options.height) params.append('h', options.height.toString());
        if (options.quality) params.append('q', options.quality.toString());
        if (options.format) params.append('fm', options.format);

        const queryString = params.toString();
        return queryString ? `${url}?${queryString}` : url;
    }

    /**
     * Generate blur placeholder data URL
     */
    generateBlurPlaceholder(width: number = 10, height: number = 10): string {
        // This would typically call an API or generate a tiny blurred version
        // For now, return a simple gradient placeholder
        return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${height}'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='1'/%3E%3C/filter%3E%3Crect width='${width}' height='${height}' fill='%23333' filter='url(%23b)'/%3E%3C/svg%3E`;
    }

    /**
     * Lazy load images using Intersection Observer
     */
    lazyLoadImages() {
        if (typeof window === 'undefined') return;

        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target as HTMLImageElement;
                    const src = img.dataset['src'];
                    const srcset = img.dataset['srcset'];

                    if (src) img.src = src;
                    if (srcset) img.srcset = srcset;

                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px', // Start loading 50px before entering viewport
            threshold: 0.01
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    /**
     * Preload critical images
     */
    preloadImage(url: string, as: 'image' | 'fetch' = 'image') {
        if (typeof document === 'undefined') return;

        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = as;
        link.href = url;
        document.head.appendChild(link);
    }

    /**
     * Convert image to WebP if supported
     */
    supportsWebP(): Promise<boolean> {
        return new Promise(resolve => {
            const webP = new Image();
            webP.onload = webP.onerror = () => {
                resolve(webP.height === 2);
            };
            webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
        });
    }
}
