import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SkeletonModule} from 'primeng/skeleton';
import { AuthRoutingModule } from './auth-routing.module';
import {InputTextModule} from 'primeng/inputtext';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import {ButtonModule} from 'primeng/button';
import {PasswordModule} from 'primeng/password';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {InputNumberModule} from 'primeng/inputnumber';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { MailValidationComponent } from './pages/mail-validation/mail-validation.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { SuccessCreationComponent } from './pages/success-creation/success-creation.component';

@NgModule({
  declarations: [

    RegisterComponent,
    LoginComponent,
    ResetPasswordComponent,
    MailValidationComponent,
    ChangePasswordComponent,
    SuccessCreationComponent
  ],
  imports: [
    SkeletonModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    ButtonModule,
    InputTextModule,
    CommonModule,
    AuthRoutingModule,
    InputNumberModule
  ]
})
export class AuthModule { }
