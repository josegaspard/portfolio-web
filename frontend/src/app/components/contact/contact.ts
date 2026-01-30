import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {
  translationService = inject(TranslationService);

  formData = {
    name: '',
    email: '',
    company: '',
    service: '',
    subject: '',
    message: ''
  };

  t(key: string) {
    return this.translationService.translate(key);
  }

  onSubmit() {
    // Construct WhatsApp message
    const message = `Hola José, mi nombre es ${this.formData.name}. Me interesa el servicio de ${this.formData.service}. Asunto: ${this.formData.subject}. Mensaje: ${this.formData.message}`;
    const whatsappUrl = `https://wa.me/5215561001000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }
}
