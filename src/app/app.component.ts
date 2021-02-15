import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { forkJoin, fromEvent, zip } from 'rxjs';
import { delay, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'toolsets';
  @ViewChild('sandwichButton') sandwichButton: ElementRef;
  @ViewChild('burgerButton') burgerButton: ElementRef;

  constructor(private httpClient: HttpClient) {}
  ngAfterViewInit(): void {
    const button1$ = fromEvent(this.sandwichButton.nativeElement, 'click').pipe(
      map((d: any) => d.target.innerHTML),
      take(2)
    );
    const button2$ = fromEvent(this.burgerButton.nativeElement, 'click').pipe(
      map((d: any) => d.target.innerHTML),
      take(2)
    );

    zip(button1$, button2$).subscribe((d) => {
      // console.log(d);
    });

    forkJoin([button1$, button2$]).subscribe((d) => {
      console.log(d);
    });
  }

  ngOnInit() {
    // this.callAPIs();
  }

  callAPIs() {
    const obsData$ = this.httpClient
      .get('https://baconipsum.com/api/?type=meat-and-filler')
      .pipe(delay(5000));

    const obsDataTwo$ = this.httpClient.get(
      'https://baconipsum.com/api/?type=meat-and-filler'
    );

    forkJoin([obsData$, obsDataTwo$]).subscribe(([one, two]) => {
      console.log(one, two);
    });
  }
}
