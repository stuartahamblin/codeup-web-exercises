
/**
 * JS Array Practice
 * Array creation, manipulation, searching etc...
 */

var sample = [1, 2, 3, 4, 5];
var a1 = [1, 2, 3];
var a2 = [4, 5, 6];

// Exercise 0. Write a function named first() that returns only the first element of an array

    // function first(input0) {
    //     return input0[0];
    // }
    // console.log(first(sample));


// Exercise 1. Write a function named secondToLast() that returns the second to last element

    function secondToLast(input1) {
        return input1[input1.length - 2];
    }
    console.log(secondToLast(sample));


// Exercise 2. Write a function named rest() that takes an an array and returns an array containing everything except the first element.

    // function rest(input2) {
    //     input2.shift();
    //     return input2;
    // }
    // console.log(rest(sample));


// Exercise 3. Write a function named getLongestString that takes in an array of strings and returns the longest string of that array

    // study answer
    // var arr = ["apple", "bananana", "coco"];
    // function getLongestString(arrayOfStrings) {
    //     var longestString = "";
    //     arrayOfStrings.forEach(function(string) {
    //         if(string.length > longestString.length) {
    //             longestString = string;
    //         }
    //     });
    //     return longestString;
    // }
    // console.log(getLongestString(arr));


// Exercise 3.1 Write a function named getShortestString that takes in an array of strings and returns the shortest string in that array.

    // study answer
    // var arr = ["apple", "bananana", "coco"];
    // function getShortestString(arrayOfStrings) {
    //     var shortestString = arrayOfStrings[0];
    //     arrayOfStrings.forEach(function(string) {
    //         if(string.length < shortestString.length) {
    //             shortestString = string;
    //         }
    //     });
    //     return shortestString;
    // }
    // console.log(getShortestString(arr));


// Exercise 4. Write a function named addTwoArrays that takes in two, one dimensional arrays.
// The function should return a single array containing all of the elements of the first array
// along with all of the elements of the second array
// Example: addTwoArrays([1, 2, 3], [4, 5, 6]) should return [1, 2, 3, 4, 5, 6]

    // function addTwoArrays(array1, array2) {
    //     var arrayPlus = array1.join("|") + ("|") + array2.join("|");
    //     bothPlus = arrayPlus.split('|');
    //     return bothPlus;
    // }
    // console.log(addTwoArrays(a1, a2));


// Exercise 5. Write a function named getUniqueValues that takes in an array and returns the array without any duplicates
// Example: getUniqueValues(["a", "b", "a", "b", "c", "c"]) should return ["a", "b", "c"]

    // arrayFive = ["a", "b", "a", "b", "c", "c"];
    // function getUniqueValues(input) {
    //     return input.sort().filter(function(item, pos, ary) {
    //         return !pos || item != ary[pos - 1];
    //     })
    // }
    // console.log(getUniqueValues(arrayFive));

// Exercise 6. Write a function named reverseArray that takes in an array and returns it reversed, but without altering the original array.

    // function reverseArray(input) {
    //     var initArray = [''];
    //     initArray[0] = input[input.length-1];
    //     for (i = 2; i <= input.length; i++) {
    //         initArray.push(input[input.length-i]);
    //     }
    //     return initArray;
    // }
    // console.log(reverseArray(sample));


// Exercies 7. Write a function named getRandomQuote().
//   Inside of the function, create an array of strings where each string is a quote or thought you find inspirational
//   getRandomQuote should generate a random number between 0 and the array's length minus 1
//   use the randomly generated number as your index
//   return a random quote.

    // var quotes = ["You're the best", "I love you", "Danks"];
    // function getRandomQuote(array) {
    //     var randomNumber = Math.floor((Math.random() * array.length));
    //     return array[randomNumber];
    // }
    // console.log(getRandomQuote(quotes));


// Exercise 8. Write a function named getIndexesOf() that takes in two arguments.
// The first argument should be a specific numeral or character
// The second argument should be any given string
// getIndexesOf() should return an array containing all of the indexes of that character in the string
// Example: getIndexesOf("a", "banana") should return the array [1, 3, 5]
// Example: getIndexesOf("z", "banana") should return an empty array [] since there are no "z" characters in "banana"

    // function getIndexesOf(character, string) {
    //     var arrayEight = [];
    //     for (i = 0; i < string.length; i++) {
    //         var letterEight = string.substring(i, i+1);
    //         if (letterEight === character) {
    //             arrayEight.push(i);
    //         }
    //     }
    //     return arrayEight
    // }
    // console.log(getIndexesOf("a", "banana"));

// Exercise 9. Write a function named removeAll.
// It should accept an array and a value
// removeAll should return an array with all of the original contents EXCEPT for the provided value
// iterate across the input array
// output array
// Example: removeAll([1, 2, 3], 2) should return [1, 3]
// Example 2: removeAll([2, 2, 3, 4, 5, 2, 2], 2) should return [3, 4, 5]

    // function removeAll(array, character) {
    //     var arrayNine = [];
    //     for (i = 0; i < array.length; i++) {
    //         var compareCharacter = array[i];
    //         if (compareCharacter !== character) {
    //             arrayNine.push(array[i]);
    //         }
    //     }
    //     return arrayNine
    // }
    // console.log(removeAll([1, 2, 3], 2));

// Exercise 10. Write a function named firstTenFibonacciNumbers() that returns an array of the first ten fibonacci numbers

    // function firstTenFibonacciNumbers() {
    //     var fibonacci = [0, 1];
    //     for (var i = 1; i < 9; i++) {
    //         fibonacci.push(fibonacci[i] + fibonacci[i-1]);
    //     }
    //     return fibonacci;
    // }
    // console.log(firstTenFibonacciNumbers());


// Exercise 11. Write a function named getNFibonacci(n) that returns an array containing the first n fibonacci numbers

    // function getNFibonacci(input) {
    //     var fibonacci = [0, 1];
    //     for (var i = 1; i < input-1; i++) {
    //     fibonacci.push(fibonacci[i] + fibonacci[i-1]);
    //     }
    //     return fibonacci;
    // }
    // console.log(getNFibonacci(12));


// Exercise 12. Write a function named moveFirstToLast() that takes in an array
// the function should return the array with the first element at the end
// Example: moveFirstToLast([1, 2, 3, 4]) should return [2, 3, 4, 1]

    // function moveFirstToLast(input) {
    //     var moveToEnd = input[0];
    //     input.shift();
    //     input.push(moveToEnd);
    //     return input;
    // }
    // console.log(moveFirstToLast(sample));


// Exercise 13. Write a function named zip() that takes in two arrays with the same number of elements
// Zip returns a new array of arrays where each element is an array of the two elements at the same index
// Example: zip([1, 2, 3], [4, 5, 6]) returns [[1, 4], [2, 5], [3, 6])
// Example: zip(["a", "b", "c"], ["x", "y", "z"]) returns [["a", "x"], ["b", "y"], ["c", "z"]]

    // function zip(array1, array2) {
    //     output13 = [];
    //     for (i = 0; i < array1.length; i++) {
    //         var SubArray13 = [array1[i], array2[i]];
    //         output13.push(SubArray13);
    //     }
    //     return output13;
    // }
    // console.log(zip([1, 2, 3], [4, 5, 6]));