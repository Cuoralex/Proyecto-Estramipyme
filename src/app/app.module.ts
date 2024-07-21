import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderLandingpageComponent } from './shared/header-landingpage/header-landingpage.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { FormComponent } from './views/form/form.component';

import { GraphicsClientComponent } from './views/dashboard/pages/graphics/graphics-client/graphics-client.component';

import { UsersManagerComponent } from './views/dashboard/pages/users/users-manager/users-manager.component';
import { SidebarComponent } from './views/dashboard/component/sidebar/sidebar.component';
import { DashboardAdministratorComponent } from './views/dashboard/layout/dashboard-administrator/dashboard-administrator.component';
import GraphicsAdministratorComponent from './views/dashboard/pages/graphics/graphics-administrator/graphics-administrator.component';
import UsersAdministratorComponent from './views/dashboard/pages/users/users-administrator/users-administrator.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppComponent,
    RouterModule,
    HeaderLandingpageComponent,
    DashboardAdministratorComponent,
    SidebarComponent,
    GraphicsAdministratorComponent,
    GraphicsClientComponent,
    UsersAdministratorComponent,
    UsersManagerComponent,
    FormComponent,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    FooterComponent,
    NavbarComponent,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers:[],
})
export class AppModule {
  
}
