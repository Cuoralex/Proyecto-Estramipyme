import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../../components/login/login.component';
import { RegisternComponent } from "../registern/registern.component";

@Component({
  selector: 'app-switcher',
  standalone: true,
  imports: [
    CommonModule,
    RegisternComponent,
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
