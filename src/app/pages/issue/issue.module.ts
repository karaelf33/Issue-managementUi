import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IssueRoutingModule} from './issue.routing.module';
import {SharedModule} from '../../shared/shared.module';
import {IssueService} from '../../services/shared/issue.service';
import {IssueComponent} from './issue.component';


@NgModule({

  imports: [
    CommonModule,
    IssueRoutingModule,
    SharedModule
  ],
  providers: [IssueService],
  declarations: [IssueComponent]
})
export class IssueModule {
}
