import { Routes } from '@angular/router';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardAdministratorComponent } from './views/dashboard/layout/dashboard-administrator/dashboard-administrator.component';

import { DashboardClientComponent } from './views/dashboard/layout/dashboard-client/dashboard-client.component';
import { LoginComponent } from './components/login/login.component';
import { FormComponent } from './views/form/form.component';
import { HomeComponent } from './views/dashboard/pages/users/users-administrator/home/home.component';
import { CreateComponent } from './views/dashboard/pages/users/users-administrator/create/create.component';
import { EditComponent } from './views/dashboard/pages/users/users-administrator/edit/edit.component';


// import { AuthGuard } from './guards/auth.guard';
// import { RoleGuard } from './guards/role.guard';
// import { Role } from './role.enum';

export const routes: Routes =[
    {path: '', redirectTo:'/inicio', pathMatch:'full'},
    {path: 'inicio', component:LandingPageComponent},
    {path: 'iniciar-sesion', component:LoginComponent},
    {path:'registro', component:RegisterComponent},
    {path: 'formulario', component:FormComponent},
    { path: 'users-dashboard/home', component: HomeComponent},
    { path: 'user', redirectTo: 'users-dashboard/home', pathMatch: 'full'},
    { path: '', redirectTo: 'users-dashboard/home', pathMatch: 'full'},
    { path: 'users-dashboard/create', component: CreateComponent},
    { path: 'users-dashboard/edit/:id', component: EditComponent },
    { 
      path:'dashboard-administrador',
      component: DashboardAdministratorComponent,
      children: [
          {
              path:'graphics-administrador',
              loadComponent: () =>
                  import('./views/dashboard/pages/graphics/graphics-administrator/graphics-administrator.component'),
              data: {
                  icon:'graphics',
                  title: 'graphics-administrador',
                  description: 'graphics-administrador',
              },
          },
          {
              path:'users-administrador',
              loadComponent: () =>
                  import('./views/dashboard/pages/users/users-administrator/users-administrator.component'),
              data: {
                  icon:'users-administrador',
                  title: 'users-administrador',
                  description: 'users-administrador',
              },
          },
            {
                path:'event',
                loadComponent: () =>
                    import('./views/dashboard/pages/events-administrator/events-administrator.component'),
                data: {
                    icon:'event',
                    title: 'event',
                    description: 'event',
                },
            },
            {
                path:'metrics',
                loadComponent: () =>
                    import('./views/dashboard/pages/metrics/metrics.component'),
                data: {
                    icon:'metrics',
                    title: 'metrics',
                    description: 'metrics',
                },
            },
     ]
  },  
//   { 
//     path:'dashboard-manager',
//     component: DashboardManagerComponent,
//     children: [
//         {
//             path:'users-manager',
//             loadComponent: () =>
//                 import('./views/dashboard/pages/users/users-manager/users-manager.component'),
//             data: {
//                 icon:'users-administrator',
//                 title: 'users-administrator',
//                 description: 'users-administrador',
//             },
//         },
//    ]
// },  
{ 
    path:'dashboard-client',
    component: DashboardClientComponent,
    children: [
        {
            path:'graphics-client',
            loadComponent: () =>
                import('./views/dashboard/pages/graphics/graphics-client/graphics-client.component'),
            data: {
                icon:'graphics',
                title: 'graphics-client',
                description: 'graphics-client',
            },
        },
   ]
},  
];