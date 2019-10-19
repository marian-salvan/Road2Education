import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { PASSWORD_REGEX, PHONE_REGEX } from 'src/app/shared/constants/regex-patterns';
import { REQUIRED_EMAIL, INVALID_EMAIL, REQUIRED_PASSWORD, INVALID_PASSWORD, REQUIRED_FIRST_NAME, 
  REQUIRED_LAST_NAME, REQUIRED_PHONE, INVALID_PHONE, INVALID_CONFIRM_PASSWORD } 
  from 'src/app/shared/constants/error-messages';
import { mustMatch } from 'src/app/shared/custom-validators/password-match';
import { Roles } from 'src/app/shared/constants/roles';
import { User } from 'src/app/models/users';
import { ErrorModalComponent } from '../../base-components/error-modal/error-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css',
      '../../../shared/styles/commons.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  userTypes = [Roles.Driver, Roles.Student];

  constructor(private formBuilder: FormBuilder,
              private _authService: AuthenticationService,
              private _userService: UserService,
              private _modalService: NgbModal,
              private _router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(PHONE_REGEX)]),
      password: new FormControl('', [Validators.required, Validators.pattern(PASSWORD_REGEX)]),
      confirmPassword: new FormControl('', [Validators.required]),
      userType: new FormControl(Roles.Student),
      termsAndConditions: new FormControl(false, [Validators.requiredTrue]),
      gdprApprove: new FormControl(false, [Validators.requiredTrue])
    }, {
      validator: mustMatch('password', 'confirmPassword')
    });
  }

  async onRegister() {
    try {
      const user: User =
      { 
        uid: '',
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        phoneNumber: this.registerForm.value.phoneNumber,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        type: this.registerForm.value.userType,
        validated: false
      };

      await this._authService.emailRegister(user);

      this._router.navigate(['/verify']);
    } catch (error) {
      const modalRef = this._modalService.open(ErrorModalComponent);
      modalRef.componentInstance.title = 'A apărut o eroare';
      modalRef.componentInstance.message = `A apărut o eroare neașteptată. 
      Încearcă să te înregistrezi din nou.`;
      this.registerForm.reset();     }
  }

  getFirstNameErrorMessage(): string {
    return this.registerForm.controls['firstName'].hasError('required') ? REQUIRED_FIRST_NAME : '';
  }

  getLastNameErrorMessage(): string {
    return this.registerForm.controls['lastName'].hasError('required') ? REQUIRED_LAST_NAME : '';
  }

  getPhoneNumberErrorMessage(): string {
    return this.registerForm.controls['phoneNumber'].hasError('required') ? REQUIRED_PHONE :
           this.registerForm.controls['phoneNumber'].hasError('pattern') ? INVALID_PHONE : '';
  }

  getEmailErrorMessage(): string {
    return this.registerForm.controls['email'].hasError('required') ? REQUIRED_EMAIL :
           this.registerForm.controls['email'].hasError('email') ? INVALID_EMAIL : '';
  }

  getPasswordErrorMessage(): string {
    return this.registerForm.controls['password'].hasError('required') ? REQUIRED_PASSWORD :
           this.registerForm.controls['password'].hasError('pattern') ? INVALID_PASSWORD : '';
  }
  
  getConfirmPasswordErrorMessage(): string {
    return this.registerForm.controls['confirmPassword'].hasError('required') ? REQUIRED_PASSWORD :
           this.registerForm.controls['confirmPassword'].hasError('mustMatch') ? INVALID_CONFIRM_PASSWORD : '';
  }

  routeToAccount(type: string) {
    switch (type) {
      case Roles.Admin:
        this._router.navigate(['/admin']);
        break;
      case Roles.Driver:
        this._router.navigate(['/driver']);
        break;
      case Roles.Student:
        this._router.navigate(['/student']);
        break;      
      default:
        this._router.navigate(['']);
        break;
    }
  }
}
