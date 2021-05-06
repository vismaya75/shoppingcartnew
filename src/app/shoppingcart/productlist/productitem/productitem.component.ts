import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductitemComponent implements OnInit {

  @Input()
  productitem!: Product;

  constructor() { }

  ngOnInit(): void {
  }
   itemsCart:any=[]
   handleAddToCart(_product:any){
    
     console.log(_product);
     let cartDataNull=localStorage.getItem('localCart');
     if(cartDataNull==null){
       let storeData:any=[];
       storeData.push(_product);
       localStorage.setItem('localCart',JSON.stringify(storeData))
     }
     else{
       var id=_product.id;
       let index:number=-1;
       this.itemsCart=JSON.parse(localStorage.getItem('localCart')||'');
       for(let i=0;i<this.itemsCart.length;i++){
         if(parseInt(id)===parseInt(this.itemsCart[i].id)){
           this.itemsCart[i].qty=_product.qty;
           index=i;
           break;
         }
       }
       if(index==-1){
         this.itemsCart.push(_product);
         localStorage.setItem('localCart',JSON.stringify(this.itemsCart))
       }
       else{
        localStorage.setItem('localCart',JSON.stringify(this.itemsCart))

       }
     }
    // localStorage.setItem('localCart',JSON.stringify(_product));
     

   }

}

