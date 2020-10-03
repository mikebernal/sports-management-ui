import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompetitorsComponent } from './competitors.component';
import { AddCompetitorComponent } from './add-competitor/add-competitor.component';
import { CompetitorDetailsComponent } from './competitor-details/competitor-details.component';
import { UpdateCompetitorComponent } from './update-competitor/update-competitor.component';

import { AdminGuard } from '../guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: CompetitorsComponent,
    canActivate: [AdminGuard],
    canActivateChild: [AdminGuard],
    children: [
      { path: 'add', component: AddCompetitorComponent },
      { path: 'update', component: UpdateCompetitorComponent },
      { path: 'view', component: CompetitorDetailsComponent }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetitorsRoutingModule { }
