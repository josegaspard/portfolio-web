/**
 * Frontend Logger Utility
 * Provides safe logging that doesn't expose sensitive information in production
 */

type LogLevel = 'log' | 'warn' | 'error' | 'debug';

interface LoggerConfig {
    isDevelopment: boolean;
    enableConsole: boolean;
    enableRemote: boolean;
    remoteEndpoint?: string;
}

class FrontendLogger {
    private config: LoggerConfig;

    constructor() {
        this.config = {
            isDevelopment: process.env.NODE_ENV === 'development',
            enableConsole: process.env.NODE_ENV === 'development',
            enableRemote: false, // TODO: Integrate with error tracking service (Sentry, LogRocket)
        };
    }

    private formatMessage(level: LogLevel, message: string, context?: string): string {
        const timestamp = new Date().toISOString();
        const contextStr = context ? `[${context}]` : '';
        return `[${timestamp}] [${level.toUpperCase()}] ${contextStr} ${message}`;
    }

    private shouldLog(level: LogLevel): boolean {
        // In production, only log errors
        if (!this.config.isDevelopment && level !== 'error') {
            return false;
        }
        return true;
    }

    log(message: string, context?: string): void {
        if (!this.shouldLog('log')) return;

        if (this.config.enableConsole) {
            console.log(this.formatMessage('log', message, context));
        }
    }

    warn(message: string, context?: string): void {
        if (!this.shouldLog('warn')) return;

        if (this.config.enableConsole) {
            console.warn(this.formatMessage('warn', message, context));
        }
    }

    error(message: string, error?: Error | unknown, context?: string): void {
        if (!this.shouldLog('error')) return;

        const formattedMessage = this.formatMessage('error', message, context);

        if (this.config.enableConsole) {
            if (this.config.isDevelopment && error) {
                // In development, show full error with stack trace
                console.error(formattedMessage, error);
            } else {
                // In production, only show the message (no stack trace)
                console.error(formattedMessage);
            }
        }

        // TODO: Send to remote error tracking service
        if (this.config.enableRemote && this.config.remoteEndpoint) {
            this.sendToRemote('error', message, error, context);
        }
    }

    debug(message: string, data?: any, context?: string): void {
        if (!this.shouldLog('debug')) return;

        if (this.config.enableConsole) {
            console.debug(this.formatMessage('debug', message, context), data || '');
        }
    }

    private sendToRemote(level: LogLevel, message: string, error?: Error | unknown, context?: string): void {
        // TODO: Implement remote logging
        // Example: Send to Sentry, LogRocket, or custom endpoint
        /*
        fetch(this.config.remoteEndpoint!, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                level,
                message,
                context,
                error: error instanceof Error ? {
                    name: error.name,
                    message: error.message,
                    // Don't send stack trace to remote in production
                } : String(error),
                timestamp: new Date().toISOString(),
                userAgent: navigator.userAgent,
                url: window.location.href,
            }),
        }).catch(() => {
            // Silently fail - don't break the app if logging fails
        });
        */
    }
}

// Export singleton instance
export const logger = new FrontendLogger();

// Export class for testing
export { FrontendLogger };
