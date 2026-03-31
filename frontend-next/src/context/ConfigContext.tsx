'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { logger } from '@/utils/logger';

export interface SiteConfig {
    whatsapp: {
        number: string;
        message: string;
        enabled: boolean;
    };
    site: {
        title: string;
        description: string;
    };
    maintenanceMode: boolean;
}

const defaultConfig: SiteConfig = {
    whatsapp: {
        number: '521234567890',
        message: 'Hola, me gustaría más información.',
        enabled: true
    },
    site: {
        title: 'José Gaspard - Senior SEO Architect',
        description: 'Experto en SEO Técnico y Desarrollo Web de Alto Rendimiento.'
    },
    maintenanceMode: false
};

interface ConfigContextType {
    config: SiteConfig;
    updateConfig: (newConfig: Partial<SiteConfig>) => void;
    updateWhatsapp: (waConfig: Partial<SiteConfig['whatsapp']>) => void;
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export function ConfigProvider({ children }: { children: React.ReactNode }) {
    const [config, setConfig] = useState<SiteConfig>(defaultConfig);

    useEffect(() => {
        const stored = localStorage.getItem('jg_site_config');
        if (stored) {
            try {
                const data = JSON.parse(stored);
                setConfig({ ...defaultConfig, ...data });
            } catch (e) {
                logger.error('Failed to load config from storage', e, 'ConfigProvider.useEffect');
            }
        }
    }, []);

    const updateConfig = (newConfig: Partial<SiteConfig>) => {
        setConfig(prev => {
            const updated = { ...prev, ...newConfig };
            localStorage.setItem('jg_site_config', JSON.stringify(updated));
            return updated;
        });
    };

    const updateWhatsapp = (waConfig: Partial<SiteConfig['whatsapp']>) => {
        setConfig(prev => {
            const updated = {
                ...prev,
                whatsapp: { ...prev.whatsapp, ...waConfig }
            };
            localStorage.setItem('jg_site_config', JSON.stringify(updated));
            return updated;
        });
    };

    return (
        <ConfigContext.Provider value={{ config, updateConfig, updateWhatsapp }}>
            {children}
        </ConfigContext.Provider>
    );
}

export function useConfig() {
    const context = useContext(ConfigContext);
    if (context === undefined) {
        throw new Error('useConfig must be used within a ConfigProvider');
    }
    return context;
}
