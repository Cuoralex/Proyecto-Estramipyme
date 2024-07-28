import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userRole: string;

  constructor() {
    // Simular un rol de usuario
    this.userRole = 'admin'; // cambiar según sea necesario para pruebas
  }

  isAdmin(): boolean {
    return this.userRole === 'admin';
  }

  isManager(): boolean {
    return this.userRole === 'manager';
  }

  isClient(): boolean {
    return this.userRole === 'client';
  }

  getUserRole(): string {
    return this.userRole;
  }
}

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAdmin()) {
      return true;
    } else {
      this.router.navigate(['/client-dashboard']);
      return false;
    }
  }
}

@Injectable({ providedIn: 'root' })
export class ManagerGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isManager()) {
      return true;
    } else {
      this.router.navigate(['/client-dashboard']);
      return false;
    }
  }
}

@Injectable({ providedIn: 'root' })
export class ClientGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isClient()) {
      return true;
    } else {
      this.router.navigate(['/client-dashboard']);
      return false;
    }
  }
}

