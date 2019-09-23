  import { Component, OnInit } from '@angular/core';
import {BlogpostService} from "../blogpost.service";
import {Blogpost} from "../blogpost";
import { Title } from '@angular/platform-browser';
import {Blog} from "../../../../models/user.js";


@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent implements OnInit {
public title="Blogs";
blogs:Array<Blogpost>;  
error:{};


  constructor(private blogpostService:BlogpostService,private titleService:Title) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);

    this.blogpostService.getBlogs().subscribe(
      (data: any) => {
        console.log(data);
        
        // const data1 = JSON.parse(data);
      
        this.blogs=data;
        
      
      } 
    );
    // calling the method returns response as observables and we need to subscribe to it to access the ddata
  }

}
