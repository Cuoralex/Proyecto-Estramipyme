import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { NavbarComponent } from './shared/navbar/navbar.component';

import { RegisterComponent } from './components/register/register.component';
import { DashboardClientComponent } from './views/dashboard/layout/dashboardclient/dashboardclient.component';
import { DashboardAdministratorComponent } from './views/dashboard/layout/dashboardadministrator/dashboardadministrator.component';
import { SidebarComponent } from './views/dashboard/component/sidebar/sidebar.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, 
              HeaderComponent,
              NavbarComponent,
              DashboardClientComponent,
              DashboardAdministratorComponent,
              FooterComponent,
              SidebarComponent, 
              RegisterComponent]
})
export class AppComponent {
  routes = [
    {
      path: '/graphics',
      data: {
        description: 'Home',
        icon: 'home',
        title: 'Home'
      }
    },
    {
      path: '/users',
        data: {
          description: 'About Us',
          icon: 'info',
          title: 'About'
        }
      }
    ];
  title: any;
      trackByPath(index: number, route: any): string {
        return route.path;
      }
    
      optionClick(description: string) {
        console.log(`Option clicked: ${description}`);
      }
}

