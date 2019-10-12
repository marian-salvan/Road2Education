import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersistenceService } from 'src/app/services/persistence/persistence.service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-request-creator',
  templateUrl: './request-creator.component.html',
  styleUrls: ['./request-creator.component.css',
      '../../../shared/styles/commons.css']
})
export class RequestCreatorComponent implements OnInit {

  fromLocation: google.maps.places.AutocompletePrediction;
  toLocation: google.maps.places.AutocompletePrediction;

  routeTime: string;

  rideRequestForm: FormGroup;

  constructor(private persistenceService: PersistenceService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.rideRequestForm = new FormGroup({
      routeTime: new FormControl('7:00 am'),
      repeat: new FormControl(),
      selectMonday: new FormControl(),
      selectTuesday: new FormControl(),
      selectWednesday: new FormControl(),
      selectThursday: new FormControl(),
      selectFriday: new FormControl(),
      availableSeats: new FormControl(),
      returnRide: new FormControl(),
      returnTime: new FormControl('1:00 pm'),
      details: new FormControl()
    });
  }

  onRequestSubmission() {

    this.authService.user.subscribe(currentUser => {
      const routeRequest = {
        student: currentUser.uid,
        from: {
          description: this.fromLocation.description,
          place_id: this.fromLocation.place_id
        },
        to: {
          description: this.toLocation.description,
          place_id: this.toLocation.place_id
        },
        routeTime: this.rideRequestForm.controls.routeTime.value,
        repeat: this.rideRequestForm.controls.repeat.value,
        repeatDays: {
          mon: this.rideRequestForm.controls.selectMonday.value,
          tue: this.rideRequestForm.controls.selectTuesday.value,
          wed: this.rideRequestForm.controls.selectWednesday.value,
          thu: this.rideRequestForm.controls.selectThursday.value,
          fri: this.rideRequestForm.controls.selectFriday.value,
        },
        returnRide: this.rideRequestForm.controls.returnRide.value,
        returnTime: this.rideRequestForm.controls.returnTime.value,
        numberOfSeats: this.rideRequestForm.controls.availableSeats.value,
        details: this.rideRequestForm.controls.details.value,
      };

      this.persistenceService.post('route-requests', routeRequest);
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
