import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Pages/home/home.component';
import { FoodComponent } from './Components/Pages/food/food.component';
import { CartPageComponent } from './Components/Pages/cart-page/cart-page.component';
import { LoginPageComponent } from './Components/Pages/login-page/login-page.component';
import { RegisterPageComponent } from './Components/Pages/register-page/register-page.component';
import { CheckOutComponent } from './Components/Pages/check-out/check-out.component';
import { PaymentPageComponent } from './Components/Pages/payment-page/payment-page.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search/:searchName',component:HomeComponent},
  {path:'tag/:tagName',component:HomeComponent},
  {path:'food/:foodId',component:FoodComponent},
  {path:'cart-page',component:CartPageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'register',component:RegisterPageComponent},
  {path:'checkout',component:CheckOutComponent},
  {path:'payment',component:PaymentPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
