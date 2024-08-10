//Angular
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponent } from './views/form/form.component';
import { provideHttpClient } from '@angular/common/http';
//Proyecto
import { HeaderLandingpageComponent } from './shared/header-landingpage/header-landingpage.component';
import { NavbarLandingpageComponent } from './shared/navbar-landingpage/navbar-landingpage.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import { ExcelReaderComponent } from './services/excel-reader/excel-reader.component';
import { RegisternComponent } from './components/registern/registern.component';
import { LoginComponent } from './components/login/login.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterLandingpageComponent } from './shared/footer-landingpage/footer-landingpage.component';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardAdministratorComponent } from './views/dashboard/layout/dashboard-administrator/dashboard-administrator.component';


const routes: Routes= [
  {
    path: '',
    component: DashboardAdministratorComponent,
}
]

@NgModule({
  declarations: [
],
  imports: [
    CommonModule,
    AppComponent,
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HeaderLandingpageComponent,
    NavbarLandingpageComponent,
    LoginComponent,
    RegisternComponent,
    CarouselComponent,
    FormComponent,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    
    FooterLandingpageComponent,
  ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers:[provideHttpClient()],
})
export class AppModule {
  
}