import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardAdministratorComponent } from './views/dashboard/layout/dashboard-administrator/dashboard-administrator.component';

const routes: Routes =[
  {path: '', redirectTo:'/inicio', pathMatch:'full'},
  {path: 'inicio', component:LandingPageComponent},
  { 
    path:'dashboard-administrador',
    component: DashboardAdministratorComponent,
    children: [
        {
            path:'graphics-administrator',
            loadComponent: () =>
                import('./views/dashboard/pages/graphics/graphics-administrator/graphics-administrator.component').then(m => m.GraphicsAdministratorComponent),
            data: {
                icon:'graphics',
                title: 'graphics-administrator',
                description: 'Pagina de graficos administrador',
            },
        },
        {
            path:'users-administrator',
            loadComponent: () =>
                import('./views/dashboard/pages/users/users-administrator/users-administrator.component').then(m => m.UsersAdministratorComponent),
            data: {
                icon:'users-administrator',
                title: 'users-administrator',
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
