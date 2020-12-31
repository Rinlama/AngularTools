import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ITaskType, ITask } from 'src/app/interface/task.interface';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css'],
})
export class ShowTaskComponent implements OnInit {
  task: ITask;
  taskForm: FormGroup;
  enabledEdit: boolean = false;
  taskTypes: Array<ITaskType> = [];
  constructor(
    public dialogRef: MatDialogRef<ShowTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private taskService: TaskService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getTaskById();
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      dueDate: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.taskTypes = this.taskService.getTypes();
  }
  getTaskById() {
    this.taskService.getTaskById(this.data.id).subscribe(
      (d) => {
        const date = new Date(d.dueDate);
        this.taskForm.controls['title'].setValue(d.title);
        this.taskForm.controls['type'].setValue(d.type);
        this.taskForm.controls['dueDate'].setValue(date.toISOString());
        this.taskForm.controls['description'].setValue(d.description);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onUpdate() {
    this.taskService.updateTask(this.data.id, this.taskForm.value).subscribe(
      (d) => {
        this.dialogRef.close();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  removeTaskById() {
    this.taskService.deleteTask(this.data.id).subscribe(
      (d) => {
        this.dialogRef.close();
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
