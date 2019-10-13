import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/users';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-information-modal',
  templateUrl: './user-information-modal.component.html',
  styleUrls: ['./user-information-modal.component.css']
})
export class UserInformationModalComponent implements OnInit {

  @Input() user: User;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
