import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Router } from '@angular/router';
import { BehaviorSubject, catchError } from 'rxjs';
import { errorMgmt } from '../api/errorHandling';
import { User } from 'src/app/models/userModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  protected readonly API = environment.proxy + "/auth"
  constructor(private http: HttpClient, private router: Router) {

  }
  login(user:User){
    return this.http.post(this.API + "/login",user)
    }

  logOut() {
    localStorage.removeItem('USER')
    localStorage.removeItem('TOKEN')
    this.router.navigateByUrl('/auth/login')
  }

  itemValue = new BehaviorSubject(this.theItem);

  set theItem(value) {
    this.itemValue.next(value); 
    console.log(value.urlPhoto)// this will make sure to tell every subscriber about the change.
    localStorage.setItem('USER',JSON.stringify(value) );
  }
 
  get theItem() {
    if(localStorage.getItem("USER")){
      return JSON.parse(localStorage.getItem("USER")|| "") 
    }
     }
  storeLogedUser(data: any) {
    // localStorage.setItem('USER', JSON.stringify(data.user))
    this.theItem=data.user
    localStorage.setItem('TOKEN', data.token)
  }
  get isLoggedIn() {
    return !!localStorage.getItem('TOKEN')
  }
  resetPassword(email: string) {
    let doc = { email }
    return this.http.post(this.API + "/restPassword", doc).pipe( catchError(errorMgmt));
  }
  get_token_reset_pass(id:any) {
    return this.http.get(this.API + '/get_token_password/' + id).pipe(catchError(errorMgmt));
  }

}
