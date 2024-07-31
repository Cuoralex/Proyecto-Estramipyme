import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserService } from '../../../../../services/user.service'; // Ajustar la ruta según sea necesario
import { BehaviorSubject, Observable } from 'rxjs';

interface User {
  id: number;
  name: string;
  role: string;
}

@Component({
  selector: 'app-users-manager',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './users-manager.component.html',
  styleUrls: ['./users-manager.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UsersManagerComponent implements OnInit {
  users$: Observable<User[]> = new BehaviorSubject<User[]>([]).asObservable();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.users$ = this.userService.getUsers();
  }

  addUser(): void {
    const newUser: User = { id: 0, name: 'New User', role: 'client' };
    this.userService.addUser(newUser).subscribe(() => this.getUsers());
  }

  editUser(user: User): void {
    const newName = prompt('Edit name:', user.name);
    if (newName !== null && newName !== user.name) {
      user.name = newName;
      this.userService.updateUser(user).subscribe(() => this.getUsers());
    }
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => this.getUsers());
  }
}
