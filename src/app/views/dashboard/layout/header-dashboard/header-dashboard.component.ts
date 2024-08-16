import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user-administrator.service';


@Component({
  selector: 'app-header-dashboard',
  standalone: true,
  imports: [
    CommonModule

  ],
  templateUrl: './header-dashboard.component.html',
  styleUrls: ['./header-dashboard.component.scss'],
})
export class HeaderDashboardComponent implements OnInit {
  
  
  // Estado para la colapsación de la barra lateral
  sidebarCollapsed = false;

  // Estado para el menú desplegable del usuario
  userDropdownOpen = false;

  // Estado para la alerta de nuevos clientes
  newClientAlert = false;

  // Almacena el ID del último usuario procesado
  private lastUserId = 0;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.checkNewClients();
    setInterval(() => this.checkNewClients(), 5000); // Revisa cada 5 segundos
  }

  // Método para verificar nuevos clientes
  checkNewClients(): void {
    this.userService.getUsers().subscribe((users: any[]) => {
      const newClient = users.find(
        (user: { Role: string; id: number }) =>
          user.Role === 'Cliente' && user.id > this.lastUserId
      );
      if (newClient) {
        this.newClientAlert = true;
        this.lastUserId = newClient.id;
      }
      console.log('New client alert status:', this.newClientAlert);
    });
  }

  // Método para limpiar la alerta de nuevos clientes
  clearAlert(): void {
    this.newClientAlert = false;
  }

  // Método para alternar la colapsación de la barra lateral
  toggleSidebar(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
    // Aquí puedes agregar la lógica para manejar la colapsación de la barra lateral
  }

  // Método para alternar el menú desplegable del usuario
  toggleUserDropdown(): void {
    this.userDropdownOpen = !this.userDropdownOpen;
  }
}
