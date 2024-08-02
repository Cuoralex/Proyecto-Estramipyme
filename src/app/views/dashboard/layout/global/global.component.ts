import { Component } from '@angular/core';
import { HeaderDashboardComponent } from "../header-dashboard/header-dashboard.component";
import { MenuComponent } from "../menu/menu.component";
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-global',
  standalone: true,
  imports: [
    CommonModule,
    HeaderDashboardComponent,
    MenuComponent,
    RouterOutlet],
  templateUrl: './global.component.html',
  styleUrl: './global.component.scss'
})

export class GlobalComponent {
userLoginOn: any;

}
