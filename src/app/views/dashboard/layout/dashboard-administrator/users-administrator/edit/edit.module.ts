import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditComponent } from "./edit.component";

const routes: Routes = [
    {
        path: '',
        component: EditComponent
    }
]

    @NgModule({
        imports: [
            CommonModule,
            RouterModule.forChild(routes)
        ],
        declarations: []
    })

    export class EditModule {}