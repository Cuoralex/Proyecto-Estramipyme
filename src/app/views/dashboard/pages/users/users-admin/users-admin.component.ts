import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './users-admin.component.html',
  styleUrl: './users-admin.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersAdminComponent {

}
