import { Injectable, signal } from '@angular/core';
import { translations } from './translations';

@Injectable({
    providedIn: 'root'
})
export class TranslationService {
    private currentLang = signal<'es' | 'en'>('es');

    private translations = translations;

    constructor() {
        // Try to load from localStorage if available
        if (typeof localStorage !== 'undefined') {
            const savedLang = localStorage.getItem('lang') as 'es' | 'en';
            if (savedLang) {
                this.currentLang.set(savedLang);
            }
        }
    }

    getLang() {
        return this.currentLang();
    }

    setLang(lang: 'es' | 'en') {
        this.currentLang.set(lang);
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('lang', lang);
        }
        // Update HTML lang attribute
        if (typeof document !== 'undefined') {
            document.documentElement.lang = lang;
        }
    }

    translate(key: string): string {
        const lang = this.currentLang();
        return (this.translations[lang] as any)[key] || key;
    }
}
