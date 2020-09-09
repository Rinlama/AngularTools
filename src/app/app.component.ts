import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'toolsets';

  readExcel(evt: any) {
    const target: DataTransfer = evt.target as DataTransfer;

    if (target.files.length !== 1) throw new Error('Cannot use multiple files');

    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      const bstr: string = e.target.result;

      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      const wsname: string = wb.SheetNames[0];

      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      console.log(ws);
      //  console.log(ws);
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
      // console.log(data);
    };

    reader.readAsBinaryString(target.files[0]);
  }
}
