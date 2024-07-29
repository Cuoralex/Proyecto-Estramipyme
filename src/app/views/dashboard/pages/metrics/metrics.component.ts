import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MetricsService } from '../../../../services/metrics.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-metrics',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MetricsComponent implements OnInit {
  metrics: any[] = [];
  metricsSubscription: Subscription | undefined;
  getMetrics: any;

  constructor(private metricsService: MetricsService) { }

     ngOnInit(): void {
       console.log('mostrar datos en consola');
       this.metricsSubscription = this.metricsService.getMetrics().subscribe(data => {
         console.log('Datos recibidos: ', data);
         this.metrics = data;
       },
       error => {
         console.error('Error al obtener las métricas: ', error);
       });
     }

     ngOnDestroy(): void {
       if (this.metricsSubscription) {
         this.metricsSubscription.unsubscribe();
       }
     }
   }
