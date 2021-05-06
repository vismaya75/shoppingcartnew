import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { CartComponent } from './shoppingcart/cart/cart.component';
import { FilterComponent } from './shoppingcart/filter/filter.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';

const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'shop',component:ShoppingcartComponent
  },
  {
    path:'',redirectTo:'/shop', pathMatch:'full'
  },
  {
    path:'cart',component:CartComponent
  },

  {
    path:'filter',component:FilterComponent
  },
  {
    path:'home',component:HomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
