import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { Event } from '../models/event.model';

@Injectable({ providedIn: 'root' })
export class EventService {
  private baseUrl = 'http://localhost:3000/events';

  constructor(private httpClient: HttpClient) {}

  getEvents(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(this.baseUrl).pipe(
      map(events => events.map(event => ({
        ...event,
        date: new Date(event.date)
      })))
    );
  }

  addEvent(event: Event): Observable<Event> {
    return this.httpClient.post<Event>(this.baseUrl, {
      ...event,
      date: event.date.toISOString()  // Convertir la fecha a cadena antes de enviarla
    });
  }

  updateEvent(event: Event): Observable<Event> {
    return this.httpClient.put<Event>(`${this.baseUrl}/${event.id}`, {
      ...event,
      date: event.date.toISOString()  // Convertir la fecha a cadena antes de enviarla
    });
  }

  deleteEvent(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }
}
