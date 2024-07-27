import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginUsersComponent } from '../../components/login-users/login-users.component';
import { RegisterComponent } from "../../components/register-users/register-users.component";

@Component({
  selector: 'app-switcher',
  standalone: true,
  imports: [
    CommonModule,
    RegisterComponent,
    LoginUsersComponent,
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
