import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StationService } from 'src/app/services/api/station.service';
import { UserService } from 'src/app/services/api/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-station',
  templateUrl: './edit-station.component.html',
  styleUrls: ['./edit-station.component.scss']
})
export class EditStationComponent implements OnInit {
  options: any;

  overlays: any=[];

  dialogVisible!: boolean;

  markerTitle!: any;

  selectedPosition: any;

  infoWindow: any;

  draggable!: boolean;
station:any
dialog_user=false
submited=false
users:any
dialog_tank=false
newTanks:any
dialog_pompe=false
newPompe:any
show_dialog_edit_tank=false
type=['ESSENCE','DISEL']
@ViewChild('stationForm') stationForm!: NgForm
  submitedPompe=false;
  submitedTank=false;
  edited_object!:any
  constructor(private route:ActivatedRoute,private stationService:StationService,private userService:UserService) {
    userService.getAllEmployee().subscribe(res=>{
      this.users=res
    })

    console.log( this.route.snapshot.paramMap.get('id'))
    this.stationService
    .getById(this.route.snapshot.paramMap.get('id'))
    .subscribe((res:any)=>{
      this.station=res.data
      this.options = {
        center: {lat: Number(this.station.position.lat), lng: Number( this.station.position.lng)},
        zoom: 10
    };
    this.overlays.push(new google.maps.Marker({position: {lat: Number(this.station.position.lat), lng: Number( this.station.position.lng)}}));
      console.log(res)
    })
    
   
   }
open_new_user(){
  this.dialog_user=true
}
open_new_tank(){
  this.dialog_tank=true
  this.newTanks={}
}
open_new_pompe(){
  this.dialog_pompe=true
  this.newPompe={}
  this.newPompe.pistolets=[{
    name:'',
    type:''
    }
  ]
}
add_new_pistolet(){
  this.newPompe.pistolets.push({
    name:'',
    type:''
    })
}
saveUsers(){
  console.log(this.station)
}
saveTank(){
  this.submitedTank=true
  if(!this.newTanks.type ||!this.newTanks.type ||!this.newTanks.capacity ||!this.newTanks.min ||!this.newTanks.max) return false
  if(!this.station.tanks){
  this.station.tanks=[]
}
const index = this.station.tanks.findIndex((object:any) => {
  return object=== this.newTanks;
});
console.log(index)
if(index!==-1){
  this.station.tanks[index]=this.newTanks
  this.dialog_tank=false
  return
}
this.station.tanks.push(this.newTanks)
this.dialog_tank=false
return true
}
savePompe(){
  this.submitedPompe=true

  if(!this.newPompe.name) return false
  if(!this.station.pompes){
  this.station.pompes=[]
}
const index = this.station.pompes.findIndex((object:any) => {
  return object=== this.newPompe;
});
console.log(index)
if(index!==-1){
  this.station.pompes[index]=this.newPompe
  this.dialog_pompe=false
  return
}
this.station.pompes.push(this.newPompe)
console.log(this.station)
this.dialog_pompe=false
return true
}
ngOnInit() {
  this.options = {
      center: {lat:36.80505158970089, lng: 10.134348984605577},
      zoom: 9
  };

  this.initOverlays();

  this.infoWindow = new google.maps.InfoWindow();
}

handleMapClick(event:any) {
  this.selectedPosition = event.latLng;
 console.log(this.selectedPosition.lat(),this.selectedPosition.lng())
 this.overlays=[]
 let position = {lat: this.selectedPosition.lat(), lng: this.selectedPosition.lng()}
  this.overlays.push(new google.maps.Marker({position:position}));
this.station.position=position
console.log(this.station)
}

handleOverlayClick(event:any) {
  let isMarker = event.overlay.getTitle != undefined;

  if (isMarker) {
      let title = event.overlay.getTitle();
      this.infoWindow.setContent('' + title + '');
      this.infoWindow.open(event.map, event.overlay);
      event.map.setCenter(event.overlay.getPosition());

     
  }
  else {
     
  }
}




initOverlays() {
  if (!this.overlays||!this.overlays.length) {
      this.overlays = [
          new google.maps.Marker({position: this.station.position, title:this.station.name}),
          
      ];
  }
}

zoomIn(map:any) {
  map.setZoom(map.getZoom()+1);
}

zoomOut(map:any) {
  map.setZoom(map.getZoom()-1);
}

clear() {
  this.overlays = [];
}
  isControlHasError(controlName:any,validationType:any){
    const control  = this.stationForm.controls[controlName]

    if(!control)return false;
    return control.hasError(validationType) && (control.dirty || control.touched)

  }
  deleteUser(index:any){
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
        this.station.employees.splice(index,1)
      }
     
    })

  }
  deleteTank(index:any){
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
        this.station.tanks.splice(index,1)
      }
     
    })
  }
  deletePompe(index:any){
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
        this.station.pompes.splice(index,1)
      }
     
    })
  }
  editTank(tank:any){
    this.dialog_tank=true
    this.newTanks=tank
  }
  editPompe(pompe:any){
    this.dialog_pompe=true
    this.newPompe=pompe
  }


  save_station(){
    this.stationService.updateOne(this.station).subscribe((res:any)=>{
      console.log(res)
    })
  }
}
