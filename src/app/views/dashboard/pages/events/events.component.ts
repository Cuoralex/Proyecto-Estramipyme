import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Card {
  image: string;
  month: string;
  day: string;
  time: string;
  title: string;
  description: string;
  location: string;
  logo: string;
  showDetails: boolean;
}

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsComponent {
  cards: Card[] = [
    {
      image: 'https://www.si.com/.image/t_share/MTY4MTkyMjczODM4OTc0ODQ5/cfp-trophy-deitschjpg.jpg',
      month: 'Jan',
      day: '13',
      time: '7 pm',
      title: '2020 National Championship',
      description: 'The College Football Playoff (CFP) determines the national champion of the top division of college football. The format fits within the academic calendar and preserves the sport’s unique and compelling regular season.',
      location: 'Mercedes-Benz Superdome',
      logo: 'https://collegefootballplayoff.com/images/section_logo.png',
      showDetails: false
    },
    // Añade más tarjetas según sea necesario
    {
      image: 'https://www.si.com/.image/t_share/MTY4MTkyMjczODM4OTc0ODQ5/cfp-trophy-deitschjpg.jpg',
      month: 'Jan',
      day: '13',
      time: '7 pm',
      title: '2020 National Championship',
      description: 'The College Football Playoff (CFP) determines the national champion of the top division of college football. The format fits within the academic calendar and preserves the sport’s unique and compelling regular season.',
      location: 'Mercedes-Benz Superdome',
      logo: 'https://collegefootballplayoff.com/images/section_logo.png',
      showDetails: false
    },
    {
      image: 'https://www.si.com/.image/t_share/MTY4MTkyMjczODM4OTc0ODQ5/cfp-trophy-deitschjpg.jpg',
      month: 'Jan',
      day: '13',
      time: '7 pm',
      title: '2020 National Championship',
      description: 'The College Football Playoff (CFP) determines the national champion of the top division of college football. The format fits within the academic calendar and preserves the sport’s unique and compelling regular season.',
      location: 'Mercedes-Benz Superdome',
      logo: 'https://collegefootballplayoff.com/images/section_logo.png',
      showDetails: false
    },
  ];

  toggleCard(card: Card) {
    card.showDetails = !card.showDetails;
  }
}
