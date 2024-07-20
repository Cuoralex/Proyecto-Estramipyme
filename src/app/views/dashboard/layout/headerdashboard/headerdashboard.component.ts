import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-headerdashboard',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './headerdashboard.component.html',
  styleUrl: './headerdashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderDashboardComponent {

}
