import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  currentUser: Observable<User>;

  constructor(private _authService: AuthenticationService,
              private _router: Router) { }

  ngOnInit() {
  }

  getLoggedInUser(): Observable<User> {
    return this._authService.user;
  }

  async logOut() {
    try {
      await this._authService.logOut();
      this._router.navigate(['/login']);
    } catch(error) {
      console.log(error);
    }
  }

}
