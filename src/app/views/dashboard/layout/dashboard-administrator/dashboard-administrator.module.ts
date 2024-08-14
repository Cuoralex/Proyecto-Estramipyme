import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardAdministratorComponent } from './dashboard-administrator.component';
import { UsersAdministratorComponent } from './users-administrator/users-administrator.component';
import MetricsComponent from './metrics/metrics.component';


const routes: Routes = [
  // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    component: DashboardAdministratorComponent,
    children: [
      // { path: '', redirectTo: 'users', pathMatch: 'full' },
      {
        title: 'Metricas',
        path: 'metrics',
        loadChildren: () =>
          import('./metrics/metrics.module').then(
            (m) => m.MetricsModule
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./users-administrator/users-administrator.module').then(
            (m) => m.UsersAdministratorModule
          ),
      },
      {
        path: 'events',
        loadChildren: () =>
          import('./events/events.module').then(
            (m) => m.EventsModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UsersAdministratorComponent,
    MetricsComponent,
  ],
})
export class DashboardAdministratorModule {}
