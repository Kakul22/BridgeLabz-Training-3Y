"use strict";

// Function that accepts an array and callback
function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

// Callback to double numbers
function doubleNumber(num) {
    return num * 2;
}

// Callback to square numbers
function squareNumber(num) {
    return num * num;
}

let numbers = [1, 2, 3, 4];

// Applying operations
console.log("Doubled Numbers:", applyOperation(numbers, doubleNumber));

console.log("Squared Numbers:", applyOperation(numbers, squareNumber));