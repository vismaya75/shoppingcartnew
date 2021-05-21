export class Product {
    pid: number;
    name: string;
    describtion: string;
    price: number;
    imageUrl: string;
    qty:number
    

    constructor(pid=0, name='', describtion="", price=0, imageUrl="../../../../assets/p2.jpeg",qty=1 ) {
     this.pid=pid
     this.name=name
     this.describtion=describtion
     this.price=price
     this.imageUrl=imageUrl
     this.qty=qty
     
    }

}
