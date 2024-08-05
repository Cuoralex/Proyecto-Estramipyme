import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardAdministratorComponent } from './dashboard-administrator.component';
import { provideHttpClient } from '@angular/common/http';
import { UsersAdministratorComponent } from './users-administrator/users-administrator.component';


const routes: Routes= [
  {
    path: '',
    component: DashboardAdministratorComponent,
    children: 
    [
      // {
      // title: 'Métricas-Administrador',
      // path: 'metrics-administrator',
      // loadChildren: ()=> import('./metrics-administrator/metrics-administrator.module').then(m=>m.MetricsAdministratorModule) 
      // },
      {
      title: 'Usuarios',
      path: 'users-administrator',
      loadChildren: ()=> import('./users-administrator/users-administrator.module').then(m=>m.UsersAdministratorModule) 
      },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers:[provideHttpClient()],
})
export class DashboardAdministratorModule { }