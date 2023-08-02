import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItems } from './../../../shared/models/CartItems';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!:Cart;

  constructor(private cartService:CartService) {
    this.cartService.getCartObservable().subscribe(items=>{
      this.cart=items;
    })
  }

  ngOnInit(): void {
      
  }

  removeFromCart(cartItems:CartItems)
  {
    this.cartService.removeCartItem(cartItems.food.id)
  }

  changeQuantity(cartItem:CartItems,quantityInString:string)
  {
    const quantity=parseInt(quantityInString)
    this.cartService.changeQuantity(cartItem.food.id,quantity)
  }

}
