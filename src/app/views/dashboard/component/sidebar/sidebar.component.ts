import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterModule,
    
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

/*Se importan todos los datos que debemos recibir */
export class SidebarComponent { 
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() path: string = '';
userLoginOn: any;
}
