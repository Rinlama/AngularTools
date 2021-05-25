import {
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
export class AirlinesComponent implements OnInit {
  @ViewChildren('theLastList', { read: ElementRef })
  theLastList?: QueryList<ElementRef>;

  project$: Observable<any>;
  searchValue?: string;

  observer: any;

  currentPage: number = 1;
  totalPage: number;

  airlines: any;
  userSub: Subscription;

  constructor(
    private spinner: NgxSpinnerService,
    private as: AirlinesService
  ) {}

  ngOnInit(): void {
    this.intersectionObserver();
    this.getAS();
  }

  getAS() {
    this.spinner.show();
    this.userSub = this.as
      .getAS(this.currentPage)
      .pipe(
        tap(() => {
          this.spinner.hide();
        })
      )
      .subscribe((d) => {
        console.log(d);
        this.totalPage = d.totalPages;

        if (this.currentPage == 1) {
          this.airlines = d.data;
        } else {
          d.data.forEach((element: any) => {
            this.airlines?.push(element);
          });
        }
      });
  }
  ngAfterViewInit() {
    this.theLastList?.changes.subscribe((d) => {
      if (d.last) this.observer.observe(d.last.nativeElement);
    });
  }

  intersectionObserver() {
    const option = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (this.currentPage < this.totalPage) {
          this.currentPage++;
          this.getAS();
        }
      }
    }, option);
  }
}
