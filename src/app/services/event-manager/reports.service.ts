import { ApiService } from './../api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReportsConfig } from 'src/app/classes/reports-config';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(
    private api: ApiService
  ) { }

  getReport(id: string): Observable<ReportsConfig> {
    return this.api.get<ReportsConfig>('reports/' + id);
  }

  getReports(): Observable<ReportsConfig[]> {
    return this.api.get<ReportsConfig[]>('reports/');
  }

  addReport(obj): Observable<ReportsConfig> {
    return this.api.post<ReportsConfig>('reports/', obj);
  }

  updateReport(obj): Observable<ReportsConfig> {
    return this.api.put<ReportsConfig>('reports/', obj);
  }

  deleteReport(id): Observable<{}> {
    return this.api.delete('reports/', id);
  }
  
}
