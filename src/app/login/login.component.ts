import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email="";
  pswd="";
  loginForm=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private fb:FormBuilder,private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
  }
  getemail(event: any) {
    this.email = event.target.value;
   
  }
  pswdchange(event: any) {
    this.pswd = event.target.value;
    

  }
  login(){
    if(this.loginForm.valid){
      var emailid=this.loginForm.value.email;
      console.log(emailid);
      var pwd=this.loginForm.value.pswd
      this.dataService.login(emailid,pwd)
      .subscribe((data:any)=>{
        if(data){
          alert(data.message)
        }
      },(data)=>{
        alert(data.error.message)
      })
    }
    else{
      alert("Invalid Form")
    }

  }
 
}