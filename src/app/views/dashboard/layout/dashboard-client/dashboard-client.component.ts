import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-client',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './dashboard-client.component.html',
  styleUrl: './dashboard-client.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardClientComponent { }
