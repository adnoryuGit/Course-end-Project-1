import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientManagementComponent } from './client-management/client-management.component';
import { ClientMeetingManagementComponent } from './client-meeting-management/client-meeting-management.component';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './add-client/add-client.component';
import { ViewClientComponent } from './view-client/view-client.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MeetingScheduleComponent } from './meeting-schedule/meeting-schedule.component';
import { ViewMeetingComponent } from './view-meeting/view-meeting.component';
import { EditMeetingComponent } from './edit-meeting/edit-meeting.component';
import { EditClientComponent } from './edit-client/edit-client.component';
const routes:Routes=[
  {path:'',redirectTo:'/view',pathMatch:'full'},
{path:'Management',component:ClientManagementComponent},
{path:'Meetings',component:ClientMeetingManagementComponent},
{path:'view',component:ViewClientComponent},
{path:'Add',component:AddClientComponent},
{path:'Add_meeting',component:MeetingScheduleComponent},
{path:'View_meeting',component:ViewMeetingComponent},
{path:'edit_meeting/:id',component:EditMeetingComponent},
{path:'edit_client/:id',component:EditClientComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ClientManagementComponent,
    ClientMeetingManagementComponent,
    AddClientComponent,
    ViewClientComponent,
    MeetingScheduleComponent,
    ViewMeetingComponent,
    EditMeetingComponent,
    EditClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
