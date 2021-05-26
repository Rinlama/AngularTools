import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AirlinesService } from 'src/app/services/airlines/airlines.service';

@Component({
  selector: 'app-airlines',
  templateUrl: './airlines.component.html',
  styleUrls: ['./airlines.component.css'],
})
export class AirlinesComponent implements OnInit, AfterViewInit {
  @ViewChildren('theLastList', { read: ElementRef })
  theLastList: QueryList<ElementRef>;

  alSub: Subscription;

  airlines: any = [];

  totalPages: number;
  currentPage: number = 0;

  observer: any;

  constructor(
    private alService: AirlinesService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.getAirlines();
    this.intersectionObserver();
  }

  ngAfterViewInit() {
    this.theLastList.changes.subscribe((d) => {
      console.log(d);
      if (d.last) this.observer.observe(d.last.nativeElement);
    });
  }

  getAirlines() {
    this.spinner.show();
    this.alSub = this.alService.getAS(this.currentPage).subscribe((d) => {
      this.spinner.hide();
      this.totalPages = d.totalPages;
      d.data.forEach((element) => {
        this.airlines.push(element);
      });
    });
  }

  intersectionObserver() {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
          this.getAirlines();
        }
      }
    }, options);
  }
}
