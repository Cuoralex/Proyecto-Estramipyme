

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';
import { SidebarComponent } from '../../views/dashboard/component/sidebar/sidebar.component';

@Component({
  selector: 'app-navbar-landingpage',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SidebarComponent
  ],
  templateUrl: './navbar-landingpage.component.html',
  styleUrls: ['./navbar-landingpage.component.scss']
})
export class NavbarLandingpageComponent {
  menuOpen = false;
  isMenuOpen = false;
  menuOpenSobrenostros = false;

  constructor() { }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleMenuSobrenosotros() {
    this.menuOpenSobrenostros = !this.menuOpenSobrenostros;
  }

  
}
