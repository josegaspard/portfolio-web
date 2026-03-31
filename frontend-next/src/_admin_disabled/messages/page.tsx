'use client';

import React, { useEffect, useState } from 'react';
import { contactService } from '@/services/contactService';
import { logger } from '@/utils/logger';
import './messages.css';

interface ContactMessage {
    id: number;
    name: string;
    email: string;
    company?: string;
    service?: string;
    source: string;  // Nuevo: origen del mensaje (contact_form, newsletter, etc)
    message: string;
    read: boolean;
    replied: boolean;
    adminReply?: string;
    createdAt: string;
}

export default function MessagesPage() {
    const [messages, setMessages] = useState<ContactMessage[]>([]);
    const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
    const [reply, setReply] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadMessages();
    }, []);

    const loadMessages = async () => {
        try {
            const data = await contactService.getAll();
            setMessages(data);
        } catch (error) {
            logger.error('Failed to load messages', error, 'MessagesPage.loadMessages');
        } finally {
            setLoading(false);
        }
    };

    const handleMarkAsRead = async (id: number) => {
        try {
            await contactService.markAsRead(id);
            setMessages(messages.map(m =>
                m.id === id ? { ...m, read: true } : m
            ));
        } catch (error) {
            logger.error('Failed to mark message as read', error, 'MessagesPage.handleMarkAsRead');
        }
    };

    const handleReply = async (id: number) => {
        if (!reply.trim()) return;

        try {
            await contactService.reply(id, reply);
            setMessages(messages.map(m =>
                m.id === id ? { ...m, replied: true, adminReply: reply } : m
            ));
            setReply('');
            setSelectedMessage(null);
        } catch (error) {
            logger.error('Failed to send reply', error, 'MessagesPage.handleReply');
        }
    };

    const unreadCount = messages.filter(m => !m.read).length;

    if (loading) return <div className="loading">Cargando mensajes...</div>;

    return (
        <div className="messages-page">
            <div className="page-header">
                <div>
                    <h2><i className="fas fa-inbox"></i> Mensajes de Contacto</h2>
                    <p>Gestiona y responde los mensajes de tus clientes</p>
                </div>
                <div className="unread-badge">
                    {unreadCount} sin leer
                </div>
            </div>

            <div className="messages-grid">
                {/* Lista de mensajes */}
                <div className="messages-list">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`message-item ${!message.read ? 'unread' : ''} ${selectedMessage?.id === message.id ? 'active' : ''}`}
                            onClick={() => {
                                setSelectedMessage(message);
                                if (!message.read) handleMarkAsRead(message.id);
                            }}
                        >
                            <div className="message-header">
                                <strong>{message.name}</strong>
                                {!message.read && <span className="unread-dot"></span>}
                            </div>
                            <div className="message-service">{message.service}</div>
                            <div className="message-preview">{message.message.substring(0, 60)}...</div>
                            <div className="message-date">
                                {new Date(message.createdAt).toLocaleDateString('es-ES')}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Detalle del mensaje */}
                <div className="message-detail">
                    {selectedMessage ? (
                        <>
                            <div className="detail-header">
                                <h3>{selectedMessage.name}</h3>
                                <div className="detail-meta">
                                    <span><i className="fas fa-envelope"></i> {selectedMessage.email}</span>
                                    {selectedMessage.company && (
                                        <span><i className="fas fa-building"></i> {selectedMessage.company}</span>
                                    )}
                                    <span><i className="fas fa-tag"></i> {selectedMessage.service}</span>
                                </div>
                            </div>

                            <div className="detail-body">
                                <h4>Mensaje:</h4>
                                <p>{selectedMessage.message}</p>
                            </div>

                            {selectedMessage.replied && selectedMessage.adminReply && (
                                <div className="admin-reply-display">
                                    <h4>Tu respuesta:</h4>
                                    <p>{selectedMessage.adminReply}</p>
                                </div>
                            )}

                            {!selectedMessage.replied && (
                                <div className="reply-form">
                                    <h4>Responder:</h4>
                                    <textarea
                                        value={reply}
                                        onChange={(e) => setReply(e.target.value)}
                                        placeholder="Escribe tu respuesta..."
                                        rows={6}
                                    />
                                    <button
                                        className="btn-send-reply"
                                        onClick={() => handleReply(selectedMessage.id)}
                                    >
                                        <i className="fas fa-paper-plane"></i> Enviar Respuesta
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="empty-state">
                            <i className="fas fa-inbox"></i>
                            <p>Selecciona un mensaje para ver los detalles</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
