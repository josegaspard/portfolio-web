// Service para gestionar notificaciones
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

const getToken = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('access_token');
    }
    return null;
};

export interface Notification {
    id: number;
    type: 'success' | 'warning' | 'error' | 'info';
    title: string;
    message: string;
    read: boolean;
    createdAt: string;
}

export const notificationService = {
    // Obtener todas las notificaciones
    async getAll(): Promise<Notification[]> {
        const token = getToken();
        const res = await fetch(`${API_URL}/notifications`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (!res.ok) throw new Error('Failed to fetch notifications');
        return res.json();
    },

    // Marcar como leída
    async markAsRead(id: number) {
        const token = getToken();
        const res = await fetch(`${API_URL}/notifications/${id}/read`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (!res.ok) throw new Error('Failed to mark as read');
        return res.json();
    },

    // Marcar todas como leídas
    async markAllAsRead() {
        const token = getToken();
        const res = await fetch(`${API_URL}/notifications/mark-all-read`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (!res.ok) throw new Error('Failed to mark all as read');
        return res.json();
    },

    // Eliminar notificación
    async delete(id: number) {
        const token = getToken();
        const res = await fetch(`${API_URL}/notifications/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (!res.ok) throw new Error('Failed to delete notification');
        return res.json();
    },

    // Crear notificación (solo admin)
    async create(notification: Omit<Notification, 'id' | 'createdAt' | 'read'>) {
        const token = getToken();
        const res = await fetch(`${API_URL}/notifications`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(notification)
        });
        if (!res.ok) throw new Error('Failed to create notification');
        return res.json();
    }
};
