import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GamesComponent } from './games/games.component';
import { CompetitorsComponent } from './competitors/competitors.component';
import { EventsComponent } from './events/events.component';
import { ReportsComponent } from './reports/reports.component';
import { HomeComponent } from './home/home.component';

Amplify.configure(awsconfig);

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'games', component: GamesComponent },
  { path: 'events', component: EventsComponent },
  { path: 'competitors', component: CompetitorsComponent },
  { path: 'reports', component: ReportsComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    GamesComponent,
    CompetitorsComponent,
    EventsComponent,
    ReportsComponent,
    HomeComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AmplifyUIAngularModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
