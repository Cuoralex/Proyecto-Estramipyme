import { Component, OnInit } from '@angular/core';
import { BarraComponent } from '../../comunes/barra/barra.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BarraComponent,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  userLoginOn:boolean=false;
    constructor () {}
    
   ngOnInit(): void {
    }
}
