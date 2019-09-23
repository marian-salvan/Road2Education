import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PASSWORD_REGEX } from 'src/app/shared/constants/regex-patterns';
import { REQUIRED_EMAIL, INVALID_EMAIL, REQUIRED_PASSWORD, INVALID_PASSWORD } from 'src/app/shared/constants/error-messages';
import { User, BaseUser } from 'src/app/models/users';
import { Roles } from 'src/app/shared/constants/roles';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private _authService: AuthenticationService, 
              private _userService: UserService,
              private _router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern(PASSWORD_REGEX)]),
    });
  }

  async onLogin() {
    let user: BaseUser = 
    { 
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };

    try {
      let credentials = await this._authService.emailLogin(user);

      this._userService.getUser(credentials.user.uid).subscribe(user => {
        this.routeToPage(user.type);
      }); 

    } catch(error) {
      console.log(error);
    }
  }

  getEmailErrorMessage() : string {
    return this.loginForm.controls['email'].hasError('required') ? REQUIRED_EMAIL :
           this.loginForm.controls['email'].hasError('email') ? INVALID_EMAIL : '';
  }

  getPasswordErrorMessage() : string {
    return this.loginForm.controls['password'].hasError('required') ? REQUIRED_PASSWORD :
           this.loginForm.controls['password'].hasError('pattern') ? INVALID_PASSWORD : '';
  }

  routeToPage(type: string) {
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
