import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from "../../layout/menu/menu.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterModule,
    MenuComponent
],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

/*Se importan todos los datos que debemos recibir */
export class SidebarComponent {
logout() {
throw new Error('Method not implemented.');
} 
  @Input({}) icon: string = '';
  @Input({}) title: string = '';
  @Input({}) description: string = '';
  @Input({}) path: string = '';

}
