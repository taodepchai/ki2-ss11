"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getDescription() {
        console.log(`name:${this.name} price:${this.price}`);
    }
}
class Electronics extends Product {
    constructor(name, price, brand) {
        super(name, price);
        this.brand = brand;
    }
    getDescription() {
        console.log(`name:${this.name} price:${this.price} brand:${this.brand}`);
    }
}
let product = new Electronics("iphone", 1000, "apple");
product.getDescription();
