import { Component, EventEmitter, Output } from '@angular/core';
import { LoginComponent } from '../../components/login/login.component';
import { RegisterComponent } from '../../components/register/register.component';
import { AppComponent } from "../../app.component";
import { NavbarLandingpageComponent } from "../../shared/navbar-landingpage/navbar-landingpage.component";

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [
    LoginComponent,
    RegisterComponent,
    AppComponent,
    NavbarLandingpageComponent,
    ],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  providers:[],
})
export class LandingPageComponent {

}
