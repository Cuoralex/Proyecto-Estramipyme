import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SidebarComponent {
  @ViewChild('sidebar') sidebar: ElementRef | undefined;
  @ViewChild('content') content: ElementRef | undefined;
  @ViewChild('toggleButton') toggleButton: ElementRef | undefined;
  @ViewChild('userDropdown') userDropdown: ElementRef | undefined;

  collapseSidebar(): void {
    if (this.sidebar && this.content && this.toggleButton) {
      const sidebarElement = this.sidebar.nativeElement as HTMLElement;
      const contentElement = this.content.nativeElement as HTMLElement;
      const toggleButtonElement = this.toggleButton.nativeElement as HTMLElement;

      if (sidebarElement.classList.contains('lg:w-[240px]')) {
        // Collapse sidebar
        sidebarElement.classList.remove('lg:w-[240px]');
        sidebarElement.classList.add('w-[60px]');

        // Adjust content
        contentElement.classList.remove('lg:w-[100wh-250px]');
        contentElement.classList.remove('lg:ml-[240px]');
        contentElement.classList.add('lg:w-[100wh-100px]');
        contentElement.classList.add('ml-[60px]');

        // Rotate toggle button
        toggleButtonElement.classList.remove('rotate-0');
        toggleButtonElement.classList.add('rotate-180');
      } else {
        // Expand sidebar
        sidebarElement.classList.remove('w-[60px]');
        sidebarElement.classList.add('lg:w-[240px]');

        // Adjust content
        contentElement.classList.remove('lg:w-[100wh-100px]');
        contentElement.classList.remove('ml-[60px]');
        contentElement.classList.add('lg:w-[100wh-250px]');
        contentElement.classList.add('lg:ml-[240px]');

        // Rotate toggle button
        toggleButtonElement.classList.remove('rotate-180');
        toggleButtonElement.classList.add('rotate-0');
      }
    }
  }

  openUserDropdown(): void {
    if (this.userDropdown) {
      const userDropdownElement = this.userDropdown.nativeElement as HTMLElement;
      userDropdownElement.classList.toggle('hidden');
    }
  }
}
