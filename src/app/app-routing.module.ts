import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'games', loadChildren: () => import(`./games/games.module`).then(m => m.GamesModule) },
  { path: 'events', loadChildren: () => import(`./events/events.module`).then(m => m.EventsModule) },
  { path: 'competitors', loadChildren: () => import(`./competitors/competitors.module`).then(m => m.CompetitorsModule) },
  { path: 'reports', loadChildren: () => import(`./reports/reports.module`).then(m => m.ReportsModule) },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
