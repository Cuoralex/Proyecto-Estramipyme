import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateComponent } from "./create.component";

const routes: Routes = [
    {
        path: '',
        component: CreateComponent
    }
]

    @NgModule({
        imports: [
            CommonModule,
            RouterModule.forChild(routes)
        ],
        declarations: []
    })

    export class CreateModule {}