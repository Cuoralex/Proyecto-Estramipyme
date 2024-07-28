import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { EventService } from '../../../../services/event.services';

interface Event {
  id: number;
  photo: string;
  date: string;
  time: string;
  description: string;
}

@Component({
  selector: 'app-events-administrator',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './events-administrator.component.html',
  styleUrls: ['./events-administrator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventManagementComponent implements OnInit {
  events$: Observable<Event[]>;

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.events$ = this.eventService.getEvents();
  }

  addEvent(): void {
    const newEvent: Event = { id: 0, photo: 'new-photo-url', date: '2024-07-03', time: '12:00', description: 'New Event' };
    this.eventService.addEvent(newEvent).subscribe(() => this.getEvents());
  }

  editEvent(event: Event): void {
    const newPhoto = prompt('Edit photo URL:', event.photo);
    const newDate = prompt('Edit date:', event.date);
    const newTime = prompt('Edit time:', event.time);
    const newDescription = prompt('Edit description:', event.description);

    if (newPhoto) event.photo = newPhoto;
    if (newDate) event.date = newDate;
    if (newTime) event.time = newTime;
    if (newDescription) event.description = newDescription;

    this.eventService.updateEvent(event).subscribe(() => this.getEvents());
  }

  deleteEvent(id: number): void {
    this.eventService.deleteEvent(id).subscribe(() => this.getEvents());
  }
}
