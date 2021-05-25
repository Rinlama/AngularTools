import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AirlinesService {
  constructor(private httpclient: HttpClient) {}

  getAS(page: number): Observable<any> {
    return this.httpclient
      .get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`)
      .pipe(delay(2000));
  }
}
