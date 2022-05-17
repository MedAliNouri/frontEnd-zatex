import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';
import { MailValidationComponent } from './pages/mail-validation/mail-validation.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { SuccessCreationComponent } from './pages/success-creation/success-creation.component';


const routes: Routes = [{path:'',children:[
  {path:'',redirectTo:"/auth/login",pathMatch:"full"},
  {path:'login',component:LoginComponent},
  {path:'mailValidation',component:MailValidationComponent},
  {path:'register',component:RegisterComponent},
  {path:'send_mail_reset_pass',component:ResetPasswordComponent},
  {path:'reset_pass/:id',component:ChangePasswordComponent},
  {path:'success',component:SuccessCreationComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

