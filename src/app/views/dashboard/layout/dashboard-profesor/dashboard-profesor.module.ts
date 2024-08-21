import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsersProfesorComponent } from './users-profesor/users-profesor.component';




const routes: Routes = [
  // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    component: UsersProfesorComponent,
    children: [
      // { path: '', redirectTo: 'users', pathMatch: 'full' },
      
      {
        path: 'users',
        loadChildren: () =>
          import('./users-profesor/users-profesor.module').then(
            (m) => m.UsersProfesorModule
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
    UsersProfesorComponent,
  ],
})
export class DashboardProfesorModule {}
