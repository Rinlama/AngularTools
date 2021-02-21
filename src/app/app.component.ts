import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'toolsets';
  data: number;

  ngOnInit(): void {
    // const obs$ = interval(2000);

    const ons$ = timer(5000, 1000);
    ons$.subscribe((d) => {
      console.log(d);
      this.data = d;
    });
  }
}
