import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    // check If user has admin role or not
    if (!this.authService.isAdmin()) {
      // navigate to login page if role is not user
      alert('Please login as Admin role');
      this.authService.clearAll();
      this.router.navigate(['/login']);
      return false;
    };
    return true;

  }
}
