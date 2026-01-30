import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ContentService } from '../../../services/content';
import { Content } from '../../../interfaces/content.interface';

@Component({
  selector: 'app-admin-content-editor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
    <div class="editor-layout">
      <form [formGroup]="form" (ngSubmit)="save()" class="editor-form">
        
        <!-- Header -->
        <header class="editor-header">
          <div class="header-left">
            <a routerLink="/admin/content" class="back-link"><i class="fas fa-arrow-left"></i> Back</a>
            <h2 class="page-title">{{ isEditMode ? 'Edit' : 'Create' }} {{ form.get('type')?.value | titlecase }}</h2>
          </div>
          <div class="header-actions">
            <span class="status-indicator {{ form.get('status')?.value }}">
              {{ form.get('status')?.value | titlecase }}
            </span>
            <button type="button" class="btn-secondary" (click)="preview()" [disabled]="!form.get('slug')?.value">
              <i class="fas fa-eye"></i> Preview
            </button>
            <button type="submit" class="btn-primary" [disabled]="form.invalid || saving">
              <i class="fas fa-save"></i> {{ saving ? 'Saving...' : 'Save Changes' }}
            </button>
          </div>
        </header>

        <div class="editor-grid">
          <!-- Main Content Column -->
          <div class="main-column">
            
            <div class="card">
              <div class="form-group">
                <label>Title</label>
                <input type="text" formControlName="title" class="form-input title-input" placeholder="Enter title here...">
              </div>
              
              <div class="form-group">
                <label>Slug</label>
                <div class="slug-input-group">
                   <span class="slug-prefix">/</span>
                   <input type="text" formControlName="slug" class="form-input slug-input">
                   <button type="button" class="btn-micro" (click)="generateSlug()">Generate</button>
                </div>
              </div>
              
              <div class="form-group">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                    <label style="margin:0">Content (Blocks)</label>
                    <button type="button" class="btn-micro" (click)="loadTemplate('agency')"><i class="fas fa-magic"></i> Load Agency Template</button>
                </div>
                <textarea formControlName="blocks" class="form-textarea content-area" rows="15" placeholder="Write your content here... (JSON or HTML)"></textarea>
                <p class="hint">For now, enter raw text. We will upgrade to a block editor later.</p>
              </div>
            </div>

            <!-- SEO Card -->
            <div class="card" formGroupName="seo">
              <div class="card-header">
                <h3><i class="fas fa-search"></i> Search Engine Optimization</h3>
              </div>
              <div class="form-group">
                <label>Meta Title</label>
                <input type="text" formControlName="metaTitle" class="form-input">
                <p class="hint">Recommended: 60 characters</p>
              </div>
              <div class="form-group">
                <label>Meta Description</label>
                <textarea formControlName="metaDescription" class="form-textarea" rows="3"></textarea>
                <p class="hint">Recommended: 160 characters</p>
              </div>
               <div class="form-grid-2">
                  <div class="form-group">
                    <label>Canonical URL</label>
                    <input type="text" formControlName="canonical" class="form-input">
                  </div>
                  <div class="form-group">
                    <label>Schema Type</label>
                    <select formControlName="schemaType" class="form-select">
                        <option value="WebPage">WebPage</option>
                        <option value="Article">Article</option>
                        <option value="Organization">Organization</option>
                    </select>
                  </div>
               </div>
            </div>

          </div>

          <!-- Sidebar Column -->
          <div class="sidebar-column">
            <div class="card">
              <h3>Publishing</h3>
              <div class="form-group">
                <label>Status</label>
                <select formControlName="status" class="form-select">
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
              <div class="form-group">
                <label>Type</label>
                 <select formControlName="type" class="form-select">
                  <option value="page">Page</option>
                  <option value="post">Post</option>
                  <option value="home">Home</option>
                </select>
              </div>
            </div>

             <div class="card">
              <h3>Featured Image</h3>
              <div class="image-uploader">
                <div class="upload-placeholder">
                    <i class="fas fa-image"></i>
                    <span>Click to upload</span>
                </div>
                <!-- Hidden input for now -->
                <input type="text" formControlName="coverImage" class="form-input" placeholder="Image URL">
              </div>
            </div>
          </div>
        </div>

      </form>
    </div>
  `,
  styles: [`
    .editor-layout { padding-bottom: 4rem; }
    
    .editor-header {
      display: flex; justify-content: space-between; align-items: center;
      margin-bottom: 2rem; padding-bottom: 1rem; border-bottom: 1px solid #e2e8f0;
    }
    .header-left { display: flex; flex-direction: column; gap: 0.5rem; }
    .back-link { color: #64748b; text-decoration: none; font-size: 0.875rem; display: flex; align-items: center; gap: 0.5rem; }
    .page-title { margin: 0; font-size: 1.875rem; color: #0f172a; }

    .header-actions { display: flex; align-items: center; gap: 1rem; }
    
    .btn-primary {
      background-color: #3b82f6; color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 6px; font-weight: 600; cursor: pointer;
      display: flex; align-items: center; gap: 0.5rem; transition: all 0.2s;
    }
    .btn-primary:hover:not(:disabled) { background-color: #2563eb; }
    .btn-secondary {
      background-color: white; color: #475569; border: 1px solid #e2e8f0; padding: 0.75rem 1.25rem; border-radius: 6px; font-weight: 600; cursor: pointer;
      display: flex; align-items: center; gap: 0.5rem; transition: all 0.2s; margin-right: 0.5rem;
    }
    .btn-secondary:hover { border-color: #3b82f6; color: #3b82f6; }

    .btn-primary:disabled { opacity: 0.7; cursor: not-allowed; }

    .editor-grid {
      display: grid; grid-template-columns: 1fr 300px; gap: 2rem;
    }

    .card { background: white; border-radius: 8px; border: 1px solid #e2e8f0; padding: 1.5rem; margin-bottom: 1.5rem; }
    .card-header { margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 1px solid #f1f5f9; }
    .card h3 { margin: 0; font-size: 1.125rem; color: #1e293b; display: flex; align-items: center; gap: 0.5rem; }

    .form-group { margin-bottom: 1.25rem; }
    .form-group label { display: block; margin-bottom: 0.5rem; font-weight: 500; color: #334155; font-size: 0.875rem; }
    
    .form-input, .form-textarea, .form-select {
      width: 100%; padding: 0.75rem; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; transition: border-color 0.2s; color: #0f172a;
    }
    .form-input:focus, .form-textarea:focus, .form-select:focus { outline: none; border-color: #3b82f6; box-shadow: 0 0 0 2px rgba(59,130,246,0.1); }
    
    .title-input { font-size: 1.5rem; font-weight: 700; padding: 0.75rem; }
    .content-area { font-family: monospace; line-height: 1.5; font-size: 0.9rem; }

    .slug-input-group { display: flex; align-items: center; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; padding-left: 0.75rem; }
    .slug-prefix { color: #94a3b8; font-weight: 500; }
    .slug-input { border: none; background: transparent; padding-left: 0.25rem; }
    .slug-input:focus { box-shadow: none; }
    .btn-micro { background: white; border: 1px solid #cbd5e1; color: #64748b; font-size: 0.75rem; padding: 0.25rem 0.5rem; border-radius: 4px; margin-right: 0.5rem; cursor: pointer; }

    .form-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
    .hint { font-size: 0.75rem; color: #94a3b8; margin-top: 0.375rem; }

    .status-indicator { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; padding: 0.25rem 0.5rem; border-radius: 4px; background: #f1f5f9; color: #64748b; }
    .status-indicator.published { background: #dcfce7; color: #166534; }

    .image-uploader { 
        border: 2px dashed #cbd5e1; border-radius: 6px; padding: 2rem; text-align: center; cursor: pointer; transition: all 0.2s;
    }
    .image-uploader:hover { border-color: #3b82f6; background: #f8fafc; }
    .upload-placeholder { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; color: #94a3b8; }
    .upload-placeholder i { font-size: 2rem; }
    
    @media (max-width: 1024px) {
        .editor-grid { grid-template-columns: 1fr; }
        .sidebar-column { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
    }
  `]
})
export class AdminContentEditorComponent implements OnInit {
  form: FormGroup;
  isEditMode = false;
  saving = false;
  contentId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private contentService: ContentService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      slug: ['', Validators.required],
      blocks: ['[]', Validators.required],
      status: ['draft', Validators.required],
      type: ['page', Validators.required],
      coverImage: [''],
      seo: this.fb.group({
        metaTitle: [''],
        metaDescription: [''],
        keywords: [''],
        canonical: [''],
        schemaType: ['WebPage']
      })
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.contentId = +params['id'];
        this.loadContent(this.contentId);
      }
    });
  }

  loadContent(id: number) {
    this.contentService.getById(id).subscribe(data => {
      if (!data) return;

      this.form.patchValue({
        title: data.title,
        slug: data.slug,
        blocks: data.blocks,
        status: data.status,
        type: data.type,
        coverImage: data.coverImage,
      });

      if (data.seo) {
        this.form.get('seo')?.patchValue(data.seo);
      }
    });
  }

  generateSlug() {
    const title = this.form.get('title')?.value;
    if (title) {
      const slug = title.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
      this.form.patchValue({ slug });
    }
  }

  loadTemplate(templateName: string) {
    if (confirm('Load template? This will overwrite current content.')) {
      if (templateName === 'agency') {
        this.form.patchValue({ blocks: this.getAgencyTemplate() });
      }
    }
  }

  getAgencyTemplate(): string {
    return `
        <!-- Agency Hero -->
        <section class="agency-section hero" style="padding: 5rem 1rem; text-align: center; background: linear-gradient(to right, #f8fafc, #fff);">
            <div style="max-width: 800px; margin: 0 auto;">
                <h1 style="font-size: 3.5rem; font-weight: 800; color: #0f172a; line-height: 1.1; margin-bottom: 1.5rem;">
                    Agencia SEO México <br> <span style="color: #3b82f6;">Posicionamiento Web</span>
                </h1>
                <p style="font-size: 1.25rem; color: #475569; margin-bottom: 2rem;">
                    Aumentamos tu tráfico orgánico y ventas con estrategias SEO probadas.
                </p>
                <div style="display: flex; gap: 1rem; justify-content: center;">
                    <a href="#contact" style="background: #3b82f6; color: white; padding: 1rem 2rem; border-radius: 8px; text-decoration: none; font-weight: 600;">Consultoría Gratis</a>
                    <a href="#services" style="background: white; border: 1px solid #cbd5e1; color: #0f172a; padding: 1rem 2rem; border-radius: 8px; text-decoration: none; font-weight: 600;">Ver Servicios</a>
                </div>
            </div>
            <div style="margin-top: 4rem;">
                <img src="https://via.placeholder.com/1000x500" style="width: 100%; max-width: 1000px; border-radius: 12px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);" alt="Dashboard SEO">
            </div>
        </section>

        <!-- Services Grid -->
        <section class="agency-section" style="padding: 5rem 1rem; background: white;">
            <div style="max-width: 1200px; margin: 0 auto;">
                <h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 3rem; color: #0f172a;">Nuestros Servicios</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                    <!-- Service 1 -->
                    <div style="padding: 2rem; border: 1px solid #e2e8f0; border-radius: 12px; transition: all 0.2s;">
                        <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">SEO Técnico</h3>
                        <p style="color: #64748b;">Auditoría completa de tu sitio web para asegurar que Google pueda rastrearlo e indexarlo correctamente.</p>
                    </div>
                    <!-- Service 2 -->
                    <div style="padding: 2rem; border: 1px solid #e2e8f0; border-radius: 12px; transition: all 0.2s;">
                        <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Link Building</h3>
                        <p style="color: #64748b;">Estrategias de autoridad para conseguir enlaces de calidad que impulsen tu ranking.</p>
                    </div>
                    <!-- Service 3 -->
                    <div style="padding: 2rem; border: 1px solid #e2e8f0; border-radius: 12px; transition: all 0.2s;">
                        <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Content Marketing</h3>
                        <p style="color: #64748b;">Creación de contenido optimizado que atrae, educa y convierte a tus visitantes.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact CTA -->
        <section class="agency-section" id="contact" style="padding: 5rem 1rem; background: #0f172a; color: white; text-align: center;">
            <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem;">¿Listo para escalar?</h2>
            <p style="font-size: 1.25rem; color: #94a3b8; margin-bottom: 2rem; max-width: 600px; margin-left: auto; margin-right: auto;">
                Agenda una llamada de estrategia gratuita de 30 minutos.
            </p>
            <a href="/contact" style="background: #3b82f6; color: white; padding: 1rem 2rem; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 1.125rem;">Agendar Ahora</a>
        </section>
      `;
  }

  preview() {
    const slug = this.form.get('slug')?.value;
    if (slug) {
      // Open in new tab. For now assuming base URL. 
      // In production this should be the full site URL.
      const url = `/${slug}`;
      window.open(url, '_blank');
    }
  }

  save() {
    if (this.form.invalid) return;
    this.saving = true;

    // Prepare payload
    const payload = this.form.value;
    // ensure SEO is an object

    const request = this.isEditMode
      ? this.contentService.update(this.contentId!, payload)
      : this.contentService.create(payload);

    request.subscribe({
      next: () => {
        this.saving = false;
        this.router.navigate(['/admin/content']);
      },
      error: (err) => {
        console.error(err);
        this.saving = false;
        alert('Error saving content');
      }
    });
  }
}
