import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-order-track-page',
  templateUrl: './order-track-page.component.html',
  styleUrls: ['./order-track-page.component.css']
})
export class OrderTrackPageComponent implements OnInit {
order!:Order;
  constructor (private activatedRoute:ActivatedRoute,private orderService:OrderService) {
   const params=this.activatedRoute.snapshot.params
   if(!params.OrderId) return;
   orderService.trackOrderById(params.OrderId).subscribe(order=>{
    this.order=order;
   })
  }
  ngOnInit(): void {
    
  }

}
