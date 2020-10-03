import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetitorsRoutingModule } from './competitors-routing.module';

import { CompetitorsComponent } from './competitors.component';
import { AddCompetitorComponent } from './add-competitor/add-competitor.component';
import { UpdateCompetitorComponent } from './update-competitor/update-competitor.component';
import { CompetitorDetailsComponent } from './competitor-details/competitor-details.component';


@NgModule({
  declarations: [
    CompetitorsComponent,
    AddCompetitorComponent,
    UpdateCompetitorComponent,
    CompetitorDetailsComponent
  ],
  imports: [
    CommonModule,
    CompetitorsRoutingModule
  ]
})
export class CompetitorsModule { }
