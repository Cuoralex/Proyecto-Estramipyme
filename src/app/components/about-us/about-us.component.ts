import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  currentSlide = 0;

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % 2; // Cambia "2" por el número de diapositivas que tengas
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + 2) % 2; // Cambia "2" por el número de diapositivas que tengas
  }
}
