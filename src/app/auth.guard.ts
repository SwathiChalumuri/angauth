import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  s: string;
 
  constructor(public routes :Router){}
  canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        console.log("canactivate called");
        console.log(next,state)
        if(localStorage.getItem(`username`)!=null){
         this.s = localStorage.getItem(`username`);
          console.log(this.s);
          return true;
        }
       else {
          this.routes.navigateByUrl("");
          return false;
       }
      }
}