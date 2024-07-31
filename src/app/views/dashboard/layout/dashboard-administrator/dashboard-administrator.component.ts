//Angular
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
//Proyecto
import { GlobalComponent } from "../global/global.component";
import { HeaderDashboardComponent } from '../header-dashboard/header-dashboard.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import GraphicsAdministratorComponent from "../../pages/graphics/graphics-administrator/graphics-administrator.component";
import UsersAdministratorComponent from "../../pages/users/users-administrator/users-administrator.component";
import { SidebarComponent } from "../../component/sidebar/sidebar.component";
import { FooterdashboardComponent } from "../footer-dashboard/footer-dashboard.component";
import MetricsComponent from '../../pages/metrics/metrics.component';
import { MainComponent } from "../main/main.component";
import EventsComponent from "../../../../components/events/events.component";


@Component({
  selector: 'app-dashboard-administrator',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    NgxEchartsDirective,
    GlobalComponent,
    MenuComponent,
    HeaderDashboardComponent,
    GraphicsAdministratorComponent,
    UsersAdministratorComponent,
    SidebarComponent,
    FooterdashboardComponent,
    MetricsComponent,
    MainComponent,
    EventsComponent
],
  templateUrl: './dashboard-administrator.component.html',
  styleUrls: ['./dashboard-administrator.component.scss'],
  providers:[provideEcharts()],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DashboardAdministratorComponent implements OnInit {
  

  constructor() {}

  ngOnInit(): void {
    
  }
}
