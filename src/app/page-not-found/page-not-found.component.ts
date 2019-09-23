import { Component, OnInit } from '@angular/core';
// -----------------change 19-----------
import { Router } from "@angular/router";//  change

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(public router:Router) { }//change

  ngOnInit() {
  }
  gotoHome() {
    this.router.navigate(['/']); //change
  }
}
