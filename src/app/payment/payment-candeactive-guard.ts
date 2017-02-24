import { CanDeactivate } from '@angular/router';
import { PaymentComponent } from './payment.component';


export class PaymentDeactivateGuard implements CanDeactivate<PaymentComponent> {

  // To deactive the route
  canDeactivate(target: PaymentComponent) {
      return window.confirm('Do you really want to navigate away from the page?');
  }
}
