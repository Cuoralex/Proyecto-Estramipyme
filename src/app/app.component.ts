import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderLandingpageComponent } from './shared/header-landingpage/header-landingpage.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardAdministratorComponent } from './views/dashboard/layout/dashboard-administrator/dashboard-administrator.component';
import { FooterLandingpageComponent } from './shared/footer-landingpage/footer-landingpage.component';
import { LoginComponent } from './components/login/login.component';
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
    DashboardAdministratorComponent,
    RegisterComponent,
    LoginComponent,
    FooterLandingpageComponent,
  ],
})
export class AppComponent {
  allowedRoutes = [
    '/inicio',
    '/inicio#about',
    '/inicio#services',
    '/inicio#plans',
    '/inicio#events',
    '/inicio#contacts',
    '/inicio#register',
  ];
  //    ^ - Pertenece a fragments
  constructor(private router: Router) {}
}
