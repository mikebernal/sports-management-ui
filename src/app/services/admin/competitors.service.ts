import { UpdateCompetitorConfig } from './../../classes/competitors-config';
import { ApiService } from './../api.service';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { CompetitorsConfig } from 'src/app/classes/competitors-config';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompetitorsService {

  constructor(
    private api: ApiService,
    private http: HttpClient
  ) { }

  getCompetitor(id: string): Observable<CompetitorsConfig> {
    return this.api.getC<CompetitorsConfig>('competitors/' + id)
    .pipe(
      catchError(this.handleError)
    );
  }

  getCompetitors(): Observable<CompetitorsConfig[]> {
    return this.api.getC<CompetitorsConfig[]>('competitors/')
    .pipe(
      catchError(this.handleError)
    );
  }

  addCompetitor(competitor): Observable<CompetitorsConfig> {
    return this.api.postC<CompetitorsConfig>('competitors/', competitor)
    .pipe(
      catchError(this.handleError)
    );
  }

  updateCompetitor(id: string, competitor): Observable<UpdateCompetitorConfig> {
    console.log(competitor);
    return this.api.putC<UpdateCompetitorConfig>('competitor/' + id, competitor)
    .pipe(
      catchError(this.handleError)
    );
  }

  deleteCompetitor(id: number): Observable<{}> {
    return this.api.deleteC('competitor/', id).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  handleError(error) {

    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
