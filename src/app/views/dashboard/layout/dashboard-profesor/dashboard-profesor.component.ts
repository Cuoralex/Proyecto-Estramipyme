//Angular
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

//Proyecto
import { HeaderDashboardComponent } from '../header-dashboard/header-dashboard.component';
import { SidebarComponent } from "../../component/sidebar/sidebar.component";
import { FooterdashboardComponent } from "../footer-dashboard/footer-dashboard.component";
import { UsersProfesorComponent } from './users-profesor/users-profesor.component';




@Component({
  selector: 'app-dashboard-administrator',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HeaderDashboardComponent,
    SidebarComponent,
    FooterdashboardComponent,
    UsersProfesorComponent
],
  templateUrl: './dashboard-profesor.component.html',
  styleUrls: ['./dashboard-profesor.component.scss'],
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

