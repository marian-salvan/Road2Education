import { Component, OnInit } from '@angular/core';
import { RouteOffer } from 'src/app/models/route';
import { RouteOffersService } from 'src/app/services/persistence/route-offers.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  offers: RouteOffer[];

  constructor(private offersService: RouteOffersService) {
    this.offers = [];
   }

  ngOnInit() {
    this.offersService.getAllOffers().subscribe(offers => this.offers = offers);
  }

}
