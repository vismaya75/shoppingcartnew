import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

const options={
  withCredentials:true
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  details:any={
    1:{username:"vismaya",email:'vismaya@gmail.com',password:'1234'},
    2:{username:"Ammu",email:'ammu@gmail.com',password:'2222'}

}
currentUser:any;

  constructor(private http:HttpClient) {
    this.getDetails();
   }
   saveDetails(){
     localStorage.setItem("details",JSON.stringify(this.details))
     if(this.currentUser){
      localStorage.setItem("currentUser",JSON.stringify(this.currentUser))

     }
   }
   getDetails(){
    if(localStorage.getItem("details")){
   this.details=JSON.parse(localStorage.getItem("details")||'')
    }
    if(localStorage.getItem("currentUser")){
     this.currentUser=JSON.parse(localStorage.getItem("currentUser")||'')

    }
  }
  register(username:any,email:any,password:any){
    const data={
      username,
      email,
      password
    }
    return this.http.post('http://localhost:5000/register',data)
    // if(email in this.details){
    //   alert("user exist")
    // }
    // this.details[email]={
    //   username,
    //   email,
    //   password
    // }
    // alert("regi success")
  }
  login(email:any,password:any){
    const data={
      email,
      password
    }
    return this.http.post('http://localhost:5000/login',data)
  }
  
}
