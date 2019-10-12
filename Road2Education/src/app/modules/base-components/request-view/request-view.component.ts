import { Component, OnInit, Input } from '@angular/core';
import { RouteRequest } from 'src/app/models/route';

@Component({
  selector: 'app-request-view',
  templateUrl: './request-view.component.html',
  styleUrls: ['./request-view.component.css']
})
export class RequestViewComponent implements OnInit {

  @Input() routeRequest: RouteRequest;

  constructor() { }

  ngOnInit() {
  }

}
