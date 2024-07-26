import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  currentSlide = 0;
  totalSlides = 7;

  constructor() {}

  ngOnInit(): void {
    this.updatePagination();
  }

  goToSlide(index: number): void {
    if (index >= 0 && index < this.totalSlides) {
      this.currentSlide = index;
      this.updateCarousel();
    }
  }

  updateCarousel(): void {
    const slideWrapper = document.querySelector('.carousel-slide-wrapper') as HTMLElement;
    if (slideWrapper) {
      slideWrapper.style.transform = `translateY(-${this.currentSlide * 100}%)`;
    }
    this.updatePagination();
  }

  updatePagination(): void {
    const dots = document.querySelectorAll('.pagination-dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === this.currentSlide);
    });
  }
}




