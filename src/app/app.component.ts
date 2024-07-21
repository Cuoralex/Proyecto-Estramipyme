import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderLandingpageComponent } from "./shared/header-landingpage/header-landingpage.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardClientComponent } from './views/dashboard/layout/dashboard-client/dashboard-client.component';
import { DashboardAdministratorComponent } from './views/dashboard/layout/dashboard-administrator/dashboard-administrator.component';
import { SidebarComponent } from './views/dashboard/component/sidebar/sidebar.component';
import { NgxEchartsDirective } from 'ngx-echarts';
import { HeaderDashboardComponent } from "./views/dashboard/layout/headerdashboard/headerdashboard.component";
import { FoooterdashboardComponent } from "./views/dashboard/layout/foooterdashboard/foooterdashboard.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
    CommonModule,
    RouterOutlet,
    HeaderLandingpageComponent,
    NavbarComponent,
    DashboardClientComponent,
    DashboardAdministratorComponent,
    NgxEchartsDirective,
    FooterComponent,
    SidebarComponent,
    RegisterComponent, 
    HeaderDashboardComponent, 
    FoooterdashboardComponent]
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
          icon: 'users-administrator',
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

