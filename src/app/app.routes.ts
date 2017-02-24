import {Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { TransactionComponent } from './transaction/transaction.component';
import { LoginComponent } from './login/login.component';
import { PaymentDeactivateGuard } from './payment/payment-candeactive-guard';
import { AuthenticateGuard } from './shared/guards/authenticate-canactive-gurad';
import { UserGuard } from './shared/guards/user-canactive-guard';
import { AdminGuard } from './shared/guards/admin-canactive-guard';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthenticateGuard] },
  { path: 'payment', component: PaymentComponent, canActivate: [AuthenticateGuard, UserGuard], canDeactivate: [PaymentDeactivateGuard] },
  { path: 'transaction', component: TransactionComponent, canActivate: [AuthenticateGuard, AdminGuard] }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
