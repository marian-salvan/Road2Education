import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentValidationComponent } from './student-validation/student-validation.component';
import { RequestCreatorComponent } from './request-creator/request-creator.component';
import { FileUploadService } from 'src/app/services/uploads/upload.service';
import { PersistenceService } from 'src/app/services/persistence/persistence.service';

@NgModule({
  declarations: [
    StudentDashboardComponent,
    StudentValidationComponent,
    RequestCreatorComponent
  ],
  imports: [
    CommonModule
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
