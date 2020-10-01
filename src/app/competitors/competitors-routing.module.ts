import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompetitorsComponent } from './competitors.component';


const routes: Routes = [
  { path: '', component: CompetitorsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetitorsRoutingModule { }
