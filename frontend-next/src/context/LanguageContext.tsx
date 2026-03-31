'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language } from '@/utils/translations';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    // IMPORTANTE: Estado inicial SIEMPRE 'es' para evitar hydration mismatch
    // La detección del idioma se hace SOLO en el cliente después del mount
    const [language, setLanguageState] = useState<Language>('es');
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Marcar que estamos en el cliente
        setIsClient(true);

        // Verificar si hay idioma guardado
        const savedLang = localStorage.getItem('jg_lang') as Language;
        if (savedLang && (savedLang === 'en' || savedLang === 'es')) {
            setLanguageState(savedLang);
            document.documentElement.lang = savedLang;
            return;
        }

        // Detectar idioma del navegador solo si no hay guardado
        const browserLang = navigator.language.toLowerCase();

        // Si es español o de LATAM, mantener español
        if (browserLang.startsWith('es') ||
            browserLang.includes('mx') ||
            browserLang.includes('ar') ||
            browserLang.includes('co') ||
            browserLang.includes('pe') ||
            browserLang.includes('cl')) {
            setLanguageState('es');
            localStorage.setItem('jg_lang', 'es');
            document.documentElement.lang = 'es';
        } else {
            // Cambiar a inglés para otros países
            setLanguageState('en');
            localStorage.setItem('jg_lang', 'en');
            document.documentElement.lang = 'en';
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('jg_lang', lang);

        // Actualizar meta tags para SEO
        if (typeof document !== 'undefined') {
            document.documentElement.lang = lang;
        }
    };

    const t = (key: string) => {
        const langData = translations[language] as any;
        return langData[key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
