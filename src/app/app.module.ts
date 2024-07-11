import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './comunes/header/header.component';
import { FooterComponent } from './comunes/footer/footer.component';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { LoginComponent } from './inicio/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { BarraComponent } from './comunes/barra/barra.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgxEchartsModule } from 'ngx-echarts';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppComponent,
    RouterModule,
    HeaderComponent,
    DashboardComponent,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    FooterComponent,
    BarraComponent,
    LoginComponent,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers:[],
})
export class AppModule {
  
 }
