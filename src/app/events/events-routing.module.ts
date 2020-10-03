import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsComponent } from './events.component';
import { AddEventComponent } from './add-event/add-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { EventDetailsComponent } from './event-details/event-details.component';

import { EventManagerGuard } from '../guards/event-manager.guard';

const routes: Routes = [
  {
    path: '',
    component: EventsComponent,
    canActivate: [EventManagerGuard],
    canActivateChild: [EventManagerGuard],
    children: [
      { path: 'add', component: AddEventComponent },
      { path: 'update', component: UpdateEventComponent },
      { path: 'view', component: EventDetailsComponent }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
