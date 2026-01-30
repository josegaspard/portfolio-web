// ============================================
// LOGGER SERVICE - Centralizado y Seguro
// ============================================

export class Logger {
    private static isDevelopment = process.env.NODE_ENV !== 'production';

    static log(message: string, context?: string) {
        if (this.isDevelopment) {
            console.log(`[${context || 'App'}] ${message}`);
        }
        // En producción: enviar a servicio externo (Sentry, LogRocket, etc)
    }

    static error(message: string, trace?: string, context?: string) {
        if (this.isDevelopment) {
            console.error(`[${context || 'Error'}] ${message}`, trace);
        } else {
            // En producción: NO exponer stack traces
            // Enviar a servicio de monitoring externo
            console.error(`[${context || 'Error'}] ${message}`);
        }
    }

    static warn(message: string, context?: string) {
        if (this.isDevelopment) {
            console.warn(`[${context || 'Warning'}] ${message}`);
        }
    }

    static debug(message: string, context?: string) {
        if (this.isDevelopment) {
            console.debug(`[${context || 'Debug'}] ${message}`);
        }
    }

    static verbose(message: string, context?: string) {
        if (this.isDevelopment) {
            console.log(`[${context || 'Verbose'}] ${message}`);
        }
    }
}
