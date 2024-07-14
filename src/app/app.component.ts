import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/shared/header/header.component";
import { FooterComponent } from "./components/shared/footer/footer.component";
import { LoginComponent } from './components/models/login/login.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { DashboardComponent } from './components/views/dashboard/dashboard.component';
import LayoutComponent from './components/shared/layout/layout.component';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent,NavbarComponent,DashboardComponent, FooterComponent, LoginComponent, SidebarComponent, LayoutComponent]
})
export class AppComponent {
  title = 'Proyecto-Estramipyme';

  
}