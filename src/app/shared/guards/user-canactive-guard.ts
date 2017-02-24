import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Injectable()
export class UserGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    // check If user has user role or not
    if (!this.authService.isUser()) {
      // navigate to login page if role is not user
      alert('Please login as User role');
      this.authService.clearAll();
      this.router.navigate(['/login']);
      return false;
    };
    return true;

  }
}
