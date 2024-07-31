import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { Event } from '../models/event.model';

@Injectable({ providedIn: 'root' })
export class EventService {
  private apiUrl = 'api/events';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.apiUrl).pipe(
      map(events => events.map(event => ({
        ...event,
        date: new Date(event.date)
      })))
    );
  }

  addEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(this.apiUrl, {
      ...event,
      date: event.date.toISOString()  // Convertir la fecha a cadena antes de enviarla
    });
  }

  updateEvent(event: Event): Observable<Event> {
    return this.http.put<Event>(`${this.apiUrl}/${event.id}`, {
      ...event,
      date: event.date.toISOString()  // Convertir la fecha a cadena antes de enviarla
    });
  }

  deleteEvent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
