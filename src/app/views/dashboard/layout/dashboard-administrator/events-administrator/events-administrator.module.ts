import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import EventsAdministratorComponent from './events-administrator.component';

const routes: Routes = [
  {
    path: '',
    component: EventsAdministratorComponent,
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
export class EventsAdministratorModule { }
