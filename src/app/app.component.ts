import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardClientComponent } from './views/dashboard/layout/dashboard-client/dashboard-client.component';
import { DashboardAdministratorComponent } from './views/dashboard/layout/dashboard-administrator/dashboard-administrator.component';
import { SidebarComponent } from './views/dashboard/component/sidebar/sidebar.component';
import { NgxEchartsDirective } from 'ngx-echarts';

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
              NgxEchartsDirective,
              FooterComponent,
              SidebarComponent, 
              RegisterComponent]
})
export class AppComponent {
  routes = [
    {
      path: '/graphics-administrator',
      data: {
        description: 'Pagina de graficos administrador',
        icon: 'graphics',
        title: 'graphics-administrator'
      }
    },
    {
      path: '/users-administrator',
        data: {
          description: 'Pagina usuarios administrador',
          icon: 'users-administrator',
          title: 'users-administrator'
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

