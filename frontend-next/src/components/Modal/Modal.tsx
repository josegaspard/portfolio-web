'use client';

import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { sanitizeHtml } from '@/utils/sanitize';
import './Modal.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    modalId: string | null;
}

export default function Modal({ isOpen, onClose, modalId }: ModalProps) {
    const { t } = useLanguage();
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setActive(true);
            document.body.style.overflow = 'hidden';
        } else {
            setActive(false);
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    if (!isOpen || !modalId) return null;

    const getPrefix = (id: string) => {
        if (id.startsWith('modal-')) return id.replace('modal-', '');
        return id;
    };

    const prefix = getPrefix(modalId);

    const hasTranslation = (key: string) => {
        const value = t(key);
        return value !== key;
    };

    return (
        <div className={`modal-root ${active ? 'active' : ''}`}>
            <div className="modal-overlay" onClick={onClose}></div>
            <div className="modal-container">
                <button className="modal-close" onClick={onClose}><i className="fas fa-times"></i></button>

                <div className="modal-header">
                    <h2 dangerouslySetInnerHTML={{ __html: sanitizeHtml(t(`${prefix}_title`)) }}></h2>
                    <p className="modal-subtitle" dangerouslySetInnerHTML={{ __html: sanitizeHtml(t(`${prefix}_subtitle`)) }}></p>

                    <div className="modal-stats">
                        {hasTranslation(`${prefix}_stat_1_label`) && (
                            <div className="modal-stat">
                                <span className="stat-value" dangerouslySetInnerHTML={{ __html: sanitizeHtml(t(`${prefix}_stat_1_value`)) }}></span>
                                <span className="stat-label" dangerouslySetInnerHTML={{ __html: sanitizeHtml(t(`${prefix}_stat_1_label`)) }}></span>
                            </div>
                        )}
                        {hasTranslation(`${prefix}_stat_2_label`) && (
                            <div className="modal-stat">
                                <span className="stat-value" dangerouslySetInnerHTML={{ __html: sanitizeHtml(t(`${prefix}_stat_2_value`)) }}></span>
                                <span className="stat-label" dangerouslySetInnerHTML={{ __html: sanitizeHtml(t(`${prefix}_stat_2_label`)) }}></span>
                            </div>
                        )}
                        <div className="modal-stat">
                            <span className="stat-value" dangerouslySetInnerHTML={{ __html: sanitizeHtml(t(`${prefix}_stat_3_value`)) }}></span>
                            <span className="stat-label" dangerouslySetInnerHTML={{ __html: sanitizeHtml(t(`${prefix}_stat_3_label`)) }}></span>
                        </div>
                    </div>
                </div>

                <div className="modal-body">
                    {hasTranslation(`${prefix}_challenge_title`) && (
                        <div className="modal-section">
                            <h3 dangerouslySetInnerHTML={{ __html: sanitizeHtml(t(`${prefix}_challenge_title`)) }}></h3>
                            <p dangerouslySetInnerHTML={{ __html: sanitizeHtml(t(`${prefix}_challenge_desc`)) }}></p>
                        </div>
                    )}

                    {hasTranslation(`${prefix}_strategy_title`) && (
                        <div className="modal-section">
                            <h3 dangerouslySetInnerHTML={{ __html: sanitizeHtml(t(`${prefix}_strategy_title`)) }}></h3>
                            <ul>
                                <li dangerouslySetInnerHTML={{ __html: sanitizeHtml(t(`${prefix}_strategy_1`)) }}></li>
                                <li dangerouslySetInnerHTML={{ __html: sanitizeHtml(t(`${prefix}_strategy_2`)) }}></li>
                                {hasTranslation(`${prefix}_strategy_3`) && (
                                    <li dangerouslySetInnerHTML={{ __html: sanitizeHtml(t(`${prefix}_strategy_3`)) }}></li>
                                )}
                                {hasTranslation(`${prefix}_strategy_4`) && (
                                    <li dangerouslySetInnerHTML={{ __html: sanitizeHtml(t(`${prefix}_strategy_4`)) }}></li>
                                )}
                            </ul>
                        </div>
                    )}

                    {hasTranslation(`${prefix}_results_title`) && (
                        <div className="modal-section">
                            <h3 dangerouslySetInnerHTML={{ __html: sanitizeHtml(t(`${prefix}_results_title`)) }}></h3>
                            <ul>
                                <li dangerouslySetInnerHTML={{ __html: sanitizeHtml(t(`${prefix}_result_1`)) }}></li>
                                <li dangerouslySetInnerHTML={{ __html: sanitizeHtml(t(`${prefix}_result_2`)) }}></li>
                                {hasTranslation(`${prefix}_result_3`) && (
                                    <li dangerouslySetInnerHTML={{ __html: sanitizeHtml(t(`${prefix}_result_3`)) }}></li>
                                )}
                            </ul>
                        </div>
                    )}
                </div>

                <div className="modal-footer">
                    <h4 dangerouslySetInnerHTML={{ __html: sanitizeHtml(t(`${prefix}_tech_title`)) }}></h4>
                    <div className="tags">
                        <span className="tag">SEO</span>
                        <span className="tag">Web Development</span>
                    </div>
                    {hasTranslation(`${prefix}_button`) && (
                        <a className="btn" dangerouslySetInnerHTML={{ __html: sanitizeHtml(t(`${prefix}_button`)) }}></a>
                    )}
                </div>
            </div>
        </div>
    );
}
