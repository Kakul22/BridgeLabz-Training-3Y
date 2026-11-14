"use strict";

const bookingForm = document.getElementById("bookingForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const seatsInput = document.getElementById("seats");

const ticket = document.getElementById("ticket");

// Regular expressions
const namePattern = /^[A-Za-z ]+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Handle form submission
bookingForm.addEventListener("submit", function(event) {

    // Prevent page reload
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const seats = Number(seatsInput.value);

    let isValid = true;

    // Validate name
    if (!namePattern.test(name)) {
        document.getElementById("nameError").textContent =
            "Name should contain only alphabets.";

        isValid = false;
    }
    else {
        document.getElementById("nameError").textContent = "";
    }

    // Validate email
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent =
            "Enter a valid email address.";

        isValid = false;
    }
    else {
        document.getElementById("emailError").textContent = "";
    }

    // Validate seats
    if (!Number.isInteger(seats) || seats < 1 || seats > 10) {
        document.getElementById("seatsError").textContent =
            "Seats must be between 1 and 10.";

        isValid = false;
    }
    else {
        document.getElementById("seatsError").textContent = "";
    }

    // If all inputs are valid
    if (isValid) {

        // Create booking object
        const booking = {
            name: name,
            email: email,
            seats: seats
        };

        // Display ticket details
        ticket.innerHTML = `
            <h3>Booking Successful!</h3>
            Name: ${booking.name}<br>
            Email: ${booking.email}<br>
            Seats: ${booking.seats}
        `;

        console.log("Booking Details:", booking);
    }
    else {
        ticket.textContent = "";
    }

});