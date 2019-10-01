import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverDashboardComponent } from './driver-dashboard/driver-dashboard.component';
import { DriverSignUpComponent } from './driver-sign-up/driver-sign-up.component';
import { MatInputModule, MatFormFieldModule, MatCardModule, MatButtonModule, MatSelectModule, MatCheckboxModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ImageSelectorFieldComponent } from './image-selector-field/image-selector-field.component';
import { FileUploadService } from 'src/app/services/uploads/upload.service';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { DriverValidationService } from 'src/app/services/validation/driver-validation.service';

@NgModule({
  declarations: [
    DriverDashboardComponent,
    DriverSignUpComponent,
    ImageSelectorFieldComponent
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
    MatCheckboxModule,

    AngularFireStorageModule
  ],
  exports: [
    DriverDashboardComponent
  ],
  providers: [
    FileUploadService,
    DriverValidationService
  ]
})
export class DriverModule { }
