import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-meeting',
  templateUrl: './edit-meeting.component.html',
  styleUrls: ['./edit-meeting.component.css']
})
export class EditMeetingComponent implements OnInit{
  m_id:number=0;
  f_name:string='';
  l_name:string='';
  email:string='';
  address:string='';
  date:string='';
  city:string='';
  time:string='';
  message:string=''

  constructor(private http:HttpClient,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      const m_idParam=params.get('m_id');
      if(m_idParam!==null){
        this.m_id=+m_idParam;
        this.fetchmeeting
      }
      else{
        console.error("id is missing  or null");
      }


    })
  }

  fetchmeeting(){
    this.http.get('http://localhost:3000/getMeeting/'+this.m_id)
        .subscribe((response:any)=>
      {
        const meeting=response[0];
        this.m_id=meeting.m_id;
        this.f_name=meeting.f_namee;
        this.l_name=meeting.l_namee;this.time
        this.email=meeting.email;
        this.address=meeting.address;
        this.date=meeting.date;
        this.city=meeting.city;
        this.time=meeting.time;
      },
      (error)=>{console.error('Error fetching the product',error);}
    );
  }
  
  
    updateMeeting(){
      const product={
        m_id:this.m_id,
        f_name:this.f_name,
        l_name:this.l_name,
        email:this.email,
        address:this.address,
        date:this.date,
        city:this.city,
        time:this.time
      };
  
  
      this.http.put('http://localhost:3000/updateMeeting',product)
      .subscribe((response:any)=>
      {this.message=response.message;this.router.navigate(['/view_meeting'])},
      (error)=>{console.error('Error updating the meeting ',error);}
    );
  
  
    }
  
  
  }

