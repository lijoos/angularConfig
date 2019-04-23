import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnvironmentSpecificService } from '../config/environment-specific.service';
import { SomeOtherService } from '../some-other.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input() name: string;
  myUrl: string;
  constructor(
    private route: ActivatedRoute,
    public envSpecificSvc: EnvironmentSpecificService,
    public service: SomeOtherService
  ) { }
  ngOnInit() {
   // this.envSpecificSvc.envSpecific = this.route.snapshot.data.config;
   this.myUrl = this.envSpecificSvc.envSpecific.link;
}

}
