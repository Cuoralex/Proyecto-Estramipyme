import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { RouterModule } from '@angular/router';
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
  isMobileMenuOpen = false;
  isUserMenuOpen = false;
  menuOpenSobrenostros = false;

  constructor(private router: Router, private viewportScroller: ViewportScroller) { }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.isUserMenuOpen = false; // Cierra el menú de usuario cuando se abre el menú móvil
  }

  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
    this.isMobileMenuOpen = false; // Cierra el menú móvil cuando se abre el menú de usuario
  }

  toggleMenuSobrenosotros() {
    this.menuOpenSobrenostros = !this.menuOpenSobrenostros;
  }

  closeMenu(): void {
    console.log('Closing menu');
    this.isMobileMenuOpen = false;
    this.isUserMenuOpen = false;
    this.menuOpenSobrenostros = false;
  }

  navigateToSection(section: string) {
    const url = this.router.url;
    const hasFragment = url.includes(`#${section}`);
    
    if (hasFragment) {
      this.router.navigateByUrl('/inicio').then(() => {
        this.router.navigate(['/inicio'], { fragment: section }).then(() => {
          this.viewportScroller.scrollToAnchor(section);
        });
      });
    } else {
      this.router.navigate(['/inicio'], { fragment: section }).then(() => {
        this.viewportScroller.scrollToAnchor(section);
      });
    }

    this.closeMenu(); // Cierra ambos menús después de navegar
  }
}



