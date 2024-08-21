import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-users-profesor',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    CreateComponent,
    EditComponent,
    HomeComponent

  ],
  templateUrl: './users-profesor.component.html',
  styleUrl: './users-profesor.component.scss',

})
export class UsersProfesorComponent{
  
}