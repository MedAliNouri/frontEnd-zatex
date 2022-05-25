import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StationService {
protected readonly URI = environment.proxy + '/station'
  
  constructor(private http:HttpClient) { }

  create(data:any){
    return this.http.post(this.URI,data)
  }
  delete(id:any){
    return this.http.delete(this.URI + '/'+id)
  }

  getAll(){
    return this.http.get(this.URI)
  }
  updateOne(data:any){
   return this.http.post(this.URI + '/update',data)
  }
  getById(id:any){
    return this.http.get(this.URI+'/'+id)
  }
}
