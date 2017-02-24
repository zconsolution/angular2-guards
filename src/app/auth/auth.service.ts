import {Injectable} from '@angular/core';

// this login service is used to check user is logged in or not
@Injectable()
export class AuthService {

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
    // check If user is loggedIn or not
    if (localStorage.getItem('isSignIn')) {
        return true;
    } else {
        return false;
    }
  }

  isUser(): boolean {
    // check If user has user role or not
    if (localStorage.getItem('role') === 'user') {
        return true;
    } else {
        return false;
    }
  }

  isAdmin(): boolean {
    // check If user has admin role or not
    if (localStorage.getItem('role') === 'admin') {
        return true;
    } else {
        return false;
    }
  }
}

