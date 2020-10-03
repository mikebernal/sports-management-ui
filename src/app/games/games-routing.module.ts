import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from '../guards/admin.guard';
import { GamesComponent } from './games.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { UpdateGameComponent } from './update-game/update-game.component';
import { AddGameComponent } from './add-game/add-game.component';

const routes: Routes = [
  {
    path: '',
    component: GamesComponent,
    canActivate: [AdminGuard],
    canActivateChild: [AdminGuard],
    children: [
      { path: 'add-game', component: AddGameComponent },
      { path: 'update-game', component: UpdateGameComponent },
      { path: 'game-details', component: GameDetailsComponent }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
