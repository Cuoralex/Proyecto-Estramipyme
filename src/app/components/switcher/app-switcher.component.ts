import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../../components/login/login.component';
import { RegisterComponent } from "../../components/register/register.component";

@Component({
  selector: 'app-switcher',
  standalone: true,
  imports: [
    CommonModule,
    RegisterComponent,
    LoginComponent,
  ],
  templateUrl: './app-switcher.component.html',
  styleUrls: ['./app-switcher.component.scss']
})
export class SwitcherComponent {
  showLogin = true;

  toggleView() {
    this.showLogin = !this.showLogin;
  }
}
