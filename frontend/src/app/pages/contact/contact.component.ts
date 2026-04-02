import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  private readonly http = inject(HttpClient);
  form = { name: '', email: '', message: '' };
  success = '';
  public language = inject(LanguageService);

  submit(): void {
    this.http.post('http://localhost:3000/api/contact', this.form).subscribe({
      next: () => {
        this.success = 'Message sent successfully.';
        this.form = { name: '', email: '', message: '' };
      },
      error: () => {
        this.success = 'Backend not running yet, but contact form UI is ready.';
      }
    });
  }
}
