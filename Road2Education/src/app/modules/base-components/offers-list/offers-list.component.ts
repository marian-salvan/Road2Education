import { Component, OnInit, Input } from '@angular/core';
import { RouteOffer } from 'src/app/models/route';
import { RouteOffersService } from 'src/app/services/persistence/route-offers.service';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OffersListComponent implements OnInit {

  @Input() offers: RouteOffer[];

  constructor() {
  }

  ngOnInit() {
  }

}
