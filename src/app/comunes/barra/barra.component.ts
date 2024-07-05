import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-barra',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './barra.component.html',
  styleUrl: './barra.component.scss'
})
export class BarraComponent implements OnInit {
      userLoginOn:boolean=false;
      constructor () {}
      ngOnInit(): void {
          }
}