import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { NotFoundComponent } from './not-found/not-found.component';
import { UsersComponent } from './users/users.component';

import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {CardModule} from 'primeng/card';
import {ToolbarModule} from 'primeng/toolbar';

import {SplitButtonModule} from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import {FileUploadModule} from 'primeng/fileupload';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
import { ProfileComponent } from './profile/profile.component';
import { PasswordModule } from 'primeng/password';
import {InputSwitchModule} from 'primeng/inputswitch';
@NgModule({
  declarations: [
    NotFoundComponent,
    UsersComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    DropdownModule,
    CommonModule,
    InputSwitchModule,
    TableModule,
    ReactiveFormsModule,
    FormsModule,
    PagesRoutingModule,
    ProgressSpinnerModule,
    FileUploadModule,
    DialogModule,
    SplitButtonModule,
    ToolbarModule,
    CardModule,
    InputTextModule,
    MessageModule,
    PasswordModule,
    MessagesModule
  ]
})
export class PagesModule { }
