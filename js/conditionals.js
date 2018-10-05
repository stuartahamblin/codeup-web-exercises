"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

/*SOLUTION*/
// var enterANumber = parseFloat(prompt('Enter a number?'));
// console.log(enterANumber);
// if (enterANumber % 2 == 0) {
//     alert("The number is even");
// } else {
//     alert("The number is odd");
// }
// alert('The number plus 100 is ' + (enterANumber+100));
// if (enterANumber >= 0)  {
//     alert('The number is positive');
// } else {
//     alert('The number is negative');
// }

// --------------------------------------------------------------------------------------------------------------------


/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


/*SOLUTION*/
function analyzeColor(colorName) {
    var colorSentence = '';
    if (colorName === 'blue') {
        colorSentence = 'Blue is the color of the sky';
    } else if (colorName === 'red') {
        colorSentence = 'Strawberries are red';
    } else if (colorName === 'cyan') {
        colorSentence = 'I do not know anything about cyan';
    } else if (colorName === 'orange') {
        colorSentence = 'Orange you glad?';
    } else if (colorName === 'yellow') {
        colorSentence = 'Mellow yellow';
    } else if (colorName === 'green') {
        colorSentence = 'Grass is green';
    } else if (colorName === 'indigo') {
        colorSentence = 'In you go indigo!';
    } else if (colorName === 'violet') {
        colorSentence = 'Why you so violent violet?';
    } else {
        colorSentence = 'Do not know that color';
    }
    return colorSentence;
}

// console.log(analyzeColor(red));

// --------------------------------------------------------------------------------------------------------------------

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

/*SOLUTION*/
var ranColor = analyzeColor(randomColor);
console.log(ranColor);

// --------------------------------------------------------------------------------------------------------------------
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

/*SOLUTION*/
// var analyzeColors = 'orange';
// var colorSentences = '';
// switch(analyzeColors) {
//     case 'blue':
//         colorSentences = 'Blue is the color of the sky';
//         break;
//     case 'red':
//         colorSentences = 'Strawberries are red';
//         break;
//     case 'cyan':
//         colorSentences = 'I do not know anything about cyan';
//         break;
//     case 'orange':
//         colorSentences = 'Orange you glad?';
//         break;
//     case 'yellow':
//         colorSentences = 'Mellow yellow';
//         break;
//     case 'green':
//         colorSentences = 'Grass is green';
//         break;
//     case 'indigo':
//         colorSentences = 'In you go indigo!';
//         break;
//     case 'violet':
//         colorSentences = 'Why you so violent violet?';
//         break;
//     default:
//         colorSentences = 'Do not know that color';
//         break;
// }
// console.log(colorSentences);

// --------------------------------------------------------------------------------------------------------------------
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/*SOLUTION*/
var usercolor = prompt('Enter a color');
alert(analyzeColor(usercolor));

// --------------------------------------------------------------------------------------------------------------------

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

/*SOLUTION*/
var luckyNumber = 4;
var price = 100;
function calculateTotal(luckyNumber, price) {
    var discountPrice = '';
    if (luckyNumber === 0) {
        discountPrice = price
    } else if (luckyNumber === 1) {
        discountPrice = price * .90;
    } else if (luckyNumber === 2) {
        discountPrice = price * .75;
    } else if (luckyNumber === 3) {
        discountPrice = price * .65;
    } else if (luckyNumber === 4) {
        discountPrice = price * .50;
    } else if (luckyNumber === 5) {
        discountPrice = 0;
    } else {
        discountPrice = 'invalid';
    }
    return discountPrice;
}
console.log(calculateTotal(luckyNumber, price));

// --------------------------------------------------------------------------------------------------------------------
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

/*SOLUTION*/
var promptprice = prompt('What was your total bill?');
alert('Your lucky number was ' + luckyNumber + '.');
alert('The price before the discount was $' + promptprice + '.');
alert('The price after the discount is $' + calculateTotal(luckyNumber, promptprice) + '.');