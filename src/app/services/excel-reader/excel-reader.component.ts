import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-excel-reader',
  templateUrl: './excel-reader.component.html',
  styleUrls: ['./excel-reader.component.scss']
})
export class ExcelReaderComponent {
  
  jsonData: any[] = [];

  constructor() {}

  readExcelFile(event: any): void {
    console.log('readExcelFile triggered');
    const file = event.target.files[0];
    if (file) {
      console.log('File selected:', file);
      const reader = new FileReader();
      reader.onload = (e: any) => {
        console.log('FileReader onload triggered');
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        this.jsonData = XLSX.utils.sheet_to_json(sheet);
        console.log(this.jsonData);
      };
      reader.readAsArrayBuffer(file);
    } else {
      console.error('No file selected.');
    }
  }
}
