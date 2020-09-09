import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private messageService: MessageService) {}

  ngOnInit(): void {}
  sendMessage(message) {
    this.messageService.sendMessage(message);
  }
}
