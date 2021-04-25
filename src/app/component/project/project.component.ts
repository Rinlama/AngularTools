import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { ProjectsService } from 'src/app/services/projects.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit, AfterViewInit {
  @ViewChildren('theList', { read: ElementRef })
  theList: QueryList<ElementRef>;

  project$: Observable<any>;
  searchValue?: string;
  constructor(
    private spinner: NgxSpinnerService,
    private ps: ProjectsService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.project$ = this.ps.getProjects(1).pipe(
      tap(() => {
        this.spinner.hide();
      })
    );
  }
  ngAfterViewInit() {
    this.theList.changes.subscribe((next: QueryList<ElementRef>) => {
      const plot = next.first.nativeElement;
      console.log('listentForPlotChanges plot:', plot);
    });
  }
}
