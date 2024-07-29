import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Role } from '../models/role.model'


@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRoles: Role[] = route.data['roles'];
    if (!this.authService.hasAccess(expectedRoles)) {
      this.router.navigate(['/unauthorized']);
      return false;
    }
    return true;
  }
}
