import { Component, OnInit } from '@angular/core';
import { RouteRequestsService } from 'src/app/services/persistence/route-requests.service';
import { RouteRequest } from 'src/app/models/route';

@Component({
  selector: 'app-driver-dashboard',
  templateUrl: './driver-dashboard.component.html',
  styleUrls: ['./driver-dashboard.component.css']
})
export class DriverDashboardComponent implements OnInit {

  requests: RouteRequest[];

  constructor(private requestsService: RouteRequestsService) { }

  ngOnInit() {
    this.requestsService.getAllRequests().subscribe(requests => this.requests = requests);
  }

}
