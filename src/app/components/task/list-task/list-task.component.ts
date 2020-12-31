import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShowTaskComponent } from '../show-task/show-task.component';
import { TaskService } from '../../../services/task.service';
import { Observable, Subscription } from 'rxjs';
import { ITask } from '../../../interface/task.interface';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css'],
})
export class ListTaskComponent implements OnInit {
  tasks: Observable<Array<ITask>>;
  @Output() refreshChart: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public dialog: MatDialog, private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTaskList();
  }

  getTaskList() {
    this.tasks = this.taskService.getTaskList();
  }

  openTaskDialog(id): void {
    let dialogRef = this.dialog.open(ShowTaskComponent, {
      data: { id },
    });
    dialogRef.afterClosed().subscribe((d) => {
      this.getTaskList();
      this.refreshChart.emit(true);
    });
  }
}
