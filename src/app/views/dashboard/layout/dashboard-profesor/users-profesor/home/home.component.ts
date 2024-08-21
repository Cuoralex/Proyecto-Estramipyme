import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../../../services/user-administrator.service';
import { Users } from '../../../../../../models/user-administrator.model';
import { FormsModule } from '@angular/forms';
import { EditComponent } from '../edit/edit.component';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
user: any;
  
  constructor(private userService: UserService, private router: Router, private httpClient: HttpClient) {}

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
    const confirmed = window.confirm('¿Estás seguro de que deseas eliminar definitivamente este usuario?');
    if (confirmed) {
    this.userService.delete(id).subscribe({
      next: () => {
        this.allusers = this.allusers.filter(user => user.id !== id);
      },
      error: (err) => {
        console.error('Error deleting user:', err);
      }
    });
  }
  }
  
  toggleUserStatus(user: any): void {
    this.httpClient.get(`http://localhost:3000/users/${user.id}`)
      .subscribe((existingUser: any) => {
        // Copia los campos del usuario existente y solo cambia el estado de activación
        const updatedUser = { ...existingUser, isActive: !user.isActive };
  
        // Luego envía todos los campos del usuario actualizado al backend
        this.httpClient.put(`http://localhost:3000/users/${user.id}`, updatedUser)
          .subscribe({
            next: () => console.log(`El estado del usuario ha sido actualizado a: ${updatedUser.isActive}`),
            error: (err) => console.error('Error al actualizar el estado del usuario', err)
          });
      });
  }
  

  navigateToCreate(): void {
    this.router.navigate(['dashboard/users/create']);
  }
}