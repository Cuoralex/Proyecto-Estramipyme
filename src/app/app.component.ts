import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderLandingpageComponent } from "./shared/header-landingpage/header-landingpage.component";
import { FooterLandingpageComponent } from "./shared/footer-landingpage/footer-landingpage.component";
import { RegisterComponent } from './components/register/register.component';
import { DashboardAdministratorComponent } from './views/dashboard/layout/dashboard-administrator/dashboard-administrator.component';
import { SidebarComponent } from './views/dashboard/component/sidebar/sidebar.component';
import { NgxEchartsDirective } from 'ngx-echarts';
import { HeaderDashboardComponent } from "./views/dashboard/layout/header-dashboard/header-dashboard.component";
import { CommonModule } from '@angular/common';
import { FooterdashboardComponent } from './views/dashboard/layout/footer-dashboard/footer-dashboard.component';
import { DashboardClientComponent } from './views/dashboard/layout/dashboard-client/dashboard-client.component';
import { DashboarManagerComponent } from './views/dashboard/layout/dashboard-manager/dashboard-manager.component';
import { NavbarLandingpageComponent } from './shared/navbar-landingpage/navbar-landingpage.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
    CommonModule,
    RouterOutlet,
    HeaderLandingpageComponent,
    NavbarLandingpageComponent,
    DashboardClientComponent,
    DashboarManagerComponent,
    DashboardAdministratorComponent,
    NgxEchartsDirective,
    FooterLandingpageComponent,
    SidebarComponent,
    RegisterComponent,
    HeaderDashboardComponent,
    FooterdashboardComponent,
    FooterLandingpageComponent
]
})
export class AppComponent {
  constructor(private router:Router){}
  
  routes = [
    {
      path: '/graphics-administrator',
      data: {
        description: 'graphics-administrador',
        icon: 'graphics',
        title: 'graphics-administrator'
      }
    },
    {
      path: '/users-administrator',
        data: {
          description: 'users-administrador',
          icon: 'users',
          title: 'users-administrator'
        }
      }
    ];

      isLandingPage(): boolean{
        return this.router.url==='/inicio'
      }

    
      trackByPath(index: number, route: any): string {
        return route.path;
      }
    
      optionClick(description: string) {
        console.log(`Option clicked: ${description}`);
      }

}

