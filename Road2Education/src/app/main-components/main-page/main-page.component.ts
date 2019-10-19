import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/users';
import { Router } from '@angular/router';
import { FACEBOOK_LINK, INSTAGRAM_LINK, YOUTUBE_LINK } from 'src/app/shared/constants/urls';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  currentUser: User;
  currentYear: number;
  title: string = "Road to education";

  facebookLink: string = FACEBOOK_LINK;
  instagramLink: string = INSTAGRAM_LINK;
  youtubeLink: string = YOUTUBE_LINK;

  constructor(private _authService: AuthenticationService,
              private _router: Router) { }

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
    this.getLoggedInUser();
  }

  getLoggedInUser() {
    this._authService.user.subscribe(user => {
      this.currentUser = user;
    })
  }

  async logOut() {
    try {
      await this._authService.logOut();
      this.currentUser = null;
      this._router.navigate(['/login']);
    } catch(error) {
      console.log(error);
    }
  }

  redirectToRegister() {
    this._router.navigate(['/register']);
  }

  goToProfile() {
    this._router.navigate([`/${this.currentUser.type}`]);
  }

  goToNewOffer() {
    this._router.navigate(["/driver/offers/new"]);
  }
  
  goToNewRequest() {
    this._router.navigate(["/student/requests/new"]);
  }

  redirectToFacebookPage() {
    window.open(this.facebookLink, "_blank");
  }

  redirectToInstagramPage() {
    window.open(this.instagramLink, "_blank");
  }
  
  redirectToYoutubePage() {
    window.open(this.youtubeLink, "_blank");
  }
}
