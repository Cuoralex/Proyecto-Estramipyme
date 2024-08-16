import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../../../services/user-administrator.service';
import { Users } from '../../../../../../models/user-administrator.model';
import { FormsModule } from '@angular/forms';
import { EditComponent } from '../edit/edit.component';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    EditComponent,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  allusers: Users[] = [];
  
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getAll().subscribe({
      next: (data) => {
        this.allusers = data;
        console.log('Datos compartidos', data);
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      }
    });
  }

  confirmDelete(id: number): void {
    const confirmed = window.confirm('¿Estás seguro de que deseas eliminar este usuario?');
    if (confirmed) {
      this.deleteItem(id);
    }
  }
  
  deleteItem(id: number): void {
    this.userService.delete(id).subscribe({
      next: () => {
        this.allusers = this.allusers.filter(user => user.id !== id);
      },
      error: (err) => {
        console.error('Error deleting user:', err);
      }
    });
  }

  navigateToCreate(): void {
    this.router.navigate(['dashboard/users/create']);
  }
}