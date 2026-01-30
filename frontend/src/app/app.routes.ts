import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { BlogArchiveComponent } from './pages/blog-archive/blog-archive';
import { BlogPostComponent } from './pages/blog-post/blog-post';
import { DynamicPageComponent } from './pages/dynamic-page/dynamic-page';
import { LoginComponent } from './pages/login/login';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { BlogEditorComponent } from './pages/blog-editor/blog-editor';
import { SettingsComponent } from './pages/settings/settings';
import { authGuard } from './guards/auth.guard'; // Assuming this exists or will be created/mocked

import { MainLayoutComponent } from './layouts/main-layout/main-layout';

export const routes: Routes = [
    // Admin Routes
    {
        path: 'admin',
        loadComponent: () => import('./layouts/admin-layout/admin-layout.component').then(m => m.AdminLayoutComponent),
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'blog/new', component: BlogEditorComponent },
            { path: 'blog/edit/:id', component: BlogEditorComponent },
            { path: 'settings', component: SettingsComponent }
        ]
    },
    { path: 'dashboard', redirectTo: 'admin/dashboard', pathMatch: 'full' },

    // Login
    { path: 'login', component: LoginComponent },

    // Public Routes (Wrapped in Main Layout)
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'blog', component: BlogArchiveComponent },
            { path: 'blog/:id', component: BlogPostComponent },

            // Dynamic Pages (MUST BE LAST IN CHILDREN)
            { path: ':slug', component: DynamicPageComponent }
        ]
    },

    { path: '**', redirectTo: '' }
];
