console.log("BREAK_AND_CONTINUE START")

// 1. Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.

// 2. Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

// 3. Your output should look like this:
//     Number to skip is: 27
//
//     Here is an odd number: 1
//     Here is an odd number: 3
//     Here is an odd number: 5
//     Here is an odd number: 7
//     Here is an odd number: 9
//     Here is an odd number: 11
//     Here is an odd number: 13
//     Here is an odd number: 15
//     Here is an odd number: 17
//     Here is an odd number: 19
//     Here is an odd number: 21
//     Here is an odd number: 23
//     Here is an odd number: 25
//     Yikes! Skipping number: 27
//     Here is an odd number: 29
//     Here is an odd number: 31
//     Here is an odd number: 33
//     Here is an odd number: 35
//     Here is an odd number: 37
//     Here is an odd number: 39
//     Here is an odd number: 41
//     Here is an odd number: 43
//     Here is an odd number: 45
//     Here is an odd number: 47
//     Here is an odd number: 49

// Answers 2 & 3
// var input;
// do {
//     input = prompt("Please enter an odd number between 0 and 50");
//
//     if(input < 50 && input > 1 && input % 2 !== 0 ) {
//         break;
//     }
// } while (true);
// for (var i = 1; i < 50; i += 2) {
//     if (i == input) {
//         console.log("Yikes! Skipping number: " + i);
//         continue;
//     } else {
//         console.log("Here is an odd number: " + i)
//     }
// }

//Alt Answer 2 & 3
// var userNumber;
// do {
//     userNumber = prompt( "Please enter an odd number between 0 and 50");
//
//     if(userNumber % 2 !== 0 && userNumber < 50 && userNumber > 1) {
//         break;
//     }
// } while(true);
// for (var i = 1; i < 50; i += 2) {
//     if (i == userNumber) {
//         console.log("Yikes! Skipping number: " + i);
//         continue;
//     } else {
//         console.log("Here is an odd number: " + i)
//     }
// }

