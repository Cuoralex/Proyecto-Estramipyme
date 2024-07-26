import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { LoginComponent } from '../../components/login/login.component';
import { RegisterComponent } from '../../components/register/register.component';
import { NavbarLandingpageComponent } from "../../shared/navbar-landingpage/navbar-landingpage.component";
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [
    LoginComponent,
    RouterModule,
    RegisterComponent,
    NavbarLandingpageComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})

export class LandingPageComponent implements OnInit {
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  private bannerItems!: NodeListOf<HTMLElement>;
  private currentIndex = 0;
  
  @ViewChild('about') about!: ElementRef;
  @ViewChild('services') services!: ElementRef;
  @ViewChild('plans') plans!: ElementRef;
  @ViewChild('events') events!: ElementRef;
  @ViewChild('contacts') contacts!: ElementRef;
  @ViewChild('register') register!: ElementRef;
  
  constructor() {}

  ngOnInit(): void {
    this.activeRoute.fragment.subscribe((fragment) => {
      if (fragment) {
        this.jumpToSection(fragment);
      }
    });

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

  jumpToSection(fragment: string): void {
    const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  private showNextBannerItem(): void {
    if (this.bannerItems.length > 0) {
      this.bannerItems[this.currentIndex].style.opacity = '0';
      this.currentIndex = (this.currentIndex + 1) % this.bannerItems.length;
      this.bannerItems[this.currentIndex].style.opacity = '1';
    }
  }
}
