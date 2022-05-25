import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StationService } from 'src/app/services/api/station.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.scss']
})
export class StationComponent implements OnInit {
stations:any
stationForm!:FormGroup
dialog_show=false

options: any;

overlays!: any[];

  constructor(private stationService:StationService,private fb:FormBuilder) {
    this.stationForm= fb.group({
      name: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      zipCode: new FormControl('', [Validators.required]),
      departement: new FormControl('', [Validators.required]),
      post: new FormControl('', [Validators.required]),
    })
   }

  ngOnInit(): void {
    this.options = {
      center: {lat: 36.890257, lng: 30.707417},
      zoom: 12
  };
    this.getAll()
  }
  getAll(){
    this.stationService.getAll().subscribe((res:any)=>{
      this.stations=res.data
      console.log(res)
    })
  }
  delete_station(id:any){
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
        this.stationService.delete(id).subscribe((res:any)=>{
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
              title:"Station deleted successfuly ",
            
            })
          this.getAll()
        })
      }
     
    })
    
  
  }
  isControlHasError(controlName:any,validationType:any){
    const control  = this.stationForm.controls[controlName]

    if(!control)return false;
    return control.hasError(validationType) && (control.dirty || control.touched)

  }
  openNew(){
    this.dialog_show=true
  }
  saveStation(){
 
    this.stationService.create(this.stationForm.value).subscribe(res=>{
      console.log(res)
      this.getAll()
      this.dialog_show=false
    })
  }
}
