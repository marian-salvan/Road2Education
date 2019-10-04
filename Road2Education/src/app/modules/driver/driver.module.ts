import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverDashboardComponent } from './driver-dashboard/driver-dashboard.component';
import { DriverSignUpComponent } from './driver-sign-up/driver-sign-up.component';
import { MatInputModule, MatFormFieldModule, MatCardModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule,
  MatSelectModule, MatCheckboxModule, MatAutocompleteModule, MatTooltipModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ImageSelectorFieldComponent } from './image-selector-field/image-selector-field.component';
import { FileUploadService } from 'src/app/services/uploads/upload.service';
import { PersistenceService } from 'src/app/services/persistence/persistence.service';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { DriverValidationService } from 'src/app/services/validation/driver-validation.service';
import { OfferCreatorComponent } from './offer-creator/offer-creator.component';
import { OffersViewerComponent } from './offers-viewer/offers-viewer.component';
import { RouterModule } from '@angular/router';
import { PlacesAutocompleteComponent } from './places-autocomplete/places-autocomplete.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

@NgModule({
  declarations: [
    DriverDashboardComponent,
    DriverSignUpComponent,
    ImageSelectorFieldComponent,
    OfferCreatorComponent,
    OffersViewerComponent,
    PlacesAutocompleteComponent
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
