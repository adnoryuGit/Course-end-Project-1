import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { response } from 'express';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})

export class AddClientComponent implements OnInit {
c_id:number=0;
f_name:string='';
l_name:string='';
email:string='';
message:string=''

constructor(private http:HttpClient) { }


ngOnInit(): void {
}

  addClient(){
    const client={
      c_id:this.c_id,
      f_name:this.f_name,
      l_name:this.l_name,
      email:this.email,
    };

    this.http.post('http://localhost:3000/addClient',client)
    .subscribe((response:any)=>
    {console.log(response.message)},
    (error)=>{console.error('Error adding the product',error);}
  );
}
}
