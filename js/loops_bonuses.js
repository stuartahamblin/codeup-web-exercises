console.log("LOOPS BONUSES START");


// BONUS 1: Write a function to toggle all characters in a string: in a given string, toggle all characters to their opposite case. Special characters will not change.
//     Example input: "aBc12#"
// Example output: "AbC12#"

// Answer
// function toggle(string) {
//     var numloops = string.length;
//     var disp = "";
//     var dispx = "";
//     for (i = 0; i <= numloops; i++) {
//         disp = disp + dispx;
//         if (string.substring(i,i+1) === string.substring(i,i+1).toUpperCase()) {
//             dispx = string.substring(i,i+1).toLowerCase();
//         } else {
//             dispx = string.substring(i,i+1).toUpperCase();
//         }
//     }
//     return disp;
// }
// console.log(toggle("StUaRt"));


// BONUS 2: Write a function that takes a given string appended with a number at the end. The program will check the length of the string to verify the string is equal to the number appended. If the number appended equals the string length, output "Yes". if the number appended does not equal the string length, output "No".
//     Example Input: "geek5"
// Example Output: "Yes"
// Example Input: "codingchallenge25"
// Example Output: "No"

// Answer
// function appended(string) {
//     var howlong = string.length;
//     var lastcharacter = string.substring(howlong-1, howlong);
//     if (howlong == lastcharacter) {
//         return "Yes"
//     } else {
//         return "No"
//     }
// }
// console.log(appended("stuart7"));


//Ryan loop Bonuses


//BONUS 1: Write a function named countVowels that takes in any string and returns the number of vowels in the string. (ignore "y")
//
// countVowels("Codeup") should return 3
// countVowels("banana") should return 3
// countVowels("Hi Everybody!") should return 4

//Answer
// function countVowels(input) {
//     input = input.toLowerCase();
//     var output = 0;
//     for (i = 0; i <= input.length; i++) {
//         letter = input.substring(i, i+1);
//         // console.log (input.substring(i, i+1));
//         if (letter === 'a') {
//             output += 1;
//         } else if (letter === 'e') {
//             output += 1;
//         } else if (letter === 'i') {
//             output += 1;
//         } else if (letter === 'o') {
//             output += 1;
//         } else if (letter === 'u') {
//             output += 1;
//         } else {
//         }
//     }
//     return output;
// }
// console.log(countVowels("Codeup"));
// console.log(countVowels("banana"));
// console.log(countVowels("Hi Everybody!"));


//BONUS 2: Write a function named count9 that takes in any string or number and returns the number of times that
// the numeral 9 or the character "9" shows up

//Answer
// function count9(input) {
//     var output = 0;
//     for (i = 0; i <= input.length; i++) {
//         character = input.toString().substring(i, i+1);
//         console.log(character);
//         if (character == 9) {
//             output += 1;
//         } else {
//         }
//     }
//     return output;
// }
// console.log(count9(9));


// BONUS 3: Write the loop and code necessary to sum all integers
// between 1 to 100, including 100.

//todo
var j = 1;
for (var i = 1; i <= 100; i++) {
}


//BONUS 4: Write a loop that plays "99 bottles of beer" song. It should say bottle instead of bottles
// when there's only one, and the song is over when there are 0 bottles.

//todo