import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesConfig } from 'src/app/classes/games-config';
import { GamesService } from 'src/app/services/admin/games.service';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {
  id: string;
  private sub: any;
  addForm: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gameService: GamesService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      // (+) converts string 'id' to a number
      this.id = params.id;

    });
  }

  addGame() {
    // this.gameService.addGame().subscribe(
    //   (response) => {
    //     console.log(response);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );

    alert('it works');
  }

  onSubmit(game) {
    console.log('submit');
    console.log(game);
  }

}
