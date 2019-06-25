import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app.routing.module';
import {AppComponent} from './app.component';
import {AppLayoutComponent} from './_layout/app-layout/app-layout.component';
import {FooterComponent} from './_layout/footer/footer.component';
import {SidebarComponent} from './_layout/sidebar/sidebar.component';
import {HeaderComponent} from './_layout/header/header.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {BsDatepickerModule, BsDropdownModule, CollapseModule, ModalModule, PaginationModule} from 'ngx-bootstrap';
import {ToastNoAnimation, ToastNoAnimationModule, ToastrModule} from 'ngx-toastr';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {ApiService} from './services/api.service';
import {HttpModule} from '@angular/http';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {ProjectService} from './services/shared/project.service';
import {IssueService} from './services/shared/issue.service';
import {UserService} from './services/shared/user.service';
import {IssueHistoryService} from './services/shared/issue.history.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NewComponentComponent} from './new-component/new-component.component';
import { IssueDetailComponent } from './issue/issue-detail/issue-detail.component';

export const createTranslateLoader = (http: HttpClient) => {

  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    NewComponentComponent,
    IssueDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxDatatableModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ToastNoAnimationModule,
    ToastrModule.forRoot({
      toastComponent: ToastNoAnimation,
      maxOpened: 1,
      autoDismiss: true
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    ApiService,
    ProjectService,
    IssueService,
    UserService,
    IssueHistoryService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
