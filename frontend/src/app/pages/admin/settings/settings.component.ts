import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-settings',
    standalone: true,
    imports: [CommonModule, FormsModule],
    template: `
    <div class="page-header">
      <h2>System Settings</h2>
      <button class="btn-primary"><i class="fas fa-save"></i> Save Changes</button>
    </div>

    <div class="settings-card">
      <h3>General Configuration</h3>
      <div class="form-grid">
        <div class="form-group">
          <label>Site Title</label>
          <input type="text" class="form-control" [(ngModel)]="settings.siteTitle">
        </div>
        <div class="form-group">
          <label>Admin Email</label>
          <input type="email" class="form-control" [(ngModel)]="settings.adminEmail">
        </div>
        <div class="form-group span-2">
          <label>SEO Default Description</label>
          <textarea class="form-control" rows="3" [(ngModel)]="settings.seoDescription"></textarea>
        </div>
      </div>
    </div>

    <div class="settings-card">
        <h3>Feature Toggles</h3>
        <div class="toggle-list">
            <div class="toggle-item">
                <label class="switch">
                    <input type="checkbox" [(ngModel)]="settings.maintenanceMode">
                    <span class="slider round"></span>
                </label>
                <div class="toggle-label">
                    <span class="title">Maintenance Mode</span>
                    <span class="desc">Disable public access to the site</span>
                </div>
            </div>
        </div>
    </div>
  `,
    styles: [`
    .page-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
    h2 { font-size: 1.5rem; font-weight: 700; color: #0f172a; margin: 0; }
    
    .btn-primary {
      background-color: #3b82f6;
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .settings-card {
        background: white;
        border-radius: 8px;
        padding: 2rem;
        margin-bottom: 2rem;
        box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06);
    }

    h3 {
        margin-top: 0;
        margin-bottom: 1.5rem;
        font-size: 1.125rem;
        color: #1e293b;
        font-weight: 600;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 1rem;
    }

    .form-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
    }
    
    .form-group { margin-bottom: 0; }
    .span-2 { grid-column: span 2; }

    label {
        display: block;
        margin-bottom: 0.5rem;
        font-size: 0.875rem;
        font-weight: 500;
        color: #475569;
    }

    .form-control {
        width: 100%;
        padding: 0.625rem;
        border: 1px solid #cbd5e1;
        border-radius: 6px;
        font-size: 0.875rem;
        color: #1e293b;
        transition: border-color 0.2s;
    }
    
    .form-control:focus {
        outline: none;
        border-color: #3b82f6;
        box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
    }

    /* Toggle Switch */
    .toggle-list { display: flex; flex-direction: column; gap: 1rem; }
    .toggle-item { display: flex; align-items: start; gap: 1rem; }
    .switch { position: relative; display: inline-block; width: 44px; height: 24px; flex-shrink: 0; }
    .switch input { opacity: 0; width: 0; height: 0; }
    .slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #cbd5e1; transition: .4s; border-radius: 24px; }
    .slider:before { position: absolute; content: ""; height: 18px; width: 18px; left: 3px; bottom: 3px; background-color: white; transition: .4s; border-radius: 50%; }
    input:checked + .slider { background-color: #3b82f6; }
    input:checked + .slider:before { transform: translateX(20px); }
    
    .toggle-label { display: flex; flex-direction: column; }
    .toggle-label .title { font-weight: 600; color: #1e293b; font-size: 0.875rem; }
    .toggle-label .desc { color: #64748b; font-size: 0.875rem; }
  `]
})
export class SettingsComponent {
    settings = {
        siteTitle: 'José Gaspard Portfolio',
        adminEmail: 'hola@josegaspard.dev',
        seoDescription: 'Experto SEO México - Desarrollo Web',
        maintenanceMode: false
    };
}
