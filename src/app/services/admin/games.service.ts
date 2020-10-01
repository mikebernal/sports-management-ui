import { ApiService } from './../api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GamesConfig } from 'src/app/classes/games-config';

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

  deleteGame(id): Observable<{}> {
    return this.api.delete('games/', id);
  }

}
