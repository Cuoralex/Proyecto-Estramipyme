import { Routes } from '@angular/router';
import { LoginComponent } from './components/models/login/login.component';
import { DashboardComponent } from './components/views/dashboard/dashboard.component';
import { RegisterComponent } from './components/views/register-users/register-users.component';
import { LoginUsersComponent } from './components/views/login-users/login-users.component';

export const routes: Routes = [
    {path: '', redirectTo:'/inicio', pathMatch:'full'},
    {path: 'dashboard', component:DashboardComponent},
    {path:'iniciar-sesion', component:LoginComponent},
    {path: 'register-users', loadComponent: () => import('./components/views/register-users/register-users.component').then(m => m.RegisterComponent) },
    {path: 'login-users', component:LoginUsersComponent },
    {path: 'dasboard',
        loadComponent: () => import('./components/shared/layout/layout.component'),
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./components/views/dashboard/dashboard.component').then(m => m.DashboardComponent)
            },
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

        ]
    },
];
