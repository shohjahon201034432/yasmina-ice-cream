import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

interface ChatResponse {
  reply: string;
}

@Injectable({ providedIn: 'root' })
export class ChatbotService {
  sendMessage(message: string): Observable<ChatResponse> {
    const normalized = message.toLowerCase();

    let reply = 'Yasmina Ice Cream bo‘yicha savolingizni oldim. Ta’mlar, aloqa yoki buyurtma haqida yana aniqroq yozsangiz, yaxshiroq yordam beraman.';

    if (normalized.includes('aloqa') || normalized.includes('contact') || normalized.includes('telefon')) {
      reply = 'Aloqa uchun Contact sahifasidan yozishingiz yoki +998 95 471 55 55 raqamiga murojaat qilishingiz mumkin.';
    } else if (normalized.includes('ta') || normalized.includes('flavor') || normalized.includes('menu')) {
      reply = 'Bizda premium signature ta’mlar bor: Caramel Bloom, Berry Velvet, Vanilla Gold, Hazelnut Dream, Pistachio Muse va Chocolate Silk.';
    } else if (normalized.includes('narx') || normalized.includes('price') || normalized.includes('buyurtma')) {
      reply = 'Narxlar va buyurtma tafsilotlari Flavors sahifasida ko‘rsatilgan. Katta buyurtmalar uchun Contact bo‘limidan yozib qoldiring.';
    } else if (normalized.includes('salom') || normalized.includes('hello') || normalized.includes('hi')) {
      reply = 'Salom! Yasmina sahifasiga xush kelibsiz. Men sizga ta’mlar, buyurtma va aloqa bo‘yicha yordam bera olaman.';
    }

    return of({ reply }).pipe(delay(550));
  }
}
