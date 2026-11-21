
class MovieTicket {

    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

// Adding method to prototype
MovieTicket.prototype.printTicket = function() {

    console.log("Movie:", this.movieName);
    console.log("Seat Number:", this.seatNo);
    console.log("Ticket Price:", this.price);
};

class OnlineTicket extends MovieTicket {

    constructor(movieName, seatNo, price, convenienceFee) {

        super(movieName, seatNo, price);

        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}

// Creating OnlineTicket objects
let ticket1 = new OnlineTicket("Avengers", "A12", 250, 30);

let ticket2 = new OnlineTicket("Avatar", "B15", 300, 40);

// Calling parent prototype method
ticket1.printTicket();

console.log("Convenience Fee:", ticket1.convenienceFee);
console.log("Total Amount:", ticket1.getTotalAmount());

console.log("-------------------");

ticket2.printTicket();

console.log("Convenience Fee:", ticket2.convenienceFee);
console.log("Total Amount:", ticket2.getTotalAmount());
