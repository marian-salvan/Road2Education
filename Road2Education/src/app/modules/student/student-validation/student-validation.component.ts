import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentValidationService } from 'src/app/services/validation/student-validation.service';
import { Router } from '@angular/router';
import { StudentValidationRequest } from 'src/app/models/validation-request';

@Component({
  selector: 'app-student-validation',
  templateUrl: './student-validation.component.html',
  styleUrls: ['./student-validation.component.css',
  '../../../shared/styles/commons.css']
})
export class StudentValidationComponent implements OnInit {

  studentValidationForm: FormGroup;

  constructor(private studentValidationService: StudentValidationService,
              private router: Router) { }

  ngOnInit() {
    this.studentValidationForm = new FormGroup({
      schoolName: new FormControl(null, [Validators.required]),
      className: new FormControl(null, [Validators.required]),
      gradebook: new FormControl(null, [Validators.required])
    });
  }

  async onSubmitValidation() {
    const req: StudentValidationRequest = {
      class: this.studentValidationForm.controls.className.value,
      school: this.studentValidationForm.controls.schoolName.value,
      gradebook: this.studentValidationForm.controls.gradebook.value,
      user: null
    };

    this.studentValidationService.registerRequest(req)
      .then(s => this.router.navigate(['/account/pending']));
  }

}
