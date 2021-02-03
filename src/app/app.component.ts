import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, mergeAll, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const food = ['steak', 'sandwich'];

    from(food)
      .pipe(
        mergeMap((d) => {
          return this.getMessage(d);
        })
      )
      .subscribe((d) => {
        console.log(d);
      });

    from(food)
      .pipe(
        map((d) => {
          return this.getMessage(d);
        }),
        mergeAll()
      )
      .subscribe((d) => {
        console.log(d);
      });
  }

  getMessage(food) {
    return of(food + ' love it');
  }
}
