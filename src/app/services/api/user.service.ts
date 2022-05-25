import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { User } from 'src/app/shared/models/userModel';
import { environment } from 'src/environments/environment';
import { errorMgmt } from './errorHandling';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  protected readonly API = environment.proxy + "/user"
  protected readonly API_AUTH = environment.proxy + "/auth"
  constructor(private http: HttpClient) {

  }
  getOne(id:any){
    return this.http.get<User[]>(this.API+ "/"+id)
  }
  getAllEmployee() {
    return this.http.get<User[]>(this.API +"/employee")
  }
  getAll() {
    return this.http.get<User[]>(this.API)
  }
  create_user(user: User) {
    return this.http.post(this.API + "/register", user).pipe(catchError(errorMgmt));
  }
  send_verification_mail(email: any) {
    let doc = { email }
    return this.http.post(this.API_AUTH + "/send_verification_mail", doc).pipe(catchError(errorMgmt));
  }
  getEmployeeForGerant(id:any){
    return this.http.get<User[]>(this.API+ "/getEmployeeForGerant/"+id)
  }
  create_user_with_avatar(gerant:any,user:User,file:File){
    const formData: FormData = new FormData();
    console.log(user)
user.gerant=gerant._id
    formData.append('file', file);
    formData.append('user',JSON.stringify(user) );
    console.log(formData)
    return this.http.post(this.API + '/create_user_with_avatar', formData).pipe(catchError(errorMgmt));
  }
  verify_mail(token: any) {
    let doc = { token }
    return this.http.post(this.API_AUTH + "/verify_mail", doc).pipe(catchError(errorMgmt));
  }

  change_password(user: User, password: string) {
    let doc = { user, password }
    return this.http.post(this.API + "/change_password", doc).pipe(catchError(errorMgmt));
  }
  updateOne(user: User) {
  
    return this.http.post(this.API + "/updateOne", user).pipe(catchError(errorMgmt));
  }
  uploadAvatar(id:any, file: File) {
    const formData: FormData = new FormData();
    console.log(id)

    formData.append('file', file);
    formData.append('id', id);
    console.log(formData)
    return this.http.post(this.API + '/uploadAvatar', formData).pipe(catchError(errorMgmt));
    // const req = new HttpRequest('POST', this.URL_UPLOAD, formData, {

    //   //reportProgress: false,
    //   //responseType: 'json'
    // });

    // return this.http.request(req);
  }
  delete(id:any){
    console.log(id)
    return this.http.delete(this.API + "/findByIdAndDelete/"+id).pipe(catchError(errorMgmt));
  }
}
