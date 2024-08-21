import { Routes } from '@angular/router';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { RegisternComponent } from './components/registern/registern.component';
import { LoginComponent } from './components/login/login.component';
import { FormComponent } from './views/form/form.component';



export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: LandingPageComponent },
  { path: 'iniciar-sesion', component: LoginComponent },
  { path: 'registro', component: RegisternComponent },
  { path: 'formulario', component: FormComponent },
 
  {
    path: 'dashboard',
    loadChildren:() => import('./views/dashboard/layout/dashboard-administrator/dashboard-administrator.module').then(m=>m.DashboardAdministratorModule)
  },
  {
    path: 'dashboard-profesor',
    loadChildren:() => import('./views/dashboard/layout/dashboard-profesor/dashboard-profesor.module').then(m=>m.DashboardProfesorModule)
  },
  {
    path: 'dashboard-client',
    loadChildren:() => import('./views/dashboard/layout/dashboard-client/dashboard-client.module').then(m=>m.DashboardClientModule)
  }
];
