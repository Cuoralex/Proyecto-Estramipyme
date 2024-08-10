import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
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