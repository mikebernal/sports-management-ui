import { ApiService } from './../api.service';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { GamesConfig } from 'src/app/classes/games-config';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(
    private api: ApiService,
    private http: HttpClient
  ) { }

  getGame(id: string): Observable<GamesConfig> {
    return this.api.get<GamesConfig>('games/' + id)
    .pipe(
      catchError(this.handleError)
    );
  }

  getGames(): Observable<GamesConfig[]> {
    return this.api.get<GamesConfig[]>('games/')
    .pipe(
      catchError(this.handleError)
    );
  }

  addGame(game): Observable<GamesConfig> {
    return this.api.post<GamesConfig>('games/', game)
    .pipe(
      catchError(this.handleError)
    );
  }

  updateGame(obj): Observable<GamesConfig> {
    return this.api.put<GamesConfig>('games/', obj);
  }

  deleteGame(id: number): Observable<{}> {
    return this.api.delete('games/', id).pipe(
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
