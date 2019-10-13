import { Component, OnInit, Input } from '@angular/core';
import { RouteOffer } from 'src/app/models/route';
import { DatePipe } from '@angular/common';
import { User } from 'src/app/models/users';
import { UserService } from 'src/app/services/user/user.service';
import { Observable } from 'rxjs/internal/Observable';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserInformationModalComponent } from '../user-information-modal/user-information-modal.component';

@Component({
  selector: 'app-offer-view',
  templateUrl: './offer-view.component.html',
  styleUrls: ['./offer-view.component.css']
})
export class OfferViewComponent implements OnInit {

  @Input() routeOffer: RouteOffer;

  offerPoster: User;
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
    this.userService.getUser(this.routeOffer.driver).subscribe(user => {
      this.offerPoster = user;
    });
  }

  openUserInformationDialog() {
    const modalRef = this.modalService.open(UserInformationModalComponent);
    modalRef.componentInstance.user = this.offerPoster;
  }
}
