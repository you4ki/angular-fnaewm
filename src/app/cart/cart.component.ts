import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items = this.cart.getItems();

  checkoutForm = this.form.group({
    name: '',
    address: '',
  });

  constructor(private cart: CartService, private form: FormBuilder) {}

  onSubmit(): void {
    this.items = this.cart.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
