"use strict";

// Outer function
function makeMultiplier(multiplier) {

    // Inner function
    return function (number) {
        return number * multiplier;
    };
}

// Creating functions
const double = makeMultiplier(2);
const triple = makeMultiplier(3);

// Calling functions
console.log("Double:", double(5));
console.log("Triple:", triple(5));