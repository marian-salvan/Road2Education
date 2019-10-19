import { Component, OnInit } from '@angular/core';
import { HOME_PAGE_TITLE, HOME_PAGE_SUBTITLE, HOME_PAGE_DESCRIPTION } from 'src/app/shared/constants/notification-messages';
import { YOUTUBE_LINK_EMBED } from 'src/app/shared/constants/urls';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css',
      '../../shared/styles/commons.css']
})
export class MainDashboardComponent implements OnInit {

  mainSectionTitle: string = HOME_PAGE_TITLE;
  mainSectionSubtitle: string = HOME_PAGE_SUBTITLE;
  description: string = HOME_PAGE_DESCRIPTION;
  youtubeLink: string = YOUTUBE_LINK_EMBED;
  
  constructor(private _router: Router) { }

  ngOnInit() {
    
  }

  redirectToRegister() {
    this._router.navigate(['/register']);
  }

  redirectToLogin() {
    this._router.navigate(['/login']);
  }
}
