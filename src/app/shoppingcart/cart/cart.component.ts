import { Component,  OnInit } from '@angular/core';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
   
  constructor() { }

  ngOnInit():void {
    this.cartDetails();
   this.cartTotal();

    }
   
    getCartDetails:any=[];
    cartDetails(){
      if(localStorage.getItem('localCart')){
       this.getCartDetails=JSON.parse(localStorage.getItem('localCart')||'{}');
       console.log(this.getCartDetails);
       
      }
    } 
  
  
  
    inc(id:any,qty:any){
      for(let i=0; i<this.getCartDetails.length; i++){
        if(this.getCartDetails[i].id ===id){
          if(qty != 6)
            this.getCartDetails[i].qty= parseInt(qty) +1;
        }
      }
      localStorage.setItem('localCart',JSON.stringify(this.getCartDetails))
      this.cartTotal();
  
    }
  
    
       dec(id:any,qty:any){
       for(let i=0; i<this.getCartDetails.length; i++){
        if(this.getCartDetails[i].id ===id){
          if(qty != 1)
            this.getCartDetails[i].qty= parseInt(qty) -1;
        }
      }
      localStorage.setItem('localCart',JSON.stringify(this.getCartDetails))
      this.cartTotal();
  
    }
  
    Total:number=0
    cartTotal(){
      if(localStorage.getItem('localCart')){
        this.getCartDetails=JSON.parse(localStorage.getItem('localCart')||'')
       this.Total= this.getCartDetails.reduce(function(acc:any,val:any){
          return acc + (val.price * val.qty); 
        }, 0)
      }
  
    }
    removeall(){
      localStorage.removeItem('localCart')
      this.getCartDetails=[];
      this.Total =0;
  
    }
  
  
  }
  



