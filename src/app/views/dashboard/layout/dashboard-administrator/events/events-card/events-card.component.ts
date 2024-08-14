import { Component, OnInit } from '@angular/core';
import { EventService } from 'app/services/event.service';
import { Observable } from 'rxjs';
import { Event } from 'app/models/event.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events-card.component.html',
  styleUrls: ['./events-card.component.scss']
})
export class EventsCardComponent implements OnInit {
  events$!: Observable<Event[]>;

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.events$ = this.eventService.getEvents();
  }
}
