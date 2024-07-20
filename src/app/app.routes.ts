import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardAdministratorComponent } from './views/dashboard/layout/dashboardadministrator/dashboardadministrator.component';

export const routes: Routes =[
    {path: '', redirectTo:'/inicio', pathMatch:'full'},
    {path: 'inicio', component:LandingPageComponent},
    { 
      path:'dashboard-administrador',
      component: DashboardAdministratorComponent,
      children: [
          {
              path:'graphics',
              loadComponent: () =>
                  import('./views/dashboard/pages/graphics/graphicsadmin/graphicsadmin.component').then(m => m.GraphicsAdminComponent),
              data: {
                  icon:'graphics',
                  title: 'graphics',
                  description: 'Pagina de graficos',
              },
          },
          {
              path:'users-admin',
              loadComponent: () =>
                  import('./views/dashboard/pages/users/users-admin/users-admin.component').then(m => m.UsersAdminComponent),
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
