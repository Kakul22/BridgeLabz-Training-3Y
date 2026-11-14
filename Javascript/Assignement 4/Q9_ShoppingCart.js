"use strict";

// Creating Cart class
class Cart {

    constructor() {
        this.items = [];
    }

    // Add items to cart
    addItem(name, price, quantity) {

        const item = {
            name: name,
            price: price,
            quantity: quantity
        };

        this.items.push(item);

        console.log(name + " added to cart.");
    }

    // Calculate total cart price
    getTotal() {

        return this.items.reduce(function(total, item) {

            return total + (item.price * item.quantity);

        }, 0);
    }

    // Apply coupon discount
    applyCoupon(coupon) {

        // Coupon format: SAVE20 or DISC10
        const couponPattern = /^(SAVE|DISC)(\d{1,2})$/;

        // Check coupon format
        const match = coupon.match(couponPattern);

        if (!match) {
            console.log("Invalid Coupon Code!");
            return this.getTotal();
        }

        // Extract discount percentage
        const discount = Number(match[2]);

        if (discount < 1 || discount > 100) {
            console.log("Invalid discount percentage!");
            return this.getTotal();
        }

        const total = this.getTotal();

        const discountAmount = total * discount / 100;

        const finalTotal = total - discountAmount;

        console.log("Coupon Applied Successfully!");
        console.log("Discount:", discount + "%");
        console.log("Original Total: Rs." + total);
        console.log("Discount Amount: Rs." + discountAmount);
        console.log("Final Total: Rs." + finalTotal);

        return finalTotal;
    }

    // Display cart items
    displayCart() {

        console.log("\nShopping Cart:");

        this.items.forEach(function(item) {

            console.log(
                item.name +
                " | Price: Rs." + item.price +
                " | Quantity: " + item.quantity
            );

        });
    }
}

// Creating cart object
const myCart = new Cart();

// Adding products
myCart.addItem("Laptop", 50000, 1);
myCart.addItem("Mouse", 500, 2);
myCart.addItem("Keyboard", 1000, 1);

// Display cart
myCart.displayCart();

// Calculate total
console.log("\nTotal Amount: Rs." + myCart.getTotal());

// Apply coupon
myCart.applyCoupon("SAVE20");