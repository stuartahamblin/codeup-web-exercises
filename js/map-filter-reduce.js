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
    } else {
        return accumulator + ", " + currentValue.name;
    }
}, "");
console.log(singleString);

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