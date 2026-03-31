'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { logger } from '@/utils/logger';
import './Contact.css';

export default function Contact() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
    });
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'}/contact-messages`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSent(true);
                setFormData({ name: '', email: '', company: '', service: '', message: '' });
                setTimeout(() => setSent(false), 5000);
            }
        } catch (error) {
            logger.error('Failed to send contact message', error, 'Contact.onSubmit');
        } finally {
            setSending(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className="section" id="contact">
            <div className="container">
                <div className="section-header-premium">
                    <span className="section-label">{t('nav_contact').toUpperCase()}</span>
                    <h2 className="section-title-2line">
                        <span className="title-line-white">{t('contact_next_project_line1')}</span>
                        <span className="title-line-gradient">{t('contact_next_project_line2')}</span>
                    </h2>
                    <p className="section-description">
                        {t('contact_ready_desc')}
                    </p>
                </div>

                {/* Contact Info Cards */}
                <div className="contact-info-premium">
                    <div className="contact-info-card">
                        <div className="info-icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="info-content">
                            <h4>Email</h4>
                            <p>hola@josegaspard.dev</p>
                            <p>josegaspardhernani@gmail.com</p>
                        </div>
                    </div>

                    <div className="contact-info-card">
                        <div className="info-icon">
                            <i className="fas fa-phone"></i>
                        </div>
                        <div className="info-content">
                            <h4>{t('contact_phone')}</h4>
                            <p>+51 927 650 573 (Perú)</p>
                            <p>+52 553 121 2956 (México)</p>
                        </div>
                    </div>

                    <div className="contact-info-card">
                        <div className="info-icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="info-content">
                            <h4>{t('contact_location')}</h4>
                            <p>Ciudad de México, México</p>
                            <p>{t('contact_latam')}</p>
                        </div>
                    </div>

                    <div className="contact-info-card">
                        <div className="info-icon">
                            <i className="fas fa-clock"></i>
                        </div>
                        <div className="info-content">
                            <h4>{t('contact_availability')}</h4>
                            <p>{t('contact_hours')}</p>
                            <p>{t('contact_response')}</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="contact-form-wrapper">
                    <form onSubmit={onSubmit} className="contact-form-premium glass-premium">
                        <div className="form-row">
                            <div className="form-group">
                                <label>{t('contact_form_name')} *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder={t('contact_form_name_placeholder')}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>{t('contact_form_email')} *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder={t('contact_form_email_placeholder')}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>{t('contact_form_company')}</label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder={t('contact_form_company_placeholder')}
                                />
                            </div>

                            <div className="form-group">
                                <label>{t('contact_form_service')} *</label>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">{t('contact_form_service_placeholder')}</option>
                                    <option value="seo">SEO</option>
                                    <option value="dev">Web Development</option>
                                    <option value="both">SEO + Development</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>{t('contact_form_message')} *</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder={t('contact_form_message_placeholder')}
                                rows={6}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block btn-large" disabled={sending}>
                            {sending ? 'Enviando...' : t('contact_form_submit')}
                        </button>

                        {sent && (
                            <div className="success-message">
                                ✓ {t('contact_success')}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
