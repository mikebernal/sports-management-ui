import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router, ActivatedRoute, ParamMap } from '@angular/router';

import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GamesComponent } from './games/games.component';

Amplify.configure(awsconfig);

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    GamesComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AmplifyUIAngularModule,
    RouterModule.forRoot([
      { path: '**', component: PageNotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
