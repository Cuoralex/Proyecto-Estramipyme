import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardclientComponent } from "./dashboard-client.component";

const routes: Routes = [
    {
        path: '',
        component: DashboardclientComponent
    }
]

    @NgModule({
        imports: [
            CommonModule,
            RouterModule.forChild(routes)
        ],
        declarations: []
    })

    export class DashboardClientModule {}