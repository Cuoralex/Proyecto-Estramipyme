import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  template: `
    <div class="landing-page">
      <!-- Tu contenido de la landing page aquí -->
      <button (click)="closeLandingPage()">Close</button>
    </div>
  `,
  styles: ['./landing-page.componente.scss']
})
export class LandingPageComponent {
  @Output() close = new EventEmitter<void>();

  closeLandingPage() {
    this.close.emit();
  }
}
