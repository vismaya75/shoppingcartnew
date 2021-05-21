import { Component, OnInit } from '@angular/core';
import {ProductService} from 'src/app/service/product.service';
import {Product } from '../../models/product'

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  
  prods:Product[]=[]
  constructor(private productSerivce:ProductService ) { }

  ngOnInit():void {
  this.prods= this.productSerivce.getproducts()
    
  }
  

}
