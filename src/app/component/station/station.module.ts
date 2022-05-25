import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToolbarModule} from 'primeng/toolbar';
import { StationRoutingModule } from './station-routing.module';
import { StationComponent } from './station.component';
import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {GMapModule} from 'primeng/gmap';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {AvatarModule} from 'primeng/avatar';
import { EditStationComponent } from './edit-station/edit-station.component';
import {DividerModule} from 'primeng/divider';
import {ListboxModule} from 'primeng/listbox';
import {InputNumberModule} from 'primeng/inputnumber';
import {DropdownModule} from 'primeng/dropdown';
@NgModule({
  declarations: [
    StationComponent,
    EditStationComponent
  ],
  imports: [
    DropdownModule,
    InputNumberModule,
    ListboxModule,
    AvatarModule,
    GMapModule,
    CommonModule,
    StationRoutingModule,
    ToolbarModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    DialogModule, 
    FormsModule, 
    AvatarGroupModule,
    DividerModule,
    ReactiveFormsModule 
  ]
})
export class StationModule { }
