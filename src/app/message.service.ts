import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private subject = new BehaviorSubject<string>('burger');

  constructor() {}

  sendMessage(message: string) {
    this.subject.next(message);
  }

  receivedMessage(): Observable<string> {
    return this.subject.asObservable();
  }
}
