import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/api/user.service';
import { AuthService } from 'src/app/services/authentification/auth.service';
import { ConfirmedValidator } from 'src/app/shared/formValidators/passwordMatch';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  registerForm!: FormGroup
  submited=false
  isLoading=false
  loadingImg = false
imagetosave:any
user:any
  imageSrc:any="assets/default.jpg"
  constructor(private fb:FormBuilder,private userService:UserService,private router:Router,private authService:AuthService) { 
    this.authService.itemValue.subscribe((nextValue:any) => {
      console.log(nextValue)
     this.userService.getOne(nextValue._id).subscribe(res=>{
       this.user=res
      
       this.registerForm=  this.fb.group({
        name: new FormControl(this.user.name, [Validators.required]),
        lastName: new FormControl(this.user.lastName, [Validators.required]),
        post: new FormControl(this.user.post, [Validators.required]),
        civility: new FormControl(this.user.civility, [Validators.required]),
        phone: new FormControl(this.user.phone, [Validators.required]),
        socialReason: new FormControl(this.user.socialReason, [Validators.required]),
          email: new FormControl(this.user.email, [Validators.required,Validators.email]),
          password: new FormControl("", [Validators.required,Validators.min(6)]),
       
        }
        )
    if(this.user?.urlPhoto){
      this.imageSrc=this.user.urlPhoto
    }
     })
      // this will happen on every change
   }) 
 
    
  }
  ngOnInit(): void {

  }
  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.registerForm.controls[controlName] ;
    if (!control) {
      return false;
    }
  
    const result = control.hasError(validationType) && (control.dirty || control.touched)
    return result;
  }
  selectFile(event: any) {
    this.imageSrc=="assets/default.jpg"
    this.loadingImg = true
    const reader = new FileReader();
    this.imagetosave = event.target.files[0]
    reader.onload = e => this.imageSrc = reader.result;
    console.log(event.target.files[0])
    reader.readAsDataURL(event.target.files[0])
    
   
      console.log(this.imagetosave)
      this.userService.uploadAvatar(this.user._id, this.imagetosave).subscribe((res:any)=>{
        console.log(res)
        this.loadingImg = false
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
        this.user.urlPhoto=res.urlPhoto
        console.log(res)
        this.authService.theItem= this.user
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
    
    
   
      })
  
   
 
  }
  save(){
    let userToSave=this.registerForm.value
    userToSave._id=this.user._id
    if(this.registerForm.value.password==""){
      delete userToSave.password
    }
    console.log(userToSave)
    this.userService.updateOne(userToSave).subscribe((res:any)=>{
      
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
        console.log(res.message)
        this.authService.theItem= res.message
     
    })
  }
}
