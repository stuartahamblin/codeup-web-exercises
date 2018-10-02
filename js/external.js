"use strict";

// Add a console.log message in external.js that says "Hello from external JavaScript".
console.log('Hello from external JavaScript');

// Use the alert function to show a message that says 'Welcome to my Website!'.
alert('Welcome to my Website!');

// Use a prompt to ask for the user's favorite color. Use the user's response to alert a message that says that the color entered is your favorite color too.
var userFavColor = prompt('Please enter your favorite color?');
alert("Great, " + userFavColor + " is my favorite color too!");

// Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.
//     When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
//     Use an alert to show the results of each problem.

// Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.
//     You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
var littlemermaiddays = parseFloat(prompt('How many days did you rent the Little Mermaid?'));
var brotherbeardays = parseFloat(prompt('How many days did you rent Brother Bear?'));
var hercules = parseFloat(prompt('How many days did you rent Hercules?'));
var rentcost = 3*littlemermaiddays + 3*brotherbeardays + 3*hercules;
alert('At a $3.00 price per movie per day, your total cost of renting is $' + rentcost.toFixed(2));

//     Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
var googlehours = parseFloat(prompt('How many hours did you work at Google?'));
var amazonhours = parseFloat(prompt('How many hours did you work at Amazon?'));
var facebookhours = parseFloat(prompt('How many hours did you work at Facebook?'));
var cashmoney = 400*googlehours + 380*amazonhours + 350*facebookhours;
alert('The total earned for your hours at worked at Google, Amazon and Facebook is $' + cashmoney);

//     A student can be enrolled to a class only if the class is not full and the class schedule does not conflict with her current schedule.
var classfull = confirm('Click ok if the class not full.');
var sched = confirm('Click ok if you do not have a scheduling conflict.');
var enrol = confirm('Click ok to enroll in this course');
    if (classfull && sched && enrol){
        alert('You are now enrolled')
    } else {
        alert('See other class options');
    }

//     A product offer can be applied only if people buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
var multipleitems = confirm('Click ok if you are buying more than two items.');
var expire = confirm('Click ok if the offer has not expired.');
if (multipleitems && expire){
    alert('The product offer is applicable for this transaction')
} else {
    alert('The product offer will not be applied for this transaction');
}