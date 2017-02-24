import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { TransactionComponent } from './transaction/transaction.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './login/login.component';
import { PaymentDeactivateGuard } from './payment/payment-candeactive-guard';
import { AuthenticateGuard } from './shared/guards/authenticate-canactive-gurad';
import { UserGuard } from './shared/guards/user-canactive-guard';
import { AdminGuard } from './shared/guards/admin-canactive-guard';
import { AuthService } from './auth/auth.service';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PaymentComponent,
    TransactionComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [AuthService, PaymentDeactivateGuard, AuthenticateGuard, UserGuard, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
