import { Component, OnInit } from '@angular/core';

import { Book } from 'src/app/model/Book';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { CartItem } from 'src/app/model/cart-item';
import { MessengerService } from '../services/messenger.service';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css']
})
export class CartFormComponent implements OnInit {

  cartItems: any[];

  cartTotal = 0

  constructor(
    private msg: MessengerService,
    private cartService: CartServiceService
  ) { }

  ngOnInit() {
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription() {
      this.loadCartItems();
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.calcCartTotal();
    })
  }

  calcCartTotal() {
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }
}
