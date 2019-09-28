import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverDashboardComponent } from './driver-dashboard/driver-dashboard.component';
import { DriverSignUpComponent } from './driver-sign-up/driver-sign-up.component';
import { MatInputModule, MatFormFieldModule, MatCardModule, MatButtonModule, MatSelectModule, MatCheckboxModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DriverDashboardComponent,
    DriverSignUpComponent
  ],
  imports: [
    CommonModule,

    ReactiveFormsModule,
    FormsModule,

    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  exports: [
    DriverDashboardComponent
  ]
})
export class DriverModule { }
