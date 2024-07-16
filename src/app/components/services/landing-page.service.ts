import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {
  private readonly landingPageKey = 'landingPageShown';

  constructor() {}

  public hasSeenLandingPage(): boolean {
    return localStorage.getItem(this.landingPageKey) === 'true';
  }

  public markLandingPageAsSeen(): void {
    localStorage.setItem(this.landingPageKey, 'true');
  }
}

