import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, flatMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private gamesApiUrl       = environment.gamesApiUrl;
  private competitorsApiUrl = environment.competitorsApiUrl;

  constructor(
    private http: HttpClient
  ) { }

  // Games
  get<T>(uri: string): Observable<T> {
    return this.http.get<T>(`${this.gamesApiUrl}${uri}`);
  }

  post<T>(uri: string, body) {
    return this.http.post<T>(`${this.gamesApiUrl}${uri}`, body);
  }

  put<T>(uri: string, body): Observable<T> {
    return this.http.put<T>(`${this.gamesApiUrl}${uri}`, body);
  }

  delete(uri: string, id: number): Observable<{}> {
    return this.http.delete<{}>(`${this.gamesApiUrl}${uri}${id}`);
  }

  // Competitors
  getC<T>(uri: string): Observable<T> {
    return this.http.get<T>(`${this.competitorsApiUrl}${uri}`);
  }

  postC<T>(uri: string, body) {
    return this.http.post<T>(`${this.competitorsApiUrl}${uri}`, body);
  }

  putC<T>(uri: string, body): Observable<T> {
    return this.http.put<T>(`${this.competitorsApiUrl}${uri}`, body);
  }

  deleteC(uri: string, id: number): Observable<{}> {
    return this.http.delete<{}>(`${this.competitorsApiUrl}${uri}${id}`);
  }

}
