import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from "../../layout/menu/menu.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterModule,
    MenuComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @ViewChild('sidebar') sidebar: ElementRef | undefined;
  @ViewChild('toggleButton') toggleButton: ElementRef | undefined;

  collapseSidebar(): void {
    if (this.sidebar && this.toggleButton) {
      const sidebarElement = this.sidebar.nativeElement as HTMLElement;
      const toggleButtonElement = this.toggleButton.nativeElement as HTMLElement;

      // Toggle the sidebar
      if (sidebarElement.classList.contains('lg:w-[240px]')) {
        // Collapse sidebar
        sidebarElement.classList.remove('lg:w-[240px]');
        sidebarElement.classList.add('w-[36px]');
        toggleButtonElement.classList.add('rotate-180');

        // Hide text
        sidebarElement.querySelectorAll('span').forEach(span => {
          span.classList.add('hidden');
          span.classList.remove('lg:block');
        });

      } else {
        // Expand sidebar
        sidebarElement.classList.remove('w-[36px]');
        sidebarElement.classList.add('lg:w-[240px]');
        toggleButtonElement.classList.remove('rotate-180');

        // Show text
        sidebarElement.querySelectorAll('span').forEach(span => {
          span.classList.remove('hidden');
          span.classList.add('lg:block');
        });
      }
    }
  }
}
