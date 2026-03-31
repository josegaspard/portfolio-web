'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Pricing() {
    const { t } = useLanguage();

    const plans = [
        {
            name: t('pricing_plan_1_name'),
            price: t('pricing_plan_1_price'),
            desc: t('pricing_plan_1_desc'),
            features: [
                t('pricing_plan_1_feature_1'),
                t('pricing_plan_1_feature_2'),
                t('pricing_plan_1_feature_3'),
                t('pricing_plan_1_feature_4')
            ],
            popular: false
        },
        {
            name: t('pricing_plan_2_name'),
            price: t('pricing_plan_2_price'),
            desc: t('pricing_plan_2_desc'),
            features: [
                t('pricing_plan_2_feature_1'),
                t('pricing_plan_2_feature_2'),
                t('pricing_plan_2_feature_3'),
                t('pricing_plan_2_feature_4')
            ],
            popular: true
        },
        {
            name: t('pricing_plan_3_name'),
            price: t('pricing_plan_3_price'),
            desc: t('pricing_plan_3_desc'),
            features: [
                t('pricing_plan_3_feature_1'),
                t('pricing_plan_3_feature_2'),
                t('pricing_plan_3_feature_3'),
                t('pricing_plan_3_feature_4')
            ],
            popular: false
        }
    ];

    return (
        <section className="section py-xxl" id="pricing">
            <div className="container">
                <div className="section-header text-center mb-20">
                    <h2 className="section-title-2line">
                        <span className="title-line-white">{t('pricing_title')}</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-width-700 mx-auto">{t('pricing_subtitle')}</p>
                </div>

                <div className="pricing-grid">
                    {plans.map((plan, i) => (
                        <div key={i} className={`pricing-card glass-premium ${plan.popular ? 'popular' : ''}`}>
                            {plan.popular && <div className="popular-badge">{t('pricing_popular')}</div>}
                            <h3 className="plan-name">{plan.name}</h3>
                            <div className="plan-price">
                                <span className="amount">{plan.price}</span>
                            </div>
                            <p className="plan-desc">{plan.desc}</p>
                            <ul className="plan-features">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <i className="fas fa-check-circle"></i> {feature}
                                    </li>
                                ))}
                            </ul>
                            <a href="#contact" className={`btn btn-block ${plan.popular ? 'btn-primary' : 'btn-outline'}`}>
                                {t('pricing_cta')}
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .pricing-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 3rem;
                }
                .pricing-card {
                    padding: 3rem 2rem;
                    border-radius: 30px;
                    text-align: center;
                    transition: all 0.4s ease;
                    position: relative;
                    background: rgba(255, 255, 255, 0.02);
                    backdrop-filter: blur(15px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                }
                .pricing-card.popular {
                    border-color: #6366f1;
                    transform: scale(1.05);
                    z-index: 2;
                    background: rgba(99, 102, 241, 0.05);
                }
                .popular-badge {
                    position: absolute;
                    top: -15px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: #6366f1;
                    padding: 0.5rem 1.5rem;
                    border-radius: 50px;
                    font-size: 0.8rem;
                    font-weight: 800;
                    color: white;
                    text-transform: uppercase;
                }
                .plan-name {
                    font-size: 1.5rem;
                    margin-bottom: 1rem;
                    color: white;
                    font-weight: 800;
                }
                .plan-price {
                    margin-bottom: 1rem;
                }
                .amount {
                    font-size: 3rem;
                    font-weight: 900;
                    color: white;
                }
                .plan-desc {
                    color: rgba(255, 255, 255, 0.6);
                    margin-bottom: 2rem;
                }
                .plan-features {
                    list-style: none;
                    padding: 0;
                    margin-bottom: 3rem;
                    text-align: left;
                }
                .plan-features li {
                    margin-bottom: 1.25rem;
                    color: rgba(255, 255, 255, 0.7);
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    font-size: 1rem;
                }
                .plan-features i {
                    color: #6366f1;
                    font-size: 1.1rem;
                }
                .btn-block {
                    display: block;
                    width: 100%;
                }
            `}</style>
        </section>
    );
}
