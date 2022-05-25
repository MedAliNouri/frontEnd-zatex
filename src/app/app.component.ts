import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private map!: google.maps.Map

  ngOnInit(): void {
let loader= new Loader({
  apiKey:"AIzaSyDs9TsvNnykaG5lvz9UaVI9M1XZ7rMv18E"
})
let element:HTMLElement=document.getElementById('map')  as HTMLElement
loader.load().then(()=>{
 new google.maps.Map(element,{
  center: {lat:51.233334,lng:6.78333},
zoom:6
})
const marker = new google.maps.Marker({
  position:  {lat:51.233334,lng:6.78333},
  map: this.map,
});
})
  }
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;

}
