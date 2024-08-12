import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
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
  menuOpen = false;
  isMenuOpen = false;
  menuOpenSobrenostros = false;

  constructor(private router: Router, private viewportScroller: ViewportScroller) { }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleMenuSobrenosotros() {
    this.menuOpenSobrenostros = !this.menuOpenSobrenostros;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    this.menuOpenSobrenostros = false;
  }

  navigateToSection(section: string) {
    const url = this.router.url;
    const hasFragment = url.includes(`#${section}`);
    
    if (hasFragment) {
      // Si la URL ya tiene el fragmento, primero navega a la misma ruta sin fragmento
      this.router.navigateByUrl('/inicio').then(() => {
        this.router.navigate(['/inicio'], { fragment: section }).then(() => {
          this.viewportScroller.scrollToAnchor(section);
        });
      });
    } else {
      // Si no tiene el fragmento, navega directamente al fragmento
      this.router.navigate(['/inicio'], { fragment: section }).then(() => {
        this.viewportScroller.scrollToAnchor(section);
      });
    }

    this.closeMenu(); // Cierra el menú después de navegar
  }
}
