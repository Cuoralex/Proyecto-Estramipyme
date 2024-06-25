import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './comunes/header/header.component';
import { FooterComponent } from './comunes/footer/footer.component';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { LoginComponent } from './inicio/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { BarraComponent } from './comunes/barra/barra.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    BarraComponent,
    LoginComponent,
    HttpClientModule,

  ]
})
export class AppModule { }
