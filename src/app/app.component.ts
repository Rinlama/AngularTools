import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'toolsets';
  parentSelector: boolean = false;
  food = [
    { id: 1, select: false, name: 'dumpling' },
    { id: 2, select: true, name: 'burger' },
    { id: 3, select: true, name: 'sandwich' },
  ];

  onChangeFood($event) {
    const id = $event.target.value;
    const isChecked = $event.target.checked;

    this.food = this.food.map((d) => {
      if (d.id == id) {
        d.select = isChecked;
        this.parentSelector = false;
        return d;
      }
      if (id == -1) {
        d.select = this.parentSelector;
        return d;
      }
      return d;
    });
    console.log(this.food);
  }
}
