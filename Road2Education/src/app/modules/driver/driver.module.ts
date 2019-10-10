import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverDashboardComponent } from './driver-dashboard/driver-dashboard.component';
import { DriverValidationComponent } from './driver-validation/driver-validation.component';
import { MatInputModule, MatFormFieldModule, MatCardModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule,
  MatSelectModule, MatCheckboxModule, MatAutocompleteModule, MatTooltipModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FileUploadService } from 'src/app/services/uploads/upload.service';
import { PersistenceService } from 'src/app/services/persistence/persistence.service';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { DriverValidationService } from 'src/app/services/validation/driver-validation.service';
import { OfferCreatorComponent } from './offer-creator/offer-creator.component';
import { OffersViewerComponent } from './offers-viewer/offers-viewer.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { BaseComponentsModule } from 'src/app/modules/base-components/base-components.module';

@NgModule({
  declarations: [
    DriverDashboardComponent,
    DriverValidationComponent,
    OfferCreatorComponent,
    OffersViewerComponent,
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
    DriverDashboardComponent,
    OffersViewerComponent,
    OfferCreatorComponent
  ],
  providers: [
    FileUploadService,
    DriverValidationService,
    PersistenceService
  ]
})
export class DriverModule { }
