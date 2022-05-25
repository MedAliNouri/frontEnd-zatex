import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/api/user.service';
import { AuthService } from 'src/app/services/authentification/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  basicData: any;
  basicOptions: any;
  user:any
  employee!:any[]
  notification:any=[]
  value=50
  constructor(private authService:AuthService,private userService:UserService) { }

  ngOnInit(): void {
    this.notification.push({user:'test',text:"test notification"},{user:'test',text:"test notification"})
      this.authService.itemValue.subscribe(next=>{
          this.user=next
          this.getEmployee(next._id)
      })
    }
    getEmployee(id:any){
        this.userService.getEmployeeForGerant(id).subscribe(res=>{
            console.log(res)
        this.employee=res
        })
    }

}
