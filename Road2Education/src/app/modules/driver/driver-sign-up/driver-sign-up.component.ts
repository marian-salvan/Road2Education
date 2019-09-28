import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-driver-sign-up',
  templateUrl: './driver-sign-up.component.html',
  styleUrls: ['./driver-sign-up.component.css',
      '../../../shared/styles/commons.css']
})
export class DriverSignUpComponent implements OnInit {

  driverSignUpForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.driverSignUpForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      drivingLicense: new FormControl(),
      selfPicture: new FormControl(),
      gdprApprove: new FormControl()
    });
  }

}
