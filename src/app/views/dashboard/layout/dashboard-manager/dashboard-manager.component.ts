import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { SidebarComponent } from '../../component/sidebar/sidebar.component';
import { GraphicsClientComponent } from "../../pages/graphics/graphics-client/graphics-client.component";
import { UsersManagerComponent } from '../../pages/users/users-manager/users-manager.component';

@Component({
  selector: 'app-dashboard-client',
  standalone: true,
  imports: [
    CommonModule,
    NgxEchartsDirective,
    SidebarComponent,
    GraphicsClientComponent,
    UsersManagerComponent,
  ],
  templateUrl: './dashboard-manager.component.html',
  styleUrls: ['./dashboard-manager.component.scss'],
  providers:[provideEcharts()],
})
export class DashboarManagerComponent {
  userLoginOn: boolean = true;
}
