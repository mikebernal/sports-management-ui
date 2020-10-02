import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, flatMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  get<T>(uri: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${uri}`);
  }

  post<T>(uri: string, obj): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}${uri}`, obj);
  }

  put<T>(uri: string, obj): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}${uri}`, obj);
  }

  delete(uri: string, id: number): Observable<{}> {
    return this.http.delete<{}>(`${this.apiUrl}${uri}/${id}`);
  }

}