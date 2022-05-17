import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/api/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mail-validation',
  templateUrl: './mail-validation.component.html',
  styleUrls: ['./mail-validation.component.scss']
})
export class MailValidationComponent implements OnInit {
  val: any
  submited=false
  isLoading=false
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
  submit(){

  }
  resend_mail(){
    Swal.fire({
      title: 'Verify email',
      text: 'Enter your email address below and we will send you a link where you can verify your account.',
      input: 'email',
      inputPlaceholder: "exemple@exemple.com",
          showCancelButton: true,
          confirmButtonText: "send",
          color: 'black',
          background: '#F2F2F2',
          confirmButtonColor: "#031f32",
      showLoaderOnConfirm: true,
      preConfirm: (email:any) => {
        
        return  new Promise( async(resolve) => {
          console.log(email)
          this.userService.send_verification_mail(email)
          .subscribe( async(response:any) => {
            console.log(response)
            if (await response.status ===true) {
              Swal.fire(`Mail envoyé avec succès`);
              
            } else {
           
            Swal.showValidationMessage(response.message)
            resolve('fd')
            }
          });
        });
    
         
      }})
  }
}
