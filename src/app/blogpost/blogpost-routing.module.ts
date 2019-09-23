import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import the componets of blogpost you want to use

import { BlogpostListComponent } from "./blogpost-list/blogpost-list.component";//8
import { BlogpostDetailComponent } from "./blogpost-detail/blogpost-detail.component";//9


const routes: Routes = [
 {path:"blog", component:BlogpostListComponent}, //10
 {path:"blog/:id",component:BlogpostDetailComponent}//11
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogpostRoutingModule { }
