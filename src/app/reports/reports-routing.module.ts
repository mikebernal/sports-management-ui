import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportsComponent } from './reports.component';
import { ReportDetailsComponent } from './report-details/report-details.component';
import { UpdateReportComponent } from './update-report/update-report.component';
import { AddReportComponent } from './add-report/add-report.component';

import { EventManagerGuard } from '../guards/event-manager.guard';

const routes: Routes = [
  {
    path: '',
    component: ReportsComponent,
    canActivate: [EventManagerGuard],
    canActivateChild: [EventManagerGuard],
    children: [
      { path: 'add', component: AddReportComponent },
      { path: 'update', component: UpdateReportComponent },
      { path: 'view', component: ReportDetailsComponent }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
