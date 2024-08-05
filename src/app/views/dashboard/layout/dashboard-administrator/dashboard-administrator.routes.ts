import { Routes } from '@angular/router';

export const routes: Routes =[
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
          // {
          //   title: 'Eventos-Administrador',
          //   path: 'events-administrator',
          //   loadChildren: ()=> import('./events-administrator/events-administrator.module').then(m=>m.EventsAdministratorModule) 
          //   },
        ];
