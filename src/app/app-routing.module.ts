import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";//5


const routes: Routes = [
  {path:"" ,redirectTo:"",pathMatch:"full"},//6-- if path is blacknk redirect to home page..
  {path:"**",component:PageNotFoundComponent }//7-- if url is invalid redirect to page not found component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
