import { Component, OnInit, Input } from '@angular/core';
import { RouteRequest } from 'src/app/models/route';
import { UserService } from 'src/app/services/user/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { User } from 'src/app/models/users';
import { UserInformationModalComponent } from '../user-information-modal/user-information-modal.component';

@Component({
  selector: 'app-request-view',
  templateUrl: './request-view.component.html',
  styleUrls: ['./request-view.component.css']
})
export class RequestViewComponent implements OnInit {

  @Input() routeRequest: RouteRequest;

  requestPoster: User;
  dateTimestamp: number;

  constructor(public datepipe: DatePipe, 
              private modalService: NgbModal,
              private userService: UserService) { }

  ngOnInit() {
    this.getOfferPoster();
  }
  
  ngOnChanges() {
    this.getOfferPoster();
  }

  private getOfferPoster() {
    this.userService.getUser(this.routeRequest.student).subscribe(user => {
      this.requestPoster = user;
    });
  }

  openUserInformationDialog() {
    const modalRef = this.modalService.open(UserInformationModalComponent);
    modalRef.componentInstance.user = this.requestPoster;
  }
}
