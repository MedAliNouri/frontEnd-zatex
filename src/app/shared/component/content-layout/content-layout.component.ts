import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/api/user.service';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent implements OnInit {

  constructor(private userService:UserService) { 
    this.userService.getAll().subscribe(res=>{
      console.log(res)
    })
  }

  ngOnInit(): void {
  }

}
