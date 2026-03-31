'use client';

import React, { useState } from 'react';
import { logger } from '@/utils/logger';
import '../admin-forms.css';

export default function SettingsPage() {
    const [settings, setSettings] = useState({
        siteName: 'José Gaspard',
        contactEmail: 'jose@gaspard.dev',
        metaDescription: 'Especialista en SEO Técnico y Desarrollo Web.',
        analyticsId: ''
    });

    const handleSave = async () => {
        try {
            const token = localStorage.getItem('access_token');
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/settings`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ key: 'general_settings', value: JSON.stringify(settings) })
            });

            if (res.ok) {
                alert('Configuración guardada correctamente.');
            } else {
                alert('Error al guardar la configuración.');
            }
        } catch (error) {
            logger.error('Failed to save settings', error, 'SettingsPage.handleSave');
            alert('Error al conectar con el servidor.');
        }
    };

    return (
        <div className="admin-settings">
            <div className="page-header">
                <div>
                    <h2>Configuración General</h2>
                    <p className="subtitle">Configura los detalles de tu sitio web</p>
                </div>
                <button className="btn-primary" onClick={handleSave}>
                    <i className="fas fa-save"></i> Guardar Cambios
                </button>
            </div>

            <div className="content-card">
                <div className="settings-form">
                    <div className="form-group-row">
                        <div className="form-group">
                            <label>Nombre del Sitio</label>
                            <input
                                type="text"
                                className="form-input"
                                value={settings.siteName}
                                onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email de Contacto</label>
                            <input
                                type="email"
                                className="form-input"
                                value={settings.contactEmail}
                                onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Descripción Meta (SEO)</label>
                        <textarea
                            className="form-input"
                            rows={3}
                            value={settings.metaDescription}
                            onChange={(e) => setSettings({ ...settings, metaDescription: e.target.value })}
                        ></textarea>
                    </div>

                    <div className="form-group">
                        <label>Google Analytics ID</label>
                        <input
                            type="text"
                            className="form-input"
                            placeholder="G-XXXXXXXXXX"
                            value={settings.analyticsId}
                            onChange={(e) => setSettings({ ...settings, analyticsId: e.target.value })}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
