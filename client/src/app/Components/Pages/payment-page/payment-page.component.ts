import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/shared/models/Order';

import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {

  order:Order=new Order();
  constructor (orderService:OrderService,router:Router) {
    orderService.getNewOrderForCurrentUser().subscribe({
      next:(order)=>{
        console.log("order page",order);
        
        this.order=order
      },
      error:()=>{
        router.navigateByUrl('/checkout')
      }
    })
  }
  ngOnInit(): void {
    console.log("payment tp",this.order.totalPrice);
    
  }

}
