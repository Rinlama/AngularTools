import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private httpclient: HttpClient) {}

  getProjects(page: number): Observable<any> {
    return this.httpclient.get(
      `http://localhost/Laravel/Laravel_Youtube/public/api/projects?page=${page}`
    );
  }
  getProjectById(id: string): Observable<any> {
    return this.httpclient.get(
      `http://localhost/Laravel/Laravel_Youtube/public/api/projects/${id}`
    );
  }
}
