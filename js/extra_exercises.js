"use strict";


// 1. Counting the Number of Characters
// Create a program that prompts for an input string and dis- plays output that shows the input string and the number of characters the string contains.
//     Example Output
// What is the input string? Homer
//     Homer has 5 characters.
//     Constraints
// - Be sure the output contains the original string.
// - If the user enters nothing, stat that the user must enter something in the program

// var instring = prompt('What is the input string');
//
// while(instring === "") {
//     var instring = prompt('What is the input string');
// }
//     var numberofcharacters = instring.length;
// alert(instring + " has " + numberofcharacters + " characters");


// 2. Mad Lib
// Mad libs are a simple game where you create a story template with blanks for words. You, or another player, then construct a list of words and place them into the story, creating an often silly or funny story as a result.
//     Create a simple mad-lib program that prompts for a noun, a verb, an adverb, and an adjective and injects those into a story that you create.
//     Example Output
// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly
// Do you walk your blue dog quickly? That's hilarious!
// Constraints
// • Use a single output statement for this program.
// • If your language supports string interpolation or string
// substitution, use it to build up the output.

// var noun = prompt('Enter a noun');
// var verb = prompt('Enter a verb');
// var adjective = prompt('Enter an adjective');
// var adverb = prompt('Enter an adverb');
// alert('Do you ' + verb + ' your ' + adjective + " " + noun + " " + adverb + "?" + "That's hilarious!");


// 3. Simple math
// Example Output
// What is the first number? 10
//     What is the second number? 5
//     10 + 5 = 15
// 10 - 5 = 5
// 10 * 5 = 50
// 10 / 5 = 2
// Constraints
//   • Values coming from users will be strings. Ensure that you convert these values to numbers before doing the math.
//   • Keep the inputs and outputs separate from the numerical conversions and other processing.
//   • Generate a single output statement with line breaks in the appropriate spots.

var first = parseFloat(prompt('What is the first number?'));
var second = parseFloat(prompt('What is the second number?'));
alert(first + " + " + second + " = " + (first + second)+ "\n" +
    first + " - " + second + " = " + (first - second)+ "\n" +
    first + " * " + second + " = " + (first * second)+ "\n" +
    first + " / " + second + " = " + (first / second)+ "\n");


// 4. Area of a rectangular room
// When working in a global environment, you’ll have to present information in both metric and Imperial units. And you’ll need to know when to do the conversion to ensure the most accurate results.
//     Create a program that calculates the area of a room. Prompt the user for the length and width of the room in feet. Then display the area in both square feet and square meters.
//     Example Output
// What is the length of the room in feet? 15
//     What is the width of the room in feet? 20
//     You entered dimensions of 15 feet by 20 feet.
//     The area is
// 300 square feet
// 27.871 square meters
