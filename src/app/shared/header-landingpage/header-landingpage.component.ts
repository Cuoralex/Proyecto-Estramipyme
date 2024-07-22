import { Component } from "@angular/core";
import { NavbarLandingpageComponent } from "../navbar-landingpage/navbar-landingpage.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-landingpage',
  standalone: true,
  imports: [
    CommonModule,
    NavbarLandingpageComponent
  ],
  templateUrl: './header-landingpage.component.html',
  styleUrl: './header-landingpage.component.scss',
})
export class HeaderLandingpageComponent {

}
