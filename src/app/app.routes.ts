import { Routes } from '@angular/router';
import { LoginUsersComponent } from './components/login-users/login-users.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { RegisterComponent } from './components/register-users/register-users.component';
import { DashboardAdministratorComponent } from './views/dashboard/layout/dashboard-administrator/dashboard-administrator.component';
import { FormComponent } from './views/form/form.component';

export const routes: Routes =[
    {path: '', redirectTo:'/inicio', pathMatch:'full'},
    {path: 'inicio', component:LandingPageComponent},
    {path: 'iniciar-sesion', component:LoginComponent},
    {path:'registro', component:RegisterComponent},
    {path: 'form', component:FormComponent},
    { 
      path:'dashboard-administrador',
      component: DashboardAdministratorComponent,
      children: [
          {
              path:'graphics-administrator',
              loadComponent: () =>
                  import('./views/dashboard/pages/graphics/graphics-administrator/graphics-administrator.component'),
              data: {
                  icon:'graphics',
                  title: 'graphics-administrator',
                  description: 'graphics-administrator',
              },
          },
          {
              path:'users-administrator',
              loadComponent: () =>
                  import('./views/dashboard/pages/users/users-administrator/users-administrator.component'),
              data: {
                  icon:'users-administrator',
                  title: 'users-administrator',
                  description: 'users-administrador',
              },
          },
     ]
  },  
];