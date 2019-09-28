import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { REQUIRED_EMAIL, INVALID_EMAIL } from 'src/app/shared/constants/error-messages';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm: FormGroup;

  constructor(private _authService: AuthenticationService, 
              private _userService: UserService,
              private _router: Router) { }

  ngOnInit() {
    this.resetPasswordForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  async onPasswordReset() {
    try {
      await this._authService.sendPasswordResetEmail(this.resetPasswordForm.value.email);
      this._router.navigate(['/verify']);
    } catch (error) {
      console.log(error);
    }
  }

  getEmailErrorMessage() : string {
    return this.resetPasswordForm.controls['email'].hasError('required') ? REQUIRED_EMAIL :
           this.resetPasswordForm.controls['email'].hasError('email') ? INVALID_EMAIL : '';
  }
}
