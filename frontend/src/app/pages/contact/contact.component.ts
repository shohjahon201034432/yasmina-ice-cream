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

  submit() {
    this.error = '';
    this.success = 'Xabaringiz qabul qilindi. Tez orada siz bilan bog‘lanamiz.';
    this.form = {
      name: '',
      email: '',
      message: ''
    };
  }
}
