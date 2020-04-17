import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // e_id;
  // e_name;
  // e_dep;
  // id;
  // name;
  // dep;
  // msg;
  constructor() {
    
   }

  ngOnInit() {
  }

// entered(){
//   if(this.e_id!=null && this.e_name!=null && this.e_dep!=null){
//     this.id=this.e_id;
//     this.name=this.e_name;
//     this.dep=this.e_dep;
//   }
//   else
//   this.msg="please enter all details";
// }
}
