import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';

@Component({
  selector: 'app-users-administrator',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './users-administrator.component.html',
  styleUrl: './users-administrator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UsersAdministratorComponent {
}  
