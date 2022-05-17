import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/api/user.service';
import { AuthService } from 'src/app/services/authentification/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-success-creation',
  templateUrl: './success-creation.component.html',
  styleUrls: ['./success-creation.component.scss']
})
export class SuccessCreationComponent implements OnInit {
  isLoading = false
  constructor(private authService:AuthService,private router: Router, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.check_verification_mail()
  }


  check_verification_mail() {
    this.route.queryParams

      .subscribe((params: any) => {
        console.log(params); // { order: "popular" }

        let token = params.token;
        console.log(token); // popular
        if (token) {
          this.isLoading = true
          this.userService.verify_mail(token).subscribe((res: any) => {
            this.isLoading = false
            console.log(res)
            if (res.status) {
              Swal.fire({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                color: 'green',
                background: '#f4f4f4',
                timer: 3000,
                icon: 'success',
                title: "account verified! ",

              })

        this.authService.login(res.data).subscribe(response=>{
this.authService.storeLogedUser(response)
        })
              return
            }
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Votre token de vérification de votre compte à été expéré ou invalid merci de renvoyer un autre email',
              preConfirm: (email: any) => { this.router.navigateByUrl('auth/mailValidation') }
            })

          })
        }
      }
      );
  }
}
