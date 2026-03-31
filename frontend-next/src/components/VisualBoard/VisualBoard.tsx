'use client';

import React from 'react';
import './VisualBoard.css';

interface BoardElement {
    icon: string;
    label: string;
    value: string;
    top: string;
    left: string;
}

const boardElements: BoardElement[] = [
    { icon: 'fas fa-chart-line', label: 'Organic Traffic', value: '+300%', top: '15%', left: '8%' },
    { icon: 'fab fa-angular', label: 'Frontend Architecture', value: 'Signals Ready', top: '12%', left: '55%' },
    { icon: 'fas fa-shield-alt', label: 'Technical SEO', value: 'Audit Passed', top: '45%', left: '15%' },
    { icon: 'fas fa-link', label: 'Authority', value: 'High DA Links', top: '42%', left: '65%' },
    { icon: 'fab fa-node-js', label: 'Backend Speed', value: '100ms Response', top: '68%', left: '35%' },
    { icon: 'fas fa-rocket', label: 'Core Web Vitals', value: '98/100', top: '28%', left: '30%' },
    { icon: 'fas fa-trophy', label: 'Top Rankings', value: '#1 Position', top: '60%', left: '70%' },
    { icon: 'fas fa-bolt', label: 'Performance', value: 'Optimized', top: '75%', left: '10%' },
    { icon: 'fab fa-google', label: 'Search Console', value: 'Verified', top: '30%', left: '78%' },
    { icon: 'fas fa-code', label: 'Clean Code', value: 'A+ Quality', top: '55%', left: '50%' }
];

export default function VisualBoard() {
    return (
        <section className="section py-xxl">
            <div className="container">
                <div className="visual-board glass-premium">
                    <div className="board-header">
                        <h3 className="gradient-text-premium">Engineered Growth Board</h3>
                        <p>Interactive ecosystem of results and technologies</p>
                    </div>
                    <div className="board-container">
                        {boardElements.map((el, i) => (
                            <div
                                key={i}
                                className="board-item glass-item"
                                style={{ top: el.top, left: el.left }}
                            >
                                <i className={el.icon}></i>
                                <div className="item-content">
                                    <span className="label">{el.label}</span>
                                    <span className="value">{el.value}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
