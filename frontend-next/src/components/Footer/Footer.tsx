'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { sanitizeHtml } from '@/utils/sanitize';
import './Footer.css';

export default function Footer() {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <h2 className="footer-logo">JG<span>.</span></h2>
                    <p className="footer-bio" dangerouslySetInnerHTML={{ __html: sanitizeHtml(t('footer_bio')) }}></p>
                </div>

                <div className="footer-links">
                    <h4>{t('footer_sections')}</h4>
                    <ul>
                        <li><Link href="/#about">{t('nav_about')}</Link></li>
                        <li><Link href="/#experience">{t('nav_experience')}</Link></li>
                        <li><Link href="/#portfolio">{t('nav_portfolio')}</Link></li>
                        <li><Link href="/#contact">{t('nav_contact')}</Link></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h4>{t('footer_services')}</h4>
                    <ul>
                        <li><a>{t('seo_expert')}</a></li>
                        <li><a>{t('web_development')}</a></li>
                        <li><a>{t('plugins_dev')}</a></li>
                        <li><a>{t('growth_strategies')}</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>{t('footer_contact')}</h4>
                    <p><i className="fas fa-envelope mr-2"></i> hola@josegaspard.dev</p>
                    <p><i className="fas fa-map-marker-alt mr-2"></i> {t('location_value')}</p>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {currentYear} José Gaspard - {t('footer_role')}. {t('footer_rights')}</p>
                </div>
            </div>
        </footer>
    );
}
