import {
  Directive,
  AfterViewInit,
  ElementRef,
  NgZone,
  EventEmitter,
  Output,
} from '@angular/core';

declare var $: any;

@Directive({
  selector: '[appDatepicker]',
  exportAs: 'datepicker',
})
export class DatepickerDirective implements AfterViewInit {
  mydate: any;
  @Output() dateEventEmitter = new EventEmitter();

  constructor(private el: ElementRef, private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
      $(this.el.nativeElement).datepicker({
        onSelect: (date) => {
          this.ngZone.run(() => {
            this.setDate(date);
          });
        },
      });
    });
  }

  setDate(date) {
    this.mydate = date;
    this.dateEventEmitter.emit(this.mydate);
  }
}
