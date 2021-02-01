import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private httpClient: HttpClient) {}

  getBooks(value): Observable<any> {
    return this.httpClient
      .get(`https://www.googleapis.com/books/v1/volumes?q=${value}`)
      .pipe(map((d: any) => d.items));
  }
}
