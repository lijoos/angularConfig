import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';

import { EnvironmentSpecificService } from './environment-specific.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EnvironmentSpecificResolver implements Resolve<any>  {
  constructor(private envSpecificSvc: EnvironmentSpecificService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
     return this.envSpecificSvc.loadEnvironment();
  }
}
