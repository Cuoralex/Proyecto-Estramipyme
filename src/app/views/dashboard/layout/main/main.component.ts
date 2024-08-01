import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import MetricsComponent from "../../pages/metrics/metrics.component";
import GraphicsAdministratorComponent from "../../pages/graphics/graphics-administrator/graphics-administrator.component";
import UsersAdministratorComponent from '../../pages/users/users-administrator/users-administrator.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    MetricsComponent,
    GraphicsAdministratorComponent,
    UsersAdministratorComponent
],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent { }
