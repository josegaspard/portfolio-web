import { Component, OnInit, inject, signal, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ContentManagerService, BlogPost } from '../../services/content-manager.service';

@Component({
    selector: 'app-blog-editor',
    standalone: true,
    imports: [CommonModule, FormsModule],
    styles: [`
        .editor-container {
            display: flex;
            flex-direction: column;
            height: 100vh;
            background-color: #0F172A;
            color: #E2E8F0;
        }

        .editor-header {
            padding: 1rem 2rem;
            background: rgba(30, 41, 59, 0.8);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .header-actions {
            display: flex;
            gap: 1rem;
        }

        .editor-body {
            display: flex;
            flex: 1;
            overflow: hidden;
        }

        .editor-main {
            flex: 1;
            padding: 2rem;
            overflow-y: auto;
            border-right: 1px solid rgba(255, 255, 255, 0.1);
        }

        .editor-sidebar {
            width: 350px;
            padding: 2rem;
            background: rgba(30, 41, 59, 0.5);
            overflow-y: auto;
        }

        .title-input {
            width: 100%;
            background: transparent;
            border: none;
            font-size: 2.5rem;
            font-weight: 700;
            color: white;
            margin-bottom: 1rem;
            outline: none;
        }

        .subtitle-input {
            width: 100%;
            background: transparent;
            border: none;
            font-size: 1.5rem;
            color: #94A3B8;
            margin-bottom: 2rem;
            outline: none;
        }

        .wysiwyg-toolbar {
            position: sticky;
            top: 0;
            background: #1E293B;
            padding: 0.75rem;
            border-radius: 0.5rem;
            display: flex;
            gap: 0.5rem;
            margin-bottom: 1rem;
            z-index: 10;
            border: 1px solid rgba(255, 255, 255, 0.1);
            flex-wrap: wrap;
        }

        .toolbar-group {
            display: flex;
            gap: 0.25rem;
        }

        .toolbar-divider {
            width: 1px;
            background: rgba(255, 255, 255, 0.2);
            margin: 0 0.5rem;
        }

        .wysiwyg-toolbar button {
            background: transparent;
            border: none;
            color: #CBD5E1;
            padding: 0.5rem;
            border-radius: 0.25rem;
            cursor: pointer;
            transition: all 0.2s;
        }

        .wysiwyg-toolbar button:hover {
            background: rgba(255, 255, 255, 0.1);
            color: white;
        }

        .content-editor {
            min-height: 500px;
            outline: none;
            font-size: 1.1rem;
            line-height: 1.8;
            color: #E2E8F0;
        }
        
        .content-editor h2 { font-size: 2rem; margin-top: 2rem; color: white; }
        .content-editor h3 { font-size: 1.5rem; margin-top: 1.5rem; color: white; }
        .content-editor p { margin-bottom: 1rem; }
        .content-editor blockquote { 
            border-left: 4px solid #8B5CF6; 
            padding-left: 1rem; 
            font-style: italic; 
            color: #A78BFA;
        }
        .content-editor pre {
            background: #1E293B;
            padding: 1rem;
            border-radius: 0.5rem;
            overflow-x: auto;
        }

        .featured-image-section {
            margin-bottom: 2rem;
        }

        .image-upload-area {
            border: 2px dashed rgba(255, 255, 255, 0.2);
            border-radius: 0.5rem;
            padding: 2rem;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s;
        }

        .image-upload-area:hover {
            border-color: #8B5CF6;
            background: rgba(139, 92, 246, 0.05);
        }

        .image-preview img {
            max-width: 100%;
            max-height: 300px;
            border-radius: 0.5rem;
        }

        .sidebar-section {
            margin-bottom: 2rem;
        }

        .sidebar-section h3 {
            font-size: 1.1rem;
            color: #94A3B8;
            margin-bottom: 1rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
        
        .form-select, .form-input, .form-textarea {
            width: 100%;
            background: #1E293B;
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: white;
            padding: 0.75rem;
            border-radius: 0.5rem;
            margin-bottom: 0.5rem;
        }

        .btn {
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            font-weight: 600;
            border: none;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            transition: all 0.3s;
        }

        .btn-primary {
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
            color: white;
        }

        .btn-secondary {
            background: rgba(255,255,255,0.1);
            color: white;
        }
        
        .tags-input {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            background: #1E293B;
            padding: 0.5rem;
            border-radius: 0.5rem;
        }

        .tag {
            background: #8B5CF6;
            color: white;
            padding: 0.25rem 0.75rem;
            border-radius: 999px;
            font-size: 0.875rem;
            display: flex;
            align-items: center;
            gap: 0.25rem;
        }

        .tag button {
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            padding: 0;
            font-size: 1rem;
            line-height: 1;
        }

        .tag-input {
            background: transparent;
            border: none;
            color: white;
            outline: none;
            flex: 1;
            min-width: 100px;
        }
    `],
    template: `
    <div class="editor-container">
        <div class="editor-header">
            <h2>{{ isEditing() ? 'Editar' : 'Crear' }} Artículo</h2>
            <div class="header-actions">
                <button class="btn btn-secondary" (click)="saveDraft()">
                    <i class="fas fa-save"></i>
                    Guardar Borrador
                </button>
                <button class="btn btn-primary" (click)="publish()">
                    <i class="fas fa-paper-plane"></i>
                    Publicar
                </button>
            </div>
        </div>

        <div class="editor-body">
            <!-- Left: Editor -->
            <div class="editor-main">
                <!-- Title -->
                <input
                    type="text"
                    [(ngModel)]="post.title"
                    class="title-input"
                    placeholder="Título del artículo..."
                />

                <!-- Subtitle -->
                <input
                    type="text"
                    [(ngModel)]="post.subtitle"
                    class="subtitle-input"
                    placeholder="Subtítulo (opcional)..."
                />

                <!-- Featured Image -->
                <div class="featured-image-section">
                    <label style="display:block; margin-bottom: 0.5rem; color: #94A3B8;">Imagen Destacada</label>
                    <div class="image-upload-area" (click)="triggerImageUpload()">
                        <input
                            #imageInput
                            type="file"
                            accept="image/*"
                            (change)="handleImageUpload($event)"
                            style="display: none"
                        />
                        <div *ngIf="!post.featuredImage" class="upload-placeholder">
                            <i class="fas fa-cloud-upload-alt" style="font-size: 2rem; margin-bottom: 1rem; color: #8B5CF6;"></i>
                            <p>Click para subir imagen</p>
                            <span style="font-size: 0.875rem; color: #94A3B8;">JPG, PNG, WebP (Max 5MB)</span>
                        </div>
                        <div *ngIf="post.featuredImage" class="image-preview">
                            <img [src]="post.featuredImage" alt="Featured">
                            <button class="btn btn-secondary" style="margin-top: 1rem;" (click)="removeImage($event)">
                                <i class="fas fa-times"></i> Eliminar Imagen
                            </button>
                        </div>
                    </div>
                </div>

                <!-- WYSIWYG Toolbar -->
                <div class="wysiwyg-toolbar">
                    <div class="toolbar-group">
                        <button (click)="execCommand('bold')" title="Negrita"><i class="fas fa-bold"></i></button>
                        <button (click)="execCommand('italic')" title="Cursiva"><i class="fas fa-italic"></i></button>
                        <button (click)="execCommand('underline')" title="Subrayado"><i class="fas fa-underline"></i></button>
                    </div>
                    <div class="toolbar-divider"></div>
                    <div class="toolbar-group">
                        <button (click)="execCommand('formatBlock', '<h2>')" title="H2"><i class="fas fa-heading"></i>2</button>
                        <button (click)="execCommand('formatBlock', '<h3>')" title="H3"><i class="fas fa-heading"></i>3</button>
                        <button (click)="execCommand('formatBlock', '<p>')" title="P"><i class="fas fa-paragraph"></i></button>
                    </div>
                    <div class="toolbar-divider"></div>
                    <div class="toolbar-group">
                        <button (click)="execCommand('insertUnorderedList')" title="Lista"><i class="fas fa-list-ul"></i></button>
                        <button (click)="insertLink()" title="Link"><i class="fas fa-link"></i></button>
                        <button (click)="insertImage()" title="Imagen"><i class="fas fa-image"></i></button>
                        <button (click)="insertCodeBlock()" title="Código"><i class="fas fa-code"></i></button>
                        <button (click)="insertQuote()" title="Cita"><i class="fas fa-quote-right"></i></button>
                    </div>
                </div>

                <!-- Content Editor -->
                <div #contentEditor class="content-editor" contenteditable="true" (input)="updateContent()" [innerHTML]="post.content"></div>
            </div>

            <!-- Right: Settings -->
            <div class="editor-sidebar">
                <div class="sidebar-section">
                    <h3>Estado</h3>
                    <select [(ngModel)]="post.status" class="form-select">
                        <option value="draft">Borrador</option>
                        <option value="published">Publicado</option>
                        <option value="scheduled">Programado</option>
                    </select>
                </div>

                <div class="sidebar-section">
                    <h3>Categoría</h3>
                    <select [(ngModel)]="post.category" class="form-select">
                        <option value="seo">SEO Técnico</option>
                        <option value="development">Desarrollo Web</option>
                        <option value="performance">Performance</option>
                        <option value="analytics">Analytics</option>
                    </select>
                </div>

                <div class="sidebar-section">
                    <h3>Etiquetas</h3>
                    <div class="tags-input">
                        <div class="tag" *ngFor="let tag of post.tags; let i = index">
                            {{ tag }} <button (click)="removeTag(i)">×</button>
                        </div>
                        <input type="text" [(ngModel)]="newTag" (keyup.enter)="addTag()" placeholder="+" class="tag-input"/>
                    </div>
                </div>

                <div class="sidebar-section">
                    <h3>SEO</h3>
                    <label style="display:block; margin-bottom:0.5rem">Meta Descripción</label>
                    <textarea [(ngModel)]="post.metaDescription" class="form-textarea" rows="3" maxlength="160"></textarea>
                </div>
            </div>
        </div>
    </div>
    `
})
export class BlogEditorComponent implements OnInit {
    @ViewChild('contentEditor') contentEditor!: ElementRef;
    @ViewChild('imageInput') imageInput!: ElementRef;

    private contentService = inject(ContentManagerService);
    private router = inject(Router);
    private route = inject(ActivatedRoute);

    isEditing = signal(false);
    newTag = '';

    post: BlogPost = {
        id: '',
        title: '',
        subtitle: '',
        content: '',
        featuredImage: '',
        status: 'draft',
        category: 'seo',
        tags: [],
        readingTime: 0,
        publishDate: new Date().toISOString(),
        author: 'José Gaspard',
        description: ''
    };

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            const existing = this.contentService.getPostById(id);
            if (existing) {
                this.post = { ...existing };
                this.isEditing.set(true);
                setTimeout(() => {
                    if (this.contentEditor) {
                        this.contentEditor.nativeElement.innerHTML = this.post.content;
                    }
                }, 100);
            }
        }
    }

    execCommand(command: string, value?: string) {
        document.execCommand(command, false, value);
        this.contentEditor.nativeElement.focus();
    }

    insertLink() {
        const url = prompt('Ingresa la URL:');
        if (url) this.execCommand('createLink', url);
    }

    insertImage() {
        const url = prompt('Ingresa la URL de la imagen:');
        if (url) this.execCommand('insertImage', url);
    }

    insertCodeBlock() {
        const code = prompt('Ingresa el código:');
        if (code) {
            const pre = `<pre><code>${code}</code></pre>`;
            this.execCommand('insertHTML', pre);
        }
    }

    insertQuote() {
        this.execCommand('formatBlock', 'blockquote');
    }

    updateContent() {
        this.post.content = this.contentEditor.nativeElement.innerHTML;
        const text = this.contentEditor.nativeElement.innerText;
        const words = text.trim().split(/\s+/).length;
        this.post.readingTime = Math.ceil(words / 200);
    }

    triggerImageUpload() {
        this.imageInput.nativeElement.click();
    }

    handleImageUpload(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files[0]) {
            const file = input.files[0];
            if (file.size > 5 * 1024 * 1024) {
                alert('Máximo 5MB');
                return;
            }
            const reader = new FileReader();
            reader.onload = (e) => {
                this.post.featuredImage = e.target?.result as string;
            };
            reader.readAsDataURL(file);
        }
    }

    removeImage(event: Event) {
        event.stopPropagation();
        this.post.featuredImage = '';
    }

    addTag() {
        if (this.newTag.trim() && !this.post.tags.includes(this.newTag.trim())) {
            this.post.tags.push(this.newTag.trim());
            this.newTag = '';
        }
    }

    removeTag(index: number) {
        this.post.tags.splice(index, 1);
    }

    saveDraft() {
        this.post.status = 'draft';
        this.savePostInternal();
    }

    publish() {
        if (!this.post.title) {
            alert('Falta el título');
            return;
        }
        this.post.status = 'published';
        this.savePostInternal();
    }

    private savePostInternal() {
        this.contentService.savePost(this.post);
        alert('Guardado!');
        this.router.navigate(['/dashboard']);
    }
}
