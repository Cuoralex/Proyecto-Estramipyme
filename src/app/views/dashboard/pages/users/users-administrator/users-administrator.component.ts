import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-users-administrator',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HomeComponent,
    CreateComponent,
    EditComponent
  ],
  templateUrl: './users-administrator.component.html',
  styleUrl: './users-administrator.component.scss',
})

export default class UsersAdministratorComponent {
  constructor(private router: Router) {}

  navigateToCreate() {
    this.router.navigate(['/users-dashboard/create']);
  }
}  
