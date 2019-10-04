/// <reference types="@types/googlemaps" />
import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatOptionSelectionChange } from '@angular/material';

@Component({
  selector: 'app-places-autocomplete',
  templateUrl: './places-autocomplete.component.html',
  styleUrls: ['./places-autocomplete.component.css',
      '../../../shared/styles/commons.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: PlacesAutocompleteComponent,
      multi: true
    }
  ]
})
export class PlacesAutocompleteComponent implements OnDestroy, OnInit, ControlValueAccessor {

  @Input() placeholder: string;

  @Output()
  locationChange: EventEmitter<google.maps.places.AutocompletePrediction> = new EventEmitter<google.maps.places.AutocompletePrediction>();

  inputFieldFormControl: FormControl = new FormControl();

  private valueChangesSub: Subscription;
  selectedPlace: google.maps.places.AutocompletePrediction;

  private userInputTimeout: number;
  suggestedPlaces: google.maps.places.AutocompletePrediction[];

  onChange: (value: string) => void;

  constructor(private http: HttpClient) {
    this.valueChangesSub = this.inputFieldFormControl.valueChanges.subscribe((value) => {
      if (this.userInputTimeout) {
        window.clearTimeout(this.userInputTimeout);
      }

      if (!value || value.length < 3) {
        this.suggestedPlaces = [];
        return ;
      }

      this.userInputTimeout = window.setTimeout(() => {
        this.generateSuggestions(value);
      }, 300);
    });
  }

  ngOnDestroy(): void {
    this.valueChangesSub.unsubscribe();
  }

  ngOnInit() {
  }

  private generateSuggestions(text: string) {
    const autocompleteService = new google.maps.places.AutocompleteService();
    autocompleteService.getPlacePredictions({
      input: text,
      componentRestrictions: {
        country: 'RO'
      }
    }, (result: google.maps.places.AutocompletePrediction[], status: google.maps.places.PlacesServiceStatus) => {
      this.suggestedPlaces = result;
    });
  }

  public optionSelectionChange(option: google.maps.places.AutocompletePrediction, event: MatOptionSelectionChange) {
    if (event.isUserInput) {
      this.selectedPlace = option;
      this.locationChange.emit(option);
    }
  }

  notifyPlaceSelection(place: google.maps.places.AutocompletePrediction): void {
    this.locationChange.emit(place);
  }

  writeValue(obj: any): void {

  }

  registerOnChange(fn: (value: string) => void): void {
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
  }

}
