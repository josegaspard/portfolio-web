'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useEffect } from 'react';

/**
 * Componente para agregar hreflang tags dinámicamente
 * Importante para SEO multiidioma
 */
export default function HreflangTags() {
    const { language } = useLanguage();

    useEffect(() => {
        // Limpiar tags existentes
        const existingTags = document.querySelectorAll('link[rel="alternate"]');
        existingTags.forEach(tag => tag.remove());

        // Obtener URL actual sin parámetros
        const baseUrl = window.location.origin + window.location.pathname;

        // Crear hreflang tags
        const hreflangES = document.createElement('link');
        hreflangES.rel = 'alternate';
        hreflangES.hreflang = 'es';
        hreflangES.href = baseUrl;

        const hreflangEN = document.createElement('link');
        hreflangEN.rel = 'alternate';
        hreflangEN.hreflang = 'en';
        hreflangEN.href = `${baseUrl}?lang=en`;

        const hreflangXDefault = document.createElement('link');
        hreflangXDefault.rel = 'alternate';
        hreflangXDefault.hreflang = 'x-default';
        hreflangXDefault.href = baseUrl;

        // Agregar al head
        document.head.appendChild(hreflangES);
        document.head.appendChild(hreflangEN);
        document.head.appendChild(hreflangXDefault);

        // Actualizar lang del documento
        document.documentElement.lang = language;

        // Cleanup
        return () => {
            hreflangES.remove();
            hreflangEN.remove();
            hreflangXDefault.remove();
        };
    }, [language]);

    return null;
}
