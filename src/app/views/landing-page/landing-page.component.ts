import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { NavbarLandingpageComponent } from "../../shared/navbar-landingpage/navbar-landingpage.component";
import { RouterModule, ActivatedRoute } from '@angular/router';
import { RegisterComponent } from '../../components/register/register.component';
import { CarouselComponent } from "../../components/carousel/carousel.component";
import { LoginComponent } from '../../components/login/login.component';
import EventsComponent from '../../components/events/events.component';
import { SwitcherComponent } from '../../components/switcher/app-switcher.component';
import { ourServicesComponent } from '../../components/ourServices/ourServices.component';
import { plansComponent } from '../../components/plans/plans.component';


@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [
    RouterModule,
    RegisterComponent,
    NavbarLandingpageComponent,
    LoginComponent,
    CarouselComponent,
    SwitcherComponent,
    ourServicesComponent,
    plansComponent
],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})

export class LandingPageComponent implements OnInit {
  activeRoute: ActivatedRoute = inject(ActivatedRoute); // <----Pertenece a fragments
  private bannerItems!: NodeListOf<HTMLElement>;
  private currentIndex = 0;
  showLogin = true;

  ngOnInit(): void {
    this.activeRoute.fragment.subscribe((fragment) => {
      if (fragment) {
        this.jumpToSection(fragment);
      }
    });
//    ^ Pertenece a fragments
    const bannerContainer = document.getElementById('bannerContainer');
    if (bannerContainer) {
      this.bannerItems = bannerContainer.querySelectorAll('.banner-item') as NodeListOf<HTMLElement>;

      // Initialize: Hide all items except the first one
      for (let i = 1; i < this.bannerItems.length; i++) {
        this.bannerItems[i].style.opacity = '0';
      }

      // Set interval to change banner items
      setInterval(() => this.showNextBannerItem(), 3000); // Change every 3 seconds
    }
  }
//  v --- pertenece a fragments
  jumpToSection(fragment: string): void {
    const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  //   ^ --- pertenece a fragments

  private showNextBannerItem(): void {
    if (this.bannerItems.length > 0) {
      this.bannerItems[this.currentIndex].style.opacity = '0';
      this.currentIndex = (this.currentIndex + 1) % this.bannerItems.length;
      this.bannerItems[this.currentIndex].style.opacity = '1';
    }
  }

  toggleView() {
    this.showLogin = !this.showLogin;
  }
}