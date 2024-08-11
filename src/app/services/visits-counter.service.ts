import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisitsCounterService {
  private visitCount = 0;

  constructor() {
    this.loadVisitCount();
  }

  incrementVisitCount(): void {
    this.visitCount++;
    this.saveVisitCount();
  }

  getVisitCount(): number {
    return this.visitCount;
  }

  resetVisitCount(): void {
    this.visitCount = 0;
    this.saveVisitCount();
  }

  private loadVisitCount(): void {
    const storedCount = localStorage.getItem('visitCount');
    this.visitCount = storedCount ? parseInt(storedCount, 10) : 0;
  }

  private saveVisitCount(): void {
    localStorage.setItem('visitCount', this.visitCount.toString());
  }
}
