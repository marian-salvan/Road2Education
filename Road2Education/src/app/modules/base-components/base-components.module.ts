import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSelectorFieldComponent } from './image-selector-field/image-selector-field.component';
import { PlacesAutocompleteComponent } from './places-autocomplete/places-autocomplete.component';
import { MatTooltipModule, MatInputModule, MatFormFieldModule, MatAutocompleteModule, 
  MatSelectModule, MatOptionModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OfferViewComponent } from './offer-view/offer-view.component';
import { RequestViewComponent } from './request-view/request-view.component';
import { OffersListComponent } from './offers-list/offers-list.component';

@NgModule({
  declarations: [
    ImageSelectorFieldComponent,
    PlacesAutocompleteComponent,
    OfferViewComponent,
    RequestViewComponent,
    OffersListComponent
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
    MatTooltipModule
  ],
  exports: [
    ImageSelectorFieldComponent,
    PlacesAutocompleteComponent,
    OfferViewComponent,
    RequestViewComponent
  ]
})
export class BaseComponentsModule { }
