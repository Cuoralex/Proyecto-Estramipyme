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

  slides = [
    { imgSrc: '../../../../intro-estramipyme.jpg', altText: 'intro', caption: 'Impulsando el éxito desde 2020 hasta la revolución de Estratipyme en 2024' },
    { imgSrc: '../../../../2020-Capital_Semilla.jpg', altText: 'Concurso Capital Semilla', caption: 'En 2020, ¡destacamos en Concurso Capital Semilla!' },
    { imgSrc: '../2020-Inmotion_group.jpg', altText: 'Premio Inmotion Group', caption: 'En 2020, ¡Reconocimiento internacional para egresados y sus ideas innovadoras!' },
    { imgSrc: '../../../../2021-Noche_mejores.jpg', altText: 'Reconocimiento La Noche de los Mejores', caption: 'En 2021, ¡Comprometidos con la educación digital en Colombia!' },
    { imgSrc: '../../../../2022-ongoing.jpg', altText: 'Lanzamiento On.going', caption: 'En 2022, ¡Comprometidos con impulsar el emprendimiento de impacto!' },
    { imgSrc: '../../../../2023-100_startups.jpg', altText: 'Start-ups destacadas', caption: 'En 2023, ¡Posicionandonos entre las mejores start-ups de Colombia!' },
    { imgSrc: '../../../../2024-Estramipyme.jpg', altText: 'Estramipyme 2024', caption: 'Ahora 2024, Lanzamos Estratipyme, ¡una metodología revolucionaria para el crecimiento empresarial!' },
  ];

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
    }, 4000); 
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


