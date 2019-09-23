import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';// import
import { ContactFormComponent } from './contact-form/contact-form.component';// import


const routes: Routes = [
  {path: 'page/:slug', component: PageComponent},// 12
  {path: 'contact', component: ContactFormComponent}//13
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmspageRoutingModule { }
