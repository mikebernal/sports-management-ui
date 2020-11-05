import { GamesService } from './games.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GamesConfig } from 'src/app/classes/games-config';

@Injectable({
  providedIn: 'root'
})
export class GamesResolverService implements Resolve<GamesConfig[]> {

  constructor(private gamesService: GamesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<GamesConfig[]> | Promise<GamesConfig[]> | GamesConfig[] {
      return this.gamesService.getGames();
    }
}
