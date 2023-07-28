import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Partials/header/header.component';
import { HomeComponent } from './Components/Pages/home/home.component';
import { SearchComponent } from './Components/Partials/search/search.component';
import { TagsComponent } from './Components/Partials/tags/tags.component';
import { FoodComponent } from './Components/Pages/food/food.component';
import { CartPageComponent } from './Components/Pages/cart-page/cart-page.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    FoodComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
