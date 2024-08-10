//Angular
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

//Proyecto
import { HeaderDashboardComponent } from '../header-dashboard/header-dashboard.component';
import { SidebarComponent } from "../../component/sidebar/sidebar.component";
import { FooterdashboardComponent } from "../footer-dashboard/footer-dashboard.component";
import { UsersAdministratorComponent } from './users-administrator/users-administrator.component';
import MetricsComponent from './metrics/metrics.component';


@Component({
  selector: 'app-dashboard-administrator',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HeaderDashboardComponent,
    SidebarComponent,
    FooterdashboardComponent,
    UsersAdministratorComponent,
    MetricsComponent
],
  templateUrl: './dashboard-administrator.component.html',
  styleUrls: ['./dashboard-administrator.component.scss'],
})

export class DashboardAdministratorComponent {
  isDashboard!: boolean;

  constructor(private router: Router){}

  ngOnInit(): void {
    this.checkRoute();
  }

  checkRoute(): void {
    const currentUrl = this.router.url;
    this.isDashboard = currentUrl === '/dashboard';
  }
  
  navigateToCreate() {
    this.router.navigate(['dashboard/users/create']);
  }
}

