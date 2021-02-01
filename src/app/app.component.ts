import { Component, OnInit } from '@angular/core';
import { Subject, combineLatest, BehaviorSubject } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  framework: Array<any> = ['React', 'Angular', 'Spring Boot', 'Laravel'];
  color: Array<any> = ['red', 'yellow', 'blue'];

  fwSubject = new BehaviorSubject<any>('React');
  colorSubject = new BehaviorSubject<any>('red');

  ngOnInit(): void {
    combineLatest([
      this.fwSubject.asObservable(),
      this.colorSubject.asObservable(),
    ]).subscribe((d) => {
      console.log(d);
    });

    this.fwSubject.pipe(withLatestFrom(this.colorSubject)).subscribe((d) => {
      console.log(d);
    });
  }
  onFWChange($event) {
    const value = $event.target.value;
    this.fwSubject.next(value);
  }
  onColorChange($event) {
    const value = $event.target.value;
    this.colorSubject.next(value);
  }
}
