import { Component, OnInit } from '@angular/core';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';

@Component({
  selector: 'app-metrics',
  standalone: true,
  imports: [NgxEchartsDirective],
  templateUrl: './metrics.component.html',
  styleUrl: './metrics.component.scss',
  providers: [provideEcharts()],
})
export default class MetricsComponent implements OnInit {
  trafficChartOptions: any = {}; // Tráfico del Sitio Web
  bounceRateChartOptions: any = {}; // Tasa de Rebote
  timeOnSiteChartOptions: any = {}; // Tiempo en el Sitio
  pagesPerSessionChartOptions: any = {}; // Páginas por Sesión
  conversionRateChartOptions: any = {}; // Tasa de Conversión
  cpaChartOptions: any = {}; // Coste por Adquisición
  roiChartOptions: any = {}; // Retorno sobre la Inversión
  ctrChartOptions: any = {}; // Tasa de Click-Through
  clvChartOptions: any = {}; // Valor de Vida del Cliente
  cartAbandonmentChartOptions: any = {}; // Tasa de Abandono del Carrito
  pageLoadSpeedChartOptions: any = {}; // Velocidad de Carga del Sitio
  emailConversionRateChartOptions: any = {}; // Tasa de Conversión de Email
  socialEngagementChartOptions: any = {}; // Engagement en Redes Sociales
  trafficSourceChartOptions: any = {}; // Origen del Tráfico
  retentionRateChartOptions: any = {}; // Tasa de Retención

  constructor() {}

  ngOnInit(): void {
    this.initializeCharts();
  }

  initializeCharts(): void {
    // Tráfico del Sitio Web
    this.trafficChartOptions = {
      title: { text: 'Tráfico Web' },
      tooltip: { trigger: 'axis' },
      xAxis: {
        type: 'category',
        data: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
      yAxis: { type: 'value' },
      series: [
        {
          name: 'Visitantes',
          type: 'line',
          data: [120, 200, 150, 80, 70, 110, 130, 140, 120, 90, 100, 110],
        },
        {
          name: 'Visitantes Únicos',
          type: 'line',
          data: [100, 180, 130, 60, 50, 90, 110, 130, 140, 110, 120, 130],
        },
      ],
    };

    // Tasa de Rebote
    this.bounceRateChartOptions = {
      title: { text: 'Tasa de Rebote' },
      tooltip: { trigger: 'axis' },
      xAxis: {
        type: 'category',
        data: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
      yAxis: { type: 'value' },
      series: [
        {
          name: 'Tasa de Rebote (%)',
          type: 'bar',
          data: [40, 42, 38, 45, 50, 48, 46, 45, 43, 47, 49, 50],
        },
      ],
    };

    // Tiempo en el Sitio
    this.timeOnSiteChartOptions = {
      title: { text: 'Tiempo en el Sitio (min)' },
      tooltip: { trigger: 'axis' },
      xAxis: {
        type: 'category',
        data: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
      yAxis: { type: 'value' },
      series: [
        {
          name: 'Tiempo Medio',
          type: 'line',
          data: [5, 6, 6.5, 7, 7.5, 7, 6.8, 6.9, 7.1, 7.3, 7.5, 7.8],
        },
      ],
    };

    // Páginas por Sesión
    this.pagesPerSessionChartOptions = {
      title: { text: 'Páginas por Sesión' },
      tooltip: { trigger: 'axis' },
      xAxis: {
        type: 'category',
        data: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
      yAxis: { type: 'value' },
      series: [
        {
          name: 'Páginas',
          type: 'bar',
          data: [3, 3.5, 4, 4.2, 4.5, 4.7, 4.8, 5, 5.1, 5.2, 5.3, 5.4],
        },
      ],
    };

    // Tasa de Conversión
    this.conversionRateChartOptions = {
      title: { text: 'Tasa de Conversión (%)' },
      tooltip: { trigger: 'axis' },
      xAxis: {
        type: 'category',
        data: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
      yAxis: { type: 'value' },
      series: [
        {
          name: 'Tasa de Conversión',
          type: 'line',
          data: [1, 2, 3, 4, 5, 6, 7, 8, 8.5, 9, 9.5, 10],
        },
      ],
    };

    // Coste por Adquisición
    this.cpaChartOptions = {
      title: { text: 'Coste por Adquisición ($)' },
      tooltip: { trigger: 'axis' },
      xAxis: {
        type: 'category',
        data: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
      yAxis: { type: 'value' },
      series: [
        {
          name: 'CPA',
          type: 'bar',
          data: [30, 28, 25, 24, 22, 21, 20, 19, 18, 17, 16, 15],
        },
      ],
    };

    // Retorno sobre la Inversión
    this.roiChartOptions = {
      title: { text: 'Retorno sobre la Inversión (%)' },
      tooltip: { trigger: 'axis' },
      xAxis: {
        type: 'category',
        data: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
      yAxis: { type: 'value' },
      series: [
        {
          name: 'ROI',
          type: 'line',
          data: [10, 12, 14, 15, 17, 18, 20, 22, 23, 24, 26, 28],
        },
      ],
    };

    // Tasa de Click-Through
    this.ctrChartOptions = {
      title: { text: 'Tasa de Click-Through (%)' },
      tooltip: { trigger: 'axis' },
      xAxis: {
        type: 'category',
        data: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
      yAxis: { type: 'value' },
      series: [
        {
          name: 'CTR',
          type: 'line',
          data: [1.5, 1.8, 2, 2.1, 2.5, 2.7, 3, 3.2, 3.5, 3.8, 4, 4.2],
        },
      ],
    };

    // Valor de Vida del Cliente
    this.clvChartOptions = {
      title: { text: 'Valor de Vida del Cliente ($)' },
      tooltip: { trigger: 'axis' },
      xAxis: {
        type: 'category',
        data: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
      yAxis: { type: 'value' },
      series: [
        {
          name: 'CLV',
          type: 'line',
          data: [500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050],
        },
      ],
    };

    // Tasa de Abandono del Carrito
    this.cartAbandonmentChartOptions = {
      title: { text: 'Tasa de Abandono del Carrito (%)' },
      tooltip: { trigger: 'axis' },
      xAxis: {
        type: 'category',
        data: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
      yAxis: { type: 'value' },
      series: [
        {
          name: 'Abandono del Carrito',
          type: 'line',
          data: [50, 52, 54, 53, 55, 56, 57, 58, 59, 60, 62, 64],
        },
      ],
    };

    // Velocidad de Carga del Sitio
    this.pageLoadSpeedChartOptions = {
      title: { text: 'Velocidad de Carga del Sitio (s)' },
      tooltip: { trigger: 'axis' },
      xAxis: {
        type: 'category',
        data: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
      yAxis: { type: 'value' },
      series: [
        {
          name: 'Velocidad de Carga',
          type: 'line',
          data: [2, 2.1, 2.2, 2.3, 2.1, 2, 1.9, 1.8, 1.8, 1.9, 2, 2.1],
        },
      ],
    };

    // Tasa de Conversión de Email
    this.emailConversionRateChartOptions = {
      title: { text: 'Tasa de Conversión de Email (%)' },
      tooltip: { trigger: 'axis' },
      xAxis: {
        type: 'category',
        data: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
      yAxis: { type: 'value' },
      series: [
        {
          name: 'Conversión de Email',
          type: 'line',
          data: [2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5],
        },
      ],
    };

    // Engagement en Redes Sociales
    this.socialEngagementChartOptions = {
      title: { text: 'Engagement en Redes Sociales' },
      tooltip: { trigger: 'axis' },
      xAxis: {
        type: 'category',
        data: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
      yAxis: { type: 'value' },
      series: [
        {
          name: 'Interacciones',
          type: 'bar',
          data: [
            500, 600, 700, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200,
          ],
        },
      ],
    };

    // Origen del Tráfico
    this.trafficSourceChartOptions = {
      title: { text: 'Origen del Tráfico' },
      tooltip: { trigger: 'item' },
      series: [
        {
          name: 'Origen del Tráfico',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 335, name: 'Orgánico' },
            { value: 310, name: 'Pagado' },
            { value: 234, name: 'Referido' },
            { value: 135, name: 'Social' },
            { value: 1548, name: 'Directo' },
          ],
        },
      ],
    };

    // Tasa de Retención
    this.retentionRateChartOptions = {
      title: { text: 'Tasa de Retención (%)' },
      tooltip: { trigger: 'axis' },
      xAxis: {
        type: 'category',
        data: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
      yAxis: { type: 'value' },
      series: [
        {
          name: 'Tasa de Retención',
          type: 'line',
          data: [50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72],
        },
      ],
    };
  }
}
