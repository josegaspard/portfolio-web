import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConfigService } from '../../services/config.service';

@Component({
    selector: 'app-settings',
    standalone: true,
    imports: [CommonModule, FormsModule],
    template: `
    <div class="settings-container glass-premium">
        <h2><i class="fas fa-cog"></i> Configuración Global</h2>
        
        <div class="settings-grid">
            <!-- WhatsApp Configuration -->
            <div class="settings-card">
                <h3><i class="fab fa-whatsapp"></i> Configuración de WhatsApp</h3>
                <div class="form-group">
                    <label>Número de Teléfono (con código de país)</label>
                    <input type="text" [(ngModel)]="config().whatsapp.number" placeholder="521234567890">
                    <small>Ejemplo: 5215555555555 (Sin espacios ni signos +)</small>
                </div>
                <div class="form-group">
                    <label>Mensaje Predeterminado</label>
                    <textarea [(ngModel)]="config().whatsapp.message" rows="3"></textarea>
                </div>
                <div class="form-group checkbox-group">
                    <label>
                        <input type="checkbox" [(ngModel)]="config().whatsapp.enabled">
                        Mofstrar botón flotante de WhatsApp en el sitio
                    </label>
                </div>
                <button class="btn-save" (click)="saveConfig()">
                    <i class="fas fa-save"></i> Guardar Cambios
                </button>
            </div>

            <!-- Site Metadata -->
            <div class="settings-card">
                <h3><i class="fas fa-globe"></i> Información del Sitio</h3>
                <div class="form-group">
                    <label>Título del Sitio</label>
                    <input type="text" [(ngModel)]="config().site.title">
                </div>
                <div class="form-group">
                    <label>Descripción Meta (Default)</label>
                    <textarea [(ngModel)]="config().site.description" rows="3"></textarea>
                </div>
                <div class="form-group checkbox-group">
                    <label class="danger-zone">
                        <input type="checkbox" [(ngModel)]="config().maintenanceMode">
                        Activar Modo Mantenimiento
                    </label>
                </div>
                <button class="btn-save" (click)="saveConfig()">
                    <i class="fas fa-save"></i> Guardar Cambios
                </button>
            </div>
        </div>
    </div>
    `,
    styles: [`
        .settings-container {
            padding: 2rem;
            border-radius: 12px;
            color: #fff;
        }
        h2 { margin-bottom: 2rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 1rem; }
        .settings-grid { display: grid; gap: 2rem; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); }
        .settings-card { background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 8px; }
        h3 { margin-bottom: 1.5rem; color: #a78bfa; }
        .form-group { margin-bottom: 1.5rem; }
        label { display: block; margin-bottom: 0.5rem; font-weight: 500; }
        input[type="text"], textarea {
            width: 100%;
            padding: 0.8rem;
            background: rgba(0,0,0,0.2);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 6px;
            color: #fff;
        }
        small { display: block; margin-top: 0.25rem; color: #aaa; font-size: 0.85rem; }
        .checkbox-group { display: flex; align-items: center; }
        .checkbox-group input { margin-right: 0.75rem; width: 18px; height: 18px; }
        .btn-save {
            background: linear-gradient(135deg, #6366f1, #a855f7);
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
        }
        .btn-save:hover { opacity: 0.9; transform: translateY(-1px); }
        .danger-zone { color: #f87171; }
    `]
})
export class SettingsComponent {
    configService = inject(ConfigService);
    // Create a local copy to edit, or bind directly if simple (using direct signal binding for simplicity in this V1)
    config = this.configService.config;

    saveConfig() {
        this.configService.updateConfig(this.config());
        alert('Configuración guardada exitosamente');
    }
}
