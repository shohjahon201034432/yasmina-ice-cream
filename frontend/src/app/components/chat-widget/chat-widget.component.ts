import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { ChatbotService } from '../../services/chatbot.service';

type ChatItem = {
  role: 'user' | 'bot';
  text: string;
};

@Component({
  selector: 'app-chat-widget',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './chat-widget.component.html',
  styleUrl: './chat-widget.component.css'
})
export class ChatWidgetComponent {
  private chatbot = inject(ChatbotService);

  isOpen = signal(false);
  input = '';
  loading = signal(false);

  messages = signal<ChatItem[]>([
    {
      role: 'bot',
      text: 'Salom! Men Yasmina Ice Cream yordamchisiman. Ta’mlar, narx yoki aloqa bo‘yicha savol berishingiz mumkin.'
    }
  ]);

  toggleChat() {
    this.isOpen.update(v => !v);
  }

  usePrompt(text: string) {
    this.input = text;
    this.send();
  }

  send() {
    const text = this.input.trim();
    if (!text || this.loading()) return;

    this.messages.update(list => [...list, { role: 'user', text }]);
    this.input = '';
    this.loading.set(true);

    this.chatbot.sendMessage(text).subscribe({
      next: (res) => {
        this.messages.update(list => [...list, { role: 'bot', text: res.reply }]);
        this.loading.set(false);
      },
      error: () => {
        this.messages.update(list => [
          ...list,
          { role: 'bot', text: 'Kechirasiz, hozir javob berishda xatolik yuz berdi.' }
        ]);
        this.loading.set(false);
      }
    });
  }
}
