import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  projectForm?: FormGroup;
  editMode: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectsService,
    private spinner: NgxSpinnerService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.projectForm = this.formBuilder.group({
      project_name: [{ value: '', disabled: true }, Validators.required],
      consultant_name: [{ value: '', disabled: true }, Validators.required],
      github_link: [{ value: '', disabled: true }, Validators.required],
      video_link: [{ value: '', disabled: true }, Validators.required],
      description: [{ value: '', disabled: true }, Validators.required],
    });

    this.activatedRoute.params.subscribe((d) => {
      this.getProjectById(d.id);
    });
  }
  getProjectById(id: string) {
    this.spinner.show();
    this.projectService
      .getProjectById(id)
      .pipe(tap(() => this.spinner.hide()))
      .subscribe((data) => {
        for (const iterator of Object.keys(data)) {
          const isIncluded = Object.keys(this.projectForm.controls).includes(
            iterator
          );
          if (isIncluded)
            this.projectForm.controls[iterator].setValue(data[iterator]);
        }
      });
    this.projectForm.disable();
  }
  editModeToggle() {
    this.projectForm.enable();
    this.editMode = true;
  }
}
