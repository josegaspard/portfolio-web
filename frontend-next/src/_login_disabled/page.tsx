'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { logger } from '@/utils/logger';
import './login.css';

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage('');

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: email, password }),
            });

            if (res.ok) {
                const data = await res.json();
                localStorage.setItem('access_token', data.access_token);
                localStorage.setItem('user', JSON.stringify(data.user));
                router.push('/admin/dashboard');
            } else {
                const errorData = await res.json();
                setErrorMessage(errorData.message || 'Credenciales inválidas');
            }
        } catch (error) {
            logger.error('Login failed', error, 'LoginPage.handleLogin');
            setErrorMessage('Error al conectar con el servidor. Verifica que el backend esté corriendo.');
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div className="login-container">
            <div className="login-bg-gradient"></div>
            <div className="login-particles"></div>

            <div className="login-card glass-premium">
                <div className="login-header">
                    <div className="login-logo">
                        <div className="logo-icon">
                            <i className="fas fa-bolt"></i>
                        </div>
                        <span className="logo-text">JG.</span>
                    </div>
                    <h1 className="login-title">Bienvenido de Vuelta</h1>
                    <p className="login-subtitle">Accede a tu panel de administración</p>
                </div>

                <form className="login-form" onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">
                            <i className="fas fa-envelope"></i> Correo Electrónico
                        </label>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-input"
                            placeholder="admin@josegaspard.dev"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="form-label">
                            <i className="fas fa-lock"></i> Contraseña
                        </label>
                        <div className="password-wrapper">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-input"
                                placeholder="••••••••"
                                required
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                <i className={showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
                            </button>
                        </div>
                    </div>

                    {errorMessage && (
                        <div className="error-message">
                            <i className="fas fa-exclamation-circle"></i> {errorMessage}
                        </div>
                    )}

                    <button type="submit" className="btn-login" disabled={isLoading}>
                        {!isLoading ? (
                            <>
                                <i className="fas fa-sign-in-alt"></i> Iniciar Sesión
                            </>
                        ) : (
                            <>
                                <i className="fas fa-spinner fa-spin"></i> Iniciando sesión...
                            </>
                        )}
                    </button>
                </form>

                <div className="login-footer">
                    <p>¿No tienes una cuenta? <Link href="/register">Regístrate aquí</Link></p>
                </div>
            </div>

            <div className="info-panel">
                <div className="info-content">
                    <h2>Panel de Administración</h2>
                    <ul className="features-list">
                        <li><i className="fas fa-check-circle"></i> Gestión completa de contenido</li>
                        <li><i className="fas fa-check-circle"></i> Analytics en tiempo real</li>
                        <li><i className="fas fa-check-circle"></i> SEO optimization tools</li>
                        <li><i className="fas fa-check-circle"></i> Editor WYSIWYG avanzado</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
