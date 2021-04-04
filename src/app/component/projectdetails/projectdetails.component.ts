import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css'],
})
export class ProjectdetailsComponent implements OnInit {
  project$: Observable<any>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectsService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((d) => {
      this.getProjectById(d.id);
    });
  }
  getProjectById(id: string) {
    this.spinner.show();
    this.project$ = this.projectService
      .getProjectById(id)
      .pipe(tap(() => this.spinner.hide()));
  }
}
