import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { BrowserModule } from '@angular/platform-browser';

import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';

import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { EventManagerGuard } from './guards/event-manager.guard';
import { AuthService } from './services/auth/auth.service';
import { ApiService } from './services/api.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

Amplify.configure(awsconfig);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AmplifyUIAngularModule,
    AppRoutingModule
  ],
  providers: [
    ApiService,
    AuthService,
    AuthGuard,
    AdminGuard,
    EventManagerGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
