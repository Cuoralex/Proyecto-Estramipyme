// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private currentUserRole: Role = Role.Client; // Simulación de rol actual del usuario

//   constructor(private router: Router) {}

//   // Método para obtener el rol del usuario actual
//   getCurrentUserRole(): Role {
//     return this.currentUserRole;
//   }

//   // Método para verificar si el usuario tiene un rol específico
//   hasRole(role: Role): boolean {
//     return this.currentUserRole === role;
//   }

//   // Método para verificar si el usuario tiene acceso a una lista de roles
//   hasAccess(roles: Role[]): boolean {
//     return roles.includes(this.currentUserRole);
//   }

//   // Método de inicio de sesión simulado
//   login(role: Role) {
//     this.currentUserRole = role;
//   }

//   // Método de cierre de sesión
//   logout() {
//     this.currentUserRole = Role.Client;
//     this.router.navigate(['/login']);
//   }
// }
