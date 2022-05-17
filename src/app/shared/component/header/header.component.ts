import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/userModel';
import { AuthService } from 'src/app/services/authentification/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user!:User
  name!:any
  constructor(private authService:AuthService) { }
 logOut(){
   this.authService.logOut()
 }
  ngOnInit() {
    this.authService.itemValue.subscribe((nextValue:any) => {
      console.log(nextValue)
     this.user= nextValue // this will happen on every change
   })
    if(this.user){

this.name=this.user.name.split(' ') + ' ' + this.user.lastName
    }
  }
 
}
