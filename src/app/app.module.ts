import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './comunes/header/header.component';
import { FooterComponent } from './comunes/footer/footer.component';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { LoginComponent } from './inicio/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { BarraComponent } from './comunes/barra/barra.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
    BarraComponent,
    LoginComponent,
    ReactiveFormsModule,
    HttpClientModule,

  ]
})
export class AppModule {
  
 }
