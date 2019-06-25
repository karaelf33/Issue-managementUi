import {RouterModule, Routes} from "@angular/router";
import {IssueComponent} from "./issue.component";
import {NgModule} from "@angular/core";


const routes:Routes=[
  {
    path:'',
    component:IssueComponent
  }
];
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class IssueRoutingModule {
  
}
