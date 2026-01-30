import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardService } from '../../services/dashboard.service';
import { ConfigService } from '../../services/config.service';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule, RouterModule],
    template: `
        <!-- Main Content (Now inside AdminLayout) -->
        <div class="dashboard-content">
            <!-- Header -->
            <header class="dashboard-header">
                <div class="header-left">
                    <h1>Dashboard Overview</h1>
                    <p>Bienvenido de vuelta, José</p>
                </div>
                <div class="header-right">
                    <a routerLink="/admin/blog/new" class="btn btn-primary">
                        <i class="fas fa-plus"></i>
                        Nuevo Contenido
                    </a>
                </div>
            </header>

            <!-- Stats Grid -->
            <div class="stats-grid">
                <div class="stat-card glass-premium">
                    <div class="stat-icon visitors">
                        <i class="fas fa-users"></i>
                    </div>
                    <div class="stat-content">
                        <span class="stat-label">Visitantes Totales</span>
                        <span class="stat-value">{{ stats().totalVisitors | number }}</span>
                        <span class="stat-change positive">
                            <i class="fas fa-arrow-up"></i>
                            +12.5%
                        </span>
                    </div>
                </div>

                <div class="stat-card glass-premium">
                    <div class="stat-icon traffic">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <div class="stat-content">
                        <span class="stat-label">Tráfico Orgánico</span>
                        <span class="stat-value">{{ stats().organicTraffic | number }}</span>
                        <span class="stat-change positive">
                            <i class="fas fa-arrow-up"></i>
                            +24.3%
                        </span>
                    </div>
                </div>

                <div class="stat-card glass-premium">
                    <div class="stat-icon posts">
                        <i class="fas fa-file-alt"></i>
                    </div>
                    <div class="stat-content">
                        <span class="stat-label">Posts Publicados</span>
                        <span class="stat-value">{{ stats().totalPosts }}</span>
                        <span class="stat-change neutral">
                            <i class="fas fa-minus"></i>
                            0%
                        </span>
                    </div>
                </div>

                <div class="stat-card glass-premium">
                    <div class="stat-icon performance">
                        <i class="fas fa-rocket"></i>
                    </div>
                    <div class="stat-content">
                        <span class="stat-label">Performance Score</span>
                        <span class="stat-value">{{ stats().performanceScore || 'N/A' }}</span>
                        <span class="stat-change positive">
                            <i class="fas fa-arrow-up"></i>
                            +5 pts
                        </span>
                    </div>
                </div>
            </div>

            <!-- Charts Row -->
            <div class="charts-row">
                <!-- Traffic Chart -->
                <div class="chart-card glass-premium">
                    <div class="chart-header">
                        <h3>Tráfico de los Últimos 30 Días</h3>
                        <select class="chart-filter">
                            <option>Últimos 7 días</option>
                            <option selected>Últimos 30 días</option>
                        </select>
                    </div>
                    <div class="chart-placeholder">
                        <i class="fas fa-chart-area"></i>
                        <p>Gráfico de tráfico (integrar Chart.js)</p>
                    </div>
                </div>

                <!-- Top Pages -->
                <div class="chart-card glass-premium">
                    <div class="chart-header">
                        <h3>Páginas Más Visitadas</h3>
                    </div>
                    <div class="top-pages-list">
                        <!-- TODO: Bind to real top pages -->
                        <div class="empty-state">No hay datos suficientes aún.</div>
                    </div>
                </div>
            </div>

            <!-- SEO & Performance Row -->
            <div class="tools-row">
                <!-- SEO Health -->
                <div class="tool-card glass-premium">
                    <div class="tool-header">
                        <h3>SEO Health</h3>
                        <span class="health-score excellent">{{ stats().seoHealth }}/100</span>
                    </div>
                    <div class="health-items">
                        <div class="health-item">
                            <div class="health-label">
                                <i class="fas fa-check-circle success"></i>
                                Meta Tags
                            </div>
                            <span class="health-status">Analizando...</span>
                        </div>
                    </div>
                </div>

                <!-- Quick Actions -->
                <div class="tool-card glass-premium">
                    <div class="tool-header">
                        <h3>Acciones Rápidas</h3>
                    </div>
                    <div class="quick-actions">
                        <a routerLink="/admin/blog/new" class="action-btn">
                            <i class="fas fa-plus"></i>
                            Nuevo Post
                        </a>
                        <button class="action-btn">
                            <i class="fas fa-sync"></i>
                            Regenerar Sitemap
                        </button>
                    </div>
                </div>
            </div>

            <!-- Recent Activity -->
            <div class="activity-section glass-premium">
                <h3>Actividad Reciente</h3>
                <div class="activity-list">
                    <div class="activity-item" *ngFor="let activity of recentActivity()">
                        <div class="activity-icon" [class]="activity.type">
                            <i [class]="activity.icon"></i>
                        </div>
                        <div class="activity-content">
                            <p class="activity-text">{{ activity.text }}</p>
                            <span class="activity-time">{{ activity.timestamp | date:'short' }}</span>
                        </div>
                    </div>
                    <div *ngIf="recentActivity().length === 0" class="empty-activity">
                        No hay actividad reciente.
                    </div>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit {
    private dashboardService = inject(DashboardService);
    // Keep ContentManager for other ephemeral actions if needed, or move to DashboardService fully
    public configService = inject(ConfigService);

    // Signals linked to Service
    stats = this.dashboardService.overview;
    recentActivity = this.dashboardService.recentActivity;

    // Additional UI specific computed values
    topPages = computed(() => []); // TODO: Add top pages to DashboardService or ChartsService

    ngOnInit() {
        this.dashboardService.refreshData();
    }
}
