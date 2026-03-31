'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Testimonials() {
    const { t } = useLanguage();

    const testimonials = [
        {
            quote: t('testimonials_quote_1'),
            author: t('testimonials_author_1'),
            company: t('testimonials_company_1')
        },
        {
            quote: t('testimonials_quote_2'),
            author: t('testimonials_author_2'),
            company: t('testimonials_company_2')
        },
        {
            quote: t('testimonials_quote_3'),
            author: t('testimonials_author_3'),
            company: t('testimonials_company_3')
        }
    ];

    return (
        <section className="section py-xxl" id="testimonials">
            <div className="container">
                <div className="section-header text-center mb-20">
                    <h2 className="section-title-2line">
                        <span className="title-line-white">{t('testimonials_title')}</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-width-700 mx-auto">{t('testimonials_subtitle')}</p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial, i) => (
                        <div key={i} className="testimonial-card glass-premium">
                            <div className="quote-icon"><i className="fas fa-quote-left"></i></div>
                            <p className="testimonial-text">{testimonial.quote}</p>
                            <div className="testimonial-author">
                                <div className="author-info">
                                    <span className="author-name">{testimonial.author}</span>
                                    <span className="author-role">{testimonial.company}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .testimonials-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 3rem;
                }
                .testimonial-card {
                    padding: 3rem;
                    border-radius: 30px;
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                    transition: all 0.4s ease;
                    position: relative;
                    background: rgba(255, 255, 255, 0.02);
                    backdrop-filter: blur(15px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                }
                .testimonial-card:hover {
                    transform: translateY(-10px);
                    border-color: #6366f1;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
                }
                .quote-icon {
                    font-size: 2rem;
                    color: #6366f1;
                    opacity: 0.5;
                }
                .testimonial-text {
                    font-size: 1.15rem;
                    line-height: 1.8;
                    font-style: italic;
                    color: rgba(255, 255, 255, 0.8);
                }
                .author-name {
                    display: block;
                    font-weight: 800;
                    font-size: 1.3rem;
                    color: #ffffff;
                    margin-bottom: 0.25rem;
                }
                .author-role {
                    font-size: 0.95rem;
                    color: #a855f7;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
            `}</style>
        </section>
    );
}
