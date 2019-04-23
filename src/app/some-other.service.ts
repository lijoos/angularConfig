import { Injectable } from '@angular/core';
import { AppConfig } from './app-config';

@Injectable()
export class SomeOtherService {

    constructor(
        private appConfig: AppConfig
    ) {
        console.log('Some other service constructor');
        console.log(appConfig.config);
    }

    public get config() {
      return this.appConfig.config;
    }
 }