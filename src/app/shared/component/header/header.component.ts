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
    if(localStorage.getItem('USER')){
this.user=JSON.parse(localStorage.getItem('USER') || " ")
this.name=this.user.name_lastName.split(' ')
    }
  }
 
}
