import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesConfig } from 'src/app/classes/games-config';
import { GamesService } from 'src/app/services/admin/games.service';

@Component({
  selector: 'app-delete-game',
  templateUrl: './delete-game.component.html',
  styleUrls: ['./delete-game.component.css']
})
export class DeleteGameComponent implements OnInit, OnDestroy {
  id: string;
  game: GamesConfig;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
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

  deleteGame(id) {
    this.gameService
      .deleteGame(id)
      .subscribe(
        (response) => {
          // this.router.navigate(['/games']);
          this.router.navigateByUrl('/GamesComponent', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/games']);
        });
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
