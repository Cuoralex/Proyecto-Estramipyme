import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { NavbarComponent } from '../../../../shared/navbar/navbar.component';
import { GlobalComponent } from "../global/global.component";
import { HeaderDashboardComponent } from "../headerdashboard/headerdashboard.component";
import { MenuComponent } from "../menu/menu.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-administrator',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    NgxEchartsDirective,
    GlobalComponent,
    HeaderDashboardComponent,
    NavbarComponent,
    MenuComponent
],
  templateUrl: './dashboard-administrator.component.html',
  styleUrls: ['./dashboard-administrator.component.scss'],
  providers:[provideEcharts()],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DashboardAdministratorComponent implements OnInit {
  userLoginOn: boolean = false;

  constructor() {}

  ngOnInit(): void {
    
  }
}
