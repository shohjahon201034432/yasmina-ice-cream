import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Flavor {
  id: number;
  name: string;
  subtitle: string;
  price: string;
}

@Injectable({ providedIn: 'root' })
export class FlavorService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:3000/api/flavors';

  getFlavors() {
    return this.http.get<Flavor[]>(this.apiUrl);
  }
}
