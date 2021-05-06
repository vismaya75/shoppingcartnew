export class Product {
    id: number;
    name: string;
    describtion: string;
    price: number;
    imageUrl: string;
    qty:number
    

    constructor(id=0, name='', describtion="", price=0, imageUrl="../../../../assets/p2.jpeg",qty=1 ) {
     this.id=id
     this.name=name
     this.describtion=describtion
     this.price=price
     this.imageUrl=imageUrl
     this.qty=qty
     
    }

}
