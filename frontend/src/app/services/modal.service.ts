import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ModalService {
    private activeModalId = signal<string | null>(null);

    getActiveModal() {
        return this.activeModalId();
    }

    open(modalId: string) {
        this.activeModalId.set(modalId);
        // Prevent body scroll
        if (typeof document !== 'undefined') {
            document.body.style.overflow = 'hidden';
        }
    }

    close() {
        this.activeModalId.set(null);
        // Restore body scroll
        if (typeof document !== 'undefined') {
            document.body.style.overflow = 'auto';
        }
    }
}
