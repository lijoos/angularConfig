import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EnvironmentSpecificResolver } from './config/EnvironmentSpecificResolver';
import { TestComponent } from './test/test.component';
import { ApiTestComponent } from './api-test/api-test.component';

const routes: Routes = [
  { path: '', component: TestComponent},
    { path: 'next', component: ApiTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
