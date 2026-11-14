"use strict";

// Creating Book class
class Book {

    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    // Method to issue a book
    issueBook() {

        if (this.isIssued) {
            console.log(this.title + " is already issued.");
        }
        else {
            this.isIssued = true;
            console.log(this.title + " has been issued successfully.");
        }
    }

    // Method to return a book
    returnBook() {

        if (!this.isIssued) {
            console.log(this.title + " is already available.");
        }
        else {
            this.isIssued = false;
            console.log(this.title + " has been returned successfully.");
        }
    }
}

// Creating book objects
const book1 = new Book("JavaScript Basics", "John", "101");
const book2 = new Book("Python Programming", "David", "102");
const book3 = new Book("Data Structures", "Mark", "103");

// Storing books in an array
const books = [book1, book2, book3];

// Display available books
function displayAvailableBooks() {

    console.log("\nAvailable Books:");

    books.forEach(function(book) {

        if (!book.isIssued) {
            console.log(book.title + " | " + book.ISBN);
        }

    });
}

// Search book using ISBN and issue it
function searchAndIssueBook(ISBN) {

    const foundBook = books.find(function(book) {
        return book.ISBN === ISBN;
    });

    if (foundBook) {
        foundBook.issueBook();
    }
    else {
        console.log("Book not found!");
    }
}

// Program execution
displayAvailableBooks();

searchAndIssueBook("102");

displayAvailableBooks();

// Returning book
book2.returnBook();

displayAvailableBooks();