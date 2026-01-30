import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class AnimationService {
    private platformId = inject(PLATFORM_ID);

    reveal(selector: string, delay: number = 0, stagger: number = 0) {
        if (isPlatformBrowser(this.platformId)) {
            const gsap = (window as any).gsap;
            const ScrollTrigger = (window as any).ScrollTrigger;

            if (gsap && ScrollTrigger) {
                gsap.from(selector, {
                    y: 40,
                    opacity: 0,
                    duration: 1,
                    delay,
                    stagger: stagger,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: selector,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                });
            }
        }
    }

    hoverScale(selector: string) {
        if (isPlatformBrowser(this.platformId)) {
            const gsap = (window as any).gsap;
            if (gsap) {
                gsap.utils.toArray(selector).forEach((el: any) => {
                    el.addEventListener('mouseenter', () => gsap.to(el, { scale: 1.05, duration: 0.3, ease: 'power2.out' }));
                    el.addEventListener('mouseleave', () => gsap.to(el, { scale: 1, duration: 0.3, ease: 'power2.out' }));
                });
            }
        }
    }

    orbit(selector: string) {
        if (isPlatformBrowser(this.platformId)) {
            const gsap = (window as any).gsap;
            if (gsap) {
                gsap.utils.toArray(selector).forEach((node: any, i: number) => {
                    gsap.to(node, {
                        x: i % 2 === 0 ? 'random(-30, 30)' : 'random(30, -30)',
                        y: i % 2 === 0 ? 'random(30, -30)' : 'random(-30, 30)',
                        duration: 8 + i * 2,
                        repeat: -1,
                        yoyo: true,
                        ease: 'sine.inOut'
                    });
                });
            }
        }
    }
}
