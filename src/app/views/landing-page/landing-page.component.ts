import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../../components/login/login.component';
import { RegisterComponent } from '../../components/register/register.component';
import { AppComponent } from "../../app.component";
import { Router } from '@angular/router';
import { NavbarLandingpageComponent } from '../../shared/navbar-landingpage/navbar-landingpage.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [
    LoginComponent,
    RegisterComponent,
    NavbarLandingpageComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  providers:[],
})
export class LandingPageComponent {
  constructor (private router:Router){}
  test() {
    this.router.navigateByUrl("evaluacion");
  }
}
