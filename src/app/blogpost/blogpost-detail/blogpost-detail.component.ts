import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'; // parammap is to get the parameter..
import { BlogpostService } from "../blogpost.service";
import { Blogpost } from '../blogpost';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import{Blog} from "models/user";


@Component({
  selector: 'app-blogpost-detail',
  templateUrl: './blogpost-detail.component.html',
  styleUrls: ['./blogpost-detail.component.css']
})
export class BlogpostDetailComponent implements OnInit {
  blog$: Observable<Blogpost>; //this observable will be subscribed by the aysnc pipe in view..
  blog: any;
  sub: any;
  id: any;
  getId: any;
  indi: any;
  animal: any;
  parmaObj:any 
  data: Blog.Blog;

  constructor(
    private blogpostService: BlogpostService,
    private titleService: Title,
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {

 this.parmaObj = this.route.paramMap.pipe(
      switchMap(params => {
        this.id = +params.get("id")
        console.log(this.id)
        return this.id
      })
      
    )

      
        
     
    
  




      this.blogpostService.getBlog(+this.parmaObj.destination.destination.value.id).subscribe(data1=>{
        this.data =data1
        
        console.log(this.data);
        console.log(typeof(this.data))
      })


    //this.route.paramMap.pipe( //A map that provides access to the required and optional parameters specific to a route
    // switchMap((params: ParamMap) =>{
    //  this.indi=(+params.get("id"))

    // }))
    // this.blogpostService.getBlog(+params.get('id')).subscribe((data=>{})// + converts sting to integer..




    // this.blogpostService.getFeaturedBlogs().subscribe((data:any)=>{
    //console.log(data);
    // console.log("hi")

    // this.indi=data.map(obj=>obj)
  }



  // this.sub=this.route.paramMap.subscribe(params=>{
  //   console.log(params);
  //   this.getId=params.get("id");
  //   console.log(this.getId)
  // })
  // console.log("dgjdbd")
  // console.log(this.blog$);

  // this.titleService.setTitle('Blog Detail');
}



