import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatAll, concatMap, delay, map, mergeAll } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'toolsets';

  ngOnInit(): void {
    const food = ['pizza', 'sandwich', 'burger'];

    const $food = from(food);

    $food.pipe(concatMap((d) => this.getData(d))).subscribe((d) => {
      console.log(d);
    });
  }

  getData(food) {
    return of(food + ' I love it').pipe(delay(1000));
  }
}
