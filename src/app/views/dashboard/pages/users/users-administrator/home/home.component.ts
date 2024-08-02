import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../../../services/user.service';
import { User } from '../../../../../../models/user.model';
import { FormsModule } from '@angular/forms';
import { EditComponent } from '../edit/edit.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    EditComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allusers: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAll().subscribe({
      next: (data) => {
        this.allusers = data;
      },
      error: (err) => {
        console.error('Error fetching fruits:', err);
      }
    });
  }

  deleteItem(id: number): void {
    this.userService.delete(id).subscribe({
      next: () => {
        this.allusers = this.allusers.filter(user => user.id !== id);
      },
      error: (err: any) => {
        console.error('Error deleting fruit:', err);
      }
    });
  }
}
