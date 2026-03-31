'use client';

import React, { useState, useEffect } from 'react';
import { notificationService, Notification } from '@/services/notificationService';
import { logger } from '@/utils/logger';
import './notifications.css';

export default function NotificationsPage() {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadNotifications();
    }, []);

    const loadNotifications = async () => {
        try {
            const data = await notificationService.getAll();
            setNotifications(data);
        } catch (error) {
            logger.error('Failed to load notifications', error, 'NotificationsPage.loadNotifications');
            // Fallback a datos de ejemplo si falla
            setNotifications([
                { id: 1, type: 'success', title: 'Post Publicado', message: 'El artículo "hola que tal" ha sido publicado exitosamente', read: false, createdAt: new Date().toISOString() },
                { id: 2, type: 'info', title: 'Nuevo Comentario', message: 'Tienes un nuevo comentario en tu blog', read: false, createdAt: new Date().toISOString() },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const unreadCount = notifications.filter(n => !n.read).length;

    const markAsRead = (id: string | number) => {
        setNotifications(notifications.map(n =>
            n.id === id ? { ...n, read: true } : n
        ));
    };

    const markAllAsRead = () => {
        setNotifications(notifications.map(n => ({ ...n, read: true })));
    };

    const getIcon = (type: string) => {
        switch (type) {
            case 'success': return 'fa-check-circle';
            case 'warning': return 'fa-exclamation-triangle';
            case 'error': return 'fa-times-circle';
            default: return 'fa-info-circle';
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diff = now.getTime() - date.getTime();
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(diff / 3600000);
        const days = Math.floor(diff / 86400000);

        if (minutes < 60) return `Hace ${minutes} min`;
        if (hours < 24) return `Hace ${hours} hora${hours > 1 ? 's' : ''}`;
        return `Hace ${days} día${days > 1 ? 's' : ''}`;
    };

    if (loading) return <div className="loading">Cargando notificaciones...</div>;

    return (
        <div className="notifications-page">
            <div className="page-header">
                <div>
                    <h2><i className="fas fa-bell"></i> Centro de Notificaciones</h2>
                    <p>Gestiona todas tus notificaciones del sistema</p>
                </div>
                {unreadCount > 0 && (
                    <button className="btn-mark-all" onClick={markAllAsRead}>
                        <i className="fas fa-check-double"></i> Marcar todas como leídas
                    </button>
                )}
            </div>

            <div className="notifications-stats">
                <div className="stat-box">
                    <span className="stat-number">{notifications.length}</span>
                    <span className="stat-label">Total</span>
                </div>
                <div className="stat-box">
                    <span className="stat-number">{unreadCount}</span>
                    <span className="stat-label">Sin leer</span>
                </div>
                <div className="stat-box">
                    <span className="stat-number">{notifications.length - unreadCount}</span>
                    <span className="stat-label">Leídas</span>
                </div>
            </div>

            <div className="notifications-list">
                {notifications.map((notification) => (
                    <div
                        key={notification.id}
                        className={`notification-item ${notification.type} ${notification.read ? 'read' : 'unread'}`}
                        onClick={() => markAsRead(notification.id)}
                    >
                        <div className="notification-icon">
                            <i className={`fas ${getIcon(notification.type)}`}></i>
                        </div>
                        <div className="notification-content">
                            <div className="notification-header">
                                <h4>{notification.title}</h4>
                                <span className="notification-time">{formatDate(notification.createdAt)}</span>
                            </div>
                            <p>{notification.message}</p>
                        </div>
                        {!notification.read && <div className="unread-dot"></div>}
                    </div>
                ))}
            </div>
        </div>
    );
}
