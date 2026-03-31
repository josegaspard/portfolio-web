'use client';

import React, { useState } from 'react';
import './users.css';

interface User {
    id: number;
    username: string;
    email: string;
    role: 'admin' | 'editor' | 'viewer';
    status: 'active' | 'inactive';
    lastLogin: string;
}

export default function UsersPage() {
    const [users] = useState<User[]>([
        { id: 1, username: 'admin', email: 'admin@josegaspard.dev', role: 'admin', status: 'active', lastLogin: 'Hoy, 21:20' },
        { id: 2, username: 'editor1', email: 'editor@josegaspard.dev', role: 'editor', status: 'active', lastLogin: 'Ayer, 15:30' },
        { id: 3, username: 'viewer1', email: 'viewer@josegaspard.dev', role: 'viewer', status: 'inactive', lastLogin: 'Hace 3 días' }
    ]);

    const getRoleBadge = (role: string) => {
        const colors = {
            admin: '#ef4444',
            editor: '#3b82f6',
            viewer: '#64748b'
        };
        return colors[role as keyof typeof colors] || '#64748b';
    };

    return (
        <div className="users-page">
            <div className="page-header">
                <div>
                    <h2><i className="fas fa-users-cog"></i> Gestión de Usuarios</h2>
                    <p>Administra usuarios, roles y permisos</p>
                </div>
                <button className="btn-add-user">
                    <i className="fas fa-user-plus"></i> Nuevo Usuario
                </button>
            </div>

            <div className="users-stats">
                <div className="stat-box">
                    <i className="fas fa-users"></i>
                    <div>
                        <span className="stat-number">{users.length}</span>
                        <span className="stat-label">Total Usuarios</span>
                    </div>
                </div>
                <div className="stat-box">
                    <i className="fas fa-user-check"></i>
                    <div>
                        <span className="stat-number">{users.filter(u => u.status === 'active').length}</span>
                        <span className="stat-label">Activos</span>
                    </div>
                </div>
                <div className="stat-box">
                    <i className="fas fa-user-shield"></i>
                    <div>
                        <span className="stat-number">{users.filter(u => u.role === 'admin').length}</span>
                        <span className="stat-label">Administradores</span>
                    </div>
                </div>
            </div>

            <div className="users-table-container">
                <table className="users-table">
                    <thead>
                        <tr>
                            <th>Usuario</th>
                            <th>Email</th>
                            <th>Rol</th>
                            <th>Estado</th>
                            <th>Último Login</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>
                                    <div className="user-cell">
                                        <div className="user-avatar">
                                            {user.username.charAt(0).toUpperCase()}
                                        </div>
                                        <span className="user-name">{user.username}</span>
                                    </div>
                                </td>
                                <td>{user.email}</td>
                                <td>
                                    <span className="role-badge" style={{ background: `${getRoleBadge(user.role)}15`, color: getRoleBadge(user.role) }}>
                                        {user.role}
                                    </span>
                                </td>
                                <td>
                                    <span className={`status-badge ${user.status}`}>
                                        {user.status === 'active' ? 'Activo' : 'Inactivo'}
                                    </span>
                                </td>
                                <td className="last-login">{user.lastLogin}</td>
                                <td>
                                    <div className="action-buttons">
                                        <button className="btn-icon-action" title="Editar">
                                            <i className="fas fa-edit"></i>
                                        </button>
                                        <button className="btn-icon-action" title="Eliminar">
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
