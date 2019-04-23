import { Injectable } from '@angular/core';
import { EnvSpecific } from './model/env-specific';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentSpecificService {

  public envSpecific: EnvSpecific = new EnvSpecific();
  public envSpecificNull: EnvSpecific = null;
  private envSpecificSubject: BehaviorSubject<EnvSpecific> = new BehaviorSubject<EnvSpecific>(null);

  constructor(private http: HttpClient) {

  }
  public getConfig() {
    return this.envSpecific;
  }
  public loadEnvironment() {
      // Only want to do this once - if root page is revisited, it calls this again.
      // if (this.envSpecificNull === null || this.envSpecificNull === undefined) {
      //   console.log('Loading env-specific.json');
        this.http.get('./assets/env-Specific/env-specific.json').subscribe((data) => {
         this.envSpecific = JSON.parse(JSON.stringify(data));
        });
      // }
  }
}
