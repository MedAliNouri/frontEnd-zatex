import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { User } from 'src/app/shared/models/userModel';
import { AuthService } from 'src/app/services/authentification/auth.service';
import { SideBarService } from 'src/app/utils/side-bar.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  display=false
  items:any
  user!:User
  name!:any

  constructor(private authService:AuthService,private sidebarService:SideBarService,private router:Router) { 
this.sidebarService.items.subscribe(res=>{
  this.router.events.subscribe(event=>{
    if(event instanceof NavigationEnd ){
      console.log(event.url)
    res.forEach(element=>{
      if(element.link==event.url || element.link==event.urlAfterRedirects){
        
        element.active=true
        console.log(element.active)
      }else{  element.active=false}
    }
     )
    }
  })
  console.log(res)
  this.items=res
})
  }
  ngOnInit() {
    this.authService.itemValue.subscribe((nextValue:any) => {
      console.log(nextValue)
     this.user= nextValue // this will happen on every change
   })
    if(this.user){
this.user=JSON.parse(localStorage.getItem('USER') || " ")
this.name=this.user.name.split(' ') + ' ' + this.user.lastName
    }
}}
