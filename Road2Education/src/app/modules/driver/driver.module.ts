import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverDashboardComponent } from './driver-dashboard/driver-dashboard.component';

@NgModule({
  declarations: [
    DriverDashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DriverDashboardComponent
  ]
})
export class DriverModule { }
