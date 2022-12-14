
//create a class Product with id,name,brand,price ,category 

//create a class ShoppingCart which has map of product as key and number of items as value

//write a method to calculate the cart's total price


class Product{

    id:number;
    name:string;
    brand:string;
    price:number;
    category:Category

    constructor(id:number,name:string,brand:string,price:number,category:any){
        this.id=id;
        this.name=name;
        this.brand=brand;
        this.price=price;
        this.category=category;
    }
}
enum Category{
    clothes,
    groceries,
    furniture,
    electric,
}


    class ShoppingCart{
     cart = new Map()
     constructor(cart:Map<Product,number>){
        this.cart=cart;
     }
     public calculateTotalPrice(){
        let price:number=0;
        this.cart.forEach((value:number,key:Product) => {
            let pr:number;
            pr=key.price;
            price=(pr*value);

        });
        return price;

     }

        }
let p1 =new Product(1,"jeans","people",5000,Category.clothes);
let p2 =new Product(2,"chips","lays",2000,Category.groceries);
let p3 =new Product(3,"soaf","bantia",100000,Category.furniture);
let p4 =new Product(4,"tv","sony",20000,Category.electric);
 let cart:Map<Product,number>=new Map();
 cart.set(p1,3);
 cart.set(p2,4);
 cart.set(p3,2);
 cart.set(p4,1);

 let shop=new ShoppingCart(cart);
 console.log(shop.calculateTotalPrice());
