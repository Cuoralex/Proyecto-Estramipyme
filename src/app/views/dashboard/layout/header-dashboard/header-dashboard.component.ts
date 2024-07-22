import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header-dashboard',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './header-dashboard.component.html',
  styleUrl: './header-dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderDashboardComponent {

}