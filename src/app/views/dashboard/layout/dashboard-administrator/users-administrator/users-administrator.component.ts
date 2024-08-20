import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from '../users-administrator/create/create.component';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-users-administrator',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    CreateComponent,
    EditComponent,
    HomeComponent

  ],
  templateUrl: './users-administrator.component.html',
  styleUrl: './users-administrator.component.scss',

})
export class UsersAdministratorComponent{
  
}