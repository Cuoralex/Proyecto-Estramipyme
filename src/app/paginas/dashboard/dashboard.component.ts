import { Component } from '@angular/core';
import { BarraComponent } from '../../comunes/barra/barra.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BarraComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
