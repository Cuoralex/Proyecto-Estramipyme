import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/views/dashboard/dashboard.component';
import { LoginComponent } from './components/models/login/login.component';

const routes: Routes = [
      {path: '', redirectTo:'/inicio', pathMatch:'full'},
      {path: 'inicio', component:DashboardComponent},
      {path:'iniciar-sesion', component:LoginComponent}
     ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
