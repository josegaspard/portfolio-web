'use client';

import React, { useState, useEffect } from 'react';
import { logger } from '@/utils/logger';
import './analytics.css';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export default function AnalyticsPage() {
    const [stats, setStats] = useState({
        pageViews: 0,
        uniqueVisitors: 0,
        avgSessionDuration: '0:00',
        bounceRate: 0
    });
    const [topPages, setTopPages] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadStats();
    }, []);

    const loadStats = async () => {
        try {
            const token = localStorage.getItem('access_token');
            const res = await fetch(`${API_URL}/analytics/stats`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (res.ok) {
                const data = await res.json();
                setStats({
                    pageViews: data.totalViews || 0,
                    uniqueVisitors: data.uniqueVisitors || 0,
                    avgSessionDuration: data.avgSessionDuration || '0:00',
                    bounceRate: data.bounceRate || 0
                });

                // Formatear top pages
                const formatted = data.topPages?.map((page: any, index: number) => ({
                    path: page.url,
                    views: parseInt(page.views),
                    percentage: data.totalViews > 0 ? Math.round((parseInt(page.views) / data.totalViews) * 100) : 0
                })) || [];

                setTopPages(formatted);
            }
        } catch (error) {
            logger.error('Failed to load analytics', error, 'AnalyticsPage.loadStats');
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div className="loading">Cargando estadísticas...</div>;

    return (
        <div className="analytics-page">
            <div className="page-header">
                <h2><i className="fas fa-chart-bar"></i> Analytics Profundo</h2>
                <p>Estadísticas detalladas de tu sitio web</p>
            </div>

            {/* Main Stats */}
            <div className="analytics-stats">
                <div className="stat-card-analytics">
                    <div className="stat-icon" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>
                        <i className="fas fa-eye"></i>
                    </div>
                    <div className="stat-details">
                        <span className="stat-value">{stats.pageViews.toLocaleString()}</span>
                        <span className="stat-label">Page Views</span>
                        <span className="stat-change positive">+12.5%</span>
                    </div>
                </div>

                <div className="stat-card-analytics">
                    <div className="stat-icon" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                        <i className="fas fa-users"></i>
                    </div>
                    <div className="stat-details">
                        <span className="stat-value">{stats.uniqueVisitors.toLocaleString()}</span>
                        <span className="stat-label">Unique Visitors</span>
                        <span className="stat-change positive">+8.3%</span>
                    </div>
                </div>

                <div className="stat-card-analytics">
                    <div className="stat-icon" style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6' }}>
                        <i className="fas fa-clock"></i>
                    </div>
                    <div className="stat-details">
                        <span className="stat-value">{stats.avgSessionDuration}</span>
                        <span className="stat-label">Avg. Session Duration</span>
                        <span className="stat-change positive">+5.2%</span>
                    </div>
                </div>

                <div className="stat-card-analytics">
                    <div className="stat-icon" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' }}>
                        <i className="fas fa-chart-line"></i>
                    </div>
                    <div className="stat-details">
                        <span className="stat-value">{stats.bounceRate}%</span>
                        <span className="stat-label">Bounce Rate</span>
                        <span className="stat-change negative">-3.1%</span>
                    </div>
                </div>
            </div>

            {/* Top Pages */}
            <div className="analytics-section">
                <h3>Páginas Más Visitadas</h3>
                <div className="top-pages">
                    {topPages.map((page, index) => (
                        <div key={index} className="page-item">
                            <div className="page-rank">#{index + 1}</div>
                            <div className="page-info">
                                <span className="page-path">{page.path}</span>
                                <div className="page-bar">
                                    <div className="page-bar-fill" style={{ width: `${page.percentage}%` }}></div>
                                </div>
                            </div>
                            <div className="page-stats">
                                <span className="page-views">{page.views.toLocaleString()}</span>
                                <span className="page-percentage">{page.percentage}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chart Placeholder */}
            <div className="analytics-section">
                <h3>Tráfico en el Tiempo</h3>
                <div className="chart-placeholder">
                    <i className="fas fa-chart-area"></i>
                    <p>Gráfico de tráfico próximamente</p>
                </div>
            </div>
        </div>
    );
}
