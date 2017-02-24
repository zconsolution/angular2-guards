import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  // this login service is used to check user is logged in or not
  constructor() {}

  isLoggedIn(): boolean {
    // check use is logged in or not
    return true;
  }

  isUser(): boolean {
    // check use has user role or not
    return true;
  }

  isAdmin(): boolean {
    // check use  has admin role or not
    return false;
  }
}

