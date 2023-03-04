import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HomeComponent } from './home/home.component';
import { ClientDetailsComponent } from './add-component/client-details/client-details.component';
import { CaseDetailsComponent } from './add-component/case-details/case-details.component';
import { ClientListComponent } from './list-component/client-list/client-list.component';
import { CaseListComponent } from './list-component/case-list/case-list.component';
import { CourtListComponent } from './list-component/court-list/court-list.component';
import { CaseTypeListComponent } from './list-component/case-type-list/case-type-list.component';
import { EvidenceListComponent } from './list-component/evidence-list/evidence-list.component';
import { UserListComponent } from './list-component/user-list/user-list.component';
import { OpponentListComponent } from './list-component/opponent-list/opponent-list.component';
import { ScheduleListComponent } from './list-component/schedule-list/schedule-list.component';
import { CaseFullSummeryComponent } from './case-full-summery/case-full-summery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    ContactFormComponent,
    HomeComponent,
    ClientDetailsComponent,
    CaseDetailsComponent,
    ClientListComponent,
    CaseListComponent,
    CourtListComponent,
    CaseTypeListComponent,
    EvidenceListComponent,
    UserListComponent,
    OpponentListComponent,
    ScheduleListComponent,
    CaseFullSummeryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
