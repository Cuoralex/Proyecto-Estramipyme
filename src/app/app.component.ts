import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import LayoutComponent from './shared/layout/layout.component';
import { LandingPageService } from './services/landing-page.service';
import { RegisterComponent } from './components/register/register.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, 
              HeaderComponent,
              NavbarComponent,
              DashboardComponent,
              FooterComponent,
              SidebarComponent,
              LayoutComponent, 
              RegisterComponent]
})
export class AppComponent implements OnInit {
  showLandingPage: boolean | undefined;

  constructor(private landingPageService: LandingPageService) {}

  ngOnInit() {
    this.showLandingPage = !this.landingPageService.hasSeenLandingPage();
  }

  onCloseLandingPage() {
    this.landingPageService.markLandingPageAsSeen();
    this.showLandingPage = false;
  }
}

function page(close: () => void) {
  throw new Error('Function not implemented.');
}
