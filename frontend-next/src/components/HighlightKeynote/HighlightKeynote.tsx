import React from 'react';
import Image from 'next/image';
import './HighlightKeynote.css';

export default function HighlightKeynote() {
    return (
        <section className="highlight-keynote-section">
            <div className="container">
                <div className="keynote-card">

                    <div className="keynote-header">
                        <div className="keynote-brand">
                            {/* Simple WB Shield representation + Mic */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                                <line x1="12" y1="19" x2="12" y2="22"></line>
                            </svg>
                            <span>Warner Play Latino</span>
                        </div>

                        <div className="keynote-date">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                            <span>February 2026</span>
                        </div>
                    </div>

                    <h2 className="keynote-title">
                        Keynote Speaker: IA y el Futuro del SEO (GEO) en Warner Play Latino
                    </h2>

                    <div className="keynote-content">
                        <div className="keynote-image-wrapper">
                            <Image
                                src="/img/keynote_warner.png"
                                alt="Warner Play Latino Corporate Keynote - AI & SEO"
                                fill
                                className="keynote-image"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>

                        <div className="keynote-details">
                            <p className="keynote-description">
                                I led a keynote for the <strong>Warner Play Latino</strong> strategic team on the transition from traditional SEO to <strong>GEO (Generative Engine Optimization)</strong>. I showcased how to dominate geek culture and eSports traffic through authority architecture and AI agent data processing for 2026.
                            </p>

                            <button className="keynote-btn" onClick={() => window.location.href = '#view-more'}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                                View more details
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
