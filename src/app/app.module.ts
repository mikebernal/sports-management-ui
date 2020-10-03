import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import Amplify from 'aws-amplify';

import awsconfig from '../aws-exports';

import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { EventManagerGuard } from './guards/event-manager.guard';

import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

Amplify.configure(awsconfig);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ForbiddenComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AmplifyUIAngularModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    AdminGuard,
    EventManagerGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
