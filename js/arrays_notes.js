/*ARRAYS*/
console.log('ARRAYS START');

// An array is a data structure that holds an ordered list of items. Each slot in a JavaScript array can hold any type of data.
/*instead of:
var color1 = prompt("Enter color 1");
var color2 = prompt("Enter color 2");

we can:

alert("Welcome to cake Place! Please enter colors for cake");
var colors = []; // creates blank array
var enterMorecolors = true;

while (enterMorecolors) {
    colors.push(prompt("enter another color"));
    enterMorecolors = confirm("enter more colors")
}*/

//     Declaring an Array
// In JavaScript, arrays are denoted by square brackets, []. The items in an array are called elements, and are separated by commas.
//
//     Let's take a look at an array literal. We have seen number literals (such as 42) and string literals before (such as 'codeup'). Here are several array literals:
//
//     [] // an empty array
//
//     [1] // an array with one element
//
//     [1, 2, 3, 4, 5] // an array with 5 elements
//
//     ["one", 42, [8, 9, 10]] // an array with 3 elements all of different types
// // notice that the array above does *not* have 5 elements, rather the last
// // element is itself an array with 3 elements in it

// Like the other data types we have seen, arrays can be stored in variables.
//
//
//     var shapes = ['square', 'rectangle', 'circle', 'triangle'];
// In above example, a variable called shapes is declared and initialized with an array of 4 strings. As you can see, the value assigned is surrounded by square brackets, telling JavaScript that we are defining an array. Inside the brackets is a comma separated list of values. While there are other methods, the use of square brackets is the most common way to create an array in JavaScript.

//     Counting Array Items
// To find out how many items are in an array, you can use the length property. Here is an example:
//
//     var shapes = ['square', 'rectangle', 'circle', 'triangle'];
//
// console.log(shapes.length); // 4

// Accessing Array Elements
// Once you have an array of values, you will probably want to use the data inside the array for something. Arrays are zero-indexed, which means the first slot in an array is actually #0.
//
//
// array    [ 1, 2, 3, 4 ]
//            ^  ^  ^  ^
//            |  |  |  |
// indices    0  1  2  3
// Array elements are accessed by adding an opening and closing square bracket with the index of the item to be accessed inside the brackets.

    // Here are some examples:
    //
    //
    //     var numbers = [1, 2, 3, 4];
    // console.log(numbers[0]); // 1
    // console.log(numbers[1]); // 2
    // console.log(numbers[2]); // 3
    // console.log(numbers[3]); // 4
    //
    // var shapes = ['square', 'rectangle', 'circle', 'triangle'];
    //
    // console.log('There are ' + shapes.length + ' shapes in the array');
    //
    // console.log('The first shape is: ' + shapes[0]);
    // // The first shape is: square
    //
    // console.log('The second shape is: ' + shapes[1]);
    // // The second shape is: rectangle
    //
    // console.log('The third shape is: ' + shapes[2]);
    // // The third shape is: circle
    //
    // console.log('The fourth shape is: ' + shapes[3]);
    // // The fourth shape is: triangle
    //
    // console.log('The fifth shape is: ' + shapes[4]);
    // // The fifth shape is: undefined
    // When we try to access an index in the array that does not exist, as in that of the fifth shape, we get a value of undefined.

// Iterating Arrays
// To iterate means to repeat a process to achieve a desired result. When you iterate over an array,
// it means that you cycle/traverse through the indices and elements of the array. We can use the looping statements
// we learned earlier to iterate through arrays in JavaScript.

// Iterating Arrays: For Loop
//
// var shapes = ['square', 'rectangle', 'circle', 'triangle'];
//
// // loop through the array and log the values
// for (var i = 0; i < shapes.length; i++) {
//     console.log('The shape at index ' + i + ' is: ' + shapes[i]);
// }
// Here we are constructing a for loop that starts at zero (this index of the first element in any array), and ends at the length of the array minus one (the index of the last element in any array). We can then use i to index our array and refer to every element sequentially.
//
//
//PROS: variety of traversals
//CONS: more complicated syntax
//USE: when you need to iterate partially or backwards through an array
//
//

// Iterating Arrays: For-Each Loop
// JavaScript arrays have a forEach method that can be used as an alternative to a for loop.
//
// The forEach method on an array takes another function as a parameter and doesn't have a return value.
// The function passed to forEach takes in up to 3 parameters that will provide access to the array element,
// the corresponding index, and the array itself. We can refer to the function passed to .forEach as a callback
// function. The callback function will be called for every item in the array.
//
// someArray.forEach(function(element, index, array) {
//     // ...
// })
// By convention, we will name our arrays a plural noun, and refer to individual elements by the singular
// version of the noun. In previous examples, we haved used an array named shapes which means we can define
// the parameter name of the .forEach callback as shape.
//
//
//     var shapes = ['square', 'rectangle', 'circle', 'triangle'];
//
// // loop through the array and log the values
// shapes.forEach(function(shape) {
//     console.log('Here is a lovely shape: ' + shape + '.');
// });
// Note that we can omit any parameters we don't intend to use.
//
// ADD FROM NOTES ON SLACK
// PROS: simpler syntax
// CONS: can only increment full array
// USE: when you want to traverse the whole array

    // examples:
    // var pies = ["apple", "cherry", "key lime", "huckleberry"];
    // pies.forEach(function(element, index, array) { ///call on the operations you want to reference
    //     console.log(element); //names need to match
    //     console.log(index);
    //     console.log(array);
    // });
    //------------------
    // var names = ["john", "sally", "fred"];
    // for(var i = 0; i < names.length; i += 1){
    //     console.log(names[i]);
    // }
    //--------------------
    // var names = ["john", "sally", "fred"];
    // names.forEach(function(name) {
    //    console.log(name);
    // });
    //-------------------
    // var names = ["john", "sally", "fred"];
    // function logName(name) {
    //     console.log(name);
    // }
    // names.forEach(logName);
    //-------------------


/*ARRAY MANIPULATION*/


// JavaScript arrays have a variety of methods that allow for manipulation of the array. In this lesson,
// we will cover some of the most commonly used methods.

// Adding Elements
// The push and unshift methods can be used to add items to an array. The primary difference is that push adds an item to the end of an array, and unshift adds an item to the beginning of an array.
//
//     var daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];
//
// console.log(daysOfTheWeek);
// // ['Monday', 'Tuesday', 'Wednesday', 'Thursday']
//
// // let's add 'Sunday' to the beginning of the week
// daysOfTheWeek.unshift('Sunday');
//
// console.log(daysOfTheWeek);
// // ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']
//
// // let's add 'Friday' and 'Saturday' to the end of the week
// daysOfTheWeek.push('Friday', 'Saturday');
//
// console.log(daysOfTheWeek);
// // ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// Notice that you can push or unshift one or more items, separated by commas, onto an array.
//
//     Both push and unshift will modify the original array, and return a number, the new length of the array, not the new array.

// Removing Elements
// The pop and shift methods can be used to remove items from an array. Both methods will return the removed item.
//
//
//     var todoList = ['Take out the trash', 'Clean the car', 'Pay the bills'];
//
// console.log('My todo list:');
// console.log(todoList);
// // ['Take out the trash', 'Clean the car', 'Pay the bills']
//
// console.log('Completing the last item: ' + todoList[todoList.length - 1]);
//
// // let's remove the last item
// var removedItem = todoList.pop();
//
// // log what we did
// console.log('Task complete: ' + removedItem);
//
// console.log(todoList);
// // ['Take out the trash', 'Clean the car']
//
// console.log('Completing the first item: ' + todoList[0]);
//
// // let's remove the first item
// var doneItem = todoList.shift();
//
// // log what we did
// console.log('Task complete: ' + doneItem);
//
// console.log(todoList);
// // ['Clean the car']
// Notice how the item that is being removed from the array is returned as the result of the pop and shift methods.

// Locating Array Elements
// Before an array is manipulated, it is sometime useful to find the index of a particular item. The indexOf and lastIndexOf array method provide this capability. The indexOf method starts searching from the beginning of an array and will return the first occurrence of what you are looking for. The lastIndexOf starts at the end of the array and works backwards.
//
//     var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'red'];
//
// var index = colors.indexOf('green');
// console.log(index);
// // 3
//
// index = colors.indexOf('red');
// console.log(index);
// // 0
//
// index = colors.lastIndexOf('red');
// console.log(index);
// // 7

// Slicing
// The .slice method allows us to copy a portion of an array. The slice method optionally takes two arguments to define where the portion we want starts and stops. .slice will not modify the original array; it will return a new array.
//
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var slice = colors.slice(2, 4);
//
// console.log(colors); // colors is unchanged
// // ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
//
// console.log(slice); // ['yellow', 'green']
//
// slice = colors.slice(3);
// console.log(slice); // ['green', 'blue', 'indigo', 'violet']
// The second argument is the index to stop at, that is, the array returned will have the elements up to, but not including, the stop index.

// Reversing
// An array can be reversed by calling the reverse method.
//
//
//     var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//
// console.log(colors);
// // ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
//
// console.log('Reversing the colors array.');
//
// colors.reverse();
//
// console.log(colors);
// // ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red']
// The .reverse method will both reverse the original array and return the reversed array.

// Sorting
// An array can be sorted by calling the sort method. The sort method, by default, will convert items in the array to their string equivalent and order them based on that value.
//
//
//     var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//
// console.log(colors);
// // ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
//
// console.log('Sorting the colors array.');
//
// colors.sort();
//
// console.log(colors);
// // ['blue', 'green', 'indigo', 'orange', 'red', 'violet', 'yellow']
// Like .reverse, .sort will both sort the original array and return the sorted array.

// Converting between strings and arrays
// The .split method on strings and the .join method on arrays allow us to transform strings to arrays, and arrays to strings.

// Splitting
// Splitting will take a string and turn it into an array. String splitting uses a delimiter to decide where
// the splitting should occur. To split a string, call the split method passing the delimiter as a parameter.
// For example:
//
// var namesString = "Joe,Bob,Sally";
//
// console.log(namesString);
// // Joe,Bob,Sally
//
// var namesArray = namesString.split(',');
//
// console.log(namesArray);

// Joining
// Joining will take an array and convert it to a string with the delimiter of your choice.
// The join method is available on an array and it takes a delimiter as a parameter.
// Let's look at the first example again, but in reverse.
//
//
// var namesArray = ['Joe', 'Bob', 'Sally'];
//
// console.log(namesArray);
// // ['Joe', 'Bob', 'Sally']
//
// var namesString = namesArray.join(',');
//
// console.log(namesString);
// // Joe,Bob,Sally
// Further Reading
// MDN: arrays
// Splicing Arrays