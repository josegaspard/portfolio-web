import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, FormsModule],
    template: `
    <div class="login-container">
        <!-- Background Elements -->
        <div class="login-bg-gradient"></div>
        <div class="login-particles"></div>
        
        <!-- Login Card -->
        <div class="login-card glass-premium">
            <!-- Logo & Title -->
            <div class="login-header">
                <div class="login-logo">
                    <div class="logo-icon">
                        <i class="fas fa-bolt"></i>
                    </div>
                    <span class="logo-text">JG.</span>
                </div>
                <h1 class="login-title">Bienvenido de Vuelta</h1>
                <p class="login-subtitle">Accede a tu panel de administración</p>
            </div>

            <!-- Login Form -->
            <form class="login-form" (ngSubmit)="handleLogin()">
                <!-- Email Field -->
                <div class="form-group">
                    <label for="email" class="form-label">
                        <i class="fas fa-envelope"></i>
                        Correo Electrónico
                    </label>
                    <input
                        type="email"
                        id="email"
                        [(ngModel)]="email"
                        name="email"
                        class="form-input"
                        placeholder="tu@email.com"
                        required
                        autocomplete="email"
                    />
                </div>

                <!-- Password Field -->
                <div class="form-group">
                    <label for="password" class="form-label">
                        <i class="fas fa-lock"></i>
                        Contraseña
                    </label>
                    <div class="password-wrapper">
                        <input
                            [type]="showPassword() ? 'text' : 'password'"
                            id="password"
                            [(ngModel)]="password"
                            name="password"
                            class="form-input"
                            placeholder="••••••••"
                            required
                            autocomplete="current-password"
                        />
                        <button
                            type="button"
                            class="password-toggle"
                            (click)="togglePassword()"
                        >
                            <i [class]="showPassword() ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                        </button>
                    </div>
                </div>

                <!-- Remember Me & Forgot Password -->
                <div class="form-options">
                    <label class="checkbox-label">
                        <input type="checkbox" [(ngModel)]="rememberMe" name="rememberMe" />
                        <span class="checkbox-custom"></span>
                        <span class="checkbox-text">Recordarme</span>
                    </label>
                    <a href="/forgot-password" class="forgot-link">¿Olvidaste tu contraseña?</a>
                </div>

                <!-- Error Message -->
                <div class="error-message" *ngIf="errorMessage()">
                    <i class="fas fa-exclamation-circle"></i>
                    {{ errorMessage() }}
                </div>

                <!-- Submit Button -->
                <button type="submit" class="btn-login" [disabled]="isLoading()">
                    <span *ngIf="!isLoading()">
                        <i class="fas fa-sign-in-alt"></i>
                        Iniciar Sesión
                    </span>
                    <span *ngIf="isLoading()" class="loading-spinner">
                        <i class="fas fa-spinner fa-spin"></i>
                        Iniciando sesión...
                    </span>
                </button>
            </form>

            <!-- Divider -->
            <div class="divider">
                <span>O continúa con</span>
            </div>

            <!-- Social Login -->
            <div class="social-login">
                <button class="social-btn google">
                    <i class="fab fa-google"></i>
                    Google
                </button>
                <button class="social-btn github">
                    <i class="fab fa-github"></i>
                    GitHub
                </button>
            </div>

            <!-- Footer -->
            <div class="login-footer">
                <p>¿No tienes una cuenta? <a href="/register">Regístrate aquí</a></p>
            </div>
        </div>

        <!-- Info Panel -->
        <div class="info-panel">
            <div class="info-content">
                <h2>Panel de Administración</h2>
                <ul class="features-list">
                    <li>
                        <i class="fas fa-check-circle"></i>
                        Gestión completa de contenido
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i>
                        Analytics en tiempo real
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i>
                        SEO optimization tools
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i>
                        Editor WYSIWYG avanzado
                    </li>
                </ul>
            </div>
        </div>
    </div>
  `,
    styleUrls: ['./login.css']
})
export class LoginComponent {
    private router = inject(Router);

    email = '';
    password = '';
    rememberMe = false;
    showPassword = signal(false);
    isLoading = signal(false);
    errorMessage = signal('');

    togglePassword() {
        this.showPassword.set(!this.showPassword());
    }

    async handleLogin() {
        this.isLoading.set(true);
        this.errorMessage.set('');

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Validate credentials (replace with actual API call)
            if (this.email && this.password) {
                // Success - redirect to dashboard
                this.router.navigate(['/dashboard']);
            } else {
                this.errorMessage.set('Por favor completa todos los campos');
            }
        } catch (error) {
            this.errorMessage.set('Error al iniciar sesión. Por favor intenta de nuevo.');
        } finally {
            this.isLoading.set(false);
        }
    }
}
