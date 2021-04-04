import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { exhaustMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'toolsets';
  @ViewChild('addCustomerBtn') addCustomerBtn: ElementRef;

  constructor(private httpClient: HttpClient) {}
  ngAfterViewInit(): void {
    const AddCustomerBtn$ = fromEvent(
      this.addCustomerBtn.nativeElement,
      'click'
    ).pipe(exhaustMap(() => this.save()));
    AddCustomerBtn$.subscribe((d) => {
      console.log(d);
    });
  }

  ngOnInit(): void {
    // const obs = this.httpClient.get('http://localhost:3000/api/customer');
    // obs.subscribe((d) => {
    //   console.log(d);
    // });
  }

  save() {
    return this.httpClient.post('http://localhost:3000/api/customer', {
      name: 'deve',
      address: 'dev address',
    });
  }
}
