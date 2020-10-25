import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GamesRoutingModule } from './games-routing.module';

import { GamesComponent } from './games.component';
import { AddGameComponent } from './add-game/add-game.component';
import { UpdateGameComponent } from './update-game/update-game.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { DeleteGameComponent } from './delete-game/delete-game.component';

@NgModule({
  declarations: [
    GamesComponent,
    AddGameComponent,
    UpdateGameComponent,
    GameDetailsComponent,
    DeleteGameComponent,
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    FormsModule
  ]
})
export class GamesModule { }
