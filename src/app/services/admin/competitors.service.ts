import { ApiService } from './../api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompetitorsConfig } from 'src/app/classes/competitors-config';

@Injectable({
  providedIn: 'root'
})
export class CompetitorsService {

  constructor(
    private api: ApiService
  ) { }

  getCompetitor(id: string): Observable<CompetitorsConfig> {
    return this.api.get<CompetitorsConfig>('competitors/' + id);
  }

  getCompetitors(): Observable<CompetitorsConfig[]> {
    return this.api.get<CompetitorsConfig[]>('competitors/');
  }

  addCompetitor(obj): Observable<CompetitorsConfig> {
    return this.api.post<CompetitorsConfig>('competitors/', obj);
  }

  updateCompetitor(obj): Observable<CompetitorsConfig> {
    return this.api.put<CompetitorsConfig>('competitors/', obj);
  }

  deleteCompetitor(id): Observable<{}> {
    return this.api.delete('competitors/', id);
  }
}
