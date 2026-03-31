// ============================================
// SANITIZE UTILITY - XSS Protection
// ============================================

import DOMPurify from 'isomorphic-dompurify';

/**
 * Sanitiza HTML para prevenir ataques XSS
 * @param dirty - HTML potencialmente peligroso
 * @returns HTML sanitizado
 */
export function sanitizeHtml(dirty: string): string {
    if (!dirty) return '';

    return DOMPurify.sanitize(dirty, {
        ALLOWED_TAGS: [
            'p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
            'ul', 'ol', 'li', 'a', 'img', 'blockquote', 'code', 'pre',
            'table', 'thead', 'tbody', 'tr', 'th', 'td'
        ],
        ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class', 'id', 'target', 'rel'],
        ALLOW_DATA_ATTR: false,
    });
}

/**
 * Sanitiza texto plano (remueve todo HTML)
 * @param dirty - Texto potencialmente peligroso
 * @returns Texto limpio sin HTML
 */
export function sanitizeText(dirty: string): string {
    if (!dirty) return '';

    return DOMPurify.sanitize(dirty, {
        ALLOWED_TAGS: [],
        ALLOWED_ATTR: [],
    });
}
