'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './admin-layout.css';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const isActive = (path: string) => pathname?.startsWith(path);

    return (
        <div className="admin-shell">
            {/* Sidebar */}
            <aside className="sidebar">
                <div className="sidebar-header">
                    <span className="logo-text">JG Admin</span>
                </div>

                <nav className="sidebar-nav">
                    <div className="nav-group">
                        <span className="nav-label">Main</span>
                        <Link href="/admin/dashboard" className={`nav-item ${isActive('/admin/dashboard') ? 'active' : ''}`}>
                            <i className="fas fa-home"></i> <span>Dashboard</span>
                        </Link>
                    </div>

                    <div className="nav-group">
                        <span className="nav-label">Content</span>
                        <Link href="/admin/content" className={`nav-item ${isActive('/admin/content') ? 'active' : ''}`}>
                            <i className="fas fa-file-alt"></i> <span>Pages & Posts</span>
                        </Link>
                        <Link href="/admin/portfolio" className={`nav-item ${isActive('/admin/portfolio') ? 'active' : ''}`}>
                            <i className="fas fa-briefcase"></i> <span>Portfolio</span>
                        </Link>
                        <Link href="/admin/media" className={`nav-item ${isActive('/admin/media') ? 'active' : ''}`}>
                            <i className="fas fa-images"></i> <span>Media Library</span>
                        </Link>
                    </div>

                    <div className="nav-group">
                        <span className="nav-label">Engagement</span>
                        <Link href="/admin/messages" className={`nav-item ${isActive('/admin/messages') ? 'active' : ''}`}>
                            <i className="fas fa-envelope"></i> <span>Messages</span>
                        </Link>
                    </div>

                    <div className="nav-group">
                        <span className="nav-label">System</span>
                        <Link href="/admin/settings" className={`nav-item ${isActive('/admin/settings') ? 'active' : ''}`}>
                            <i className="fas fa-cog"></i> <span>Settings</span>
                        </Link>
                    </div>
                </nav>

                <div className="sidebar-footer">
                    <div className="user-profile">
                        <div className="avatar"><i className="fas fa-user"></i></div>
                        <div className="user-info">
                            <span className="name">Admin User</span>
                            <span className="role">Super Admin</span>
                        </div>
                    </div>
                    <button className="btn-logout" title="Logout">
                        <i className="fas fa-sign-out-alt"></i>
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="main-area">
                <header className="topbar">
                    <div className="breadcrumbs">
                        <span className="crumb">Admin</span>
                        <span className="separator">/</span>
                        <span className="crumb active">Dashboard</span>
                    </div>
                    <div className="actions">
                        <button className="btn-icon"><i className="fas fa-bell"></i></button>
                        <a href="/" target="_blank" className="btn-view-site">
                            <i className="fas fa-external-link-alt"></i> View Site
                        </a>
                    </div>
                </header>

                <div className="scrollable-content">
                    {children}
                </div>
            </main>
        </div>
    );
}
