import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly language = inject(LanguageService);
  stats = [
    { value: '18+', key: 'signatureFlavors' },
    { value: '4.9', key: 'customerRating' },
    { value: '100%', key: 'premiumVibe' }
  ];
}
