import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {DataService} from '../services/data.service'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
username="";
email="";
pswd="";
registerForm=this.fb.group({
  username:['',[Validators.required]],
  email:['',[Validators.required,Validators.email]],
  pswd:['',[Validators.required]],
  
})

  constructor(private fb:FormBuilder,private router:Router,private dataService:DataService) { }

  ngOnInit(): void {
  }
  register(){
    if(this.registerForm.valid){
      this.dataService.register(this.registerForm.value.username,this.registerForm.value.email,this.registerForm.value.pswd)
      .subscribe((data:any)=>{
        if(data){
          alert("Registration Success,Please Login")
          this.router.navigateByUrl("login");
        }
      },(data)=>{
        alert(data.error.message);
      })
      
    }
    else{
      alert("Invalid form")
    }
  }

}
