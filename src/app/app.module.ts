import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoginComponent } from './components/models/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { DashboardComponent } from './components/views/dashboard/dashboard.component';
import { FormComponent } from './components/views/form/form.component';
import { LoginUsersComponent } from './components/login-users/login-users.component';
import { RegisterComponent } from './components/register-users/register-users.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
],
  imports: [
    CommonModule,
    AppComponent,
    RouterModule,
    BrowserModule,
    RegisterComponent,
    LoginUsersComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    FormComponent,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers:[],
})
export class AppModule {
  
}




