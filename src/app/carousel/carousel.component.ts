import { animate, animation, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IDocuments } from '../app.component';
import { RxJsIntervalService } from '../services/rxjsinterval.service';

export const fadeIn = animation([
  style({ 'opacity': '0'}),
  animate('2s', style({ 'opacity': '1'}))
]);

export const slideLeft = animation([
  style({ 'opacity': '0',transform: 'translate3d(-100%, 0, 0)'}),
  animate('500ms', style({ 'opacity': '1',transform: 'translate3d(0%, 0, 0)'}))
]);


export const scaleIn = animation([
  style({ 'opacity': '0', transform: "scale(0.5)" }), // start state
  animate(
    "2s cubic-bezier(0.785, 0.135, 0.15, 0.86)",
    style({ opacity: 1, transform: "scale(1)" })
  )
]);


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: [
    trigger('carouselAnimation', [
      //can use enter as
      transition('void => *', [
        useAnimation(fadeIn)
      ])
    ])
  ]
})
export class CarouselComponent implements OnInit {
  @Input() slides: IDocuments[];
  currentIndex: number = 0;
  interval: Subscription;
  counterValue: string;
  time=7


  constructor(private rxJsIntervalService: RxJsIntervalService) {}

  ngOnInit(): void {
    this.initInterval();
  }


  initInterval() {
    if (this.interval) {
      this.interval.unsubscribe();
    }
    this.interval = this.rxJsIntervalService.initCounter(this.time*10).subscribe((d) => {
      this.counterValue = d.counterValue + '%';
      if (d.counterValue === 100) {
        this.next();
      }
    });
  }


  next() {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.initInterval();

  }

  pre() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.initInterval();
    }else{
      this.currentIndex=this.slides.length-1;
    }
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
