import { Component, OnInit } from '@angular/core';
import { EnvironmentSpecificService } from '../config/environment-specific.service';
import { SomeOtherService } from '../some-other.service';

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.css']
})
export class ApiTestComponent implements OnInit {
  myUrl: string ;
  constructor( public envSpecificSvc: EnvironmentSpecificService,
               public service: SomeOtherService) { }

  ngOnInit() {
    this.myUrl = this.envSpecificSvc.envSpecific.link;
  }

}
