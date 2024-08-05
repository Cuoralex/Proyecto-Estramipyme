//Angular
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

//Proyecto
import { HeaderDashboardComponent } from '../header-dashboard/header-dashboard.component';
import { SidebarComponent } from "../../component/sidebar/sidebar.component";
import { FooterdashboardComponent } from "../footer-dashboard/footer-dashboard.component";
import { UsersAdministratorComponent } from './users-administrator/users-administrator.component';

@Component({
  selector: 'app-dashboard-administrator',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HeaderDashboardComponent,
    SidebarComponent,
    FooterdashboardComponent,
    UsersAdministratorComponent    
],
  templateUrl: './dashboard-administrator.component.html',
  styleUrls: ['./dashboard-administrator.component.scss'],
})

export class DashboardAdministratorComponent {}
