import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersistenceService } from 'src/app/services/persistence/persistence.service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { RouteRequest } from 'src/app/models/route';

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
      selectMonday: new FormControl(false),
      selectTuesday: new FormControl(false),
      selectWednesday: new FormControl(false),
      selectThursday: new FormControl(false),
      selectFriday: new FormControl(false),
      availableSeats: new FormControl(),
      returnRide: new FormControl(),
      returnTime: new FormControl('1:00 pm'),
      details: new FormControl()
    });
  }

  onRequestSubmission() {

    this.authService.user.subscribe(currentUser => {
      const routeRequest: RouteRequest = {
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
        repeatDays: [
          {
            day: 'mon',
            repeating: this.rideRequestForm.controls.selectMonday.value
          },
          {
            day: 'tue',
            repeating: this.rideRequestForm.controls.selectTuesday.value
          },
          {
            day: 'wed',
            repeating: this.rideRequestForm.controls.selectWednesday.value
          },
          {
            day: 'thu',
            repeating: this.rideRequestForm.controls.selectThursday.value
          },
          {
            day: 'fri',
            repeating: this.rideRequestForm.controls.selectFriday.value
          },
        ],
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
