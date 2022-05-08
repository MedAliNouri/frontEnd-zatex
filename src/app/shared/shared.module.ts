import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentLayoutComponent } from './component/content-layout/content-layout.component';
import { HeaderComponent } from './component/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {ButtonModule} from 'primeng/button';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { NgxLetterImageAvatarModule } from 'ngx-letter-image-avatar';
import {OverlayPanelModule} from 'primeng/overlaypanel';

@NgModule({
  declarations: [
    ContentLayoutComponent,
    HeaderComponent,
    SideBarComponent
  ],
  imports: [
    ButtonModule,
    CommonModule,
    BrowserModule,
    RouterModule,
   OverlayPanelModule,
   NgxLetterImageAvatarModule
 
  ]
})
export class SharedModule { }
