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
import { TitleComponent } from './Components/Partials/title/title.component';
import { NotFoundComponent } from './Components/Partials/not-found/not-found.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginPageComponent } from './Components/Pages/login-page/login-page.component'
import {ReactiveFormsModule} from '@angular/forms'
import { ToastrModule } from 'ngx-toastr'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InputContainerComponent } from './Components/Partials/input-container/input-container.component';
import { InputValidatorComponent } from './Components/Partials/input-validator/input-validator.component';
import { TextInputComponent } from './Components/Partials/text-input/text-input.component';
import { DefaultButtonComponent } from './Components/Partials/default-button/default-button.component'






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    FoodComponent,
    CartPageComponent,
    TitleComponent,
    NotFoundComponent,
    LoginPageComponent,
    InputContainerComponent,
    InputValidatorComponent,
    TextInputComponent,
    DefaultButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass:'toast-bottom-right',
      newestOnTop:false
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
