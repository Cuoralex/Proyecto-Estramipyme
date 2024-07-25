import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  private bannerItems!: NodeListOf<HTMLElement>;
  private currentIndex = 0;
  @ViewChild('about') about!: ElementRef;
  @ViewChild('services') services!: ElementRef;
  @ViewChild('plans') plans!: ElementRef;
  @ViewChild('events') events!: ElementRef;
  @ViewChild('contacts') contacts!: ElementRef;
  @ViewChild('register') register!: ElementRef;
  

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        this.scrollToSection(fragment);
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

  private scrollToSection(fragment: string): void {

    const section = {
      'about': this.about,
      'services': this.services,
      'plans': this.plans,
      'events': this.events,
      'contacts': this.contacts,
      'register': this.register
    }[fragment];
    if (section) {
      section.nativeElement.scrollIntoView({ behavior: 'smooth'});
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

