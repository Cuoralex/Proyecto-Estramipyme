import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { RegisterComponent } from './components/register/register.component';
import { DbadministratorComponent } from './views/DB-administrator/DB-administrator.component';
import { EvaluationFormComponent } from './components/evaluation-form/evaluation-form.component';

export const routes: Routes = [
  {path: '', redirectTo:'/inicio', pathMatch:'full'},
  {path: 'inicio', component:LandingPageComponent},
  {path: 'dashboardAdmin', component:DbadministratorComponent},
  {path:'iniciar-sesion', component:LoginComponent},
  {path:'registro', component:RegisterComponent},
  {path: 'evaluacion', component:EvaluationFormComponent},
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
