//Angular
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

//Proyecto
import { HeaderDashboardComponent } from '../header-dashboard/header-dashboard.component';
import { SidebarComponent } from "../../component/sidebar/sidebar.component";
import { FooterdashboardComponent } from "../footer-dashboard/footer-dashboard.component";
import GraphicsClientComponent from "./graphics-client/graphics-client.component";

@Component({
  selector: 'app-dashboard-administrator',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HeaderDashboardComponent,
    SidebarComponent,
    FooterdashboardComponent,
    GraphicsClientComponent
],
  templateUrl: './dashboard-client.component.html',
  styleUrls: ['./dashboard-client.component.scss'],
})

export class DashboardclientComponent {
  isDashboard!: boolean;

  constructor(private router: Router){}

  ngOnInit(): void {
    this.checkRoute();
  }

  checkRoute(): void {
    const currentUrl = this.router.url;
    this.isDashboard = currentUrl === '/dashboard-client';
  }
}
