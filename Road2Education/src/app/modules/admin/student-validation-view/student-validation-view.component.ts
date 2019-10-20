import { Component, OnInit, Input } from '@angular/core';
import { StudentSubmittedValidationRequest } from 'src/app/models/validation-request';
import { FirebaseApp } from '@angular/fire';

@Component({
  selector: 'app-student-validation-view',
  templateUrl: './student-validation-view.component.html',
  styleUrls: ['./student-validation-view.component.css']
})
export class StudentValidationViewComponent implements OnInit {

  @Input() request: StudentSubmittedValidationRequest;

  gradebookURL: string;

  constructor(private firebase: FirebaseApp) { }

  ngOnInit() {
    this.firebase.storage().ref(this.request.gradebookId).getDownloadURL()
      .then(result => this.gradebookURL = result);
  }

}
