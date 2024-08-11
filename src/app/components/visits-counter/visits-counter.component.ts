import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VisitsCounterService } from 'app/services/visits-counter.service';

@Component({
  selector: 'app-visits-counter',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './visits-counter.component.html',
  styleUrl: './visits-counter.component.scss',
})
export class VisitsCounterComponent { 

visitCount: number = 0;

  constructor(private visitsCounterService: VisitsCounterService) { }

  ngOnInit(): void {
    this.visitsCounterService.incrementVisitCount();
    this.visitCount = this.visitsCounterService.getVisitCount();
  }
}