import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
  HostListener,
  AfterViewInit,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { NavbarLandingpageComponent } from '../../shared/navbar-landingpage/navbar-landingpage.component';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { LoginComponent } from '../../components/login/login.component';
import { SwitcherComponent } from '../../components/switcher/app-switcher.component';
import { ourServicesComponent } from '../../components/ourServices/ourServices.component';
import { FooterLandingpageComponent } from '../../shared/footer-landingpage/footer-landingpage.component';
import { plansComponent } from '../../components/plans/plans.component';
import { contactUsComponent } from '../../components/contact-us/contact-us.component';
import { VisitsCounterComponent } from '../../components/visits-counter/visits-counter.component';
import { EventsCardComponent } from '../dashboard/layout/dashboard-administrator/events/events-card/events-card.component';
import { RegisternComponent } from 'app/components/registern/registern.component';
import { VideoComponent } from '../../components/video/video.component';
import { AboutUsComponent } from '../../components/about-us/about-us.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [
    RouterModule,
    NavbarLandingpageComponent,
    LoginComponent,
    CarouselComponent,
    SwitcherComponent,
    ourServicesComponent,
    plansComponent,
    contactUsComponent,
    FooterLandingpageComponent,
    VisitsCounterComponent,
    EventsCardComponent,
    RegisternComponent,
    FooterLandingpageComponent,
    VideoComponent,
    AboutUsComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  providers: [],
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  @ViewChildren('section') sections!: QueryList<ElementRef<HTMLElement>>;
  private sectionOffsets: number[] = [];
  private currentIndex = 0;
  private isScrolling = false;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.activeRoute.fragment.subscribe((fragment) => {
      if (fragment) {
        this.jumpToSection(fragment);
      }
    });
  }

  ngAfterViewInit() {
    this.sectionOffsets = this.sections.map(
      (section) => section.nativeElement.offsetTop
    );
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    if (this.isScrolling) return;

    const scrollPosition = window.scrollY + window.innerHeight / 2;

    this.sectionOffsets.forEach((offset, index) => {
      if (
        scrollPosition >= offset &&
        scrollPosition < (this.sectionOffsets[index + 1] || Infinity)
      ) {
        this.currentIndex = index;
        this.scrollToSection();
      }
    });
  }

  scrollToSection() {
    this.isScrolling = true;

    this.sections.toArray()[this.currentIndex].nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    setTimeout(() => {
      this.isScrolling = false;
    }, 800); // Permite que la animación de scroll termine
  }

  jumpToSection(fragment: string): void {
    const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}