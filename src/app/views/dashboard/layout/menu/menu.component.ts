/*Angular*/
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
/*App*/
import { routes } from '../../../../app.routes';
import { SidebarComponent } from '../../component/sidebar/sidebar.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    RouterModule,
    SidebarComponent
],

  
})
export class MenuComponent {
@Output() optionClicked = new EventEmitter<string>();

//rutas
  public routes = routes[0].children?.filter( (route)=> route.data);
  trackByPath(index: number, route: any): string {
    return route.path;
  }

  optionClick(title: string) {
    console.log('Clicked option: ', title);
  }
}
