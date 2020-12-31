import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITask, ITaskType, ITaskCount } from '../interface/task.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private httpClient: HttpClient) {}

  getTaskList(): Observable<Array<ITask>> {
    return this.httpClient
      .get('http://localhost:8080/api/v1/task')
      .pipe(map((data: Array<ITask>) => data));
  }
  getTaskById(id: string): Observable<ITask> {
    return this.httpClient
      .get(`http://localhost:8080/api/v1/task/${id}`)
      .pipe(map((data: ITask) => data));
  }
  updateTask(id: string, task: ITask): Observable<ITask> {
    return this.httpClient
      .put(`http://localhost:8080/api/v1/task/${id}`, task)
      .pipe(map((data: ITask) => data));
  }
  deleteTask(id: string): Observable<ITask> {
    return this.httpClient
      .delete(`http://localhost:8080/api/v1/task/${id}`)
      .pipe(map((data: ITask) => data));
  }
  addTask(task: ITask): Observable<ITask> {
    return this.httpClient
      .post(`http://localhost:8080/api/v1/task/`, task)
      .pipe(map((data: ITask) => data));
  }

  getTypes(): Array<ITaskType> {
    return [{ type: 'done' }, { type: 'todo' }, { type: 'pending' }];
  }
  getTypeCount(): Observable<Array<ITaskCount>> {
    return this.httpClient
      .get(`http://localhost:8080/api/v1/task/vData/percentcounttype`)
      .pipe(map((data: Array<ITaskCount>) => data));
  }
}
