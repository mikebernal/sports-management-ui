import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { AddReportComponent } from './add-report/add-report.component';
import { UpdateReportComponent } from './update-report/update-report.component';
import { ReportDetailsComponent } from './report-details/report-details.component';


@NgModule({
  declarations: [AddReportComponent, UpdateReportComponent, ReportDetailsComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
