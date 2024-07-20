import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardAdministratorComponent } from './views/dashboard/layout/dashboardadministrator/dashboardadministrator.component';

const routes: Routes =[
  {path: '', redirectTo:'/inicio', pathMatch:'full'},
  {path: 'inicio', component:LandingPageComponent},
  { 
    path:'dashboard-administrador',
    component: DashboardAdministratorComponent,
    children: [
        {
            path:'graphicsadmin',
            loadComponent: () =>
                import('./views/dashboard/pages/graphics/graphicsadmin/graphicsadmin.component').then(m => m.GraphicsAdminComponent),
            data: {
                icon:'graphics',
                title: 'graphicsadmin',
                description: 'Pagina de graficos administrador',
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
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
