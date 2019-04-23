import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test/test.component';
import { ApiTestComponent } from './api-test/api-test.component';
import { EnvironmentSpecificService } from './config/environment-specific.service';
import { AppConfig } from './app-config';
import { SomeOtherService } from './some-other.service';
export function configProviderFactory(provider: EnvironmentSpecificService) {
  return () => provider.loadEnvironment();
}
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ApiTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // providers: [
  //   // { provide: APP_INITIALIZER, useFactory: configProviderFactory, deps: [EnvironmentSpecificService], multi: true }
  //   EnvironmentSpecificService,
  //   {
  //     provide: APP_INITIALIZER, 
  //     useFactory: (config: EnvironmentSpecificService) => () => config.loadEnvironment(),
  //     deps: [EnvironmentSpecificService], multi: true
  //   }
  // ],
  providers: [
    SomeOtherService,
    AppConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: (config: AppConfig) => () => config.loadConfig(), 
      deps: [AppConfig], multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
