import { Component, OnInit, Input } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { DriverSubmittedValidationRequest } from 'src/app/models/validation-request';

@Component({
  selector: 'app-driver-validation-view',
  templateUrl: './driver-validation-view.component.html',
  styleUrls: ['./driver-validation-view.component.css']
})
export class DriverValidationViewComponent implements OnInit {

  @Input() request: DriverSubmittedValidationRequest;

  driverPhotoURL: string;
  drivingLicenseURL: string;

  constructor(private firebase: FirebaseApp) { }

  ngOnInit() {
    this.firebase.storage().ref(this.request.driverPhotoId).getDownloadURL()
      .then(result => this.driverPhotoURL = result);
    this.firebase.storage().ref(this.request.drivingLicenseId).getDownloadURL()
      .then(result => this.drivingLicenseURL = result);
  }

}
