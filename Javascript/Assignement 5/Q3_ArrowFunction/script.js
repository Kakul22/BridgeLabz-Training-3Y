"use strict";

const user = {
    name: "Kakul",

    // Arrow function
    showName: () => {
        console.log(this.name);
    }
};

user.showName(); // undefined

// Fix using normal function
const user2 = {
    name: "Kakul",

    showName: function () {
        console.log(this.name);
    }
};

user2.showName(); // Kakul