import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditStationComponent } from './edit-station/edit-station.component';
import { StationComponent } from './station.component';

const routes: Routes = [
  {path:'',component:StationComponent},
  {path:'edit/:id',component:EditStationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StationRoutingModule { }
