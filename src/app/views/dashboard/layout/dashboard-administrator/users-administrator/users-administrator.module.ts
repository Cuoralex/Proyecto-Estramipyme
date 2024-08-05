import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersAdministratorComponent } from './users-administrator.component';
import { provideHttpClient } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: UsersAdministratorComponent,
    children: [
      {
        title: 'Creación de usuario',
        path: 'create',
        loadChildren: () => import('./create/create.module').then(m => m.CreateModule)
      },
      {
        title: 'Edición de usuario',
        path: 'edit',
        loadChildren: () => import('./edit/edit.module').then(m => m.EditModule)
      },
      {
        title: 'Visualización de usuario',
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers:[provideHttpClient()],
})
export class UsersAdministratorModule { }
