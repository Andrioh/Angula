import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageGenService {
  private storageKey = 'messages';
  private messagesSubject = new BehaviorSubject<{ Title: string, About: string }[]>([]);
  messages$ = this.messagesSubject.asObservable();

  constructor() {
    // Carrega os dados do localStorage, se disponíveis
    const savedMessages = localStorage.getItem(this.storageKey);
    if (savedMessages) {
      this.messagesSubject.next(JSON.parse(savedMessages));
    }
  }

  AddMessage(Title: string, About: string) {
    const currentMessages = [...this.messagesSubject.value];
    currentMessages.push({ Title, About });
    this.messagesSubject.next(currentMessages);
    this.saveMessagesToLocalStorage(currentMessages);
  }

  GetMessages() {
    return this.messagesSubject.getValue();
  }

  private saveMessagesToLocalStorage(messages: { Title: string, About: string }[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(messages));
  }
}
