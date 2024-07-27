import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderLandingpageComponent } from "./shared/header-landingpage/header-landingpage.component";
import { HeaderDashboardComponent } from "./views/dashboard/layout/header-dashboard/header-dashboard.component";
import { NavbarLandingpageComponent } from './shared/navbar-landingpage/navbar-landingpage.component';
import { RegisterComponent } from './components/register-users/register-users.component';
import { DashboardAdministratorComponent } from './views/dashboard/layout/dashboard-administrator/dashboard-administrator.component';
import { DashboardClientComponent } from './views/dashboard/layout/dashboard-client/dashboard-client.component';
import { DashboarManagerComponent } from './views/dashboard/layout/dashboard-manager/dashboard-manager.component';
import { FooterdashboardComponent } from './views/dashboard/layout/footer-dashboard/footer-dashboard.component';
import { FooterLandingpageComponent } from "./shared/footer-landingpage/footer-landingpage.component";
import { LoginComponent } from './components/login-M/login.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
    CommonModule,
    RouterOutlet,
    HeaderLandingpageComponent,
    HeaderDashboardComponent,
    NavbarLandingpageComponent,
    DashboardClientComponent,
    DashboarManagerComponent,
    DashboardAdministratorComponent,
    RegisterComponent,
    LoginComponent,
    FooterdashboardComponent,
    FooterLandingpageComponent
]
})
export class AppComponent {
  allowedRoutes = [
    '/inicio',
    '/inicio#about',
    '/inicio#services',
    '/inicio#plans',
    '/inicio#events',
    '/inicio#contacts',
    '/inicio#register'
  ];
//    ^ - Pertenece a fragments
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

    isLandingPage(): boolean {
      return this.allowedRoutes.some(route => this.router.url.includes(route));
    }

    
      trackByPath(index: number, route: any): string {
        return route.path;
      }
    
      optionClick(description: string) {
        console.log(`Option clicked: ${description}`);
      }

}

