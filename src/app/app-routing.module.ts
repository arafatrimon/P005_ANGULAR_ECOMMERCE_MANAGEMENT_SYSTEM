import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseDetailsComponent } from './add-component/case-details/case-details.component';
import { CaseTypeComponent } from './add-component/case-type/case-type.component';
import { ClientDetailsComponent } from './add-component/client-details/client-details.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourtDetailsComponent } from './add-component/court-details/court-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EvidenceDetailsComponent } from './add-component/evidence-details/evidence-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OpponentDetailsComponent } from './add-component/opponent-details/opponent-details.component';
import { ScheduleDetailsComponent } from './add-component/schedule-details/schedule-details.component';
import { SignupComponent } from './signup/signup.component';
import { UserDetailsComponent } from './add-component/user-details/user-details.component';
import { CaseListComponent } from './list-component/case-list/case-list.component';
import { CaseFullSummeryComponent } from './case-full-summery/case-full-summery.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"",component:DashboardComponent,
   children:[
    {path:"contact-form",component:ContactFormComponent},
    {path:"home",component:HomeComponent},
    {path:"client-details",component:ClientDetailsComponent},
    {path:"case-details",component:CaseDetailsComponent},
    {path:"court-details",component:CourtDetailsComponent},
    {path:"evidence-details",component:EvidenceDetailsComponent},
    {path:"opponent-details",component:OpponentDetailsComponent},
    {path:"schedule-details",component:ScheduleDetailsComponent},
    {path:"user-details",component:UserDetailsComponent},
    {path:"case-type",component:CaseTypeComponent},
    {path:"case-list",component:CaseListComponent},
    {path:"case-full-summery",component:CaseFullSummeryComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
