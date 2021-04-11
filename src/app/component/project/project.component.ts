import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { ProjectsService } from 'src/app/services/projects.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  project$: Observable<any>;
  searchValue?: string;
  constructor(
    private spinner: NgxSpinnerService,
    private ps: ProjectsService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.project$ = this.ps.getProjects().pipe(tap(() => this.spinner.hide()));
  }
}
