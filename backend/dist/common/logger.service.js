"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    static isDevelopment = process.env.NODE_ENV !== 'production';
    static log(message, context) {
        if (this.isDevelopment) {
            console.log(`[${context || 'App'}] ${message}`);
        }
    }
    static error(message, trace, context) {
        if (this.isDevelopment) {
            console.error(`[${context || 'Error'}] ${message}`, trace);
        }
        else {
            console.error(`[${context || 'Error'}] ${message}`);
        }
    }
    static warn(message, context) {
        if (this.isDevelopment) {
            console.warn(`[${context || 'Warning'}] ${message}`);
        }
    }
    static debug(message, context) {
        if (this.isDevelopment) {
            console.debug(`[${context || 'Debug'}] ${message}`);
        }
    }
    static verbose(message, context) {
        if (this.isDevelopment) {
            console.log(`[${context || 'Verbose'}] ${message}`);
        }
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.service.js.map