import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { NavbarLandingpageComponent } from "../../shared/navbar-landingpage/navbar-landingpage.component";
import { RouterModule, ActivatedRoute } from '@angular/router';
import { RegisternComponent } from '../../components/registern/registern.component';
import { CarouselComponent } from "../../components/carousel/carousel.component";
import { LoginComponent } from '../../components/login/login.component';

import { SwitcherComponent } from '../../components/switcher/app-switcher.component';
import { ourServicesComponent } from '../../components/ourServices/ourServices.component';
import { FooterLandingpageComponent } from "../../shared/footer-landingpage/footer-landingpage.component";
import { plansComponent } from '../../components/plans/plans.component';
import { contactUsComponent } from '../../components/contact-us/contact-us.component';
import { VisitsCounterComponent } from '../../components/visits-counter/visits-counter.component';
import { EventsDashboardComponent } from '../../components/events-dashboard/events-dashboard.component';


@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [
    RouterModule,
    RegisternComponent,
    NavbarLandingpageComponent,
    LoginComponent,
    CarouselComponent,
    SwitcherComponent,
    ourServicesComponent,
    plansComponent,
    contactUsComponent,
    FooterLandingpageComponent,
    VisitsCounterComponent,
    EventsDashboardComponent
],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  providers:[],
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