import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { delay, retry, retryWhen, scan } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'toolsets';
  isBusy: Boolean = false;
  data: Array<string> = [];
  status: string = 'No data';

  constructor(private httpclient: HttpClient) {}

  getData() {
    const data = this.httpclient
      .get('https://baconipsum.coms/api/?type=meat-and-filler')
      .pipe(
        //retry(5)
        retryWhen((error) =>
          error.pipe(
            delay(1000),
            scan((retryCount) => {
              if (retryCount >= 5) {
                throw error;
              } else {
                retryCount = retryCount + 1;
              }
              this.status = 'Re-attempt ' + retryCount;
              return retryCount;
            }, 0)
          )
        )
      );
    data.subscribe(
      (res: Array<string>) => {
        this.status = 'success';
        this.data = res;
      },
      (error) => {
        this.status = 'Error ';
      }
    );
  }
}
