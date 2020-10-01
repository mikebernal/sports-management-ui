import { ApiService } from './../api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventsConfig } from 'src/app/classes/events-config';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(
    private api: ApiService
  ) { }

  getEvent(id: string): Observable<EventsConfig> {
    return this.api.get<EventsConfig>('events/' + id);
  }

  getEvents(): Observable<EventsConfig[]> {
    return this.api.get<EventsConfig[]>('events/');
  }

  addEvent(obj): Observable<EventsConfig> {
    return this.api.post<EventsConfig>('events/', obj);
  }

  updateEvent(obj): Observable<EventsConfig> {
    return this.api.put<EventsConfig>('events/', obj);
  }

  deleteEvent(id): Observable<{}> {
    return this.api.delete('events/', id);
  }

}
