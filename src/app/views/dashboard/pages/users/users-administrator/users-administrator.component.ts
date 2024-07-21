import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-users-administrator',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './users-administrator.component.html',
  styleUrl: './users-administrator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersAdministratorComponent {

}
