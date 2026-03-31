'use client';

import React from 'react';
import './PromoWidget.css';

interface PromoWidgetProps {
    imageUrl: string;
    link: string;
    alt: string;
    title?: string;
}

export default function PromoWidget({ imageUrl, link, alt, title }: PromoWidgetProps) {
    return (
        <div className="widget promo-widget">
            {title && <h3 className="widget-title">{title}</h3>}
            <a href={link} target="_blank" rel="noopener noreferrer" className="promo-link">
                <img src={imageUrl} alt={alt} />
                <div className="promo-overlay">
                    <i className="fas fa-external-link-alt"></i>
                </div>
            </a>
        </div>
    );
}
