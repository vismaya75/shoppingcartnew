import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { NevComponent } from './nev/nev.component';
import { FilterComponent } from './shoppingcart/filter/filter.component';
import { ProductlistComponent } from './shoppingcart/productlist/productlist.component';
import { CartComponent } from './shoppingcart/cart/cart.component';
import { ProductitemComponent } from './shoppingcart/productlist/productitem/productitem.component';
//import { CartItemComponent } from './shoppingcart/cart/cart-item/cart-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ShoppingcartComponent,
    NevComponent,
    FilterComponent,
    ProductlistComponent,
    CartComponent,
    ProductitemComponent,
    HomepageComponent,
  
  ],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
