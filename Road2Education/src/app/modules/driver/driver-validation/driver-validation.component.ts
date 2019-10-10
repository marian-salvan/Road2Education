import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DriverValidationService } from 'src/app/services/validation/driver-validation.service';
import { DriverValidationRequest} from 'src/app/models/validation-request';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver-validation',
  templateUrl: './driver-validation.component.html',
  styleUrls: ['./driver-validation.component.css',
      '../../../shared/styles/commons.css']
})
export class DriverValidationComponent implements OnInit {

  driverValidationForm: FormGroup;

  constructor(private driverValidationService: DriverValidationService,
              private router: Router) { }

  ngOnInit() {
    this.driverValidationForm = new FormGroup({
      drivingLicense: new FormControl(null, [Validators.required]),
      driverPhoto: new FormControl(null, [Validators.required]),
      gdprApprove: new FormControl()
    });
  }

  async onSubmitValidation() {
    const req: DriverValidationRequest = {
      drivingLicense: this.driverValidationForm.controls.drivingLicense.value,
      driverPhoto: this.driverValidationForm.controls.driverPhoto.value,
      user: null
    };

    this.driverValidationService.registerRequest(req)
        .then(s => this.router.navigate(['account/pending']));
  }
}
