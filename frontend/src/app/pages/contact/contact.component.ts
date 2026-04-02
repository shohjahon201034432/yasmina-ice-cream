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
  private http = inject(HttpClient);
  public language = inject(LanguageService);

  form = {
    name: '',
    email: '',
    message: ''
  };

  success = '';
  error = '';

  submit() {
    this.success = '';
    this.error = '';

    this.http.post<{ message: string }>('/api/contact', this.form).subscribe({
      next: (res) => {
        this.success = res.message;
        this.form = {
          name: '',
          email: '',
          message: ''
        };
      },
      error: () => {
        this.error = 'Xabar yuborishda xatolik yuz berdi';
      }
    });
  }
}