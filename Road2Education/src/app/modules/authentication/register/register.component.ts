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

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private _authService: AuthenticationService, 
              private _userService: UserService,
              private _router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(PHONE_REGEX)]),
      password: new FormControl('', [Validators.required, Validators.pattern(PASSWORD_REGEX)]),
      confirmPassword: new FormControl('', [Validators.required])
    }, {
      validator: mustMatch('password', 'confirmPassword')
    });
  }

  onRegister() {

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
}
