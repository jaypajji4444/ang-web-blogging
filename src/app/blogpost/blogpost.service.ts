import { Injectable } from '@angular/core';
//import { Blogpost } from "./blogpost";
import{Blog} from "../../../models/user";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import {throwError, Observable} from "rxjs";
import {catchError} from "rxjs/operators";
import {Categories} from "./categories";



@Injectable({
  providedIn: 'root'
})
export class BlogpostService {
  ServerUrl = 'http://localhost:3000/';
  errorData: {};


  constructor(private http: HttpClient) { }
  getBlogs() {
    return this.http.get<Blog.Blog>(this.ServerUrl + 'api/blog/').pipe(
      catchError(this.handleError)
    );
  }

  getFeaturedBlogs() {
    return this.http.get<Blog.Blog>(this.ServerUrl + 'api/featured_blogs').pipe(
      catchError(this.handleError)
    );
  }

  getBlog(id: number) : Observable<Blog.Blog> {
    console.log("Api Call",this.ServerUrl + 'api/blog/' + id);
    return this.http.get<Blog.Blog>(this.ServerUrl + 'api/blog/' + id)
    .pipe(
      catchError(this.handleError)
    );
}

  getRecentBlogs() {
    return this.http.get<Blog.Blog>(this.ServerUrl + 'api/recent_blogs').pipe(
      catchError(this.handleError)
    );
}


getCategories() {
  return this.http.get<Categories>(this.ServerUrl + 'api/categories').pipe(
    catchError(this.handleError)
  );
}





  private handleError(error: HttpErrorResponse) {
    console.log(error);
    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.

      console.error('An error occurred:', error.error.message);
    } else {

      // The backend returned an unsuccessful response code.

      // The response body may contain clues as to what went wrong,

      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    // return an observable with a user-facing error message

    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }
}

