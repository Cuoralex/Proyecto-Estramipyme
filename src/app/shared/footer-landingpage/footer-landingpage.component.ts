import { Component } from '@angular/core';
import { VisitsCounterComponent } from '../../components/visits-counter/visits-counter.component';

@Component({
  selector: 'app-footer-landingpage',
  standalone: true,
  imports: [VisitsCounterComponent],
  templateUrl: './footer-landingpage.component.html',
  styleUrl: './footer-landingpage.component.scss'
})

export class FooterLandingpageComponent {

}
