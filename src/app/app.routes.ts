import { Routes } from '@angular/router';
import { LoginComponent } from './components/models/login/login.component';
import { DashboardComponent } from './components/views/dashboard/dashboard.component';
import { LandingPageComponent } from './components/views/landing-page/landing-page.component';
import { RegisterComponent } from './components/models/register/register.component';

export const routes: Routes = [
  {path: '', redirectTo:'/landingpage', pathMatch:'full'},
  {path: 'inicio', component:LandingPageComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path:'iniciar-sesion', component:LoginComponent},
  {path:'registro', component:RegisterComponent},
    // {path: 'register', loadComponent: () => import('./components/views/register/register.component').then(m => m.RegisterComponent) },
    // {path: 'dashboard',
    //     loadComponent: () => import('./components/shared/layout/layout.component'),
    //     children: [
    //         {
    //             path: 'dashboard',
    //             loadComponent: () => import('./components/views/dashboard/dashboard.component').then(m => m.DashboardComponent)
    //         },
            // {
            //     path: 'profile',
            //     loadComponent: () => import('./components/profile/profile.component').then(m => m.ProfileComponent)
            // },
            // {
            //     path: 'tables',
            //     loadComponent: () => import('./business/tables/tables.component').then(m => m.TableComponent)
            // },
            // {
            //     path: '',
            //     redirectTo: 'dashboard',
            //     pathMatch: 'full'
            // }

//         ]
//     },
 ];
