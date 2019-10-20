import { Component, OnInit } from '@angular/core';
import { DriverValidationService } from 'src/app/services/validation/driver-validation.service';
import { DriverSubmittedValidationRequest, StudentSubmittedValidationRequest } from 'src/app/models/validation-request';
import { StudentValidationService } from 'src/app/services/validation/student-validation.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  driverPendingRequests: DriverSubmittedValidationRequest[];
  studentPendingRequests: StudentSubmittedValidationRequest[];

  constructor(private driverValidationService: DriverValidationService,
              private studentValidationService: StudentValidationService) { }

  ngOnInit() {
    this.driverValidationService.retrievePendingRequests().subscribe(result => {
      this.driverPendingRequests = result;
    });

    this.studentValidationService.retrievePendingRequests().subscribe(result => {
      this.studentPendingRequests = result;
    });
  }

}
