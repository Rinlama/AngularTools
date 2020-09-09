import {
  Directive,
  OnChanges,
  SimpleChanges,
  HostListener,
} from '@angular/core';
import * as XLSX from 'xlsx';
import { Observable, Subscriber } from 'rxjs';

@Directive({
  selector: '[appReadexcel]',
  exportAs: 'readExcel',
})
export class ReadexcelDirective {
  public parseExcelData;

  constructor() {}

  @HostListener('change', ['$event.target'])
  onChange(target: HTMLInputElement) {
    const file = target.files[0];

    this.parseExcelData = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);

    fileReader.onload = (e) => {
      const bufferArray = e.target.result;

      const wb: XLSX.WorkBook = XLSX.read(bufferArray, { type: 'buffer' });

      const wsname: string = wb.SheetNames[0];

      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      const data = XLSX.utils.sheet_to_json(ws);

      subscriber.next(data);
      subscriber.complete();
      file = null;
    };
  }
}
