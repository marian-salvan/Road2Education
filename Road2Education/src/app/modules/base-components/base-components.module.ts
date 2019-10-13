import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ImageSelectorFieldComponent } from './image-selector-field/image-selector-field.component';
import { PlacesAutocompleteComponent } from './places-autocomplete/places-autocomplete.component';
import { MatTooltipModule, MatInputModule, MatFormFieldModule, MatAutocompleteModule, 
  MatSelectModule, MatOptionModule, MatCardModule, MatCheckboxModule, MatDialogModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OfferViewComponent } from './offer-view/offer-view.component';
import { RequestViewComponent } from './request-view/request-view.component';
import { OffersListComponent } from './offers-list/offers-list.component';
import { UserInformationModalComponent } from './user-information-modal/user-information-modal.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ErrorModalComponent } from './error-modal/error-modal.component';

@NgModule({
  declarations: [
    ImageSelectorFieldComponent,
    PlacesAutocompleteComponent,
    OfferViewComponent,
    RequestViewComponent,
    OffersListComponent,
    UserInformationModalComponent,
    ErrorModalComponent
  ],
  entryComponents: [
    UserInformationModalComponent,
    ErrorModalComponent
  ],
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,

    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatOptionModule,
    MatTooltipModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    NgbModalModule
  ],
  providers: [
    DatePipe
  ],
  exports: [
    ImageSelectorFieldComponent,
    PlacesAutocompleteComponent,
    OfferViewComponent,
    RequestViewComponent,
    UserInformationModalComponent,
    ErrorModalComponent
  ]
})
export class BaseComponentsModule { }
