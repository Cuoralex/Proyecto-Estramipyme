import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-users-manager',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './users-manager.component.html',
  styleUrl: './users-manager.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersManagerComponent {

}
