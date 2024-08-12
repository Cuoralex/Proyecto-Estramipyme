import { Component } from '@angular/core';
import { EventsComponent } from '../../views/dashboard/layout/dashboard-administrator/events/events.component'

@Component({
  selector: 'app-events-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './events-dashboard.component.html',
  styleUrls: ['./events-dashboard.component.scss']
})
export class EventsDashboardComponent extends EventsComponent {
  // Puedes añadir métodos específicos del dashboard si es necesario
}
