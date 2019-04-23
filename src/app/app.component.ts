import { Component, OnInit } from '@angular/core';
import { EnvironmentSpecificService } from './config/environment-specific.service';
import { SomeOtherService } from './some-other.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularConfigSampleGOCD';
//   envSpecific: EnvSpecific;
//  constructor(public envSpecificSvc: EnvironmentSpecificService) {
// let ff = this.envSpecificSvc.loadEnvironment();
// }
// ngOnInit(): void {
// }
name = 'Angular 5';
  constructor(public service: SomeOtherService) {

  }

}
