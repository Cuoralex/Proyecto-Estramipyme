import { Routes } from '@angular/router';

export const routes: Routes =[
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
