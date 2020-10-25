import { ApiService } from './../api.service';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { GamesConfig } from 'src/app/classes/games-config';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(
    private api: ApiService
  ) { }

  getGame(id: string): Observable<GamesConfig> {
    return this.api.get<GamesConfig>('games/' + id);
  }

  getGames(): Observable<GamesConfig[]> {
    return this.api.get<GamesConfig[]>('games/');
  }

  addGame(obj): Observable<GamesConfig> {
    return this.api.post<GamesConfig>('games/', obj);
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
