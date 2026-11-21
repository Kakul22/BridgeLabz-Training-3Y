
let menu = [
    { name: "Pizza", price: 200 },
    { name: "Burger", price: 100 },
    { name: "Pasta", price: 150 },
    { name: "Sandwich", price: 80 }
];

function calculateBill(orderItems) {

    // map() extracts prices of ordered items
    let prices = orderItems.map(item => {

        let food = menu.find(m => m.name === item);

        if (!food) {
            throw new Error("Invalid food item: " + item);
        }

        return food.price;
    });

    // reduce() calculates total bill
    let total = prices.reduce((sum, price) => sum + price, 0);

    return total;
}

// Valid order
try {
    let bill = calculateBill(["Pizza", "Burger", "Pasta"]);
    console.log("Total Bill: Rs.", bill);
}
catch (error) {
    console.log("Error:", error.message);
}

// Invalid order
try {
    let bill = calculateBill(["Pizza", "Sandwich", "Momos"]);
    console.log("Total Bill: Rs.", bill);
}
catch (error) {
    console.log("Order Failed:", error.message);
}
