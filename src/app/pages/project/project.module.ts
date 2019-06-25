import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectRoutingModule} from "./project.routing.module";
import {ProjectService} from "../../services/shared/project.service";
import {ProjectComponent} from "./project.component";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {SharedModule} from "../../shared/shared.module";

@NgModule({

  imports: [
    CommonModule,
    NgxDatatableModule,
    ProjectRoutingModule,
    SharedModule
  ],
  providers:[ProjectService],
  declarations: [ProjectComponent]
})
export class ProjectModule { }
