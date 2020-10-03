import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { AddEventComponent } from './add-event/add-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { EventDetailsComponent } from './event-details/event-details.component';


@NgModule({
  declarations: [AddEventComponent, UpdateEventComponent, EventDetailsComponent],
  imports: [
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
