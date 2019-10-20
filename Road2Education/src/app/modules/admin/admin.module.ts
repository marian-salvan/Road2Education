import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DriverValidationViewComponent } from './driver-validation-view/driver-validation-view.component';
import { StudentValidationViewComponent } from './student-validation-view/student-validation-view.component';
import { ValidationResolveComponent } from './validation-resolve/validation-resolve.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    DriverValidationViewComponent,
    StudentValidationViewComponent,
    ValidationResolveComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AdminDashboardComponent
  ]
})
export class AdminModule { }
