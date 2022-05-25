import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/api/user.service';
import { AuthService } from 'src/app/services/authentification/auth.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
user:any
employee:any
  constructor(private authService:AuthService,private userService:UserService) { }

  ngOnInit(): void {
    
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
