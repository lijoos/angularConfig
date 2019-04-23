import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, delay } from 'rxjs/operators';

@Injectable()
export class AppConfig {

    config: any = null;

    constructor(
        private injector: Injector
    ){
    }

    public loadConfig() {
        const http = this.injector.get(HttpClient);

        // return http.get('https://jsonplaceholder.typicode.com/posts/1').pipe(
        //   tap((returnedConfig) => this.config = returnedConfig)
        // ).toPromise();
        http.get('./assets/env-Specific/env-specific.json').subscribe(message => {
            this.config = JSON.parse(JSON.stringify(message));
            });
    }
}