import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VERIFY_EMAIL } from 'src/app/shared/constants/notification-messages';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  readonly verifyEmailText: string = VERIFY_EMAIL;

  constructor(private _router: Router) { }

  ngOnInit() {
  }

}
