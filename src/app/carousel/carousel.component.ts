import {
  animate,
  animation,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IDocuments } from '../app.component';
import { RxJsIntervalService } from '../services/rxjsinterval.service';

export const fadeIn = animation([
  style({ opacity: 0 }), // start state
  animate('300ms', style({ opacity: 1 })),
]);

export const fadeOut = animation([animate('300ms', style({ opacity: 0 }))]);

export const slideIn = animation([
  style({ translate: 'translate3d(-100%, 0, 0)' }), // start state
  animate('300ms', style({ translate: 'translate3d(0, 0, 0)' })),
]);

export const slideOut = animation([animate('300ms', style({ opacity: 0 }))]);

export const scaleIn = animation([
  style({ opacity: 0, transform: 'scale(0.5)' }), // start state
  animate(
    '{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)',
    style({ opacity: 1, transform: 'scale(1)' })
  ),
]);

export const scaleOut = animation([
  animate(
    '{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)',
    style({ opacity: 0, transform: 'scale(0.5)' })
  ),
]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition('* => void', [animate('500ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class CarouselComponent implements OnInit {
  @Input() slides: IDocuments[];
  currentIndex: number = 0;
  interval: Subscription;
  counterValue: string;

  constructor(private rxJsIntervalService: RxJsIntervalService) {}

  ngOnInit(): void {
    this.initInterval();
  }

  initInterval() {
    if (this.interval) {
      this.interval.unsubscribe();
    }
    this.interval = this.rxJsIntervalService.initCounter(100).subscribe((d) => {
      this.counterValue = d.counterValue + '%';
      if (d.counterValue === 100) {
        this.next();
      }
    });
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.initInterval();
    }
  }

  next() {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.initInterval();
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.rxJsIntervalService.pauseCounter();
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.rxJsIntervalService.startCounter();
  }
}
