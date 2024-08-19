import { Component, OnInit } from '@angular/core';
import { VisitsCounterService } from 'app/services/visits-counter.service';

@Component({
  selector: 'app-visits-counter',
  standalone: true,
  imports: [],
  templateUrl: './visits-counter.component.html',
  styleUrls: ['./visits-counter.component.scss'],
})
export class VisitsCounterComponent implements OnInit { 
  visitCount: number = 0;

  constructor(private visitsCounterService: VisitsCounterService) { }

  ngOnInit(): void {
    this.updateVisitCount();
  }

  updateVisitCount(): void {
    this.visitCount = this.visitsCounterService.getVisitCount();
  }

  resetCounter(): void {
    this.visitsCounterService.resetVisitCount();
    this.updateVisitCount();
  }
}
