import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from '../message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  message: string;
  $subs: Subscription;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.$subs = this.messageService.receivedMessage().subscribe((d) => {
      this.message = d;
    });
  }
  ngOnDestroy(): void {
    this.$subs.unsubscribe();
  }
}
