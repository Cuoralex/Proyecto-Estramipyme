import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MetricsService } from '../../../../services/metrics.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-metrics',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, // Import FormsModule para usar [(ngModel)]
  ],
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MetricsComponent implements OnInit {
  metrics: any[] = [];
  filteredMetrics: any[] = [];
  metricsSubscription: any;
  searchTerm: string = '';

  constructor(private metricsService: MetricsService) {}

  ngOnInit(): void {
    this.mostrar();
  }

  trackByName(index: number, metric: any): string {
    return metric.name;
  }

  trackByValue(index: number, metric: any): number {
    return metric.value;
  }

  mostrar(): void {
    this.metricsSubscription = this.metricsService.getMetrics().subscribe({
      next: (data) => {
        console.log('Datos recibidos: ', data);
        this.metrics = data;
        this.filteredMetrics = data; // Actualiza la lista filtrada también
      },
      error: (error) => {
        console.error('Error al obtener las métricas: ', error);
      }
    });
  }

  // filterMetrics(): void {
  //   this.filteredMetrics = this.metrics.filter(metric =>
  //     metric.name.toLowerCase().includes(this.searchTerm.toLowerCase())
  //   );
  // }

  sortMetrics(by: string): void {
    this.filteredMetrics = [...this.filteredMetrics].sort((a, b) => {
      if (a[by] < b[by]) return -1;
      if (a[by] > b[by]) return 1;
      return 0;
    });
  }
  }

