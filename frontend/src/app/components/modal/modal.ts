import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.html',
  styleUrls: ['./modal.css']
})
export class ModalComponent {
  modalService = inject(ModalService);
  translationService = inject(TranslationService);

  get activeModal() {
    return this.modalService.getActiveModal();
  }

  close() {
    this.modalService.close();
  }

  t(key: string) {
    return this.translationService.translate(key);
  }

  // This helper maps modalId to the translation keys prefix
  // e.g. 'modal-jungle' -> 'modal_jungle'
  getPrefix(modalId: string): string {
    return modalId.replace('-', '_');
  }
}
