import { Routes } from '@angular/router';
import { LoginComponent } from './components/models/login/login.component';
import { DashboardComponent } from './components/views/dashboard/dashboard.component';

export const routes: Routes = [
    {path: '', redirectTo:'/inicio', pathMatch:'full'},
    {path: 'inicio', component:DashboardComponent},
    {path:'iniciar-sesion', component:LoginComponent},
    {path: '',
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
    {
        path: '**',
        redirectTo: 'dashboard'}
];