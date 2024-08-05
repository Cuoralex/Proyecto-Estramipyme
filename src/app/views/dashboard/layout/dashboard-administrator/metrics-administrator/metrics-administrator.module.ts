import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import MetricsAdministratorComponent from './metrics-administrator.component';

const routes: Routes = [
  {
    path: '',
    component: MetricsAdministratorComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MetricsAdministratorModule { }
