import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-excel-reader',
  standalone: true,
  imports:[
    CommonModule
  ],
  templateUrl: './excel-reader.component.html',
  styleUrls: ['./excel-reader.component.css']
})
export class ExcelReaderComponent {
readExcelFile: any;
jsonData: any;
  onChangeInput(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const dataJson = XLSX.utils.sheet_to_json(sheet);
        console.log(dataJson);
        this.displayTable(dataJson);
      };
      reader.readAsArrayBuffer(file);
    } else {
      console.error('No file selected.');
    }
  }

  displayTable(data: any[]) {
    const tableContainer = document.getElementById('tableContainer');
    if (!tableContainer) {
      console.error('No se encontró el elemento con id "tableContainer".');
      return;
    }
    tableContainer.innerHTML = ''; // Clear any existing content

    if (data.length === 0) {
      tableContainer.innerHTML = '<p>No data available</p>';
      return;
    }

    const table = document.createElement('table');
    table.classList.add('min-w-full', 'bg-white'); // Add Tailwind classes for styling

    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Create table headers
    const headerRow = document.createElement('tr');
    Object.keys(data[0]).forEach(key => {
      const th = document.createElement('th');
      th.textContent = key;
      th.classList.add('py-2', 'px-4', 'bg-gray-200', 'border'); // Add Tailwind classes for styling
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    // Create table rows
    data.forEach(item => {
      const row = document.createElement('tr');
      Object.values(item).forEach(value => {
        const td = document.createElement('td');
        td.textContent = value as string;
        td.classList.add('py-2', 'px-4', 'border'); // Add Tailwind classes for styling
        row.appendChild(td);
      });
      tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    tableContainer.appendChild(table);
  }
}