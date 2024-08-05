import { Component, OnInit } from '@angular/core';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';

@Component({
  selector: 'app-graphics-client',
  standalone: true,
  imports: [
    NgxEchartsDirective
  ],
  templateUrl: './graphics-client.component.html',
  styleUrl: './graphics-client.component.scss',
  providers:[provideEcharts()],
})

export default class GraphicsClientComponent implements OnInit {
  pieChartOptions: any = {};
  lineChartOptions: any = {};
  relojChartOptions: any = {};
  onChangeInput: any = {};
  chartOptions1: any = {};
  chartOptions2: any = {};
  chartOptions3: any = {};
  chartOptions4: any = {};
  
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
    this.chartOptions1 = {
      title: {
        text: 'Tráfico Web'
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        data: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Visitas',
          type: 'line',
          data: [120, 200, 150, 80, 70, 110, 130]
        },
        {
          name: 'Visitantes Únicos',
          type: 'line',
          data: [100, 180, 130, 60, 50, 90, 110]
        }
      ]
    };
    this.chartOptions2 = {
      title: {
        text: 'Comportamiento del Usuario'
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        data: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Duración Media de la Sesión',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20, 30]
        },
        {
          name: 'Tasa de Rebote',
          type: 'bar',
          data: [15, 25, 16, 20, 18, 30, 25]
        }
      ]
    };
    this.chartOptions3 = {
      title: {
        text: 'Conversiones'
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        data: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Tasa de Conversión',
          type: 'line',
          data: [5, 10, 15, 20, 25, 30, 35]
        },
        {
          name: 'Número de Conversiones',
          type: 'line',
          data: [50, 100, 150, 200, 250, 300, 350]
        }
      ]
    };
    this.chartOptions4 = {
      title: {
        text: 'Rendimiento del Contenido'
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        data: ['Página 1', 'Página 2', 'Página 3', 'Página 4', 'Página 5']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Páginas Vistas',
          type: 'bar',
          data: [100, 200, 150, 300, 250]
        },
        {
          name: 'Tasa de Salida',
          type: 'bar',
          data: [20, 15, 25, 10, 5]
        }
      ]
    };
  }
}
