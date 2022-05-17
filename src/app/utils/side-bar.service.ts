import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {
menu_item:any[]=[]
 
  constructor() { 
    this.fillMenu()
  }
fillMenu(){
  this.menu_item.push(
    {title:"dashboard",link:"/dashboard",icon:"fa fa-tachometer"},
     {title:"users",link:"/pages/users",icon:"fa fa-users"},
     {title:"station",link:"/station",icon:"fa fa-map-marker"},
  )
}
items = new BehaviorSubject<any[]>(this.menu_item);
}
