//Angular
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { RouterOutlet } from '@angular/router';
//Proyecto
import { GlobalComponent } from "../global/global.component";
import { MenuComponent } from "../menu/menu.component";
import { HeaderLandingpageComponent } from "../../../../shared/header-landingpage/header-landingpage.component";


@Component({
  selector: 'app-dashboard-administrator',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    NgxEchartsDirective,
    GlobalComponent,
    MenuComponent,
    HeaderLandingpageComponent
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
