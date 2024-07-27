<<<<<<< HEAD
import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { LoginComponent } from '../../components/login/login.component';
// import { RegisterComponent } from '../../components/register/register.component';
import { NavbarLandingpageComponent } from "../../shared/navbar-landingpage/navbar-landingpage.component";
<<<<<<< HEAD
import { RouterModule, ActivatedRoute } from '@angular/router';
import { EventsComponent } from "../dashboard/pages/events/events.component";
=======
=======
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { LoginComponent } from '../../components/login/login.component';
// import { RegisterComponent } from '../../components/register/register.component';
import { NavbarLandingpageComponent } from "../../shared/navbar-landingpage/navbar-landingpage.component";
import { LoginUsersComponent } from '../../components/login-users/login-users.component';
import { RegisterComponent } from "../../components/register-users/register-users.component";
import { CarouselComponent } from "../../components/carousel/carousel.component";
>>>>>>> Dev-Angela
>>>>>>> e1c681ead82eef1f1c74197bf3b679bb48625522

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [
    LoginComponent,
    RouterModule,
    RegisterComponent,
    NavbarLandingpageComponent,
<<<<<<< HEAD
    EventsComponent
=======
    LoginUsersComponent,
    CarouselComponent
>>>>>>> e1c681ead82eef1f1c74197bf3b679bb48625522
],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})

export class LandingPageComponent implements OnInit {
  activeRoute: ActivatedRoute = inject(ActivatedRoute); // <----Pertenece a fragments
  private bannerItems!: NodeListOf<HTMLElement>;
  private currentIndex = 0;

//    v  Pertenece a fragments  
  @ViewChild('about') about!: ElementRef;
  @ViewChild('services') services!: ElementRef;
  @ViewChild('plans') plans!: ElementRef;
  @ViewChild('events') events!: ElementRef;
  @ViewChild('contacts') contacts!: ElementRef;
  @ViewChild('register') register!: ElementRef;

//     ^ Pertenece a fragments
  constructor() {}
//   v Pertenece a fragments
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
}
