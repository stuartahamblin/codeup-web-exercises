console.log("WHILE LOOPS START");

// 1) Create a while loop that uses console.log() to create the output shown below.
// output:
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536

// Answer: while
// var x = 2;
// while (x <= 65536) {
//     console.log(x);
//     x = 2 * x;
// }

// Answer: do-while:
// var x = 2;
// do {console.log(x);
//     x = 2 * x;
// } while(x <= 65536);

// 2) An ice cream seller can't go home until she sells all of her cones. Write a JS program that generates a random number
// between 50 and 100 representing the amount of cones to sell. Your code should generate numbers between 1 and 5, simulating
// the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to
// each person. This is how you get the random numbers.
//
// // This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
// // This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;
// The output should be similar to the following:
//
//     5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
//     Yay! I sold them all! // If there are no more cones

//Answer
//
// var allCones = Math.floor(Math.random()*50) + 50;
// console.log("I have " + allCones + " number of cones to sell everybody!");
// var conesOrdered;
// do {
//     conesOrdered = Math.floor(Math.random() * 5) + 1;
//     if (conesOrdered > allCones) {
//         console.log('I Cannot sell you '+ conesOrdered +' cones I only have ' + allCones);
//         continue;
//     } else {
//         allCones = allCones - conesOrdered;
//         console.log(conesOrdered + " cone(s) sold with " + allCones + " remaining");
//     }
// } while (allCones !== 0);
// console.log("Yay! I sold them all!");

//ex1)
// 10
// 8
// 6
// 4
// 2
// 0
// -2

// Answer: while
// var x = 10;
// while(x >= -2) {
//     console.log(x);
//     x = x - 2;
// }

// Answer: do-while:
// var x = 10;
// do {console.log(x);
//     x = x - 2;
// } while (x >= -2 );

//ex2)
//
// 2
// 4
// 16
// 256
// 65536

// Answer: while
// var x = 2;
// while(x <= 65536) {
//     console.log(x);
//     x = x * x;
// }

// Answer: do-while:
// var x = 2;
// do {console.log(x);
//     x = x * x;
// } while (x <= 65536);

//ex3
// 1
// 2
// 3
// 4
// 5
// 6

// Answer: while:
// var x = 1;
// while(x <= 6) {
//     console.log(x);
//     x = x + 1;
// }

// Answer: do-while:
// var x = 1;
// do {console.log(x);
//     x = x + 1;
// } while (x <= 6);

//ex3
// 105
// 100
// 95

// Answer: while
// var x = 105;
// while (x >= 95) {
//     console.log(x);
//     x = x - 5;
// }

// Answer: do-while:
// var x = 105;
// do {console.log(x);
//     x = x - 5;
// } while (x >= 95);

//ex4
// 1000000
// 100000
// 10000
// 1000
// 100
// 10
// 1

// Answer: while
// var x = 1000000;
// while (x >= 1) {
//     console.log(x);
//     x = x / 10;
// }

// Answer: do-while:
// var x = 1000000;
// do {console.log(x);
//     x = x / 10;
// } while (x >= 1);