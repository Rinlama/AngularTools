import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'toolsets';

  constructor(private httpClient: HttpClient) {}

  uploadMultiple(event: any) {
    const files: FileList = event.target.files;

    const formdata = new FormData();

    for (let index = 0; index < files.length; index++) {
      const element = files[index];
      formdata.append('files', element);
    }

    this.httpClient
      .post('http://localhost:4000/multifiles', formdata)
      .subscribe(
        (d) => {
          console.log(d);
        },
        (error) => {
          console.error(error);
        }
      );
  }

  upload(event: any) {
    const file = event.target.files[0];

    const formdata = new FormData();
    formdata.append('file', file);

    this.httpClient.post('http://localhost:4000/file', formdata).subscribe(
      (d) => {
        console.log(d);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
