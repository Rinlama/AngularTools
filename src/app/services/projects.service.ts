import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private httpclient: HttpClient) {}

  getProjectUsers(page: number): Observable<any> {
    return this.httpclient.get(`https://reqres.in/api/users?page=${page}`);
  }
}
