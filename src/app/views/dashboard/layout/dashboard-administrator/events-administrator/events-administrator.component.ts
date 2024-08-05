import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventService } from '../../../../../services/event.service'; // Corrige la ruta si es necesario
import { Event } from '../../../../../models/event.model'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-events-administrator',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './events-administrator.component.html',
  styleUrls: ['./events-administrator.component.scss'],
})
export default class EventsAdministratorComponent implements OnInit {
  events$!: Observable<Event[]>;

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.events$ = this.eventService.getEvents();
  }

  addEvent(): void {
    const newEvent: Event = {
      id: 0,
      photo: 'new-photo-url',
      date: new Date('2024-07-03'), // Convertir a Date
      time: '12:00',
      description: 'New Event'
    };
    this.eventService.addEvent(newEvent).subscribe(() => this.getEvents());
  }

  editEvent(event: Event): void {
    const newPhoto = prompt('Edit photo URL:', event.photo);
    const newDate = prompt('Edit date:', event.date.toISOString()); // Convertir a cadena
    const newTime = prompt('Edit time:', event.time);
    const newDescription = prompt('Edit description:', event.description);

    if (newPhoto) event.photo = newPhoto;
    if (newDate) event.date = new Date(newDate); // Convertir a Date
    if (newTime) event.time = newTime;
    if (newDescription) event.description = newDescription;

    this.eventService.updateEvent(event).subscribe(() => this.getEvents());
  }

  deleteEvent(id: number): void {
    this.eventService.deleteEvent(id).subscribe(() => this.getEvents());
  }
}
