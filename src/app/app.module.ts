import { BrowserModule ,Title} from '@angular/platform-browser';// import title which is a service set it in provider
import { NgModule } from '@angular/core';
import { CmspageModule } from "./cmspage/cmspage.module";// import
import { BlogpostModule } from "./blogpost/blogpost.module";// import
import { HttpClientModule } from "@angular/common/http";//20

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PageNotFoundComponent,
    
  ],
  imports: [ // note app routing module should always be declred at last..
    BrowserModule,
    HttpClientModule,// 21
    BlogpostModule,
    CmspageModule,
    AppRoutingModule,
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
