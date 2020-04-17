import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
//   {
//     path:"",
//     component:HomeComponent
//   },
//  {
//    path:"login",
   
//    component:LoginComponent,
//    children:[
//  {
//   path:"register",
//   canActivate:[AuthGuard],
//   component:RegisterComponent
//  }
// ]},
{
  path:"",
  component:LoginComponent
},
{
  path:"register",
  canActivate:[AuthGuard],
  component:RegisterComponent
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
