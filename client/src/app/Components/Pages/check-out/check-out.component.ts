import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  order:Order=new Order();
  checkoutForm!:FormGroup;
  constructor (cartService:CartService,
                private userService:UserService,
                private formBuilder:FormBuilder,
                private toastrService:ToastrService,
                private orderService:OrderService,
                private router:Router ) {
                  const cart=cartService.getCart()
                  this.order.items=cart.items
                  this.order.totalPrice=cart.totalPrice
                }

  ngOnInit(): void {
    const {name,address}=this.userService.getCurrentUser()
    this.checkoutForm=this.formBuilder.group({
      name:[name,Validators.required],
      address:[address,Validators.required]
    })
  }

  get fc()
  {
    return this.checkoutForm.controls
  }

  createOrder()
  {
    if(this.checkoutForm.invalid)
    {
      this.toastrService.error('Please fill the inputs','Invalid inputs')
      return 
    }
    this.order.name=this.fc.name.value
    this.order.address=this.fc.address.value
    console.log(this.order);
    
   this.orderService.createOrder(this.order).subscribe({
    next:(order)=>{
      console.log("OrderedUser",order);
      this.router.navigateByUrl('/payment')
    },
    error:(errorResponse)=>{
      this.toastrService.error(errorResponse.error,'cart')
    }
   })
    
  }
}
