import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent {

  food!:Food;

  constructor (activatededRoute:ActivatedRoute,private foodService:FoodService,private cartService:CartService,private router:Router) {
    activatededRoute.params.subscribe(params=>{
      if(params.foodId)
      {
        this.food=this.foodService.getFood(params.foodId)
      }
    })
  }

  addToCart()
  {
    this.cartService.addToCart(this.food)
    this.router.navigateByUrl('/cart-page')
  }

}
