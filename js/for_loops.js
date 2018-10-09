console.log("FOR_LOOPS START");

// For Loops

// Basic For Loop Syntax
// A for loop is a robust looping mechanism available in many programming languages. JavaScript's implementation syntax matches that of many other languages.
//
// Syntax:
//     for (/*initialization*/; /*condition*/; /*increment*/) {
//         // body
//     }
// The code sample above is solely to demonstrate the general syntax of a for loop, copying and pasting it into your code or js console will cause an infinite loop.
//
// Example:
// for (var i = 0; i < 10; i++) {
//     console.log('for loop iteration #' + i);
// }
// In the example above, you can see that a for loop takes 3 expressions separated by semicolons.
//
// The first expression is called once before the first loop iteration starts and allows for initialization of loop variables. In the example, a variable i is created with an initial value of 0.
//
// The second expression is a condition that will decide if the loop should start/continue. It is called before each loop iteration. In the example, the loop will run as long as i is less than the number 10.
//
// The third expression allows for code that should be executed at the end of each loop iteration. Most often, the incrementing of loop counters takes place here.
//
// The first and third expressions in the for loop are optional. The same example with the first and third loop expressions omitted would look like this:
//
// Example:
// var i = 0;
// // DONT DO THIS
// for (; i < 10;) {
//     console.log('for loop iteration #' + i);
//     i++;
// }
// The above example may look familiar. It is actually the equivalent of a while loop. This example was provided for education only, please use a while loop instead of an ugly for loop.
//
// Example:
// for (var i = 0, j = 9; i < 10; i++, j--) {
//     console.log('for loop iteration #' + i + ', j = ' + j);
// }
//
// In general, we will use for loops when we know ahead of time how many times the loop needs to run, and while or do-while loops when we cannot know how many times the loop needs to run.
// Break and Continue
// There are two special keywords that can be used as part of loops. These are break and continue. We already used break as part of a switch statement, but let's see how it works with a loop.
// Breaking Out of a Loop
// Sometimes, a condition independent of the loop condition will occur that gives reason to exit the loop. The break keyword allows you to exit the loop at any time. Code execution in the loop will immediately be halted and the loop will not continue.
//
// Break Loop Example:
// var numberToStopAt = 5;
// for (var i = 1; i < 100; i++) {
//     console.log('Loop counter is: ' + i);
// if (i === numberToStopAt) {
//     console.log('We have reached the stopping point: break!');
//     // use the break keyword to exit from the while loop
//     break;
//     // nothing after the break will get processed
//     console.log('You will never see this line.');
//     }
// }
//     In the above example, even though our for loop is setup to go from 1 to 100, we will only see the first 5 numbers in the console because the code will encounter a break statement when i reaches 5, stopping the execution of the loop.
//     Although a for loop was used as an example, break works the same way with a while loop.
//     Continuing the Next Iteration of a Loop
//     Besides breaking out of a loop, sometimes conditions occur that give reason to skip to the next loop iteration without completing processing of the entire loop code block. The continue keyword provides this functionality.
//
//  Continue Iteration Example:
//     'use strict';
//
//     for (var i = 1; i < 100; i++) {
//
//         if (i % 2 !== 0) {
//             // number isn't even
//             // odd numbers aren't as cool
//             // skip the rest of the loop and continue with the next iteration
//             continue;
//         }
//
//         console.log('Here is a lovely even number: ' + i);
//     }
//     Like the break example, here as well our loop is setup to go from 1 to 100, but we will only ever see even numbers printed to the console, because if the number is odd, the code will encounter the continue statement and skip to the next iteration.
//         Again, although a for loop was used as an example, continue works the same way with a while loop.

// EXERCISES

// 1) Create a file named for_loops.js inside the js directory and link it to your loops.html file.

// 2) Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//
//     For example, showMultiplicationTable(7) should output
//
//
//     7 x 1 = 7
//     7 x 2 = 14
//     7 x 3 = 21
//     7 x 4 = 28
//     7 x 5 = 35
//     7 x 6 = 42
//     7 x 7 = 49
//     7 x 8 = 56
//     7 x 9 = 63
//     7 x 10 = 70

// Answer:
// function showMultiplicationTable(number) {
//     for (i = 1; i <= 10; i++) {
//         console.log(number + " x " + i + " = " + i * number);
//     }
//     return "";
// }
// console.log(showMultiplicationTable(4));

// 3) Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
//     123 is odd
//     80 is even
//     24 is even
//     199 is odd
// ...

//Answer
//     for(i = 1; i <=10; i++) {
//     var randomnumber = Math.floor((Math.random() * 200) + 20);
//     if (randomnumber % 2 === 0) {
//         console.log(randomnumber + " is even");
//     } else {
//         console.log(randomnumber + " is odd");
//     }
// }

// 4) Create a for loop that uses console.log to create the output shown below.
//
//
//     1
//     22
//     333
//     4444
//     55555
//     666666
//     7777777
//     88888888
//     999999999
//     Create a for loop that uses console.log to create the output shown below.

// Answer
// for (var i = 1; i < 10; i++) {
//     var disp = "";
//     for (var j=1; j<=i; j++) {
//         disp = disp + i;
//     }
//     console.log(disp);
// }

//Alt Answer
// for (var i = 1; i < 10; i++) {
//     i = i.toString();
//     console.log(i.repeat(i));
// }

// 5) Create a for loop that uses console.log to create the output shown below.
//     100
//     95
//     90
//     85
//     80
//     75
//     70
//     65
//     60
//     55
//     50
//     45
//     40
//     35
//     30
//     25
//     20
//     15
//     10
//     5

// Answer:
// for (var i = 100; i > 0; i -= 5) {
//     console.log(i);
// }

