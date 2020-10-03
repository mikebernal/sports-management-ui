import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes, PreloadAllModules  } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'games', loadChildren: () => import(`./games/games.module`).then(m => m.GamesModule) },
  { path: 'competitors', loadChildren: () => import(`./competitors/competitors.module`).then(m => m.CompetitorsModule) },
  { path: 'events', loadChildren: () => import(`./events/events.module`).then(m => m.EventsModule) },
  { path: 'reports', loadChildren: () => import(`./reports/reports.module`).then(m => m.ReportsModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes,
        {
          preloadingStrategy: PreloadAllModules
        }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
