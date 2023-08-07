import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../shared/models/Food';
import { CartItems } from '../shared/models/CartItems';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart=this.getCartFromLocalStorage();

  private cartSubject:BehaviorSubject<Cart>=new BehaviorSubject(this.cart)

  constructor() { }

  addToCart(food:Food):void
  {
    let cartItem=this.cart.items.find(item=>item.food.id===food.id)
    if(cartItem)
    return;
    this.cart.items.push(new CartItems(food))
    this.setCartToLocalStorage()
  }

  removeCartItem(foodId:string):void{
    this.cart.items=this.cart.items.filter(item=>item.food.id !== foodId)
    this.setCartToLocalStorage()
  }

  changeQuantity(foodId:string,quantity:number)
  {
    let cartItem=this.cart.items.find(item=>item.food.id === foodId)
    if(!cartItem)
    {
      return;
    }
    cartItem.quantity=quantity
    cartItem.price=quantity *cartItem.food.price
    this.setCartToLocalStorage()
  }

  clearCart()
  {
    this.cart=new Cart()
    this.setCartToLocalStorage()
  }
  getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable()

  }

   getCart():Cart
  {
    return this.cartSubject.value
  }

  private setCartToLocalStorage()
  {
    this.cart.totalPrice=this.cart.items.reduce((prev,current)=> prev+current.price,0)
    this.cart.totalCount=this.cart.items.reduce((prev,count)=>prev+count.quantity,0)
    const cartJson=JSON.stringify(this.cart)
    localStorage.setItem('cart',cartJson)
    this.cartSubject.next(this.cart)
  }

  private getCartFromLocalStorage():Cart
  {
     const cartJson=localStorage.getItem('cart')
     return cartJson?JSON.parse(cartJson):new Cart()

  }
}
