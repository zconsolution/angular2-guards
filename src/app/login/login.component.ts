import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent {

    private user: any = { username: '', password: ''};
    private loginAs: any = '';

    constructor(private authService: AuthService, private router: Router) {
        this.user.username = 'user';
        this.user.password = 'user';
        this.loginAs = 'user';
        if (this.authService.isLoggedIn()) {
            this.router.navigate(['home']);
        }
    }

    onSubmit(form: NgForm, event) {
        if (this.loginAs === 'user') {
            this.authService.setLogin();
            this.authService.setRole('user');
        } else if (this.loginAs === 'admin') {
            this.authService.setLogin();
            this.authService.setRole('admin');
        }
        this.router.navigate(['home']);
    }
    loginBy() {
        if (this.loginAs === 'user') {
            this.user.username = 'user';
            this.user.password = 'user';
        } else if (this.loginAs === 'admin') {
            this.user.username = 'admin';
            this.user.password = 'admin';
        }
    }
}
