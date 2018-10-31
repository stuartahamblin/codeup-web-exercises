"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Exercises

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
// var languagesThree = users.filter(function(user) {
//     return user.languages.length >= 3;
// });
const languagesThree = users.filter(user => user.languages.length >= 3);
console.log(languagesThree);

// Use .map to create an array of strings where each element is a user's email address
const userEmail = users.map(user => user.email);
console.log(userEmail);

// Use reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
const totalExperience = users.reduce(function(accumulator, currentValue){
    return(accumulator + currentValue.yearsOfExperience)
}, 0);
console.log("total " +totalExperience);
var averageExperience = totalExperience / users.length;
console.log("average " + averageExperience);

// Use reduce to get the longest email from the list of users.
const longEmail = users.reduce(function(accumulator, currentValue) {
    if (currentValue.email.length > accumulator.length) {
        accumulator = currentValue.email;
    }
    return accumulator
}, "");
console.log(longEmail);

// Use reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
const singleString = users.reduce(function(accumulator, currentValue) {
    if (accumulator === "") {
        return accumulator + currentValue.name;
    } else if (currentValue.name === users.slice(-1)[0].name) {
        return accumulator + ", " + currentValue.name + ".";
    } else {
        return accumulator + ", " + currentValue.name;
    }
}, "");
console.log(singleString);

const singleStrings = users.reduce(function(accumulator, currentValue, index) {
    if (index === users.length - 1) {
        return accumulator + currentValue.name + ".";
    } else {
        return accumulator + currentValue.name + ", ";
    }
}, "");
console.log("ANSWER: " + singleString);
console.log("ALT ANSWER: " + singleStrings);





// Bonus

// Use reduce to get the unique list of languages from the list of users.
const uniqueLanguages = users.reduce(function(accumulator, currentValue) {
    for(let i = 0; i < currentValue.languages.length; i += 1) {
        if (accumulator.indexOf(currentValue.languages[i]) === -1) {
            accumulator.push(currentValue.languages[i]);
        }
    }
    return accumulator
}, []);
console.log("BONUS: " + uniqueLanguages);

// ======= BONUS 1 Problems
// const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];
// const customers = [
//     {
//         name: "Fred",
//         age: 58,
//         occupation: "Police Officer",
//         noOfPurchases: 4
//     },
//     {
//         name: "Samantha",
//         age: 54,
//         occupation: "Teacher",
//         noOfPurchases: 18
//     },
//     {
//         name: "Charles",
//         age: 38,
//         occupation: "Librarian",
//         noOfPurchases: 9
//     }
// ];
// // *** hints for these problems and additional bonuses are below
// // PROBLEM 1 - create an array of the first letters of each fruit
// // PROBLEM 2 - create array of user objects based on the customers array
// // of objects (each user object should just have name and age properties)
// // PROBLEM 3 - create an array of civil servant customers (teachers and police officers)
// // containing the same properties as the objects on the customers objects
// // PROBLEM 4 - determine the average age of customers
//
// //            PROBLEM 1 HINT - use .map()
// //            PROBLEM 2 HINT - use .map()
// //            PROBLEM 3 HINT - use .filter()
// //            PROBLEM 4 HINT - use .reduce()
// ======= BONUS 2 Problems
// Given the following array...
// const names = ["John", "Max", "Ronald"];
// complete the bonuses below...
// - Create an array where all names are given a last name of Smith.
// - Create an array where each word is in all caps
// - Create an array where all names have more than 3 letters
// - Create an array of names with only the last two letters of each name
// - Create a total count of all letters
// - Create a string of all letters in alphabetical order
// - Create an array of word objects with properties of wordLength, firstLetter, lastLetter
// - Create a string of all vowels in the entire array of names
// - Create a single object with properties
// ======= BONUS 3 Problems
// Given the following array...
// const family = [
//     {
//         name: "Karen",
//         gender: "female",
//         age: 29,
//     },
//     {
//         name: "Summer",
//         gender: "female",
//         age: 10,
//     },
//     {
//         name: "Bob",
//         gender: "male",
//         age: 32,
//     },
// ];
// complete the bonuses below...
// - Calculate the average age of family members
// - Create an array of family objects without the age property
// - Create an array of all minors
// - Calculate the total age combined of family members
// - Create an array of only female family member objects
// - Create a single object with properties containing arrays of all names, genders, and ages