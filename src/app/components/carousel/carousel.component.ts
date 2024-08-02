import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  totalSlides = 7;
  slideInterval: any;
  paginationDots = Array(this.totalSlides).fill(0);

  constructor() {}

  ngOnInit(): void {
    this.updatePagination();
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  startAutoSlide(): void {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000); // Cambia de slide cada 3 segundos
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    this.updateCarousel();
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


