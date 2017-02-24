import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  // this login service is used to check user is logged in or not
  public isSignIn: boolean;
  public isUserRole: boolean;
  public isAdminRole: boolean;
  constructor() {
     this.isSignIn = false;
     this.isUserRole = false;
     this.isAdminRole = false;
  }

  isLoggedIn(): boolean {
    // check use is logged in or not
    return this.isSignIn;
  }

  isUser(): boolean {
    // check use has user role or not
    return this.isUserRole;
  }

  isAdmin(): boolean {
    // check use  has admin role or not
    return this.isAdminRole;
  }
}

