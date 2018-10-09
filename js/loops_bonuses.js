console.log("LOOPS BONUSES START");

// BONUSES 1:
// Write a function to toggle all characters in a string: in a given string, toggle all characters to their opposite case. Special characters will not change.
//     Example input: "aBc12#"
// Example output: "AbC12#"

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

// BONUS 2:
// Write a function that takes a given string appended with a number at the end. The program will check the length of the string to verify the string is equal to the number appended. If the number appended equals the string length, output "Yes". if the number appended does not equal the string length, output "No".
//     Example Input: "geek5"
// Example Output: "Yes"
// Example Input: "codingchallenge25"
// Example Output: "No"

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

