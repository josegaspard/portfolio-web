'use client';

import React from 'react';
import { useConfig } from '@/context/ConfigContext';
import { analyticsService, EventType } from '@/services/analyticsService';
import './WhatsappButton.css';

export default function WhatsappButton() {
    const { config } = useConfig();

    if (!config.whatsapp.enabled) return null;

    const handleWhatsAppClick = () => {
        analyticsService.trackEvent(EventType.CLICK_WHATSAPP, {
            number: config.whatsapp.number,
            url: window.location.href
        });
    };

    const whatsappLink = `https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(config.whatsapp.message)}`;

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            title="Contactar por WhatsApp"
            onClick={handleWhatsAppClick}
        >
            <i className="fab fa-whatsapp"></i>
            <span className="whatsapp-text">Chat on WhatsApp</span>
            <div className="whatsapp-pulse"></div>
        </a>
    );
}
