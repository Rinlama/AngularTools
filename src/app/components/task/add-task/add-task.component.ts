import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ITaskType, ITask } from 'src/app/interface/task.interface';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  task: ITask;
  taskForm: FormGroup;
  enabledEdit: boolean = false;
  taskTypes: Array<ITaskType> = [];

  constructor(
    private taskService: TaskService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      dueDate: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.taskTypes = this.taskService.getTypes();
  }
  addTask() {
    this.taskService.addTask(this.taskForm.value).subscribe(
      (d) => {
        console.log(d);
        this.router.navigateByUrl('/');
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
