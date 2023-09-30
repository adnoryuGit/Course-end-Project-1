import { HttpClient } from '@angular/common/http'; 
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-meeting',
  templateUrl: './view-meeting.component.html',
  styleUrls: ['./view-meeting.component.css']
})
export class ViewMeetingComponent {

  meetings:any[]=[];

  message:string='';
    constructor(private http:HttpClient) { }
  
  
    ngOnInit(): void {
    this.fetchmeeting();
    }
  
  
    fetchmeeting(){
      this.http.get('http://localhost:3000/viewMeeting')
        .subscribe((response:any)=>
      {this.meetings=response},
      (error)=>{console.error('Error fetching the meeting',error);}
    );
    }
    deleteMeeting(id:number){
      if(confirm('Are you sure you want to delete this meeting?')){
        this.http.delete('http://localhost:3000/deletemeeting/'+id)
        .subscribe((response:any)=>
      {this.message=response.message;
       
        this.fetchmeeting();},
     
      (error)=>{console.error('Error deleting the meeting',error);}
    );
  }
  
    }

}
