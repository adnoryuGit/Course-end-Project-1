import { HttpClient } from '@angular/common/http'; 
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.css']
})
export class ViewClientComponent implements OnInit{
clients:any[]=[];

message:string='';
  constructor(private http:HttpClient) { }


  ngOnInit(): void {
  this.fetchclients
  }


  fetchclients(){
    this.http.get('http://localhost:3000/viewClients')
      .subscribe((response:any)=>
    {this.clients=response},
    (error)=>{console.error('Error fetching the client',error);}
  );
  }
  deleteClient(id:number){
    if(confirm('Are you sure you want to delete this client?')){
      this.http.delete('http://localhost:3000/deleteclient/'+id)
      .subscribe((response:any)=>
    {this.message=response.message;
     
      this.fetchclients();},
   
    (error)=>{console.error('Error deleting the client',error);}
  );
}

  }
}
