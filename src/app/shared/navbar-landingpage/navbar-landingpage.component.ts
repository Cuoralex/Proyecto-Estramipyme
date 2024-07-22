import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';
import { SidebarComponent } from '../../views/dashboard/component/sidebar/sidebar.component';

@Component({
  selector: 'app-navbar-landingpage',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    RouterModule,
    SidebarComponent
    ],
  templateUrl: './navbar-landingpage.component.html',
  styleUrl: './navbar-landingpage.component.scss',
  
})
export class NavbarLandingpageComponent implements OnInit {
      userLoginOn:boolean=false;
     @Output() optionClicked = new EventEmitter<string>();

//rutas
  public routes = routes[0].children?.filter( (route)=> route.data);

      optionClick(option: string){
        this.optionClicked.emit(option);
      }
      constructor () {}
      ngOnInit(): void {
          }
}