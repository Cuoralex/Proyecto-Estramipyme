import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

const routes: Routes = [
  // { path: '', redirectTo:'home', pathMatch:'full'},
  {
    title: 'Creación de usuario',
    path: 'create',
    loadChildren: () => import('./create/create.module').then(m => m.CreateModule)
  },
  {
    title: 'Edición de usuario',
    path: 'edit/:id',
    loadChildren: () => import('./edit/edit.module').then(m => m.EditModule)
  },
  {
    title: 'Visualización de usuario',
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
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
