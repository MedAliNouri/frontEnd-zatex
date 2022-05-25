import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/shared/models/userModel';
import { UserService } from 'src/app/services/api/user.service';
import { AuthService } from 'src/app/services/authentification/auth.service';

import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  styles: [`
        /* :host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        } */
    `],
})
export class UsersComponent implements OnInit {
  cols: any
  users: any
  selectedUser!: User[]
  user!: any
  loading = true
  submitted = false
  roles=["ADMIN","EMPLOYEE","GERANT"]
  dialog_show = false
  uploadedFiles = []
  imageSrc: any
  loadingImg = false
  imagetosave: any
  loading_save_result = false
  gerant:any
  @ViewChild('f') form!: NgForm

  constructor(private userService: UserService,private authService:AuthService) {
    this.getAll()
    this.authService.itemValue.subscribe(next=>{
      this.gerant=next
    })
  }


  /*************************************************************************** */

  ngOnInit(): void {
  }

  /*************************************************************************** */

  openNew() {
    this.user = {}
    this.dialog_show = true
    this.imageSrc="assets/default.jpg"
  }



  deleteSelectedProducts() {

  }


  /*************************************************************************** */
  deleteUser(user: any) {

  }

  /*************************************************************************** */

  editUser(user: any) {
    
    this.user = user
    this.dialog_show = true

   
    this.imageSrc=user.urlPhoto
    
    // if(!user._id){
    //   user.isVerified=false
    // }
  }

  /*************************************************************************** */

  hideDialog() {
    this.dialog_show = false
    
  }
delete(id:any){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if(result.isConfirmed){
      this.userService.delete(id).subscribe((res:any)=>{
        console.log(res)
        if(res.status==false){
          Swal.fire({
            toast: true,
            
            showConfirmButton: false,
           color: 'blue',
            background: '#f4f4f4',
            timer: 3000,
            icon: 'error',
            title: res.message,
          
          })
          return
        }
          Swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
           color: 'green',
            background: '#f4f4f4',
            timer: 3000,
            icon: 'success',
            title:"user deleted successfuly ",
          
          })
        this.getAll()
      })
    }
   
  })
  

}

  /*************************************************************************** */
  saveUser(){
    
    this.submitted=true
    if(this.form.valid){
      this.loading_save_result=true
      console.log(this.user)
      if(!this.user._id){
        this.userService.create_user_with_avatar(this.gerant,this.user,this.imagetosave).subscribe((res:any)=>{
          this.loading_save_result=false
    console.log(res)
    if(res.status==false){
      Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
       color: 'red',
        background: '#f4f4f4',
        timer: 3000,
        icon: 'error',
        title: res.message,
      
      })
      return
    }
      Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
       color: 'green',
        background: '#f4f4f4',
        timer: 3000,
        icon: 'success',
        title:"user deleted successfuly ",
      
      })
    this.dialog_show=false
    this.getAll()
        })
      }else{
        if(this.form.value.password==""){
          delete this.user.password
        }
        this.userService.updateOne(this.user).subscribe((res:any)=>{
          this.loading_save_result=false
          if(res.status==false){
            Swal.fire({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
             color: 'red',
              background: '#f4f4f4',
              timer: 3000,
              icon: 'error',
              title: res.message,
            
            })
            return
          }
            Swal.fire({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
             color: 'green',
              background: '#f4f4f4',
              timer: 3000,
              icon: 'success',
              title:"user updated successfuly ",
            
            })
          this.dialog_show=false
        })
      }
    }
 
  }


  /*************************************************************************** */
  selectFile(user: any, event: any) {
    this.imageSrc=="assets/default.jpg"
    this.loadingImg = true
    const reader = new FileReader();
    this.imagetosave = event.target.files[0]
    reader.onload = e => this.imageSrc = reader.result;
    console.log(event.target.files[0])
    reader.readAsDataURL(event.target.files[0])
    this.loadingImg = false
    if (user._id) {
      console.log(this.imagetosave)
      this.userService.uploadAvatar(user._id, this.imagetosave).subscribe((res:any)=>{
        console.log(res)
        if(res.status==false){
          Swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
           color: 'red',
            background: '#f4f4f4',
            timer: 3000,
            icon: 'error',
            title: res.message,
          
          })
          return
        }
          Swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
           color: 'green',
            background: '#f4f4f4',
            timer: 3000,
            icon: 'success',
            title:"photo updated successfuly ",
          
          })
        this.getAll()
    
   
      })
    }
   
 
  }
  /*************************************************************************** */


  getAll() {
    this.loading = true
    this.userService.getAll().subscribe(res => {
      console.log(res)
      this.loading = false
      res.forEach(element => {
        if (!element.urlPhoto) {
          element.urlPhoto == "/assets/default.jpg"
        }
      });
      this.cols = res

      this.users = res
    })

  }
}
