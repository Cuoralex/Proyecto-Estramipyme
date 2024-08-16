import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventService } from '../../../../../services/event.service'; // Corrige la ruta si es necesario
import { Event } from '../../../../../models/event.model'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export default class EventsComponent implements OnInit {
  events$!: Observable<Event[]>;

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.events$ = this.eventService.getEvents();
  }

  addEvent(): void {
    this.eventService.getEvents().subscribe(events => {
      // Encontrar el ID más alto en los eventos existentes
      const highestId = events.reduce((maxId, event) => Math.max(maxId, event.id), 0);
      const newEventId = highestId + 1; // Asignar el siguiente ID en la secuencia
  
      const newEvent: Event = {
        id: newEventId,
        photo: 'new-photo-url',
        date: new Date('2024-07-03'),
        time: '12:00',
        description: 'New Event'
      };
  
      this.eventService.addEvent(newEvent).subscribe(() => this.getEvents());
    });
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
    const confirmed = window.confirm('¿Estás seguro de que deseas eliminar este evento?');
    if (confirmed) {
      this.eventService.deleteEvent(id).subscribe(() => this.getEvents());
    }
  }  
}
