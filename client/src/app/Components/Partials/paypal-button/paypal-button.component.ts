import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/shared/models/Order';


//window.paypal
declare var paypal:any;
@Component({
  selector: 'paypal-button',
  templateUrl: './paypal-button.component.html',
  styleUrls: ['./paypal-button.component.css']
})
export class PaypalButtonComponent implements OnInit {

  @Input()
  order!:Order;
@ViewChild('paypal',{static:true})
paypalElement!:ElementRef;
  constructor (private orderService:OrderService,private cartService:CartService,private router:Router,private toastrService:ToastrService) {}
  ngOnInit(): void {
    console.log("tp",this.order.totalPrice);
    
    const self=this
    paypal.Buttons({
      createOrder:(data:AnalyserNode,action:any)=>{
         return action.order.create({
          purchase_units:[
            {
              amount:{
                currency_code:'CAD',
                value:self.order.totalPrice
              }
            }
          ]
          
         })
      },
      onApprove: async (data:any,action:any)=>{
        const payment=await action.order.capture();
        this.order.paymentId=payment.id;
        this.orderService.pay(this.order).subscribe({
          next:(orderId:string)=>{
            console.log("Check order id:",orderId);
            
         this.cartService.clearCart();
       this.router.navigateByUrl(`/track/${orderId}`);
      this.toastrService.success(
        `payment saved successfully`,
        `success`
      )
          },
          error:(error:any)=>{
            this.toastrService.error(`Payment save Failed`,'error')
          }
        })
      },
      onError:(err:any)=>{
        this.toastrService.error(`payment Failed Error`)
        console.log(err);
        
      }
    }).render(this.paypalElement.nativeElement)
  }

}
