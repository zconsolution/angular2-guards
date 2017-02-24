import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Injectable()
export class AuthenticateGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router){}

  canActivate() {
    if (!this.authService.isLoggedIn()) {
      // navigate to login page if user is not authenticated
      alert('Please login again');
      this.router.navigate(['/login']);
      return false;
    };
    return true;

  }
}
