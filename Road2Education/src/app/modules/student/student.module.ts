import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentValidationComponent } from './student-validation/student-validation.component';
import { RequestCreatorComponent } from './request-creator/request-creator.component';
import { FileUploadService } from 'src/app/services/uploads/upload.service';
import { PersistenceService } from 'src/app/services/persistence/persistence.service';
import { BaseComponentsModule } from '../base-components/base-components.module';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatTooltipModule, MatAutocompleteModule, MatCheckboxModule, MatSelectModule, 
  MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatDatepickerModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    StudentDashboardComponent,
    StudentValidationComponent,
    RequestCreatorComponent
  ],
  imports: [
    RouterModule,
    CommonModule,

    ReactiveFormsModule,
    FormsModule,

    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,

    AngularFireStorageModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatTooltipModule,
    NgxMaterialTimepickerModule,

    BaseComponentsModule,
  ],
  exports: [
    StudentDashboardComponent,
    RequestCreatorComponent,
  ],
  providers: [
    FileUploadService,
    PersistenceService,
  ]
})
export class StudentModule { }
