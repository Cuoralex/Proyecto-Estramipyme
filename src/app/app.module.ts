import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { FormComponent } from './views/form/form.component';
import { GraphicsAdminComponent } from './views/dashboard/pages/graphics/graphicsadmin/graphicsadmin.component';
import { GraphicsClientComponent } from './views/dashboard/pages/graphics/graphicsclient/graphicsclient.component';
import { UsersAdminComponent } from './views/dashboard/pages/users/users-admin/users-admin.component';
import { UsersManagerComponent } from './views/dashboard/pages/users/users-manager/users-manager.component';
import { SidebarComponent } from './views/dashboard/component/sidebar/sidebar.component';
import { DashboardAdministratorComponent } from './views/dashboard/layout/dashboardadministrator/dashboardadministrator.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppComponent,
    RouterModule,
    HeaderComponent,
    DashboardAdministratorComponent,
    SidebarComponent,
    GraphicsAdminComponent,
    GraphicsClientComponent,
    UsersAdminComponent,
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
