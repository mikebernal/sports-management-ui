import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesComponent } from './games.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { UpdateGameComponent } from './update-game/update-game.component';
import { AddGameComponent } from './add-game/add-game.component';
import { DeleteGameComponent } from './delete-game/delete-game.component';

import { AdminGuard } from '../guards/admin.guard';
import { GamesResolverService } from '../services/admin/games-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: GamesComponent,
    resolve: { games: GamesResolverService },
    canActivate: [AdminGuard],
    canActivateChild: [AdminGuard],
    children: [
      { path: 'add', component: AddGameComponent },
      { path: 'update/:id', component: UpdateGameComponent },
      { path: 'view/:id', component: GameDetailsComponent },
      { path: 'delete/:id', component: DeleteGameComponent }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
