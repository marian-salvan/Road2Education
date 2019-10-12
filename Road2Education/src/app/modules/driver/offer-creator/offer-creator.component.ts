import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersistenceService } from 'src/app/services/persistence/persistence.service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-offer-creator',
  templateUrl: './offer-creator.component.html',
  styleUrls: ['./offer-creator.component.css',
      '../../../shared/styles/commons.css']
})
export class OfferCreatorComponent implements OnInit {

  fromLocation: google.maps.places.AutocompletePrediction;
  toLocation: google.maps.places.AutocompletePrediction;

  routeTime: string;

  rideOfferForm: FormGroup;

  constructor(private persistenceService: PersistenceService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.rideOfferForm = new FormGroup({
      routeDate: new FormControl(),
      routeTime: new FormControl('7:00 am'),
      repeat: new FormControl(),
      selectMonday: new FormControl(),
      selectTuesday: new FormControl(),
      selectWednesday: new FormControl(),
      selectThursday: new FormControl(),
      selectFriday: new FormControl(),
      availableSeats: new FormControl(),
      details: new FormControl()
    });
  }

  onOfferSubmission() {

    this.authService.user.subscribe(currentUser => {
      const offer = {
        driver: currentUser.uid,
        from: {
          description: this.fromLocation.description,
          place_id: this.fromLocation.place_id
        },
        to: {
          description: this.toLocation.description,
          place_id: this.toLocation.place_id
        },
        routeDate: this.rideOfferForm.controls.routeDate.value,
        routeTime: this.rideOfferForm.controls.routeTime.value,
        repeat: this.rideOfferForm.controls.repeat.value,
        repeatDays: {
          mon: this.rideOfferForm.controls.selectMonday.value,
          tue: this.rideOfferForm.controls.selectTuesday.value,
          wed: this.rideOfferForm.controls.selectWednesday.value,
          thu: this.rideOfferForm.controls.selectThursday.value,
          fri: this.rideOfferForm.controls.selectFriday.value,
        },
        numberOfSeats: this.rideOfferForm.controls.availableSeats.value,
        details: this.rideOfferForm.controls.details.value,
      };

      this.persistenceService.post('route-offers', offer);
    });
  }

  onLocationSelected(place: google.maps.places.AutocompletePrediction, identifier: string) {
    switch (identifier) {
      case 'fromLocation':
        this.fromLocation = place;
        break;
      case 'toLocation':
        this.toLocation = place;
        break;
    }
  }

}
