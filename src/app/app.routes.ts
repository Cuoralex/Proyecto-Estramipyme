import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardAdministratorComponent } from './views/dashboard/layout/dashboard-administrator/dashboard-administrator.component';

export const routes: Routes =[
    {path: '', redirectTo:'/inicio', pathMatch:'full'},
    {path: 'inicio', component:LandingPageComponent},
    { 
      path:'dashboard-administrador',
      component: DashboardAdministratorComponent,
      children: [
          {
              path:'graphics-',
              loadComponent: () =>
                  import('./views/dashboard/pages/graphics/graphics-administrator/graphics-administrator.component'),
              data: {
                  icon:'graphics',
                  title: 'Graficas',
                  description: 'Pagina de graficos',
              },
          },
          {
              path:'users-admin',
              loadComponent: () =>
                  import('./views/dashboard/pages/users/users-administrator/users-administrator.component'),
              data: {
                  icon:'users-admin',
                  title: 'users-admin',
                  description: 'Pagina usuarios administrador',
              },
          },
     ]
  },
    {path:'iniciar-sesion', component:LoginComponent},
    {path:'registro', component:RegisterComponent},
      
];
