import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  food = [
    { name: 'dumpling', description: '' },
    { name: 'pizza', description: '' },
  ];

  selected: string = 'dumpling';
}
