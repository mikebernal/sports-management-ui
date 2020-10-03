import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { AddGameComponent } from './add-game/add-game.component';
import { UpdateGameComponent } from './update-game/update-game.component';
import { GameDetailsComponent } from './game-details/game-details.component';

@NgModule({
  declarations: [
    AddGameComponent,
    UpdateGameComponent,
    GameDetailsComponent,
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
  ]
})
export class GamesModule { }
