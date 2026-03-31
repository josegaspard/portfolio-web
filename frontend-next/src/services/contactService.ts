// Service para gestionar mensajes de contacto
import { logger } from '@/utils/logger';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

const getToken = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('access_token');
    }
    return null;
};

export const contactService = {
    // Obtener todos los mensajes
    async getAll() {
        try {
            const token = getToken();
            const res = await fetch(`${API_URL}/contact-messages`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!res.ok) {
                // Devolver array vacío (REAL: 0 mensajes)
                console.warn('No se pudieron cargar mensajes. Mostrando lista vacía (0 mensajes REALES)');
                return [];
            }

            return res.json();
        } catch (error) {
            logger.error('Failed to fetch contact messages', error, 'contactService.getAll');
            return []; // Array vacío = 0 mensajes REALES
        }
    },

    // Obtener un mensaje por ID
    async getById(id: number) {
        const token = getToken();
        const res = await fetch(`${API_URL}/contact-messages/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (!res.ok) throw new Error('Failed to fetch message');
        return res.json();
    },

    // Marcar como leído
    async markAsRead(id: number) {
        const token = getToken();
        const res = await fetch(`${API_URL}/contact-messages/${id}/read`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (!res.ok) throw new Error('Failed to mark as read');
        return res.json();
    },

    // Responder a un mensaje
    async reply(id: number, reply: string) {
        const token = getToken();
        const res = await fetch(`${API_URL}/contact-messages/${id}/reply`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ reply })
        });
        if (!res.ok) throw new Error('Failed to send reply');
        return res.json();
    },

    // Eliminar mensaje
    async delete(id: number) {
        const token = getToken();
        const res = await fetch(`${API_URL}/contact-messages/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (!res.ok) throw new Error('Failed to delete message');
        return res.json();
    }
};
