import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { response } from 'express';


@Component({
  selector: 'app-meeting-schedule',
  templateUrl: './meeting-schedule.component.html',
  styleUrls: ['./meeting-schedule.component.css']
})
export class MeetingScheduleComponent implements OnInit {
    m_id:number=0;
    f_name:string='';
    l_name:string='';
    email:string='';
    address:string='';
    date:string='';
    city:string='';
    time:string='';
    message:string=''
    
    constructor(private http:HttpClient) { }
    
    
    ngOnInit(): void {
    }
    
      addMeeting(){
        const meeting={
          m_id:this.m_id,
          f_name:this.f_name,
          l_name:this.l_name,
          email:this.email,
          address:this.address,
          date:this.date,
          city:this.city,
          time:this.time
        };
    
        this.http.post('http://localhost:3000/addMeeting',meeting)
        .subscribe((response:any)=>
        {console.log(response.message)},
        (error)=>{console.error('Error scheduling the meeting',error);}
      );
    }
  
}
