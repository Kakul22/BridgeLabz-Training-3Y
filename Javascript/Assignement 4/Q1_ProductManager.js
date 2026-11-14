"use strict";

// Creating Product class
class Product {

    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Method to apply discount
    applyDiscount(discount) {
        this.price = this.price - (this.price * discount / 100);
    }

    // Method to display product details
    displayDetails() {
        return `ID: ${this.id}
Name: ${this.name}
Price: Rs.${this.price}
Category: ${this.category}`;
    }
}

// Creating product objects
const product1 = new Product(101, "Laptop", 50000, "Electronics");
const product2 = new Product(102, "Headphones", 1500, "Electronics");
const product3 = new Product(103, "Mouse", 500, "Accessories");
const product4 = new Product(104, "Mobile", 20000, "Electronics");

// Applying 10% discount
product1.applyDiscount(10);
product2.applyDiscount(10);

// Storing products in an array
const products = [product1, product2, product3, product4];

console.log("All Products:");

products.forEach(function(product) {
    console.log(product.displayDetails());
    console.log("-------------------");
});

// Filtering products with price greater than 1000
const expensiveProducts = products.filter(function(product) {
    return product.price > 1000;
});

console.log("Products with price greater than 1000:");

expensiveProducts.forEach(function(product) {
    console.log(product.displayDetails());
    console.log("-------------------");
});