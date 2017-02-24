import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  // this login service is used to check user is logged in or not
  constructor() {}

  setLogin() {
     localStorage.setItem('isSignIn', 'true');
  }

  setRole(role: string) {
     localStorage.setItem('role', role);
  }

  clearAll() {
    localStorage.clear();
  }

  isLoggedIn(): boolean {
    // check use is logged in or not
    if (localStorage.getItem('isSignIn')) {
        return true;
    } else {
        return false;
    }
  }

  isUser(): boolean {
    // check use has user role or not
    if (localStorage.getItem('role') === 'user') {
        return true;
    } else {
        return false;
    }
  }

  isAdmin(): boolean {
    // check use  has admin role or not
    if (localStorage.getItem('role') === 'admin') {
        return true;
    } else {
        return false;
    }
  }
}

