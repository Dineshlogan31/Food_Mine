import { Injectable } from '@angular/core';
import { Order } from '../shared/models/Order';
import { HttpClient } from '@angular/common/http';
import { ORDER_CREATE_URL, ORDER_NEW_FOR_CURRENT_USER, ORDER_PAY_URL, ORDER_TRACK_URL } from '../shared/constants/url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { 
    
  }


  createOrder(order:Order):Observable<Order>
  {
     return this.http.post<Order>(ORDER_CREATE_URL,order);
  }
  getNewOrderForCurrentUser():Observable<Order>
  {
    return this.http.get<Order>(ORDER_NEW_FOR_CURRENT_USER)
  }

  pay(order:Order):Observable<string>
  {
    return this.http.post<string>(ORDER_PAY_URL,order)
  }
  trackOrderById(id:string):Observable<Order>
  {
    return this.http.get<Order>(ORDER_TRACK_URL+id)
  }
}
