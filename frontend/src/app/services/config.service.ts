import { Injectable, signal, effect, PLATFORM_ID, inject, makeStateKey, TransferState } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

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

const CONFIG_KEY = makeStateKey<SiteConfig>('SITE_CONFIG');

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    private STORAGE_KEY = 'jg_site_config';
    private platformId = inject(PLATFORM_ID);
    private transferState = inject(TransferState);

    // Default Configuration
    private defaultConfig: SiteConfig = {
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

    // Reactive State
    config = signal<SiteConfig>(this.defaultConfig);

    constructor() {
        this.initializeConfig();

        // Auto-save (Browser only)
        if (isPlatformBrowser(this.platformId)) {
            effect(() => {
                const currentConfig = this.config();
                // Avoid saving if it matches default exactly (optional optimization), 
                // but for now just save to sync user preferences.
                // We wrap in try-catch just in case
                try {
                    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(currentConfig));
                } catch (e) {
                    console.warn('ConfigService: Failed to save to localStorage', e);
                }
            });
        }
    }

    private initializeConfig() {
        if (this.transferState.hasKey(CONFIG_KEY)) {
            // 1. Client: Hydrating from Server State
            const serverConfig = this.transferState.get(CONFIG_KEY, this.defaultConfig);
            this.config.set(serverConfig);
            // We can now safely check localStorage for *updates* without breaking hydration
            // because the initial paint matches. 
            // We do this in a setTimeout or just let the effect handle it? 
            // No, we need to load user prefs.
            if (isPlatformBrowser(this.platformId)) {
                this.loadFromStorage();
            }
        } else if (isPlatformBrowser(this.platformId)) {
            // 2. Client: SPA Navigation or Fallback
            this.loadFromStorage();
        } else {
            // 3. Server: Set Default and Transfer
            this.config.set(this.defaultConfig);
            this.transferState.set(CONFIG_KEY, this.defaultConfig);
        }
    }

    private loadFromStorage() {
        const stored = localStorage.getItem(this.STORAGE_KEY);
        if (stored) {
            try {
                const data = JSON.parse(stored);
                // Merge to ensure structure integrity
                this.config.set({ ...this.defaultConfig, ...data });
            } catch (e) {
                console.error('Error loading config from storage', e);
            }
        }
    }

    updateConfig(newConfig: Partial<SiteConfig>) {
        this.config.update(current => ({ ...current, ...newConfig }));
    }

    updateWhatsapp(waConfig: Partial<SiteConfig['whatsapp']>) {
        this.config.update(current => ({
            ...current,
            whatsapp: { ...current.whatsapp, ...waConfig }
        }));
    }
}
