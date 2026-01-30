import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-admin-layout',
    standalone: true,
    imports: [CommonModule, RouterModule],
    template: `
    <div class="admin-shell">
      <!-- Sidebar -->
      <aside class="sidebar">
        <div class="sidebar-header">
          <span class="logo-text">JG Admin</span>
        </div>
        
        <nav class="sidebar-nav">
          <div class="nav-group">
            <span class="nav-label">Main</span>
            <a routerLink="/admin/dashboard" routerLinkActive="active" class="nav-item">
              <i class="fas fa-home"></i> <span>Dashboard</span>
            </a>
          </div>

          <div class="nav-group">
            <span class="nav-label">Content</span>
            <a routerLink="/admin/content" routerLinkActive="active" class="nav-item">
              <i class="fas fa-file-alt"></i> <span>Pages & Posts</span>
            </a>
            <a routerLink="/admin/media" routerLinkActive="active" class="nav-item">
              <i class="fas fa-images"></i> <span>Media Library</span>
            </a>
          </div>

          <div class="nav-group">
            <span class="nav-label">System</span>
            <a routerLink="/admin/settings" routerLinkActive="active" class="nav-item">
              <i class="fas fa-cog"></i> <span>Settings</span>
            </a>
          </div>
        </nav>

        <div class="sidebar-footer">
          <div class="user-profile">
            <div class="avatar"><i class="fas fa-user"></i></div>
            <div class="user-info">
              <span class="name">Admin User</span>
              <span class="role">Super Admin</span>
            </div>
          </div>
          <button (click)="logout()" class="btn-logout" title="Logout">
            <i class="fas fa-sign-out-alt"></i>
          </button>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="main-area">
        <header class="topbar">
          <div class="breadcrumbs">
            <span class="crumb">Admin</span>
            <span class="separator">/</span>
            <span class="crumb active">Dashboard</span>
          </div>
          <div class="actions">
            <button class="btn-icon"><i class="fas fa-bell"></i></button>
            <a href="/" target="_blank" class="btn-view-site">
              <i class="fas fa-external-link-alt"></i> View Site
            </a>
          </div>
        </header>

        <div class="scrollable-content">
          <router-outlet></router-outlet>
        </div>
      </main>
    </div>
  `,
    styles: [`
    :host {
      --sidebar-width: 260px;
      --sidebar-bg: #1e293b;
      --sidebar-text: #94a3b8;
      --sidebar-text-active: #ffffff;
      --sidebar-accent: #3b82f6; /* Blue 500 */
      
      --topbar-height: 64px;
      --bg-main: #f1f5f9;
      --border-color: #e2e8f0;
    }

    .admin-shell {
      display: flex;
      height: 100vh;
      overflow: hidden;
      background-color: var(--bg-main);
      font-family: 'Inter', sans-serif;
    }

    /* Sidebar */
    .sidebar {
      width: var(--sidebar-width);
      background-color: var(--sidebar-bg);
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      border-right: 1px solid rgba(255,255,255,0.05);
    }

    .sidebar-header {
      height: var(--topbar-height);
      display: flex;
      align-items: center;
      padding: 0 1.5rem;
      border-bottom: 1px solid rgba(255,255,255,0.05);
    }

    .logo-text {
      color: white;
      font-weight: 700;
      font-size: 1.25rem;
      letter-spacing: -0.5px;
    }

    .sidebar-nav {
      flex: 1;
      padding: 1.5rem 1rem;
      overflow-y: auto;
    }

    .nav-group {
      margin-bottom: 2rem;
    }

    .nav-label {
      display: block;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #64748b;
      margin-bottom: 0.75rem;
      padding-left: 0.75rem;
      font-weight: 600;
    }

    .nav-item {
      display: flex;
      align-items: center;
      padding: 0.75rem 1rem;
      color: var(--sidebar-text);
      text-decoration: none;
      border-radius: 8px;
      margin-bottom: 0.25rem;
      transition: all 0.2s ease;
      font-weight: 500;
    }

    .nav-item i {
      width: 20px;
      margin-right: 0.75rem;
      font-size: 1.1em;
      text-align: center;
    }

    .nav-item:hover {
      background-color: rgba(255,255,255,0.05);
      color: white;
    }

    .nav-item.active {
      background-color: var(--sidebar-accent);
      color: white;
    }

    /* Sidebar Footer */
    .sidebar-footer {
      padding: 1rem;
      border-top: 1px solid rgba(255,255,255,0.05);
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: rgba(0,0,0,0.1);
    }

    .user-profile {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .avatar {
      width: 36px;
      height: 36px;
      background: #475569;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 0.9em;
    }

    .user-info {
      display: flex;
      flex-direction: column;
    }

    .name {
      color: white;
      font-size: 0.875rem;
      font-weight: 600;
    }

    .role {
      color: #94a3b8;
      font-size: 0.75rem;
    }

    .btn-logout {
      background: none;
      border: none;
      color: #ef4444;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 4px;
      transition: background 0.2s;
    }

    .btn-logout:hover {
      background: rgba(239, 68, 68, 0.1);
    }

    /* Main Area */
    .main-area {
      flex: 1;
      display: flex;
      flex-direction: column;
      height: 100vh;
      overflow: hidden;
    }

    .topbar {
      height: var(--topbar-height);
      background: white;
      border-bottom: 1px solid var(--border-color);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 2rem;
      flex-shrink: 0;
    }

    .breadcrumbs {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.875rem;
      color: #64748b;
    }

    .crumb.active {
      color: #0f172a;
      font-weight: 600;
    }

    .actions {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .btn-icon {
      background: none;
      border: none;
      color: #64748b;
      cursor: pointer;
      font-size: 1.1em;
    }

    .btn-view-site {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      font-size: 0.875rem;
      color: var(--sidebar-accent);
      background: rgba(59, 130, 246, 0.05); /* Blue tint */
      padding: 0.5rem 1rem;
      border-radius: 6px;
      font-weight: 600;
      border: 1px solid rgba(59, 130, 246, 0.1);
      transition: all 0.2s;
    }

    .btn-view-site:hover {
      background: rgba(59, 130, 246, 0.1);
    }

    .scrollable-content {
      flex: 1;
      overflow-y: auto;
      padding: 2rem;
    }
  `]
})
export class AdminLayoutComponent {
    constructor(private authService: AuthService, private router: Router) { }

    logout() {
        this.authService.logout();
        this.router.navigate(['/admin/login']);
    }
}
