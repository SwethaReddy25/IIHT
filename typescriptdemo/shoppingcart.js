//create a class Product with id,name,brand,price ,category 
var Category;
(function (Category) {
    Category[Category["clothes"] = 0] = "clothes";
    Category[Category["groceries"] = 1] = "groceries";
    Category[Category["furniture"] = 2] = "furniture";
    Category[Category["electric"] = 3] = "electric";
})(Category || (Category = {}));
class Product {
    constructor(id, name, brand, price, category) {
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.category = category;
    }
}
class ShoppingCart {
    constructor(cart) {
        this.cart = new Map();
        this.cart = cart;
    }
    calculateTotalPrice() {
        let price = 0;
        this.cart.forEach((value, key) => {
            let pr;
            pr = key.price;
            price = (pr * value);
        });
        return price;
    }
}
let p1 = new Product(1, "jeans", "people", 5000, Category.clothes);
let p2 = new Product(2, "chips", "lays", 2000, Category.groceries);
let p3 = new Product(3, "soaf", "bantia", 100000, Category.furniture);
let p4 = new Product(4, "tv", "sony", 20000, Category.electric);
let cart = new Map();
cart.set(p1, 3);
cart.set(p2, 4);
cart.set(p3, 2);
cart.set(p4, 1);
let shop = new ShoppingCart(cart);
console.log(shop.calculateTotalPrice());
export {};
