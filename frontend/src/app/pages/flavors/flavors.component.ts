import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlavorService, Flavor } from '../../services/flavor.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-flavors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flavors.component.html',
  styleUrl: './flavors.component.css'
})
export class FlavorsComponent implements OnInit {
  private readonly flavorService = inject(FlavorService);
  flavors: Flavor[] = [];
  public lang = inject(LanguageService);

  ngOnInit(): void {
    this.flavorService.getFlavors().subscribe({
      next: (flavors) => this.flavors = flavors,
      error: () => {
        this.flavors = [
          { id: 1, name: 'Caramel Bloom', subtitle: 'Floral caramel silk', price: '$5.90' },
          { id: 2, name: 'Berry Velvet', subtitle: 'Rich berry cream', price: '$6.40' },
          { id: 3, name: 'Vanilla Gold', subtitle: 'Classic luxury vanilla', price: '$5.50' }
        ];
      }
    });
  }
}
