import { Component } from "@angular/core";
import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-landingpage',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent
  ],
  templateUrl: './header-landingpage.component.html',
  styleUrl: './header-landingpage.component.scss',
})
export class HeaderLandingpageComponent {

}
