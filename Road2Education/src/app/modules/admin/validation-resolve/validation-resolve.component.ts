import { Component, OnInit, Input } from '@angular/core';
import { BaseSubmittedValidationRequest } from 'src/app/models/validation-request';
import { Roles } from 'src/app/shared/constants/roles';
import { UserService } from 'src/app/services/user/user.service';
import { ValidationSolverService } from 'src/app/services/validation/validation-solver.service';

@Component({
  selector: 'app-validation-resolve',
  templateUrl: './validation-resolve.component.html',
  styleUrls: ['./validation-resolve.component.css']
})
export class ValidationResolveComponent implements OnInit {

  @Input() request: BaseSubmittedValidationRequest;

  userEmail: string;
  userPhone: string;

  constructor(private userService: UserService,
              private validationService: ValidationSolverService) { }

  ngOnInit() {
    this.userService.getUser(this.request.user_id).subscribe(user => {
      this.userEmail = user.email;
      this.userPhone = user.phoneNumber;
    });
  }

  isStudent(): boolean {
    return this.request.user_type === Roles.Student;
  }

  isDriver(): boolean {
    return this.request.user_type === Roles.Driver;
  }

  onAccept(): void {
    this.validationService.accept(this.request);
  }

  onRefuse(): void {
    this.validationService.refuse(this.request);
  }
}
