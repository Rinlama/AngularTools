import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import {
  concatAll,
  concatMap,
  delay,
  map,
  mergeAll,
  switchAll,
  switchMap,
} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'toolsets';

  ngOnInit() {
    const food = ['burger', 'sandwich', 'pizza'];

    const food$ = from(food);

    food$
      .pipe(
        map((data) => {
          return this.getData(data);
        })
      )
      .subscribe((d) => {
        console.log(d);
      });
  }

  getData(message): Observable<string> {
    return of(message + ' I love it').pipe(delay(1000));
  }
}
