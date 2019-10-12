import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersistenceService } from 'src/app/services/persistence/persistence.service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { RouteOffer } from 'src/app/models/route';

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
      selectMonday: new FormControl(false),
      selectTuesday: new FormControl(false),
      selectWednesday: new FormControl(false),
      selectThursday: new FormControl(false),
      selectFriday: new FormControl(false),
      availableSeats: new FormControl(),
      details: new FormControl()
    });
  }

  onOfferSubmission() {

    this.authService.user.subscribe(currentUser => {
      const offer: RouteOffer = {
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
        repeatDays: [
          {
            day: 'mon',
            repeating: this.rideOfferForm.controls.selectMonday.value
          },
          {
            day: 'tue',
            repeating: this.rideOfferForm.controls.selectTuesday.value
          },
          {
            day: 'wed',
            repeating: this.rideOfferForm.controls.selectWednesday.value
          },
          {
            day: 'thu',
            repeating: this.rideOfferForm.controls.selectThursday.value
          },
          {
            day: 'fri',
            repeating: this.rideOfferForm.controls.selectFriday.value
          },
        ],
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
