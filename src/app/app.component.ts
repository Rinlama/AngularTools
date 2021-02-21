import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'toolsets';

  constructor(private httpclient: HttpClient) {}

  ngOnInit() {
    const ob$ = this.httpclient
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .pipe(shareReplay());

    ob$.subscribe((d) => {
      console.log(d);
    });

    ob$.subscribe((d) => {
      console.log(d);
    });
  }
}
