import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly language = inject(LanguageService);

  stats = [
    { value: '12+', key: 'signatureFlavors' },
    { value: '4.9', key: 'customerRating' },
    { value: '24/7', key: 'premiumVibe' }
  ];

  highlights = [
    {
      title: 'highlightTitle1',
      text: 'highlightText1'
    },
    {
      title: 'highlightTitle2',
      text: 'highlightText2'
    },
    {
      title: 'highlightTitle3',
      text: 'highlightText3'
    }
  ];

  promises = [
    'promise1',
    'promise2',
    'promise3'
  ];
}