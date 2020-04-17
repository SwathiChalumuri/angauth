import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Serv1Service {

  constructor() { }
  loginCheck(uname, pwd) {
    if (uname == "swathi" && pwd == "s@123") {
      
      localStorage.setItem('username', "swathi");
      // console.log(localStorage.getItem('username'))
      // localStorage.setItem(`password`,"s@123"); //property from html5 to store

      return true;
    }
    else
      return false;
  }
}
