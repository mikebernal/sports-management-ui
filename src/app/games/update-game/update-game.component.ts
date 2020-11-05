import { GamesConfig } from 'src/app/classes/games-config';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from 'src/app/services/admin/games.service';

@Component({
  selector: 'app-update-game',
  templateUrl: './update-game.component.html',
  styleUrls: ['./update-game.component.css']
})
export class UpdateGameComponent implements OnInit, OnDestroy {
  id: string;
  game: GamesConfig;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private gameService: GamesService

  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      // (+) converts string 'id' to a number
      this.id = params.id;

      this.getGame();

   });
  }

  // Fetch Game details
  getGame() {
    this.gameService.getGame(this.id).subscribe(
      (game) => {
        this.game = game;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSubmit(game) {
    document.getElementById('closeModalButton').click();
    // tslint:disable-next-line: radix
    game.form.value.id = parseInt(this.id);
    this.gameService.updateGame(this.id, game.form.value).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
