'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { adminService, DashboardOverview, ActivityLog } from '@/services/adminService';
import './dashboard.css';

export default function Dashboard() {
    const [stats, setStats] = useState<DashboardOverview | null>(null);
    const [activity, setActivity] = useState<ActivityLog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            setLoading(true);
            const data = await adminService.getStats();
            setStats(data.overview);
            setActivity(data.recentActivity);
            setLoading(false);
        }
        loadData();
    }, []);

    if (loading) return <div className="loading-dashboard">Loading dashboard...</div>;

    const statCards = [
        { label: 'Total Visitors', value: stats?.totalVisitors, icon: 'fas fa-users', color: '#3b82f6' },
        { label: 'Organic Traffic', value: `${stats?.organicTraffic}%`, icon: 'fas fa-chart-line', color: '#10b981' },
        { label: 'Total Posts', value: stats?.totalPosts, icon: 'fas fa-file-alt', color: '#8b5cf6' },
        { label: 'SEO Health', value: `${stats?.seoHealth}%`, icon: 'fas fa-heartbeat', color: '#f59e0b' }
    ];

    const tools = [
        { name: 'Base de Datos', icon: 'fas fa-database', href: '/admin/database', color: '#3b82f6', description: 'Gestión completa de la base de datos' },
        { name: 'Sistema de Mailing', icon: 'fas fa-envelope', href: '/admin/mailing', color: '#10b981', description: 'Envío de emails y newsletters' },
        { name: 'Notificaciones', icon: 'fas fa-bell', href: '/admin/notifications', color: '#f59e0b', description: 'Centro de notificaciones' },
        { name: 'Analytics Profundo', icon: 'fas fa-chart-bar', href: '/admin/analytics', color: '#8b5cf6', description: 'Estadísticas detalladas' },
        { name: 'Mensajes de Contacto', icon: 'fas fa-inbox', href: '/admin/messages', color: '#ec4899', description: 'Ver y responder mensajes' },
        { name: 'Gestión de Contenido', icon: 'fas fa-file-alt', href: '/admin/content', color: '#6366f1', description: 'Posts, páginas y portfolio' },
        { name: 'Media Library', icon: 'fas fa-images', href: '/admin/media', color: '#14b8a6', description: 'Gestión de imágenes y archivos' },
        { name: 'Usuarios', icon: 'fas fa-users-cog', href: '/admin/users', color: '#64748b', description: 'Gestión de usuarios y roles' },
        { name: 'Configuración', icon: 'fas fa-cog', href: '/admin/settings', color: '#475569', description: 'Configuración del sitio' },
    ];

    return (
        <div className="dashboard-page">
            <div className="page-header">
                <h2>Dashboard Overview</h2>
                <p>Welcome back, here's what's happening with your site.</p>
            </div>

            {/* Stats Cards */}
            <div className="stats-grid">
                {statCards.map((card, i) => (
                    <div key={i} className="stat-card">
                        <div className="stat-icon" style={{ backgroundColor: `${card.color}15`, color: card.color }}>
                            <i className={card.icon}></i>
                        </div>
                        <div className="stat-info">
                            <span className="stat-label">{card.label}</span>
                            <span className="stat-value">{card.value}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Tools Grid */}
            <div className="tools-section">
                <h3>Herramientas Administrativas</h3>
                <div className="tools-grid">
                    {tools.map((tool, i) => (
                        <Link key={i} href={tool.href} className="tool-card">
                            <div className="tool-icon" style={{ backgroundColor: `${tool.color}15`, color: tool.color }}>
                                <i className={tool.icon}></i>
                            </div>
                            <div className="tool-info">
                                <h4>{tool.name}</h4>
                                <p>{tool.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Dashboard Grid */}
            <div className="dashboard-grid">
                <div className="content-card main-stats">
                    <h3>Performance Trends</h3>
                    <div className="chart-placeholder">
                        <div className="performance-meter">
                            <div className="meter-value" style={{ width: `${stats?.performanceScore}%` }}></div>
                        </div>
                        <span className="meter-label">Lighthouse Performance: {stats?.performanceScore}/100</span>
                    </div>
                </div>

                <div className="content-card recent-activity">
                    <h3>Recent Activity</h3>
                    <div className="activity-list">
                        {activity.map((item, i) => (
                            <div key={i} className="activity-item">
                                <div className={`activity-icon ${item.type}`}>
                                    <i className={item.icon}></i>
                                </div>
                                <div className="activity-content">
                                    <p className="activity-text">{item.text}</p>
                                    <span className="activity-time">{new Date(item.timestamp).toLocaleString()}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
