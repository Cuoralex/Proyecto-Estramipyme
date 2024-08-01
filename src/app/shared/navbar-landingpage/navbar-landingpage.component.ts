

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, Renderer2 } from '@angular/core';
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
  styleUrls: ['./navbar-landingpage.component.scss']
})
export class NavbarLandingpageComponent {
  isMenuOpen = false;

  constructor() { }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
