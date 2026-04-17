import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlavorService, Flavor } from '../../services/flavor.service';
import { LanguageService } from '../../services/language.service';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-flavors',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './flavors.component.html',
  styleUrl: './flavors.component.css'
})
export class FlavorsComponent implements OnInit {
  private readonly flavorService = inject(FlavorService);
  flavors: Flavor[] = [];
  public lang = inject(LanguageService);

  readonly notes = [
    'Premium texture',
    'Natural mood',
    'Elegant presentation'
  ];

  ngOnInit(): void {
    this.flavorService.getFlavors().subscribe({
      next: (flavors) => this.flavors = flavors,
      error: () => {
        this.flavors = [
          { id: 1, name: 'Caramel Bloom', subtitle: 'Floral caramel silk', price: '$5.90' },
          { id: 2, name: 'Berry Velvet', subtitle: 'Rich berry cream', price: '$6.40' },
          { id: 3, name: 'Vanilla Gold', subtitle: 'Classic luxury vanilla', price: '$5.50' },
          { id: 4, name: 'Hazelnut Dream', subtitle: 'Toasted hazelnut delight', price: '$6.20' },
          { id: 5, name: 'Pistachio Muse', subtitle: 'Smooth pistachio note', price: '$6.80' },
          { id: 6, name: 'Chocolate Silk', subtitle: 'Deep cocoa cream', price: '$6.00' }
        ];
      }
    });
  }
}
