import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MetricsService } from '../../../../../services/metrics.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-metrics-administrator',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, // Import FormsModule para usar [(ngModel)]
  ],
  templateUrl: './metrics-administrator.component.html',
  styleUrls: ['./metrics-administrator.component.scss'],
})

export default class MetricsAdministratorComponent implements OnInit {
  // metrics: any[] = [];
  // filteredMetrics: any[] = [];
  // metricsSubscription: any;
  // searchTerm: string = '';

  chartOption: any;


  constructor(private metricsService: MetricsService) {}
 
  ngOnInit(): void {
    this.chartOption = {
      title: {
        text: 'Tráfico del Sitio Web'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Visitantes Únicos', 'Visitas Totales', 'Páginas Vistas', 'Visitantes Nuevos', 'Visitantes Recurrentes']
      },
      xAxis: {
        type: 'category',
        data: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Visitantes Únicos',
          type: 'line',
          data: [1000, 1500, 2000, 1800, 2300, 3000, 2500, 2700, 2900, 3100, 3300, 3500]
        },
        {
          name: 'Visitas Totales',
          type: 'line',
          data: [1500, 2000, 2500, 2300, 2800, 3500, 3000, 3200, 3400, 3600, 3800, 4000]
        },
        {
          name: 'Páginas Vistas',
          type: 'line',
          data: [2000, 2500, 3000, 2800, 3300, 4000, 3500, 3700, 3900, 4100, 4300, 4500]
        },
        {
          name: 'Visitantes Nuevos',
          type: 'line',
          data: [600, 700, 800, 750, 900, 1000, 850, 900, 950, 1000, 1050, 1100]
        },
        {
          name: 'Visitantes Recurrentes',
          type: 'line',
          data: [400, 800, 1200, 1050, 1400, 2000, 1600, 1800, 2000, 2100, 2250, 2400]
        }
      ]
    };
  }
}

  // ngOnInit(): void {
  //   this.mostrar();
  // }

  // trackByName(index: number, metric: any): string {
  //   return metric.name;
  // }

  // trackByValue(index: number, metric: any): number {
  //   return metric.value;
  // }

  // mostrar(): void {
  //   this.metricsSubscription = this.metricsService.getMetrics().subscribe({
  //     next: (data) => {
  //       console.log('Datos recibidos: ', data);
  //       this.metrics = data;
  //       this.filteredMetrics = data; // Actualiza la lista filtrada también
  //     },
  //     error: (error) => {
  //       console.error('Error al obtener las métricas: ', error);
  //     }
  //   });
  // }

  // // filterMetrics(): void {
  // //   this.filteredMetrics = this.metrics.filter(metric =>
  // //     metric.name.toLowerCase().includes(this.searchTerm.toLowerCase())
  // //   );
  // // }

  // sortMetrics(by: string): void {
  //   this.filteredMetrics = [...this.filteredMetrics].sort((a, b) => {
  //     if (a[by] < b[by]) return -1;
  //     if (a[by] > b[by]) return 1;
  //     return 0;
  //   });
  // }
  // }

