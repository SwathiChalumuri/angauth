import { Component, OnInit } from '@angular/core';
import { Serv1Service } from 'src/app/Services/serv1.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message;
  uname:String;
  pwd:String;
  constructor(public serv:Serv1Service, public router:Router) { }

  ngOnInit() {
  }
  doLogin(){
  
    var result=this.serv.loginCheck(this.uname,this.pwd)
    if(result)
    {
      this.router.navigateByUrl("/register")
    }
    else{
      console.log("false")
      this.message="invalid username";
    }
  }
  

}
