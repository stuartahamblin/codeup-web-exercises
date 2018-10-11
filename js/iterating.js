console.log("ITERATING.JS START")

// (function(){
    "use strict";

    /**
     * Q1: Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

        // answer
        var names = ["Stuart", "Maria", "Benny", "David"];
        // console.log(names);

    /**
     * Q2: Create a log statement that will log the number of elements in the names
     * array.
     */

        // answer
        // console.log("There are " + names.length + " in the array);

    /**
     * Q3: Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

        // answer
        // console.log(names[0]);
        // console.log(names[1]);
        // console.log(names[2]);
        // console.log(names[3]);

    /**
     * Q4:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

        // answer
        // for (i = 0; i < names.length; i++) {
        //     console.log(names[i]);
        // }

    /**
     * Q5:
     * Refactor your above code to use a `forEach` loop
     */

        // answer
        // names.forEach(function(name) {
        //     console.log(name)
        // });

    /**
     * Q6, Q7, Q8: Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

        // answer 6
        // var sample = [1, 2, 3, 4, 5];
        // function first(array) {
        //     return array[0];
        // }
        // console.log(first(sample));

        // answer 7
        // function second(array) {
        //     return array[1];
        // }
        // console.log(second(sample));

        // answer 8
        // function last(array) {
        //     return array[array.length -1];
        // }
        // console.log(last(sample));


// -------------------- ARRAY BONUSES

/* 1. Create a function that returns a random day of the week */

// answer
// var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// function randomDay(input) {
//     var output = Math.floor(Math.random() * input.length)+1;
//     return input[output-1];
// }
// console.log(randomDay(weekdays));


/* 2. Create a function that takes a single letter and returns what number the letter is in the alphabet. Ignore case.
// someFunction("a") // returns 1
// someFunction("z") // returns 26 */

// todo
function letterNumber(input) {
    var letterArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
}

/* 3. Create a function that returns the longest string in a given array of string elements */

//todo see answer on slack

/*4. Create a function that takes in two arrays of number inputs. If all numbers added together in the first array
is equal to all the number inputs added in the second array, return true, otherwise, false. Only add together
numeric elements but either array may contain non-numeric elements.
//  var arr1 = ['bob', 1, true, 1, 2];
// var arr2 = [2, null, undefined, 0, 2, "apple"]
// exampleFunction(arr1, arr2) // returns true */

//todo

// })();