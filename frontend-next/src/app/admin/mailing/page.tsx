'use client';

import React, { useState } from 'react';
import './mailing.css';

interface EmailTemplate {
    id: string;
    name: string;
    subject: string;
    preview: string;
}

export default function MailingPage() {
    const [templates] = useState<EmailTemplate[]>([
        { id: '1', name: 'Welcome Email', subject: '¡Bienvenido a José Gaspard!', preview: 'Email de bienvenida para nuevos suscriptores' },
        { id: '2', name: 'New Post', subject: 'Nuevo artículo publicado', preview: 'Notificación de nuevo contenido' },
        { id: '3', name: 'Newsletter', subject: 'Newsletter Mensual', preview: 'Resumen mensual de contenido' }
    ]);

    const [stats] = useState({
        sent: 156,
        opened: 98,
        clicked: 45,
        bounced: 3
    });

    return (
        <div className="mailing-page">
            <div className="page-header">
                <h2><i className="fas fa-envelope"></i> Sistema de Mailing</h2>
                <p>Gestiona emails, newsletters y templates</p>
            </div>

            {/* Stats */}
            <div className="email-stats">
                <div className="stat-card">
                    <i className="fas fa-paper-plane"></i>
                    <div>
                        <span className="stat-value">{stats.sent}</span>
                        <span className="stat-label">Enviados</span>
                    </div>
                </div>
                <div className="stat-card">
                    <i className="fas fa-envelope-open"></i>
                    <div>
                        <span className="stat-value">{stats.opened}</span>
                        <span className="stat-label">Abiertos</span>
                    </div>
                </div>
                <div className="stat-card">
                    <i className="fas fa-mouse-pointer"></i>
                    <div>
                        <span className="stat-value">{stats.clicked}</span>
                        <span className="stat-label">Clicks</span>
                    </div>
                </div>
                <div className="stat-card">
                    <i className="fas fa-exclamation-triangle"></i>
                    <div>
                        <span className="stat-value">{stats.bounced}</span>
                        <span className="stat-label">Rebotados</span>
                    </div>
                </div>
            </div>

            {/* Templates */}
            <div className="templates-section">
                <div className="section-header">
                    <h3>Email Templates</h3>
                    <button className="btn-primary">
                        <i className="fas fa-plus"></i> Nuevo Template
                    </button>
                </div>

                <div className="templates-grid">
                    {templates.map((template) => (
                        <div key={template.id} className="template-card">
                            <div className="template-icon">
                                <i className="fas fa-file-alt"></i>
                            </div>
                            <h4>{template.name}</h4>
                            <p className="template-subject">{template.subject}</p>
                            <p className="template-preview">{template.preview}</p>
                            <div className="template-actions">
                                <button className="btn-edit">
                                    <i className="fas fa-edit"></i> Editar
                                </button>
                                <button className="btn-send">
                                    <i className="fas fa-paper-plane"></i> Enviar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
