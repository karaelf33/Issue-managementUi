import {RouterModule, Routes} from '@angular/router';
import {ProjectComponent} from './project.component';
import {NgModule} from '@angular/core';


const routes: Routes = [
  {
    path: '',
    component: ProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProjectRoutingModule {

}
