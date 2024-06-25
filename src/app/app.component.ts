import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./comunes/header/header.component";
import { FooterComponent } from "./comunes/footer/footer.component";
import { LoginComponent } from './inicio/login/login.component';
import { BarraComponent } from './comunes/barra/barra.component';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent,BarraComponent,DashboardComponent, FooterComponent, LoginComponent]
})
export class AppComponent {
  title = 'Proyecto-Estramipyme';
}
