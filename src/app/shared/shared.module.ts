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
import {BadgeModule} from 'primeng/badge';
@NgModule({
  declarations: [
    ContentLayoutComponent,
    HeaderComponent,
    SideBarComponent
  ],
  imports: [
    BadgeModule,
    ButtonModule,
    CommonModule,
    BrowserModule,
    RouterModule,
   OverlayPanelModule,
   NgxLetterImageAvatarModule
 
  ]
})
export class SharedModule { }
