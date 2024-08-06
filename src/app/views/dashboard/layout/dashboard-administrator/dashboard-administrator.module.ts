import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardAdministratorComponent } from './dashboard-administrator.component';
import { UsersAdministratorComponent } from './users-administrator/users-administrator.component';

const routes: Routes= [
  { path: '', redirectTo:'dashboard/users-administrator', pathMatch:'full'},
  {
    path: 'dashboard',
    component: DashboardAdministratorComponent,
    children: [
      { path: '', redirectTo:'users-administrator', pathMatch:'full'},
      {
      title: 'Usuarios',
      path: 'users-administrator',
      loadChildren: ()=> import('./users-administrator/users-administrator.module').then(m=>m.UsersAdministratorModule) 
      },
  ]
}]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UsersAdministratorComponent
  ],
})
export class DashboardAdministratorModule { }