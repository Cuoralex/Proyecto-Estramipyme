

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

export class NavbarLandingpageComponent implements OnInit {
  isMobileMenuOpen: boolean = false;

  @Output() optionClicked = new EventEmitter<string>();

  public routes = routes[0].children?.filter((route) => route.data);

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.initBurgerMenu();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  optionClick(option: string) {
    this.optionClicked.emit(option);
  }

  initBurgerMenu() {
    const burgers = document.querySelectorAll('.navbar-burger');
    const menus = document.querySelectorAll('.navbar-menu');
    const closes = document.querySelectorAll('.navbar-close');
    const backdrops = document.querySelectorAll('.navbar-backdrop');

    if (burgers.length && menus.length) {
      burgers.forEach(burger => {
        this.renderer.listen(burger, 'click', () => {
          menus.forEach(menu => {
            if (menu.classList.contains('hidden')) {
              this.renderer.removeClass(menu, 'hidden');
            } else {
              this.renderer.addClass(menu, 'hidden');
            }
          });
        });
      });
    }

    if (closes.length) {
      closes.forEach(close => {
        this.renderer.listen(close, 'click', () => {
          menus.forEach(menu => {
            if (menu.classList.contains('hidden')) {
              this.renderer.removeClass(menu, 'hidden');
            } else {
              this.renderer.addClass(menu, 'hidden');
            }
          });
        });
      });
    }

    if (backdrops.length) {
      backdrops.forEach(backdrop => {
        this.renderer.listen(backdrop, 'click', () => {
          menus.forEach(menu => {
            if (menu.classList.contains('hidden')) {
              this.renderer.removeClass(menu, 'hidden');
            } else {
              this.renderer.addClass(menu, 'hidden');
            }
          });
        });
      });
    }
  }
}
