import { ActivatedRoute } from '@angular/router';
import { GamesConfig } from './../classes/games-config';
import { GamesService } from './../services/admin/games.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  game: any;
  games: GamesConfig[];

  constructor(
    private gameService: GamesService,
    private activatedRoute: ActivatedRoute
  ) { }

ngOnInit() {

    this.activatedRoute.data.subscribe(
      (games) => {
        console.log(games);
      },
      (error) => {
        console.log(error);
      }
    );

    this.gameService.getGames().subscribe(
      (games) => {
        this.games = games;
      },
      (error) => {
        console.log(error);
      }
    );

  }

}
