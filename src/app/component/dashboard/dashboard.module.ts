import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {BadgeModule} from 'primeng/badge';
import {ChartModule} from 'primeng/chart';
import {ProgressBarModule} from 'primeng/progressbar';
import { EmployeeComponent } from './employee/employee.component';
import { DashboardNotificationComponent } from './dashboard-notification/dashboard-notification.component';
@NgModule({
  declarations: [
    DashboardComponent,
    EmployeeComponent,
    DashboardNotificationComponent
  ],
  imports: [
    ProgressBarModule,
    CommonModule,
    BadgeModule,
    DashboardRoutingModule,
    ChartModule
  ]
})
export class DashboardModule { }
