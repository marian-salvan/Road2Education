import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSelectorFieldComponent } from './image-selector-field/image-selector-field.component';
import { PlacesAutocompleteComponent } from './places-autocomplete/places-autocomplete.component';
import { MatTooltipModule, MatInputModule, MatFormFieldModule, MatAutocompleteModule, 
  MatSelectModule, MatOptionModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ImageSelectorFieldComponent,
    PlacesAutocompleteComponent
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
    PlacesAutocompleteComponent
  ]
})
export class BaseComponentsModule { }
