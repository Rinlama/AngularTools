import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'toolsets';
  html = '';

  readExcel(evt: any) {
    const target: DataTransfer = evt.target as DataTransfer;

    if (target.files.length !== 1) throw new Error('Cannot use multiple files');

    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      const bstr: string = e.target.result;

      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      const wsname: string = wb.SheetNames[0];

      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      //  console.log(ws);
      const data = XLSX.utils.sheet_to_json(ws);
      console.log(data);
    };

    reader.readAsBinaryString(target.files[0]);
  }

  createExcel() {
    const data = [{ name: 'test', subject: 'he' }];
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const workbook: XLSX.WorkBook = {
      Sheets: { data: worksheet },
      SheetNames: ['test'],
    };
    const excelBuffer: any = XLSX.write(workbook, {
      bookType: 'xlsx',
      bookSST: false,
      type: 'array',
    });
    console.log(excelBuffer);
    const blobData: Blob = new Blob([excelBuffer], {
      type:
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel',
    });

    console.log(blobData);
    // FileSaver.saveAs(blobData, 'trst_export_.xlsx');
  }
}
