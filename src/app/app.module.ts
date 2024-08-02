//Angular
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
//Proyecto
import { HeaderLandingpageComponent } from './shared/header-landingpage/header-landingpage.component';
import { HeaderDashboardComponent } from './views/dashboard/layout/header-dashboard/header-dashboard.component';
import { NavbarLandingpageComponent } from './shared/navbar-landingpage/navbar-landingpage.component';import { ReactiveFormsModule } from '@angular/forms';
import { DashboardAdministratorComponent } from './views/dashboard/layout/dashboard-administrator/dashboard-administrator.component';
import { DashboardClientComponent } from './views/dashboard/layout/dashboard-client/dashboard-client.component';
import { SidebarComponent } from './views/dashboard/component/sidebar/sidebar.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { ExcelReaderComponent } from './services/excel-reader/excel-reader.component';
import GraphicsAdministratorComponent from './views/dashboard/pages/graphics/graphics-administrator/graphics-administrator.component';
import UsersAdministratorComponent from './views/dashboard/pages/users/users-administrator/users-administrator.component';
import { FooterLandingpageComponent } from './shared/footer-landingpage/footer-landingpage.component';
import { FooterdashboardComponent } from './views/dashboard/layout/footer-dashboard/footer-dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FormComponent } from './views/form/form.component';
import { DashboardManagerComponent } from './views/dashboard/layout/dashboard-manager/dashboard-manager.component';
import GraphicsClientComponent from './views/dashboard/pages/graphics/graphics-client/graphics-client.component';

// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/inmemorydata.service';
import UsersManagerComponent from './views/dashboard/pages/users/users-manager/users-manager.component';
import { provideHttpClient } from '@angular/common/http';
import MetricsComponent from './views/dashboard/pages/metrics/metrics.component';


@NgModule({
  declarations: [
],
  imports: [
    CommonModule,
    AppComponent,
    RouterModule,
    HeaderLandingpageComponent,
    HeaderDashboardComponent,
    LoginComponent,
    RegisterComponent,
    CarouselComponent,
    DashboardAdministratorComponent,
    DashboardManagerComponent,
    DashboardManagerComponent,
    DashboardClientComponent,
    ExcelReaderComponent,
    SidebarComponent,
    GraphicsAdministratorComponent,
    GraphicsClientComponent,
    UsersAdministratorComponent,
    UsersManagerComponent,
    FormComponent,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    FooterLandingpageComponent,
    FooterdashboardComponent,
    NavbarLandingpageComponent,
    ReactiveFormsModule,
    MetricsComponent,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers:[provideHttpClient()],
})
export class AppModule {
  
}