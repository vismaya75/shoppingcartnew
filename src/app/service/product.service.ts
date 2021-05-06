import { Injectable } from '@angular/core';
import {Product} from '../models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[]=[
 new Product(1,'product 1','this is the product 1 discribtion, this product is really cool',30000,'../../../../assets/p3.jpeg'),
 new Product(2,'product 2','this is the product 2 discribtion, this product is really cool',45000,'../../../../assets/p11.jpeg'),
 new Product(3,'product 3','this is the product 3 discribtion, this product is really cool',300,'../../../../assets/sh1.jpeg'),
 new Product(4,'product 4','this is the product 4 discribtion, this product is really cool',500,'../../../../assets/sh2.jpeg'),
 new Product(5,'product 5','this is the product 5 discribtion, this product is really cool',35000,'../../../../assets/p2.jpeg'),
 new Product(6,'product 6','this is the product 6 discribtion, this product is really cool',600,'../../../../assets/sh3.jpeg'),



  ]

  constructor() { }
  getproducts():Product[]{
    return this.products
  }
}
