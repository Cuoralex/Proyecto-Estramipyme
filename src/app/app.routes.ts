import { Routes } from '@angular/router';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FormComponent } from './views/form/form.component';
import { DashboardAdministratorComponent } from './views/dashboard/layout/dashboard-administrator/dashboard-administrator.component';


export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: LandingPageComponent },
  { path: 'iniciar-sesion', component: LoginComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'formulario', component: FormComponent },
 
  {
    path: 'dashboard-administrator',
    loadChildren:() => import('./views/dashboard/layout/dashboard-administrator/dashboard-administrator.module').then(m=>m.DashboardAdministratorModule)
  }
];
