import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, Observable, throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authService:AuthService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = localStorage.getItem('TOKEN');
      
       console.log(authToken)
        request = request.clone({
            setHeaders: {
                Authorization: "Bearer " + authToken,
             
             
            }
        });
        return next.handle(request).pipe(catchError(err => {
            if ([401, 403].indexOf(err.status) !== -1) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                this.authService.logOut();
                Swal.fire({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                 color: 'red',
                  background: '#f4f4f4',
                  timer: 3000,
                  icon: 'error',
                  title: 'Unauthorized! please logIn',
                
                })
              
            }

            console.log(err)
     
            return throwError(err);
        }))
    }
  }

