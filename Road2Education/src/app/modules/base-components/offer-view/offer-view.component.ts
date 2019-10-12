import { Component, OnInit, Input } from '@angular/core';
import { RouteOffer } from 'src/app/models/route';

@Component({
  selector: 'app-offer-view',
  templateUrl: './offer-view.component.html',
  styleUrls: ['./offer-view.component.css']
})
export class OfferViewComponent implements OnInit {

  @Input() routeOffer: RouteOffer;

  constructor() { }

  ngOnInit() {
  }

}
