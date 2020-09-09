import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SendMessageService {
  private subject = new BehaviorSubject<string>('test');
  constructor() {}

  SendMessage(message: string) {
    this.subject.next(message);
  }

  SubscribeMessage(): Observable<string> {
    return this.subject.asObservable();
  }
}
