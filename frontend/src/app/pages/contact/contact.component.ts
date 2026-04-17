import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RevealDirective } from '../../directives/reveal.directive';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  public language = inject(LanguageService);

  form = {
    name: '',
    email: '',
    message: ''
  };

  success = '';
  error = '';
  sending = false;

  async submit() {
    this.error = '';
    this.success = '';

    if (!this.form.name || !this.form.email || !this.form.message) {
      this.error = 'Iltimos, barcha maydonlarni to‘ldiring.';
      return;
    }

    this.sending = true;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.form)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || 'Xabar yuborilmadi');
      }

      this.success = 'Xabaringiz qabul qilindi. Tez orada siz bilan bog‘lanamiz.';

      this.form = {
        name: '',
        email: '',
        message: ''
      };
    } catch (err: any) {
      this.error = err?.message || 'Serverda xatolik yuz berdi';
    } finally {
      this.sending = false;
    }
  }
}