import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { ExcelReaderComponent } from "../../../../../services/excel-reader/excel-reader.component";

@Component({
  selector: 'app-graphics-administrator',
  standalone: true,
  imports: [
    CommonModule,
    NgxEchartsDirective,
    ExcelReaderComponent
],
  templateUrl: './graphics-administrator.component.html',
  styleUrl: './graphics-administrator.component.scss',
  providers:[provideEcharts()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class GraphicsAdministratorComponent implements OnInit {
 
  pieChartOptions: any = {};
  lineChartOptions: any = {};
  relojChartOptions: any = {};
  
  constructor() {}
  
  ngOnInit(): void {
    this.initializeCharts();
  }

  initializeCharts(): void {
    this.lineChartOptions = {
      title: {
        text: 'Patients'
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Patients admitted',
          type: 'line',
          data: [10, 2, 3, 6, 9, 17, 20, 10, 5, 2, 16]
        }
      ]
    };

    this.pieChartOptions = {
      title: {
        text: 'Diseases',
        left: 'center',
        top: 'middle'
      },
      tooltip: {
        trigger: 'item'
      },
      series: [
        {
          name: 'Diseases',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '30',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1, name: 'COVID 19', itemStyle: { color: '#eeeeee' } },
            { value: 2, name: 'HIV/AIDS', itemStyle: { color: '#393e46' } },
            { value: 3, name: 'EBOLA', itemStyle: { color: '#00adb5' } },
            { value: 4, name: 'DISPORA', itemStyle: { color: '#eeeeee' } },
            { value: 5, name: 'DIABETES', itemStyle: { color: '#506ef9' } }
          ]
        }
      ]
   };

    this.relojChartOptions = {
      tooltip: {},
      radar: {
        shape: 'polygon',
        indicator: [
          { name: 'Product Quality', max: 10 },
          { name: 'Customer Satisfaction', max: 10 },
          { name: 'Market Share', max: 10 },
          { name: 'Innovation', max: 10 },
          { name: 'Brand Strength', max: 10 }
        ],
        radius: '80%'
      },
      series: [{
        type: 'radar',
        data: [
          {
            value: [7, 8, 6, 9, 8], // Valores de ejemplo
            name: 'Current Position'
          }
        ]
      }]
    };
  }
}
