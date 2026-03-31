'use client';

import React from 'react';

interface MarqueeItem {
    icon: string;
    label: string;
}

interface MarqueeProps {
    items: MarqueeItem[];
    speed?: number;
}

export default function Marquee({ items, speed = 20 }: MarqueeProps) {
    if (!items || items.length === 0) return null;

    // Duplicate items for seamless loop
    const displayItems = [...items, ...items, ...items];

    return (
        <div className="marquee-container">
            <div className="marquee-content" style={{ animationDuration: `${speed}s` }}>
                {displayItems.map((item, index) => (
                    <div className="marquee-item" key={index}>
                        <i className={item.icon}></i>
                        <span>{item.label}</span>
                    </div>
                ))}
            </div>
            <style jsx>{`
                .marquee-container {
                    width: 100%;
                    max-width: 100vw;
                    overflow: hidden;
                    padding: 2.5rem 0;
                    position: relative;
                    background: rgba(255, 255, 255, 0.02);
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(10px);
                }
                .marquee-content {
                    display: flex;
                    gap: 5rem;
                    width: max-content;
                    animation: marquee linear infinite;
                }
                .marquee-item {
                    display: flex;
                    align-items: center;
                    gap: 1.25rem;
                    font-size: 1.6rem;
                    font-weight: 800;
                    color: rgba(255, 255, 255, 0.5);
                    transition: all 0.3s ease;
                    white-space: nowrap;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                .marquee-item:hover {
                    color: #a855f7;
                    transform: scale(1.05);
                    opacity: 1;
                }
                .marquee-item i {
                    font-size: 2.2rem;
                    background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-33.333%)); }
                }
            `}</style>
        </div>
    );
}
