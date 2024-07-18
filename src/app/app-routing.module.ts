import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/views/dashboard/dashboard.component';
import { LoginComponent } from './components/models/login/login.component';
import { LandingPageComponent } from './components/views/landing-page/landing-page.component';
import { RegisterComponent } from './components/models/register/register.component';

const routes: Routes = [
  {path: '', redirectTo:'/landingpage', pathMatch:'full'},
  {path: 'inicio', component:LandingPageComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path:'iniciar-sesion', component:LoginComponent},
  {path:'registro', component:RegisterComponent},
     ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
