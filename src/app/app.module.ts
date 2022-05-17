import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './component/auth/auth.module';
import { DashboardModule } from './component/dashboard/dashboard.module';
import { ContentLayoutComponent } from './shared/component/content-layout/content-layout.component';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './shared/component/header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TokenInterceptorService } from './services/authentification/token-interceptor.service';
import { NotFoundComponent } from './component/pages/not-found/not-found.component';
import { PagesModule } from './component/pages/pages.module';
@NgModule({
  declarations: [
    AppComponent,

   
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    DashboardModule,
    SharedModule,
    PagesModule
  ],
  providers: [ {
   
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true,
    
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
