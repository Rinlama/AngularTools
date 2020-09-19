import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';

interface IPicsum {
  author: string;
  download_url: string;
}

@Injectable({
  providedIn: 'root',
})
export class PicsumService {
  constructor(private httpClient: HttpClient) {}

  getPicsum(): Observable<string> {
    return this.httpClient
      .get('https://picsum.photos/v2/list?page=1&limit=1')
      .pipe(
        map((d: Array<IPicsum>) => {
          return d.map((picsum: IPicsum) => {
            return { author: picsum.author, download_url: picsum.download_url };
          });
        })
      )
      .pipe(mapTo('test'));
  }
}
