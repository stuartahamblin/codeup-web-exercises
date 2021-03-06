(function() {
    "use strict";

    /**
     * QUESTION: Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

        // ANSWER:
        // var person = {
        //     firstName: "Stuart",
        //     lastName: "Hamblin"
        // };
        // console.log(person.firstName); // "Rick"
        // console.log(person.lastName); // "Sanchez"


    /**
     * QUESTION: Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

        // ANSWER:
        // person.sayHello = function() {
        //     return console.log("Hello from " + this.firstName + " " + this.lastName);
        // };
        // console.log(person.sayHello()); // "Hello from Rick Sanchez!"


    /**
     * QUESTION: HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

        //ANSWER
        // var shoppers = [
        //         {name: 'Cameron', amount: 180},
        //         {name: 'Ryan', amount: 250},
        //         {name: 'George', amount: 320}
        //         ];
        //
        // function discount(bill) {
        //     var finalDiscount;
        //     if (bill >= 200) {
        //         finalDiscount = bill * .12;
        //     } else {
        //         finalDiscount = 0
        //     }
        //     return finalDiscount;
        // }
        //     shoppers.forEach(function(shop) {
        //         console.log("Name: " + shop.name);
        //         console.log("Amount before the discount was " + shop.amount);
        //         console.log("Discount was " + discount(shop.amount));
        //         console.log("Amount after discount is "+ (shop.amount - discount(shop.amount)));
        //     });

        // ALT ANSWER
        // var shoppers = [
        //         {name: 'Cameron', amount: 180},
        //         {name: 'Ryan', amount: 250},
        //         {name: 'George', amount: 320}
        //         ];
        // function calculateDiscount(amount){
        //     var finalAmount = 0;
        //     var amountOff = 0;
        //     if (amount > 200) {
        //         amountOff = amount * .12;
        //         finalAmount = amount - amountOff;
        //     } else {
        //         finalAmount = amount;
        //     }
        //     return {
        //         finalAmount: finalAmount,
        //         amountOff: amountOff
        //     }
        // }
        // function displayShopperInfo(shoppers) {
        //     shoppers.forEach(function(shopper) {
        //         var amount = calculateDiscount(shopper.amount);
        //         var message = "";
        //         message += shopper.name + " bought $";
        //         message += shopper.amount.toFixed(2);
        //         message += " and got $" + amount.amountOff.toFixed(2);
        //         message += " off and will pay $";
        //         message += amount.finalAmount.toFixed(2) + ".";
        //         console.log(message);
        //     });
        // }
        // displayShopperInfo(shoppers);


    /**
     * QUESTION: Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

        //ANSWER
        // var books = [
        //     {
        //         title: "Anna Karenina",
        //         author: {
        //             firstName: "Leo",
        //             lastName: "Tolstoy"
        //             }
        //     },
        //     {
        //         title: "Madame Bovary",
        //         author: {
        //             firstName: "Gustave",
        //             lastName: " Flaubert"
        //         }
        //     },
        //     {
        //         title: "War and Peace",
        //         author: {
        //             firstName: "Leo",
        //             lastName: "Tolstoy"
        //         }
        //     },
        //     {
        //         title: "The Adventures of Huckleberry Finn",
        //         author: {
        //             firstName: "Mark",
        //             lastName: " Twain"
        //         }
        //     },
        //     {
        //         title: "The Stories of Anton Chekhov",
        //         author: {
        //             firstName: "Anton",
        //             lastName: "Chekhov"
        //         }
        //     },
        // ];
        // console.log(books);


    /**
     * QUESTION: Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

        //ANSWER
        //     books.forEach(function(book, index){
        //         console.log("Book # " + (index+1));
        //         console.log("Title: " + book.title);
        //         console.log("Author: " + book.author.firstName + " " + book.author.lastName);
        //     });

        // ALT ANSWER
        // for (var i = 0; i < books.length; i += 1) {
        //     var message = "";
        //     message += "Book # " + (i+1) + "\n";
        //     message += "Title: " + books[i].title + "\n";
        //     message += "Author: " + books[i].author.firstName + " ";
        //     message += books[i].author.lastName + "\n";
        //     message += "---";
        //     console.log(message)
        // }


    /**
     *  QUESTION BONUS:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

        // ANSWER

        // function createBook(title, author) {     //returns book with properties
        //     var book = {
        //         title: title,
        //         author: author
        //     };
        //     return book
        // }
        // console.log(createBook("Harry Potter", "J.K.Rowling"));

        // function createBooks() {     //refactored code that returns books array
        //     var books = [];
        //     do {
        //         var title = prompt("What is the title of the book you want to add?");
        //         var firstName = prompt("What is the author's first name?");
        //         var lastName = prompt("What is the author's last name?");
        //         var book = {
        //             title: title,
        //             author: {
        //                 firstName: firstName,
        //                 lastName: lastName
        //             }
        //         };
        //         books.push(book);
        //         var newBook = confirm("Do you want to add another book");
        //     } while (newBook === true);
        //     // console.log(books);
        //     return books;
        // }
        // console.log(createBooks());

        // var book = {     // sample book object
        //     title: "title",
        //         author: {
        //         firstName: "first",
        //             lastName: "last"
        //     }
        // };

        // function showBookInfo(object) {       //return
        //     console.log("Title: " + object.title);
        //     console.log("Author: " + object.author.firstName + " " + object.author.lastName);
        //     return "-------------------";
        // }
        // books.forEach(function(book){
        //     showBookInfo(book);
        // });

})();